import type { CSSProperties } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

export type MarqueeLogo = { src: string; alt: string };

export function LogoMarquee({
  logos,
  speed = 42,
  className,
}: {
  logos: MarqueeLogo[];
  speed?: number;
  className?: string;
}) {
  const track = [...logos, ...logos];

  return (
    <div className={cn("group relative overflow-hidden", className)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent"
      />
      <div
        className="animate-marquee flex w-max items-center gap-16 group-hover:[animation-play-state:paused]"
        style={{ "--marquee-duration": `${speed}s` } as CSSProperties}
      >
        {track.map((logo, index) => (
          <Image
            key={`${logo.src}-${index}`}
            src={logo.src}
            alt={index < logos.length ? logo.alt : ""}
            aria-hidden={index >= logos.length || undefined}
            width={200}
            height={80}
            className="h-10 w-auto shrink-0 object-contain sm:h-12"
          />
        ))}
      </div>
    </div>
  );
}
