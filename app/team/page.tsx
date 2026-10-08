import type { Metadata } from "next";

import { MemberCard, SharedPhotoCard } from "@/components/about/member-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  chapterSlug,
  coreTeam,
  founders,
  groupByChapter,
  internationalChapters,
  usChapters,
  type TeamMember,
} from "@/content/team";

export const metadata: Metadata = {
  alternates: { canonical: "/team" },
  title: "Team",
  description:
    "Meet the STEMSeeds team: our founders, core team, and the chapter leaders bringing hands-on STEM to kids across the United States and around the world.",
};

// Each chapter spans as many columns as it has members, so small chapters
// sit side by side instead of each taking a full row.
const chapterSpan = [
  { block: "", cards: "grid gap-6" },
  { block: "", cards: "grid gap-6" },
  { block: "sm:col-span-2", cards: "grid gap-6 sm:grid-cols-2" },
  {
    block: "sm:col-span-2 lg:col-span-3",
    cards: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
  },
  {
    block: "sm:col-span-2 lg:col-span-3 xl:col-span-4",
    cards: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  },
];

function ChapterGroups({
  members,
  fallback,
}: {
  members: TeamMember[];
  fallback: string;
}) {
  return (
    <div className="mt-6 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {groupByChapter(members, fallback).map((group) => {
        const sharesPhoto =
          group.members.length > 1 &&
          new Set(group.members.map((member) => member.image)).size === 1;
        const span =
          chapterSpan[sharesPhoto ? 4 : Math.min(group.members.length, 4)];

        return (
          <div
            key={group.chapter}
            id={chapterSlug(group.chapter)}
            className={`scroll-mt-28 ${span.block}`}
          >
            <Reveal>
              <h4 className="flex items-start gap-2.5 font-display text-lg leading-snug text-foreground">
                <span
                  aria-hidden="true"
                  className="mt-1 h-4 w-1 shrink-0 rounded-full bg-fresh"
                />
                {group.chapter}
              </h4>
            </Reveal>
            {sharesPhoto ? (
              <Reveal className="mt-4">
                <SharedPhotoCard members={group.members} />
              </Reveal>
            ) : (
              <div className={`mt-4 ${span.cards}`}>
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
  );
}

export default function TeamPage() {
  return (
    <main id="main-content">
      <section className="relative overflow-hidden px-6 pt-16 pb-6 sm:pt-24 sm:pb-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-[-10%] h-[380px] w-[380px] rounded-full bg-aqua/40 blur-3xl"
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="flex items-center justify-center gap-2.5 text-xs font-semibold tracking-[0.22em] text-primary uppercase">
              <span aria-hidden="true" className="h-px w-6 bg-fresh" />
              Our Team
              <span aria-hidden="true" className="h-px w-6 bg-fresh" />
            </p>
            <h1 className="mt-4 font-display text-4xl leading-[1.08] text-foreground sm:text-5xl md:text-6xl">
              The students behind STEMSeeds
            </h1>
            <p className="mt-7 text-base leading-relaxed text-foreground/80 sm:text-lg">
              From our founders in Frisco to chapters across the country and
              around the world, meet the students who design, pack, and deliver
              every STEMKit.
            </p>
          </Reveal>
        </div>
      </section>

      <section
        className="px-6 py-16 sm:py-20"
        aria-labelledby="founders-heading"
      >
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
              eyebrow="Chapters"
              title="Chapters (United States)"
            />
          </Reveal>
          <div className="mt-12 space-y-16">
            {usChapters.map((group) => (
              <div
                key={group.state}
                id={chapterSlug(group.state)}
                className="scroll-mt-28"
              >
                <Reveal>
                  <h3 className="flex items-center gap-3 text-sm font-bold tracking-[0.24em] text-primary uppercase">
                    {group.state}
                    <span
                      aria-hidden="true"
                      className="h-px flex-1 bg-border"
                    />
                  </h3>
                </Reveal>
                <ChapterGroups
                  members={group.members}
                  fallback={`${group.state} Chapter`}
                />
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
          <div className="mt-12 space-y-16">
            {internationalChapters.map((group) => (
              <div
                key={group.country}
                id={chapterSlug(group.country)}
                className="scroll-mt-28"
              >
                <Reveal>
                  <h3 className="flex items-center gap-3 text-sm font-bold tracking-[0.24em] text-primary uppercase">
                    {group.country}
                    <span
                      aria-hidden="true"
                      className="h-px flex-1 bg-ink/10"
                    />
                  </h3>
                </Reveal>
                <ChapterGroups
                  members={group.members}
                  fallback={`${group.country} Chapter`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
