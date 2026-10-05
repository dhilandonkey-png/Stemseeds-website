"use client";

import Image from "next/image";
import Link from "next/link";
import { useReducedMotion } from "motion/react";

import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Button } from "@/components/ui/button";
import { CascadeText } from "@/components/ui/cascade-text";
import { FloatingPhoto } from "@/components/ui/floating-photo";
import Floating from "@/components/ui/parallax-floating";
import { heroCopy, heroPhotos } from "@/content/hero";
import { site, stats } from "@/content/site";

export function HomeHero() {
  const reduceMotion = useReducedMotion();
  const desktopPhotos = heroPhotos.filter((photo) => !photo.mobile);
  const mobilePhotos = heroPhotos.filter((photo) => photo.mobile);

  return (
    <section className="relative isolate min-h-[calc(100svh-4.5rem)] overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_24%,rgba(18,120,134,0.10),transparent_44%),radial-gradient(circle_at_82%_80%,rgba(67,173,110,0.08),transparent_36%)]"
      />

      <Floating
        sensitivity={reduceMotion ? 0 : 0.16}
        easingFactor={0.045}
        className="pointer-events-none"
      >
        {desktopPhotos.map((photo, index) => (
          <FloatingPhoto
            key={`desktop-${photo.src}-${index}`}
            photo={photo}
            priority={index < 3}
          />
        ))}
      </Floating>

      <div className="relative z-20 mx-auto flex min-h-[calc(100svh-4.5rem)] max-w-5xl flex-col items-center px-6 pt-12 pb-16 text-center lg:justify-center lg:pt-6">
        <div className="relative">
          <Image
            src={site.logo.src}
            alt=""
            aria-hidden="true"
            width={720}
            height={720}
            priority
            className="pointer-events-none absolute top-1/2 left-1/2 -z-10 w-[min(58vw,520px)] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-[0.07] select-none"
          />
          <h1 className="font-sans leading-[0.95] font-bold tracking-[-0.045em]">
            <CascadeText
              text={heroCopy.wordmark}
              className="text-[clamp(3.5rem,12vw,10.5rem)]"
            />
          </h1>
        </div>
        <p className="mt-4 font-display text-xl text-foreground/90 sm:text-2xl md:mt-5 md:text-3xl">
          {heroCopy.tagline}
        </p>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {heroCopy.body}
        </p>
        <div className="mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href={heroCopy.primaryCta.href}>
              {heroCopy.primaryCta.label}
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full sm:w-auto"
          >
            <Link href={heroCopy.secondaryCta.href}>
              {heroCopy.secondaryCta.label}
            </Link>
          </Button>
        </div>

        <dl
          aria-label="Our impact in numbers"
          className="mt-12 grid w-full max-w-xl grid-cols-3 gap-4 sm:mt-14"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col-reverse items-center gap-1"
            >
              <dt className="text-[0.65rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase sm:text-xs">
                {stat.label}
              </dt>
              <dd className="font-sans text-3xl font-bold tracking-tight text-primary tabular-nums sm:text-4xl md:text-5xl">
                <AnimatedCounter value={stat.value} />
                {stat.suffix ? (
                  <span className="text-fresh">{stat.suffix}</span>
                ) : null}
              </dd>
            </div>
          ))}
        </dl>

        <div className="relative mt-12 h-[320px] w-full max-w-md lg:hidden">
          <Floating sensitivity={reduceMotion ? 0 : 0.08} easingFactor={0.05}>
            {mobilePhotos.map((photo, index) => (
              <FloatingPhoto
                key={`mobile-${photo.src}-${index}`}
                photo={photo}
                priority={index < 2}
              />
            ))}
          </Floating>
        </div>
      </div>
    </section>
  );
}
