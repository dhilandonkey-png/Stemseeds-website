import Image from "next/image";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { sponsorsSection } from "@/content/home";

export function SponsorsSection() {
  return (
    <section className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionHeading
            eyebrow={sponsorsSection.eyebrow}
            title={sponsorsSection.title}
            lead={sponsorsSection.lead}
            align="center"
          />
        </Reveal>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          {sponsorsSection.logos.map((logo, index) => (
            <Reveal key={logo.src} delay={index * 0.1}>
              <div className="flex h-32 w-64 items-center justify-center rounded-2xl border border-border bg-white px-8 shadow-[0_8px_24px_rgba(8,62,72,0.06)]">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={400}
                  height={200}
                  sizes="256px"
                  className="max-h-20 w-auto object-contain"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
