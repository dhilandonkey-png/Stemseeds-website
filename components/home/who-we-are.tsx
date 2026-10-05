import Image from "next/image";

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
          <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/80 sm:text-[1.0625rem]">
            {whoWeAre.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
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
