import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Download, PlayCircle, ShieldCheck } from "lucide-react";

import { ExperimentDemo } from "@/components/stem-kit/experiment-demo";
import { KitHero } from "@/components/stem-kit/kit-hero";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  experiments,
  kitGallery,
  kitManual,
  kitReach,
  kitSafety,
} from "@/content/kits";
import { site, stats } from "@/content/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "STEM Kit",
  description:
    "Each STEMSeeds kit is a hand-designed 3-in-1 experiment kit: a paper rocket, a pom-pom catapult, and a robotic hand, with hospital-safe materials and educational flyers.",
};

const difficultyStyles: Record<string, string> = {
  Easy: "bg-fresh/15 text-fresh-deep",
  Medium: "bg-sea/20 text-primary",
  Hard: "bg-primary text-primary-foreground",
};

export default function StemKitPage() {
  return (
    <main id="main-content">
      <KitHero />

      <section
        id="experiments"
        className="scroll-mt-24 bg-mint/50 px-6 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              eyebrow="The Experiments"
              title="Three projects, one kit"
              align="center"
            />
          </Reveal>
          <div className="mt-14 space-y-16">
            {experiments.map((experiment, index) => (
              <Reveal key={experiment.name}>
                <article
                  className={cn(
                    "grid items-start gap-8 lg:grid-cols-2 lg:gap-14",
                  )}
                >
                  <div
                    className={cn(
                      "relative aspect-[4/3.6] rounded-3xl bg-white p-6 shadow-[0_18px_44px_rgba(8,62,72,0.14)] ring-1 ring-ink/10 sm:p-10",
                      index % 2 === 1 && "lg:order-2",
                    )}
                  >
                    <ExperimentDemo
                      kind={experiment.demo}
                      label={`Animated ${experiment.name}`}
                    />
                  </div>
                  <div className={cn(index % 2 === 1 && "lg:order-1")}>
                    <span
                      className={cn(
                        "inline-flex rounded-full px-3 py-1 text-xs font-semibold",
                        difficultyStyles[experiment.difficulty],
                      )}
                    >
                      Difficulty: {experiment.difficulty}
                    </span>
                    <h3 className="mt-4 font-display text-3xl text-foreground sm:text-4xl">
                      {experiment.name}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                      {experiment.tagline}
                    </p>
                    <details
                      className="group mt-6 rounded-2xl border border-border bg-card shadow-[0_8px_24px_rgba(8,62,72,0.05)]"
                      open={index === 0}
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-display text-lg text-foreground [&::-webkit-details-marker]:hidden">
                        How to build it ({experiment.steps.length} steps)
                        <span
                          aria-hidden="true"
                          className="text-2xl leading-none text-primary transition-transform group-open:rotate-45"
                        >
                          +
                        </span>
                      </summary>
                      <ol className="space-y-3 px-5 pb-5">
                        {experiment.steps.map((step, stepIndex) => (
                          <li
                            key={step}
                            className="flex gap-3 text-sm leading-relaxed text-foreground/80"
                          >
                            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                              {stepIndex + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                      <div className="border-t border-border px-5 py-4">
                        <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                          Pictures from the manual
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {experiment.stepImages.map((page, pageIndex) => (
                            <a
                              key={page.src}
                              href={page.src}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="relative block h-28 w-[72px] overflow-hidden rounded-lg border border-border bg-white transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                            >
                              <Image
                                src={page.src}
                                alt={page.alt}
                                fill
                                sizes="72px"
                                className="object-cover object-top"
                              />
                              <span className="sr-only">
                                Open page {pageIndex + 1}
                              </span>
                            </a>
                          ))}
                        </div>
                        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
                          <a
                            href={kitManual.pdf}
                            download
                            className="inline-flex items-center gap-1.5 text-primary underline-offset-4 hover:underline"
                          >
                            <Download className="size-4" aria-hidden="true" />
                            Download the full manual (PDF)
                          </a>
                          {experiment.demo === "hand" ? (
                            <a
                              href={kitManual.video}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-primary underline-offset-4 hover:underline"
                            >
                              <PlayCircle
                                className="size-4"
                                aria-hidden="true"
                              />
                              Watch the video tutorial
                            </a>
                          ) : null}
                        </div>
                      </div>
                    </details>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              eyebrow="Educational Flyers"
              title="The science behind every build"
              lead="Each experiment includes an easy-to-follow educational flyer, personally designed by our team, that explains the science behind the activity."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {experiments.map((experiment, index) => (
              <Reveal key={experiment.flyer.src} delay={index * 0.1}>
                <figure className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_10px_28px_rgba(8,62,72,0.08)] transition-transform duration-300 hover:-translate-y-1">
                  <Image
                    src={experiment.flyer.src}
                    alt={experiment.flyer.alt}
                    width={520}
                    height={680}
                    sizes="(max-width: 640px) 90vw, 340px"
                    className="h-auto w-full object-cover"
                  />
                  <figcaption className="px-5 py-4">
                    <span className="flex items-center justify-between gap-3">
                      <span className="text-sm font-semibold text-primary">
                        {experiment.name} flyer
                      </span>
                      <a
                        href={experiment.flyer.src}
                        download={`STEMSeeds-${experiment.name.replace(/\s+/g, "-")}-flyer.avif`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-primary underline-offset-4 hover:underline"
                      >
                        <Download className="size-3.5" aria-hidden="true" />
                        Download
                      </a>
                    </span>
                    <dl className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/75">
                      {experiment.concepts.map((concept) => (
                        <div key={concept.term}>
                          <dt className="inline font-semibold text-foreground">
                            {concept.term}:
                          </dt>{" "}
                          <dd className="inline">{concept.text}</dd>
                        </div>
                      ))}
                    </dl>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal className="mx-auto mt-12 max-w-3xl rounded-2xl border border-border bg-aqua/30 p-6">
            <h3 className="flex items-center gap-2 font-display text-xl text-foreground">
              <ShieldCheck className="size-5 text-primary" aria-hidden="true" />
              {kitSafety.title}
            </h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/80">
              {kitSafety.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span aria-hidden="true" className="text-fresh">
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-foreground/80">
              Want kits for your hospital, school, or organization?{" "}
              <Link
                href="/request-kits"
                className="font-semibold text-primary underline-offset-4 hover:underline"
              >
                Request STEMKits
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-mint/50 px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              eyebrow="Kits Around the World"
              title="Translated, packed, and delivered"
              lead={kitReach}
            />
          </Reveal>
          <div className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:thin]">
            {kitGallery.map((photo) => (
              <figure
                key={photo.src}
                className="relative aspect-[4/3] w-[280px] shrink-0 snap-start overflow-hidden rounded-2xl ring-1 ring-ink/10 sm:w-[340px]"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="340px"
                  className="object-cover"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink px-6 py-20 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(17,120,134,0.35),transparent_50%)]"
        />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-10 text-center">
          <dl className="grid w-full grid-cols-1 gap-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1.5"
              >
                <dd className="font-sans text-4xl font-bold tracking-tight text-mint tabular-nums sm:text-5xl">
                  <AnimatedCounter value={stat.value} />
                  {stat.suffix ? (
                    <span className="text-fresh">{stat.suffix}</span>
                  ) : null}
                </dd>
                <dt className="text-xs font-semibold tracking-[0.22em] text-aqua/80 uppercase">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            As of {site.statsAsOf}
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-fresh text-fresh-deep hover:bg-fresh/85"
            >
              <a
                href={site.donateHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                Sponsor the next kit
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-mint/40 text-mint hover:border-mint/70 hover:bg-mint/10 hover:text-mint"
            >
              <Link href="/join-us">Start a Chapter</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
