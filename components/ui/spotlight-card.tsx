"use client";

import { useRef, useState, type ReactNode } from "react";
import { useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

/**
 * Card with a subtle cursor-following teal/green spotlight (adapted from the
 * 21st.dev Spotlight Card). The spotlight is a low-opacity decorative overlay:
 * it never blocks pointer events, stays off for keyboard/touch users and under
 * prefers-reduced-motion, and uses the site's brand palette.
 */
export function SpotlightCard({
  as: Tag = "div",
  className,
  children,
}: {
  as?: "div" | "article";
  className?: string;
  children: ReactNode;
}) {
  const cardRef = useRef<HTMLDivElement & HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    if (reduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <Tag
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className={cn("relative", className)}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
        style={{
          opacity: reduceMotion ? 0 : visible ? 1 : 0,
          background: `radial-gradient(420px circle at ${position.x}px ${position.y}px, rgba(63, 145, 153, 0.16), rgba(67, 173, 110, 0.05) 45%, transparent 70%)`,
        }}
      />
      {children}
    </Tag>
  );
}
