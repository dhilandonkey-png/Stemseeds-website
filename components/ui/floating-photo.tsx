"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

import { FloatingElement } from "@/components/ui/parallax-floating";
import { cn } from "@/lib/utils";

export type FloatingPhotoSpec = {
  src: string;
  alt: string;
  depth: number;
  rotate: number;
  duration: number;
  delay: number;
  className: string;
  width: number;
  height: number;
  sizes: string;
  mobile?: boolean;
};

export function FloatingPhoto({
  photo,
  priority,
}: {
  photo: FloatingPhotoSpec;
  priority?: boolean;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <FloatingElement
      depth={photo.depth}
      className={cn("pointer-events-auto z-10 hover:z-30", photo.className)}
    >
      <motion.div
        className="group origin-center"
        animate={
          reduceMotion
            ? { rotate: photo.rotate }
            : {
                rotate: photo.rotate,
                y: [0, photo.rotate > 0 ? -10 : -7, 0],
                x: [0, photo.rotate > 0 ? 5 : -4, 0],
              }
        }
        transition={{
          duration: photo.duration,
          delay: photo.delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={
          reduceMotion ? undefined : { scale: 1.05, rotate: photo.rotate * 0.2 }
        }
      >
        <div className="overflow-hidden rounded-xl shadow-[0_16px_40px_rgba(8,62,72,0.18)] ring-1 ring-ink/10 transition-[box-shadow] duration-500 group-hover:shadow-[0_22px_50px_rgba(8,62,72,0.24)]">
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes={photo.sizes}
            priority={priority}
            className="h-auto w-full object-cover"
          />
        </div>
      </motion.div>
    </FloatingElement>
  );
}
