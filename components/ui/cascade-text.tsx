"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

export interface CascadeTextProps {
  text: string;
  className?: string;
  /** Resting color. CSS variables are resolved at runtime. */
  color?: string;
  /** Color each character cascades toward while hovered. */
  hoverColor?: string;
  /** Delay between characters, in seconds. */
  staggerDelay?: number;
}

function segmentGraphemes(text: string): string[] {
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    const segmenter = new Intl.Segmenter(undefined, {
      granularity: "grapheme",
    });
    return Array.from(segmenter.segment(text), (segment) => segment.segment);
  }
  return Array.from(text);
}

/** Resolves `var(--token)` strings to concrete values so motion can interpolate them. */
function resolveCssColor(element: HTMLElement, value: string): string {
  const match = value.match(/^var\(\s*(--[^,)\s]+)/);
  if (!match) return value;
  const computed = getComputedStyle(element).getPropertyValue(match[1]).trim();
  return computed || value;
}

export function CascadeText({
  text,
  className,
  color = "var(--primary)",
  hoverColor = "var(--accent)",
  staggerDelay = 0.035,
}: CascadeTextProps) {
  const characters = useMemo(() => segmentGraphemes(text), [text]);
  const containerRef = useRef<HTMLSpanElement>(null);
  const [hovered, setHovered] = useState(false);
  const [resolved, setResolved] = useState({ color, hoverColor });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;
    setResolved({
      color: resolveCssColor(element, color),
      hoverColor: resolveCssColor(element, hoverColor),
    });
  }, [color, hoverColor]);

  return (
    <span
      ref={containerRef}
      aria-label={text}
      className={cn("inline-block", className)}
      style={{ color }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {characters.map((character, index) => (
        <motion.span
          key={`${character}-${index}`}
          aria-hidden="true"
          className="inline-block whitespace-pre"
          initial={false}
          animate={{
            color: hovered ? resolved.hoverColor : resolved.color,
            y: hovered && !reduceMotion ? ["0%", "-7%", "0%"] : "0%",
          }}
          transition={{
            delay: index * staggerDelay,
            duration: reduceMotion ? 0.15 : 0.38,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {character === " " ? "\u00A0" : character}
        </motion.span>
      ))}
    </span>
  );
}
