import type { Metadata } from "next";

import { MemberCard, SharedPhotoCard } from "@/components/about/member-card";
import { PartnersSection } from "@/components/home/partners";
import { SponsorsSection } from "@/components/home/sponsors";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { site, stats } from "@/content/site";
import {
  aboutIntro,
  coreTeam,
  founders,
  internationalChapters,
  usChapters,
} from "@/content/team";

export const metadata: Metadata = {
  title: "About",
  description:
    "STEMSeeds is a student-founded philanthropic organization based in Frisco, Texas, led by Co-Founders Ritvik Avula and Rayhan Raja alongside a team of more than 36 students.",
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
            <div className="mt-9 flex justify-center">
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

      <section className="px-6 py-16 sm:py-20" aria-labelledby="founders-heading">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading eyebrow="Leadership" title="Founders" />
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:max-w-4xl">
            {founders.map((member, index) => (
              <Reveal key={member.name} delay={index * 0.08}>
                <MemberCard member={member} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mint/50 px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading eyebrow="Core Team" title="Outreach" />
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreTeam.map((member, index) => (
              <Reveal key={member.name} delay={index * 0.08}>
                <MemberCard member={member} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              eyebrow="Chapter Presidents"
              title="Chapter Presidents (United States)"
            />
          </Reveal>
          <div className="mt-12 space-y-14">
            {usChapters.map((group) => (
              <div key={group.state}>
                <Reveal>
                  <h3 className="flex items-center gap-3 text-sm font-bold tracking-[0.24em] text-primary uppercase">
                    {group.state}
                    <span
                      aria-hidden="true"
                      className="h-px flex-1 bg-border"
                    />
                  </h3>
                </Reveal>
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {group.members.map((member, index) => (
                    <Reveal key={member.name} delay={index * 0.05}>
                      <MemberCard member={member} />
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-aqua/35 px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              eyebrow="Around the World"
              title="International Chapters"
            />
          </Reveal>
          <div className="mt-12 space-y-14">
            {internationalChapters.map((group) => {
              const sharesPhoto =
                group.members.length > 1 &&
                new Set(group.members.map((member) => member.image)).size === 1;

              return (
                <div key={group.country}>
                  <Reveal>
                    <h3 className="flex items-center gap-3 text-sm font-bold tracking-[0.24em] text-primary uppercase">
                      {group.country}
                      <span
                        aria-hidden="true"
                        className="h-px flex-1 bg-ink/10"
                      />
                    </h3>
                  </Reveal>
                  {sharesPhoto ? (
                    <Reveal className="mt-6">
                      <SharedPhotoCard members={group.members} />
                    </Reveal>
                  ) : (
                    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                      {group.members.map((member, index) => (
                        <Reveal key={member.name} delay={index * 0.05}>
                          <MemberCard member={member} />
                        </Reveal>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
