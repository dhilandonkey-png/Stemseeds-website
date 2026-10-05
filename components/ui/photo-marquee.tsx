import Image from "next/image";

import { cn } from "@/lib/utils";

export type MarqueePhoto = { src: string; alt: string };

/**
 * Photos scrolling horizontally in a slow, seamless loop (same mechanism as
 * the partner logo marquee). Pauses on hover; static under reduced motion.
 */
export function PhotoMarquee({
  photos,
  speed = 30,
  className,
}: {
  photos: MarqueePhoto[];
  speed?: number;
  className?: string;
}) {
  // Repeat the set so the loop half is always wider than the viewport,
  // then duplicate that half for the seamless -50% translate loop.
  const half = photos.length >= 6 ? photos : [...photos, ...photos];
  const track = [...half, ...half];

  return (
    <div className={cn("group relative overflow-hidden", className)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-24"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-24"
      />
      <div
        className="animate-marquee flex w-max items-center gap-5 group-hover:[animation-play-state:paused] sm:gap-6"
        style={{ "--marquee-duration": `${speed}s` } as React.CSSProperties}
      >
        {track.map((photo, index) => (
          <div
            key={`${photo.src}-${index}`}
            aria-hidden={index >= photos.length}
            className={cn(
              "relative aspect-[3/4] w-[210px] shrink-0 overflow-hidden rounded-2xl shadow-[0_12px_30px_rgba(8,62,72,0.14)] ring-1 ring-ink/10 sm:w-[250px]",
              index % 2 === 1 ? "rotate-[1.5deg]" : "rotate-[-1.5deg]",
            )}
          >
            <Image
              src={photo.src}
              alt={index < photos.length ? photo.alt : ""}
              fill
              sizes="250px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
