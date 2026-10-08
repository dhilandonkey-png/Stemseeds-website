"use client";

import { useRef, useState } from "react";
import { useInView } from "motion/react";
import { Play } from "lucide-react";

import { Button } from "@/components/ui/button";

export type DemoKind = "rocket" | "catapult" | "hand";

const RED = "#e35d5b";
const RED_DARK = "#b23b3a";
const TAPE = "#4757df";
const STRAW = "#5fd4f2";
const STICK = "#e8b27c";
const CUP = "#d4d6d8";
const CUP_DARK = "#a9adb1";

const labels: Record<DemoKind, { button: string; hint: string }> = {
  rocket: {
    button: "Blow into the straw",
    hint: "Your breath pushes air through the straw, creating thrust.",
  },
  catapult: {
    button: "Launch the pom-pom",
    hint: "Pushing the arm stores potential energy; letting go turns it into motion.",
  },
  hand: {
    button: "Pull the strings",
    hint: "The strings work like tendons, pulling the straw fingers closed.",
  },
};

export function ExperimentDemo({
  kind,
  label,
}: {
  kind: DemoKind;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [run, setRun] = useState(0);


  // Plays once when it first scrolls into view, then again on each click.
  const playing = inView || run > 0;

  return (
    <div ref={ref} className="flex h-full flex-col">
      <div className="relative min-h-0 flex-1">
        <svg
          key={run}
          viewBox="0 0 400 300"
          role="img"
          aria-label={label}
          className={`h-full w-full overflow-visible ${playing ? "demo-play" : ""}`}
        >
          {kind === "catapult" ? <Catapult /> : null}
          {kind === "rocket" ? <Rocket /> : null}
          {kind === "hand" ? <Hand /> : null}
        </svg>
      </div>
      <div className="mt-4 flex flex-col items-center gap-2 text-center">
        <Button
          type="button"
          size="sm"
          onClick={() => setRun((count) => count + 1)}
        >
          <Play aria-hidden="true" />
          {labels[kind].button}
        </Button>
        <p className="text-xs text-muted-foreground">{labels[kind].hint}</p>
      </div>
    </div>
  );
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

function Catapult() {
  return (
    <g>
      {/* Stacked cups */}
      <path
        d="M150 290 L250 290 L240 205 L160 205 Z"
        fill={CUP}
        stroke={CUP_DARK}
        strokeWidth="2"
      />
      <ellipse
        cx="200"
        cy="205"
        rx="40"
        ry="9"
        fill="#e6e7e8"
        stroke={CUP_DARK}
        strokeWidth="2"
      />
      <path
        d="M163 205 L237 205 L228 150 L172 150 Z"
        fill={CUP}
        stroke={CUP_DARK}
        strokeWidth="2"
      />
      <ellipse
        cx="200"
        cy="150"
        rx="28"
        ry="7"
        fill="#e6e7e8"
        stroke={CUP_DARK}
        strokeWidth="2"
      />
      {/* Upright straw the arm pivots on */}
      <rect
        x="194"
        y="128"
        width="12"
        height="150"
        rx="5"
        fill={STRAW}
        opacity="0.85"
      />
      <Tape x={200} y={190} w={22} />
      {/* Arm */}
      <g className="demo-catapult-arm">
        <rect x="80" y="135" width="245" height="10" rx="5" fill={STICK} />
        <g transform="translate(318 140)">
          <path
            d="M-8 -6 L22 -24 L44 -8 L36 6 L18 -6 L4 6 Z"
            fill={RED}
            stroke={RED_DARK}
            strokeWidth="1.5"
          />
          <Tape x={0} y={0} w={14} h={12} />
        </g>
        <circle
          className="demo-catapult-loaded"
          cx="340"
          cy="120"
          r="12"
          fill="#fff"
          stroke="#d6d6d6"
          strokeWidth="2"
        />
        <Tape x={200} y={140} w={12} h={16} />
      </g>
      {/* Pom-pom in flight */}
      <circle
        className="demo-catapult-pompom"
        cx="0"
        cy="0"
        r="12"
        fill="#fff"
        stroke="#d6d6d6"
        strokeWidth="2"
      />
    </g>
  );
}

function Rocket() {
  return (
    <g>
      {/* Bent straw */}
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
      {/* Puffs of air */}
      <g className="demo-rocket-puff" fill={STRAW}>
        <circle cx="110" cy="296" r="6" />
        <circle cx="98" cy="300" r="4" />
        <circle cx="90" cy="292" r="3" />
      </g>
      <g className="demo-rocket-body">
        <g transform="rotate(20 200 140)">
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
    </g>
  );
}

const fingers = [
  { x: 152, top: 70, len: 92 },
  { x: 182, top: 48, len: 114 },
  { x: 212, top: 44, len: 118 },
  { x: 242, top: 58, len: 104 },
];

function Hand() {
  return (
    <g>
      {/* Wrist tab and strings */}
      <rect
        x="168"
        y="232"
        width="64"
        height="58"
        fill="#f7d417"
        stroke="#c9a90c"
        strokeWidth="2"
      />
      <g className="demo-hand-tab">
        <rect x="194" y="250" width="12" height="40" rx="4" fill={STRAW} />
        <Tape x={200} y={268} w={18} />
      </g>
      {/* Palm */}
      <path
        d="M140 162 L262 162 L262 205 Q262 236 232 236 L168 236 Q140 236 140 205 Z"
        fill={RED}
        stroke={RED_DARK}
        strokeWidth="2"
      />
      {[152, 182, 212, 242].map((x) => (
        <path
          key={x}
          d={`M${x + 8} 168 Q${x + 8} 210 200 248`}
          stroke="#2b2b2b"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />
      ))}
      {/* Fingers curl toward the palm */}
      {fingers.map((finger, index) => (
        <g
          key={finger.x}
          className="demo-hand-finger"
          style={{
            transformOrigin: `${finger.x + 8}px 166px`,
            animationDelay: `${index * 40}ms`,
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
      {/* Thumb */}
      <g className="demo-hand-thumb" style={{ transformOrigin: "146px 200px" }}>
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
    </g>
  );
}
