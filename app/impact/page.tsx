import type { Metadata } from "next";

import { EventCard } from "@/components/impact/event-card";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { impactEvents, impactIntro } from "@/content/impact";
import { stats } from "@/content/site";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "See every STEMSeeds event: hospital deliveries, new chapters, and recognitions, with photos and dates.",
};

const recognitions = impactEvents.filter(
  (event) => event.kind === "recognition",
);
const timeline = impactEvents.filter((event) => event.kind !== "recognition");

export default function ImpactPage() {
  return (
    <main id="main-content">
      <section className="relative overflow-hidden px-6 pt-16 pb-14 sm:pt-24 sm:pb-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-[-10%] h-[380px] w-[380px] rounded-full bg-aqua/40 blur-3xl"
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="flex items-center justify-center gap-2.5 text-xs font-semibold tracking-[0.22em] text-primary uppercase">
              <span aria-hidden="true" className="h-px w-6 bg-fresh" />
              {impactIntro.eyebrow}
              <span aria-hidden="true" className="h-px w-6 bg-fresh" />
            </p>
            <h1 className="mt-4 font-display text-4xl leading-[1.08] text-foreground sm:text-5xl md:text-6xl">
              {impactIntro.title}
            </h1>
            <p className="mt-7 text-base leading-relaxed text-foreground/80 sm:text-lg">
              {impactIntro.body}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mx-auto mt-16 max-w-4xl">
          <dl className="grid grid-cols-1 overflow-hidden rounded-3xl border border-border bg-mint/60 sm:grid-cols-3 sm:divide-x sm:divide-border">
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

      <section
        className="bg-mint/50 px-6 py-16 sm:py-20"
        aria-label="Awards and recognition"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              eyebrow="Awards & Recognition"
              title="Honored by our community"
            />
          </Reveal>
          <div className="mt-10 grid gap-x-12 gap-y-14 lg:grid-cols-2">
            {recognitions.map((event, index) => (
              <Reveal key={event.title} delay={(index % 2) * 0.08}>
                <EventCard event={event} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-24" aria-label="Our journey">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              eyebrow="Our Journey"
              title="Deliveries, fundraisers, and partnerships"
            />
          </Reveal>
          <div className="mt-10 grid gap-x-12 gap-y-16 lg:grid-cols-2">
            {timeline.map((event, index) => (
              <Reveal key={event.title} delay={(index % 2) * 0.08}>
                <EventCard event={event} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
