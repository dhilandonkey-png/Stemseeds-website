"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

export type DemoKind = "rocket" | "catapult" | "hand";

const RED = "#e35d5b";
const RED_DARK = "#b23b3a";
const TAPE = "#4757df";
const STRAW = "#5fd4f2";
const STICK = "#e8b27c";
const CUP = "#d4d6d8";
const CUP_DARK = "#a9adb1";
const POMPOM = "#ffffff";

/** Converts a pointer position on screen into SVG coordinates. */
function toSvgPoint(
  svg: SVGSVGElement,
  event: { clientX: number; clientY: number },
) {
  const point = svg.createSVGPoint();
  point.x = event.clientX;
  point.y = event.clientY;
  const matrix = svg.getScreenCTM();
  return matrix ? point.matrixTransform(matrix.inverse()) : point;
}

/** Runs `step(dt)` every animation frame until it returns false. */
function useFrameLoop() {
  const frame = useRef<number | null>(null);
  const stop = useCallback(() => {
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    frame.current = null;
  }, []);
  const start = useCallback(
    (step: (dt: number) => boolean) => {
      stop();
      let last = performance.now();
      const tick = (now: number) => {
        const dt = Math.min((now - last) / 1000, 0.05);
        last = now;
        if (step(dt)) frame.current = requestAnimationFrame(tick);
        else frame.current = null;
      };
      frame.current = requestAnimationFrame(tick);
    },
    [stop],
  );
  useEffect(() => stop, [stop]);
  return { start, stop };
}

function StepGuide({ steps, active }: { steps: string[]; active: number }) {
  return (
    <ol className="mt-4 grid gap-2 sm:grid-cols-3" aria-live="polite">
      {steps.map((step, index) => {
        const done = index < active;
        const current = index === active;
        return (
          <li
            key={step}
            className={cn(
              "flex items-start gap-2 rounded-xl px-3 py-2 text-xs leading-snug transition-colors",
              current && "bg-primary text-primary-foreground",
              done && "bg-fresh/15 text-fresh-deep",
              !current && !done && "bg-muted text-muted-foreground",
            )}
          >
            <span
              className={cn(
                "flex size-5 shrink-0 items-center justify-center rounded-full text-[0.65rem] font-bold",
                current && "bg-primary-foreground text-primary",
                done && "bg-fresh text-white",
                !current && !done && "bg-background text-muted-foreground",
              )}
            >
              {done ? (
                <Check className="size-3" aria-hidden="true" />
              ) : (
                index + 1
              )}
            </span>
            <span className={cn(current && "font-semibold")}>{step}</span>
          </li>
        );
      })}
    </ol>
  );
}

export function ExperimentDemo({
  kind,
  label,
}: {
  kind: DemoKind;
  label: string;
}) {
  if (kind === "catapult") return <CatapultDemo label={label} />;
  if (kind === "rocket") return <RocketDemo label={label} />;
  return <HandDemo label={label} />;
}

function Tape({
  x,
  y,
  w = 14,
  h = 9,
  r = 0,
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  r?: number;
}) {
  return (
    <rect
      x={x - w / 2}
      y={y - h / 2}
      width={w}
      height={h}
      rx={2}
      fill={TAPE}
      opacity={0.9}
      transform={r ? `rotate(${r} ${x} ${y})` : undefined}
    />
  );
}

function Handle({ x, y, active }: { x: number; y: number; active: boolean }) {
  return (
    <g pointerEvents="none">
      {!active ? (
        <circle
          cx={x}
          cy={y}
          r="16"
          fill="none"
          stroke="#43ad6e"
          strokeWidth="3"
          className="demo-pulse"
        />
      ) : null}
      <circle
        cx={x}
        cy={y}
        r="11"
        fill="#43ad6e"
        stroke="#fff"
        strokeWidth="3"
      />
    </g>
  );
}

/* ---------------------------------------------------------------- Catapult */

const PIVOT = { x: 170, y: 172 };
const ARM_REST = -20;
const ARM_MAX = 42;
const GROUND = 286;
const HOLDER = { x: 70, y: 152 }; // pom-pom seat, in un-rotated arm coordinates

function rotateAroundPivot(x: number, y: number, degrees: number) {
  const r = (degrees * Math.PI) / 180;
  const dx = x - PIVOT.x;
  const dy = y - PIVOT.y;
  return {
    x: PIVOT.x + dx * Math.cos(r) - dy * Math.sin(r),
    y: PIVOT.y + dx * Math.sin(r) + dy * Math.cos(r),
  };
}

