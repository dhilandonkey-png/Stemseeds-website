"use client";

import Image from "next/image";
import { useState } from "react";
import { CalendarDays, MapPin } from "lucide-react";

import type { ImpactEvent } from "@/content/impact";
import { cn } from "@/lib/utils";

export function EventCard({ event }: { event: ImpactEvent }) {
  const [active, setActive] = useState(0);
  const photo = event.photos[active];

  return (
    <article className="grid h-full gap-6 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] sm:gap-7">
      <div className="flex flex-col gap-3">
        <div className="relative aspect-[4/4.6] overflow-hidden rounded-2xl bg-mint shadow-[0_16px_36px_rgba(8,62,72,0.14)]">
          {photo ? (
            <Image
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 40vw, 280px"
              className="object-cover"
            />
          ) : null}
        </div>
        {event.photos.length > 1 ? (
          <div className="flex flex-wrap gap-2">
            {event.photos.map((thumb, index) => (
              <button
                key={thumb.src}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show photo ${index + 1} of ${event.photos.length}`}
                aria-pressed={index === active}
                className={cn(
                  "relative size-12 overflow-hidden rounded-lg ring-2 transition focus-visible:outline-none focus-visible:ring-ring",
                  index === active
                    ? "ring-primary"
                    : "ring-transparent opacity-70 hover:opacity-100",
                )}
              >
                <Image
                  src={thumb.src}
                  alt=""
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        ) : null}
      </div>

      <div className="flex flex-col">
        {event.date || event.location ? (
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-semibold tracking-[0.16em] text-primary uppercase">
            {event.date ? (
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays aria-hidden="true" className="size-3.5" />
                {event.date}
              </span>
            ) : null}
            {event.location ? (
              <span className="inline-flex items-center gap-1.5">
                <MapPin aria-hidden="true" className="size-3.5" />
                {event.location}
              </span>
            ) : null}
          </div>
        ) : null}
        <h3 className="mt-3 font-display text-2xl leading-tight font-bold text-foreground sm:text-3xl">
          {event.title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-foreground/75">
          {event.description}
        </p>
      </div>
    </article>
  );
}
