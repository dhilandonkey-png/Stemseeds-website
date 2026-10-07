import type { Metadata } from "next";
import Link from "next/link";

import { PartnersSection } from "@/components/home/partners";
import { SponsorsSection } from "@/components/home/sponsors";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { site, stats } from "@/content/site";
import { aboutIntro } from "@/content/team";

export const metadata: Metadata = {
  title: "About",
  description:
    "STEMSeeds is a student-founded 501(c)(3) nonprofit organization based in Frisco, Texas, led by Co-Founders Ritvik Avula and Rayhan Raja alongside a team of more than 50 students.",
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="relative overflow-hidden px-6 pt-16 pb-14 sm:pt-24 sm:pb-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-[-10%] h-[380px] w-[380px] rounded-full bg-aqua/40 blur-3xl"
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="flex items-center justify-center gap-2.5 text-xs font-semibold tracking-[0.22em] text-primary uppercase">
              <span aria-hidden="true" className="h-px w-6 bg-fresh" />
              {aboutIntro.eyebrow}
              <span aria-hidden="true" className="h-px w-6 bg-fresh" />
            </p>
            <h1 className="mt-4 font-display text-4xl leading-[1.08] text-foreground sm:text-5xl md:text-6xl">
              {aboutIntro.title}
            </h1>
            <p className="mt-7 text-base leading-relaxed text-foreground/80 sm:text-lg">
              {aboutIntro.body}
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" variant="outline">
                <Link href="/team">Meet Our Team</Link>
              </Button>
              <Button asChild size="lg">
                <a
                  href={site.donateHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Donate Now
                </a>
              </Button>
            </div>
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

      <PartnersSection />
      <SponsorsSection />

    </main>
  );
}