type CatapultPhase = "ready" | "pressing" | "flying" | "landed";

function CatapultDemo({ label }: { label: string }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const { start } = useFrameLoop();
  const [angle, setAngle] = useState(ARM_REST);
  const [phase, setPhase] = useState<CatapultPhase>("ready");
  const [pompom, setPompom] = useState<{ x: number; y: number } | null>(null);
  const [landing, setLanding] = useState<number | null>(null);
  const [best, setBest] = useState<number | null>(null);
  const angleRef = useRef(ARM_REST);

  const setArm = (value: number) => {
    angleRef.current = value;
    setAngle(value);
  };

  const reload = () => {
    setPompom(null);
    setPhase("ready");
    start((dt) => {
      const next =
        angleRef.current + (ARM_REST - angleRef.current) * Math.min(1, dt * 8);
      const settled = Math.abs(next - ARM_REST) < 0.3;
      setArm(settled ? ARM_REST : next);
      return !settled;
    });
  };

  const launch = (power: number) => {
    setPhase("flying");
    setLanding(null);
    let snapping = true;
    let ball = { x: 0, y: 0, vx: 0, vy: 0 };
    let resting = 0;
    start((dt) => {
      if (snapping) {
        // The arm flicks up fast, then the pom-pom leaves the seat.
        const next = Math.min(ARM_MAX, angleRef.current + dt * 1400);
        setArm(next);
        if (next < ARM_MAX) return true;
        snapping = false;
        const seat = rotateAroundPivot(HOLDER.x, HOLDER.y, ARM_MAX);
        const speed = 140 + 270 * power;
        const direction = ((ARM_MAX + 270) * Math.PI) / 180;
        ball = {
          x: seat.x,
          y: seat.y,
          vx: Math.cos(direction) * speed,
          vy: Math.sin(direction) * speed,
        };
      }
      ball.vy += 520 * dt;
      ball.x += ball.vx * dt;
      ball.y += ball.vy * dt;
      if (ball.y > GROUND - 11) {
        ball.y = GROUND - 11;
        if (Math.abs(ball.vy) > 70) {
          ball.vy *= -0.38;
          ball.vx *= 0.65;
        } else {
          ball.vy = 0;
          ball.vx *= 0.85;
        }
      }
      setPompom({ x: ball.x, y: ball.y });
      const stopped = ball.y >= GROUND - 11 && Math.abs(ball.vx) < 8;
      const gone = ball.x > 600;
      if (stopped || gone) {
        if (resting === 0) {
          const distance = gone ? 600 : ball.x;
          setLanding(distance);
          setBest((current) => Math.max(current ?? 0, distance));
          setPhase("landed");
        }
        resting += dt;
        if (resting > 1.1) {
          reload();
          return false;
        }
      }
      return true;
    });
  };

  const onPointerDown = (event: ReactPointerEvent<SVGGElement>) => {
    if (phase === "flying") return;
    event.currentTarget.setPointerCapture(event.pointerId);
    setPhase("pressing");
  };
  const onPointerMove = (event: ReactPointerEvent<SVGGElement>) => {
    if (phase !== "pressing" || !svgRef.current) return;
    const point = toSvgPoint(svgRef.current, event);
    const degrees =
      (Math.atan2(point.y - PIVOT.y, point.x - PIVOT.x) * 180) / Math.PI;
    setArm(Math.max(ARM_REST, Math.min(ARM_MAX - 4, degrees)));
  };
  const onPointerUp = () => {
    if (phase !== "pressing") return;
    const power = (angleRef.current - ARM_REST) / (ARM_MAX - ARM_REST);
    if (power < 0.12) {
      reload();
      return;
    }
    launch(power);
  };
  const onKeyDown = (event: KeyboardEvent) => {
    if ((event.key === "Enter" || event.key === " ") && phase !== "flying") {
      event.preventDefault();
      launch(0.85);
    }
  };

  const seat = rotateAroundPivot(HOLDER.x, HOLDER.y, angle);
  const handleEnd = rotateAroundPivot(282, PIVOT.y, angle);
  const activeStep = phase === "ready" ? 0 : phase === "pressing" ? 1 : 2;
  const ball = pompom ?? seat;

  return (
    <div className="flex h-full flex-col">
      <svg
        ref={svgRef}
        viewBox="0 0 560 300"
        role="img"
        aria-label={label}
        className="h-auto w-full touch-none overflow-visible select-none"
      >
        <line
          x1="0"
          y1={GROUND}
          x2="560"
          y2={GROUND}
          stroke="#d9e6e2"
          strokeWidth="3"
        />
        {best !== null ? (
          <g>
            <line
              x1={Math.min(best, 552)}
              y1={GROUND - 26}
              x2={Math.min(best, 552)}
              y2={GROUND}
              stroke="#43ad6e"
              strokeWidth="2"
              strokeDasharray="4 3"
            />
            <text
              x={Math.min(best, 530)}
              y={GROUND - 30}
              textAnchor="middle"
              fontSize="12"
              fontWeight="700"
              fill="#0e4f31"
            >
              Best
            </text>
          </g>
        ) : null}
        {/* Cups */}
        <path
          d="M120 286 L220 286 L210 214 L130 214 Z"
          fill={CUP}
          stroke={CUP_DARK}
          strokeWidth="2"
        />
        <ellipse
          cx="170"
          cy="214"
          rx="40"
          ry="9"
          fill="#e6e7e8"
          stroke={CUP_DARK}
          strokeWidth="2"
        />
        <path
          d="M133 214 L207 214 L199 178 L141 178 Z"
          fill={CUP}
          stroke={CUP_DARK}
          strokeWidth="2"
        />
        <rect x="152" y="166" width="36" height="12" rx="5" fill={STRAW} />
        <Tape x={170} y={172} w={12} h={16} />
        {/* Arm */}
        <g transform={`rotate(${angle} ${PIVOT.x} ${PIVOT.y})`}>
          <rect
            x="58"
            y={PIVOT.y - 5}
            width="230"
            height="10"
            rx="5"
            fill={STICK}
          />
          <path
            d="M44 166 L44 140 L64 132 L92 148 L92 168 Z"
            fill={RED}
            stroke={RED_DARK}
            strokeWidth="1.5"
          />
          <Tape x={96} y={PIVOT.y} w={14} h={12} />
        </g>
        <circle
          cx={ball.x}
          cy={ball.y}
          r="11"
          fill={POMPOM}
          stroke="#cfcfcf"
          strokeWidth="2"
        />
        {/* Drag target: the far end of the popsicle stick */}
        <g
          role="button"
          tabIndex={0}
          aria-label="Press down on the end of the popsicle stick to launch"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onKeyDown={onKeyDown}
          className="cursor-grab outline-none active:cursor-grabbing"
        >
          <circle cx={handleEnd.x} cy={handleEnd.y} r="34" fill="transparent" />
          <Handle x={handleEnd.x} y={handleEnd.y} active={phase !== "ready"} />
        </g>
        {phase === "landed" && landing !== null ? (
          <text
            x="300"
            y="40"
            textAnchor="middle"
            fontSize="16"
            fontWeight="700"
            fill="#0d5f66"
          >
            {landing >= 600
              ? "It flew off the screen!"
              : "Nice launch! Push farther to go longer."}
          </text>
        ) : null}
      </svg>
      <StepGuide
        active={activeStep}
        steps={[
          "Grab the green dot on the popsicle stick",
          "Push it down (farther = more power)",
          "Let go and watch it fly!",
        ]}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ Rocket */

type RocketPhase = "ready" | "blowing" | "flying";

function RocketDemo({ label }: { label: string }) {
  const { start } = useFrameLoop();
  const [phase, setPhase] = useState<RocketPhase>("ready");
  const [power, setPower] = useState(0);
  const [rocket, setRocket] = useState({ x: 0, y: 0, tilt: 0 });
  const powerRef = useRef(0);
  const phaseRef = useRef<RocketPhase>("ready");

  const updatePhase = (next: RocketPhase) => {
    phaseRef.current = next;
    setPhase(next);
  };

  const beginBlow = () => {
    if (phaseRef.current !== "ready") return;
    updatePhase("blowing");
    powerRef.current = 0;
    start((dt) => {
      powerRef.current = Math.min(1, powerRef.current + dt / 1.4);
      setPower(powerRef.current);
      return true;
    });
  };

  const release = () => {
    if (phaseRef.current !== "blowing") return;
    const strength = Math.max(0.15, powerRef.current);
    updatePhase("flying");
    const speed = 260 + 560 * strength;
    const tiltRadians = (20 * Math.PI) / 180;
    const body = {
      x: 0,
      y: 0,
      vx: Math.sin(tiltRadians) * speed,
      vy: -Math.cos(tiltRadians) * speed,
    };
    let elapsed = 0;
    start((dt) => {
      elapsed += dt;
      body.vy += 480 * dt;
      body.x += body.vx * dt;
      body.y += body.vy * dt;
      const tilt = (Math.atan2(body.vx, -body.vy) * 180) / Math.PI - 20;
      setRocket({ x: body.x, y: body.y, tilt });
      setPower(Math.max(0, powerRef.current - elapsed * 2));
      if (body.y > 260 || elapsed > 4) {
        setRocket({ x: 0, y: 0, tilt: 0 });
        setPower(0);
        updatePhase("ready");
        return false;
      }
      return true;
    });
  };

  const onKeyDown = (event: KeyboardEvent) => {
    if ((event.key === "Enter" || event.key === " ") && phase === "ready") {
      event.preventDefault();
      beginBlow();
      window.setTimeout(release, 900);
    }
  };

  const activeStep = phase === "ready" ? 0 : phase === "blowing" ? 1 : 2;

  return (
    <div className="flex h-full flex-col">
      <svg
        viewBox="0 0 400 300"
        role="img"
        aria-label={label}
        className="h-auto w-full touch-none overflow-visible select-none"
      >
        <g>
          <rect x="24" y="40" width="14" height="200" rx="7" fill="#e3f0ec" />
          <rect
            x="24"
            y={40 + 200 * (1 - power)}
            width="14"
            height={200 * power}
            rx="7"
            fill="#43ad6e"
          />
          <text
            x="31"
            y="260"
            textAnchor="middle"
            fontSize="11"
            fontWeight="700"
            fill="#4a6a6b"
          >
            Breath
          </text>
        </g>
        <path
          d="M118 292 L170 262 L200 222"
          fill="none"
          stroke={STRAW}
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M118 292 L170 262 L200 222"
          fill="none"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.8"
        />
        {phase === "blowing" ? (
          <g fill={STRAW} className="demo-puff">
            <circle cx="108" cy="296" r={4 + power * 5} />
            <circle cx="96" cy="300" r={3 + power * 3} />
          </g>
        ) : null}
        <g
          transform={`translate(${rocket.x} ${rocket.y}) rotate(${rocket.tilt} 200 222)`}
        >
          <g
            transform="rotate(20 200 140)"
            className={phase === "blowing" ? "demo-shake" : undefined}
          >
            <path
              d="M188 230 L188 70 Q200 30 212 70 L212 230 Z"
              fill={RED}
              stroke={RED_DARK}
              strokeWidth="2"
            />
            <path d="M193 52 Q200 34 207 52 Z" fill={TAPE} />
            <path
              d="M188 200 L168 236 L188 228 Z"
              fill={RED}
              stroke={RED_DARK}
              strokeWidth="1.5"
            />
            <path
              d="M212 200 L232 236 L212 228 Z"
              fill={RED}
              stroke={RED_DARK}
              strokeWidth="1.5"
            />
            <Tape x={200} y={110} w={26} />
            <Tape x={200} y={160} w={26} />
            <Tape x={200} y={210} w={26} />
          </g>
        </g>
        <g
          role="button"
          tabIndex={0}
          aria-label="Press and hold to blow into the straw, then let go to launch"
          onPointerDown={(event) => {
            event.currentTarget.setPointerCapture(event.pointerId);
            beginBlow();
          }}
          onPointerUp={release}
          onPointerCancel={release}
          onKeyDown={onKeyDown}
          className="cursor-pointer outline-none"
        >
          <circle cx="118" cy="292" r="40" fill="transparent" />
          <Handle x={118} y={292} active={phase !== "ready"} />
        </g>
      </svg>
      <StepGuide
        active={activeStep}
        steps={[
          "Press and hold the green dot on the straw",
          "Keep holding to fill your breath",
          "Let go to launch the rocket!",
        ]}
      />
    </div>
  );
}

/* -------------------------------------------------------------------- Hand */

const fingers = [
  { x: 152, top: 70, len: 92 },
  { x: 182, top: 48, len: 114 },
  { x: 212, top: 44, len: 118 },
  { x: 242, top: 58, len: 104 },
];
const MAX_PULL = 42;

type HandPhase = "ready" | "pulling" | "released";

function HandDemo({ label }: { label: string }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const { start } = useFrameLoop();
  const [pull, setPull] = useState(0);
  const [phase, setPhase] = useState<HandPhase>("ready");
  const grabY = useRef(0);
  const pullRef = useRef(0);

  const setPullValue = (value: number) => {
    pullRef.current = value;
    setPull(value);
  };

  const springBack = () => {
    setPhase("released");
    start((dt) => {
      const next = pullRef.current * Math.max(0, 1 - dt * 7);
      const done = next < 0.4;
      setPullValue(done ? 0 : next);
      if (done) window.setTimeout(() => setPhase("ready"), 700);
      return !done;
    });
  };

  const letGo = () => {
    if (phase === "pulling") springBack();
  };

  const onKeyDown = (event: KeyboardEvent) => {
    if ((event.key === "Enter" || event.key === " ") && phase === "ready") {
      event.preventDefault();
      setPhase("pulling");
      setPullValue(MAX_PULL);
      window.setTimeout(springBack, 900);
    }
  };

  const curl = pull / MAX_PULL;
  const activeStep = phase === "ready" ? 0 : phase === "pulling" ? 1 : 2;

  return (
    <div className="flex h-full flex-col">
      <svg
        ref={svgRef}
        viewBox="0 0 400 300"
        role="img"
        aria-label={label}
        className="h-auto w-full touch-none overflow-visible select-none"
      >
        <rect
          x="168"
          y="232"
          width="64"
          height="58"
          fill="#f7d417"
          stroke="#c9a90c"
          strokeWidth="2"
        />
        <path
          d="M140 162 L262 162 L262 205 Q262 236 232 236 L168 236 Q140 236 140 205 Z"
          fill={RED}
          stroke={RED_DARK}
          strokeWidth="2"
        />
        {[152, 182, 212, 242].map((x) => (
          <path
            key={x}
            d={`M${x + 8} 168 Q${x + 8} 212 200 ${250 + pull}`}
            stroke="#2b2b2b"
            strokeWidth="1"
            fill="none"
            opacity="0.6"
          />
        ))}
        {fingers.map((finger) => (
          <g
            key={finger.x}
            style={{
              transformBox: "view-box",
              transformOrigin: `${finger.x + 8}px 166px`,
              transform: `scaleY(${1 - 0.6 * curl})`,
            }}
          >
            <rect
              x={finger.x}
              y={finger.top}
              width="16"
              height={finger.len}
              rx="8"
              fill={RED}
              stroke={RED_DARK}
              strokeWidth="2"
            />
            <rect
              x={finger.x + 5}
              y={finger.top + 10}
              width="6"
              height={finger.len - 20}
              rx="3"
              fill={STRAW}
              opacity="0.85"
            />
            <Tape x={finger.x + 8} y={finger.top + 16} w={18} />
            <Tape x={finger.x + 8} y={finger.top + finger.len / 2} w={18} />
          </g>
        ))}
        <g
          style={{
            transformBox: "view-box",
            transformOrigin: "146px 200px",
            transform: `rotate(${34 * curl}deg)`,
          }}
        >
          <rect
            x="96"
            y="150"
            width="16"
            height="70"
            rx="8"
            fill={RED}
            stroke={RED_DARK}
            strokeWidth="2"
            transform="rotate(-40 104 185)"
          />
          <Tape x={110} y={168} w={18} r={-40} />
        </g>
        <g
          role="button"
          tabIndex={0}
          aria-label="Pull the strings down to close the fingers"
          onPointerDown={(event) => {
            if (!svgRef.current) return;
            event.currentTarget.setPointerCapture(event.pointerId);
            grabY.current =
              toSvgPoint(svgRef.current, event).y - pullRef.current;
            setPhase("pulling");
          }}
          onPointerMove={(event) => {
            if (phase !== "pulling" || !svgRef.current) return;
            const y = toSvgPoint(svgRef.current, event).y;
            setPullValue(Math.max(0, Math.min(MAX_PULL, y - grabY.current)));
          }}
          onPointerUp={letGo}
          onPointerCancel={letGo}
          onKeyDown={onKeyDown}
          className="cursor-grab outline-none active:cursor-grabbing"
          transform={`translate(0 ${pull})`}
        >
          <rect x="194" y="246" width="12" height="38" rx="4" fill={STRAW} />
          <Tape x={200} y={262} w={18} />
          <line
            x1="200"
            y1="284"
            x2="200"
            y2="300"
            stroke="#2b2b2b"
            strokeWidth="1.5"
          />
          <circle cx="200" cy="300" r="34" fill="transparent" />
          <Handle x={200} y={300} active={phase !== "ready"} />
        </g>
      </svg>
      <StepGuide
        active={activeStep}
        steps={[
          "Grab the green dot at the bottom of the strings",
          "Pull it down to close the fingers",
          "Let go and watch the hand open again",
        ]}
      />
    </div>
  );
}
