"use client";

import Link from "next/link";
import { useReducedMotion } from "motion/react";

import { Button } from "@/components/ui/button";
import { FloatingPhoto } from "@/components/ui/floating-photo";
import Floating from "@/components/ui/parallax-floating";
import { kitFloats, kitIntro } from "@/content/kits";

export function KitHero() {
  const reduceMotion = useReducedMotion();
  const desktopFloats = kitFloats.filter((photo) => !photo.mobile);
  const mobileFloats = kitFloats.filter((photo) => photo.mobile);

  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_30%,rgba(17,120,134,0.1),transparent_42%),radial-gradient(circle_at_88%_14%,rgba(67,173,110,0.09),transparent_38%)]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pt-16 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pt-20 lg:pb-24">
        {/* Text column */}
        <div className="max-w-xl">
          <p className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.22em] text-primary uppercase">
            <span aria-hidden="true" className="h-px w-6 bg-fresh" />
            {kitIntro.eyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
            {kitIntro.title}
          </h1>
          <p className="mt-4 inline-flex rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-secondary-foreground">
            {kitIntro.subtitle}
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {kitIntro.body}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="#experiments">See the experiments</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/donate">Sponsor a kit</Link>
            </Button>
          </div>
        </div>

        {/* Desktop: one contained floating collage on the right */}
        <div className="relative hidden h-[560px] lg:block">
          <Floating
            sensitivity={reduceMotion ? 0 : 0.12}
            easingFactor={0.05}
            className="pointer-events-none"
          >
            {desktopFloats.map((photo, index) => (
              <FloatingPhoto
                key={`kit-desktop-${photo.src}-${index}`}
                photo={photo}
                priority={index < 2}
              />
            ))}
          </Floating>
        </div>

        {/* Mobile: simplified cluster below the text */}
        <div className="relative h-[300px] w-full lg:hidden">
          <Floating sensitivity={reduceMotion ? 0 : 0.08} easingFactor={0.05}>
            {mobileFloats.map((photo, index) => (
              <FloatingPhoto
                key={`kit-mobile-${photo.src}-${index}`}
                photo={photo}
                priority={index === 0}
              />
            ))}
          </Floating>
        </div>
      </div>
    </section>
  );
}
