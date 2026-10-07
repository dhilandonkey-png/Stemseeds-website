"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Hospital,
  MapPin,
  School,
  Users,
} from "lucide-react";

import type { ImpactEvent } from "@/content/impact";
import { cn } from "@/lib/utils";

export function EventCard({ event }: { event: ImpactEvent }) {
  const [active, setActive] = useState(0);
  const photo = event.photos[active];

  return (
    <article className="flex h-full flex-col gap-5">
      <div className="flex flex-col gap-3">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-mint shadow-[0_16px_36px_rgba(8,62,72,0.14)]">
          {photo ? (
            <Image
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 1024px) 92vw, 560px"
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
                  "relative size-14 overflow-hidden rounded-lg ring-2 transition focus-visible:outline-none focus-visible:ring-ring",
                  index === active
                    ? "ring-primary"
                    : "ring-transparent opacity-70 hover:opacity-100",
                )}
              >
                <Image
                  src={thumb.src}
                  alt=""
                  fill
                  sizes="56px"
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
        {event.recipient ? (
          <p className="mt-3 inline-flex w-fit items-start gap-2 rounded-xl bg-secondary px-3 py-1.5 text-sm font-semibold text-secondary-foreground">
            {event.recipientType === "school" ? (
              <School aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
            ) : (
              <Hospital aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
            )}
            {event.recipient}
          </p>
        ) : null}
        <h3 className="mt-3 font-display text-2xl leading-tight font-bold text-foreground sm:text-3xl">
          {event.title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-foreground/75">
          {event.description}
        </p>
        {event.chapter ? (
          <Link
            href={`/team#${event.chapter.teamId}`}
            aria-label={`Meet the ${event.chapter.name} chapter team`}
            className="group mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 px-4 py-2 text-sm font-semibold whitespace-nowrap text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            <Users aria-hidden="true" className="size-4" />
            Meet the chapter
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        ) : null}
      </div>
    </article>
  );
}
