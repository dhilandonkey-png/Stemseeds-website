import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Globe2, Package, Sparkles } from "lucide-react";

import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { donateCopy } from "@/content/donate";
import { site, stats } from "@/content/site";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support STEMSeeds: your donation funds the distribution of our signature 3-in-1 STEM kits to disadvantaged children across the globe.",
};

const impactIcons = [Package, Globe2, Sparkles] as const;

export default function DonatePage() {
  return (
    <main id="main-content">
      <section className="relative overflow-hidden px-6 pt-16 pb-14 sm:pt-24 sm:pb-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(17,120,134,0.1),transparent_46%)]"
        />
        <div className="relative mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="flex items-center justify-center gap-2.5 text-xs font-semibold tracking-[0.22em] text-primary uppercase">
              <span aria-hidden="true" className="h-px w-6 bg-fresh" />
              {donateCopy.eyebrow}
              <span aria-hidden="true" className="h-px w-6 bg-fresh" />
            </p>
            <h1 className="mt-4 font-display text-4xl leading-[1.08] text-foreground sm:text-5xl md:text-6xl">
              {donateCopy.title}
            </h1>
            <p className="mt-7 text-base leading-relaxed text-foreground/80 sm:text-lg">
              {donateCopy.body}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a
                  href={site.donateHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {donateCopy.ctaLabel}
                  <ExternalLink className="size-4" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/join-us">Or start a chapter</Link>
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              {donateCopy.note}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-mint/50 px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-3">
            {donateCopy.impactPoints.map((point, index) => {
              const Icon = impactIcons[index] ?? Sparkles;
              return (
                <Reveal key={point.title} delay={index * 0.08}>
                  <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-[0_8px_24px_rgba(8,62,72,0.06)]">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h2 className="mt-4 font-display text-lg text-foreground">
                      {point.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {point.text}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20">
        <Reveal className="mx-auto max-w-4xl">
          <dl className="grid grid-cols-1 overflow-hidden rounded-3xl border border-border bg-aqua/35 sm:grid-cols-3 sm:divide-x sm:divide-border">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1.5 px-6 py-8 text-center"
              >
                <dd className="font-sans text-4xl font-bold tracking-tight text-primary tabular-nums sm:text-5xl">
                  <AnimatedCounter value={stat.value} />
                  {stat.suffix ? (
                    <span className="text-fresh">{stat.suffix}</span>
                  ) : null}
                </dd>
                <dt className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>
    </main>
  );
}
