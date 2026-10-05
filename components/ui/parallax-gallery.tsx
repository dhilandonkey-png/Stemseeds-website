"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";

import { cn } from "@/lib/utils";

export type ParallaxGalleryPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

/** Per-column scroll speed (px of drift across the section) and resting offset. */
const SPEEDS = [-34, 26, -18, 40];
const COLUMN_OFFSETS = ["lg:mt-0", "lg:mt-14", "lg:mt-5", "lg:mt-20"];

function ParallaxPhoto({
  photo,
  progress,
  speed,
  offsetClass,
  enabled,
}: {
  photo: ParallaxGalleryPhoto;
  progress: MotionValue<number>;
  speed: number;
  offsetClass: string;
  enabled: boolean;
}) {
  // Each photo drifts a different small distance as the section scrolls by.
  const y = useTransform(progress, [0, 1], [speed, -speed]);

  return (
    <motion.div style={enabled ? { y } : undefined} className={offsetClass}>
      <figure className="overflow-hidden rounded-2xl shadow-[0_10px_28px_rgba(8,62,72,0.08)] ring-1 ring-ink/10">
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 270px"
          className="h-auto w-full"
        />
      </figure>
    </motion.div>
  );
}

/**
 * Scroll-linked parallax photo grid (adapted from the 21st.dev Parallax
 * Scrolling component). Columns move at slightly different speeds for depth,
 * driven by native scroll position — no scroll hijacking, no extreme motion.
 * Photos keep their natural aspect ratio. Disabled on small screens and under
 * prefers-reduced-motion; vertical-only transforms mean no horizontal overflow.
 */
export function ParallaxGallery({
  photos,
  className,
}: {
  photos: ParallaxGalleryPhoto[];
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [largeScreen, setLargeScreen] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 640px)");
    const update = () => setLargeScreen(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const enabled = largeScreen && !reduceMotion;

  return (
    <div
      ref={containerRef}
      className={cn(
        "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:pb-14",
        className,
      )}
    >
      {photos.map((photo, index) => (
        <ParallaxPhoto
          key={photo.src}
          photo={photo}
          progress={scrollYProgress}
          speed={SPEEDS[index % SPEEDS.length]}
          offsetClass={COLUMN_OFFSETS[index % COLUMN_OFFSETS.length]}
          enabled={enabled}
        />
      ))}
    </div>
  );
}
