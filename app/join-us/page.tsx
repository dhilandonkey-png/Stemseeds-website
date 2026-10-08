import type { Metadata } from "next";
import {
  BadgeCheck,
  BookOpen,
  ClipboardList,
  HeartHandshake,
  Package,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Hero10 } from "@/components/ui/hero-10";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  chapterFaq,
  chapterNetwork,
  joinCta,
  joinFanImages,
  joinIntro,
  joinSteps,
} from "@/content/join";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Join Us",
  description:
    "Start a STEMSeeds chapter: join a network of passionate students bringing hands-on STEM learning to underprivileged communities and hospitalized children.",
};

const stepIcons = {
  apply: ClipboardList,
  approved: BadgeCheck,
  resources: BookOpen,
  build: Users,
  assemble: Package,
  impact: HeartHandshake,
} as const;

export default function JoinUsPage() {
  return (
    <main id="main-content">
      <Hero10
        headingAs="h1"
        title="Start a Chapter."
        titleLine2Prefix="Help grow"
        titleHighlight="the future of STEM"
        description={joinIntro.question}
        images={joinFanImages.map((image) => image.src)}
        imageAlts={joinFanImages.map((image) => image.alt)}
        primaryCTA={{
          ctaEnabled: true,
          text: "Apply Now",
          link: site.applyHref,
        }}
        secondaryCTA={{
          ctaEnabled: true,
          text: "See the STEMKit",
          link: "/stem-kit",
          variant: "outline",
        }}
      />

      <section className="bg-mint/50 px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              eyebrow="The Path"
              title="Six steps to your first delivery"
              align="center"
            />
          </Reveal>
          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {joinSteps.map((step, index) => {
              const Icon = stepIcons[step.icon as keyof typeof stepIcons];
              return (
                <Reveal key={step.number} delay={index * 0.07}>
                  <li className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-[0_8px_24px_rgba(8,62,72,0.06)]">
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-3xl font-bold tracking-tight text-primary/25">
                        {step.number}
                      </span>
                      <span className="flex size-10 items-center justify-center rounded-xl bg-fresh/15 text-fresh-deep">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-xl text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.text}
                    </p>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <SectionHeading
              eyebrow="The Network"
              title={chapterNetwork.title}
              lead={chapterNetwork.body}
              align="center"
            />
          </Reveal>
          <Reveal
            delay={0.1}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {chapterNetwork.countries.map((country) => (
              <span
                key={country}
                className="rounded-full border border-primary/20 bg-secondary px-4 py-1.5 text-sm font-semibold text-secondary-foreground"
              >
                {country}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      <section
        className="bg-mint/50 px-6 py-20 sm:py-24"
        aria-label="Chapter FAQ"
      >
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Questions about starting a chapter"
              align="center"
            />
          </Reveal>
          <div className="mt-10 space-y-3">
            {chapterFaq.map((item, index) => (
              <Reveal key={item.question} delay={index * 0.04}>
                <details className="group rounded-2xl border border-border bg-card px-5 py-4 shadow-[0_8px_24px_rgba(8,62,72,0.05)] open:bg-card">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg text-foreground [&::-webkit-details-marker]:hidden">
                    {item.question}
                    <span
                      aria-hidden="true"
                      className="text-2xl leading-none text-primary transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-base leading-relaxed text-foreground/75">
                    {item.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-aqua/35 px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="flex items-center justify-center gap-2.5 text-xs font-semibold tracking-[0.22em] text-primary uppercase">
              <span aria-hidden="true" className="h-px w-6 bg-fresh" />
              Chapter Enrollment
              <span aria-hidden="true" className="h-px w-6 bg-fresh" />
            </p>
            <h2 className="mt-4 font-display text-3xl text-foreground sm:text-4xl">
              {joinCta.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-foreground/80 sm:text-lg">
              {joinIntro.body}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a
                  href={site.applyHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply to Start a Chapter
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a
                  href={site.instagram.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ask us on Instagram
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
