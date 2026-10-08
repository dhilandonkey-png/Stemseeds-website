import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { whoWeAre } from "@/content/home";

export function WhoWeAreSection() {
  const [collageMain, collageSmall, collageTall] = whoWeAre.images;

  return (
    <section className="relative overflow-hidden bg-background px-6 py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-32 h-[420px] w-[420px] rounded-full bg-aqua/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 h-[360px] w-[360px] rounded-full bg-fresh/10 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <Reveal>
          <SectionHeading eyebrow={whoWeAre.eyebrow} title={whoWeAre.title} />
          <p className="mt-6 text-base leading-relaxed text-foreground/80 sm:text-lg">
            {whoWeAre.intro}
          </p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            {whoWeAre.facts.map((fact) => (
              <div
                key={fact.label}
                className="flex flex-col-reverse rounded-2xl border border-border bg-card p-4 shadow-[0_8px_24px_rgba(8,62,72,0.05)]"
              >
                <dt className="mt-1 text-sm leading-snug text-muted-foreground">
                  {fact.label}
                </dt>
                <dd className="font-sans text-3xl font-bold tracking-tight text-primary">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
          <Link
            href={whoWeAre.link.href}
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            {whoWeAre.link.label}
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </Reveal>

        <Reveal delay={0.15} className="relative">
          <div className="relative mx-auto grid max-w-md grid-cols-2 gap-4 lg:max-w-none">
            <div className="col-span-2 overflow-hidden rounded-2xl shadow-[0_18px_44px_rgba(8,62,72,0.14)] ring-1 ring-ink/10">
              <Image
                src={collageMain.src}
                alt={collageMain.alt}
                width={collageMain.width}
                height={collageMain.height}
                sizes="(max-width: 1024px) 90vw, 540px"
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_14px_36px_rgba(8,62,72,0.12)] ring-1 ring-ink/10">
              <Image
                src={collageSmall.src}
                alt={collageSmall.alt}
                fill
                sizes="(max-width: 1024px) 45vw, 260px"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_14px_36px_rgba(8,62,72,0.12)] ring-1 ring-ink/10">
              <Image
                src={collageTall.src}
                alt={collageTall.alt}
                fill
                sizes="(max-width: 1024px) 45vw, 260px"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
