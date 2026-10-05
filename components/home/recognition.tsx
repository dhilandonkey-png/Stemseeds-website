import Image from "next/image";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { recognitionSection } from "@/content/home";

export function RecognitionSection() {
  const [friscoPhoto, mansfieldPhoto] = recognitionSection.images;

  return (
    <section className="bg-aqua/35 px-6 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative">
            <div className="w-[78%] rotate-[-2.5deg] overflow-hidden rounded-xl shadow-[0_20px_48px_rgba(8,62,72,0.2)] ring-1 ring-ink/10">
              <Image
                src={friscoPhoto.src}
                alt={friscoPhoto.alt}
                width={720}
                height={540}
                sizes="(max-width: 1024px) 70vw, 420px"
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute right-0 -bottom-10 w-[62%] rotate-[3deg] overflow-hidden rounded-xl shadow-[0_20px_48px_rgba(8,62,72,0.22)] ring-1 ring-ink/10">
              <Image
                src={mansfieldPhoto.src}
                alt={mansfieldPhoto.alt}
                width={640}
                height={480}
                sizes="(max-width: 1024px) 56vw, 340px"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
          <div className="h-10 lg:h-0" aria-hidden="true" />
        </Reveal>

        <Reveal delay={0.12}>
          <SectionHeading
            eyebrow={recognitionSection.eyebrow}
            title={recognitionSection.title}
          />
          <p className="mt-6 text-base leading-relaxed text-foreground/80 sm:text-[1.0625rem]">
            {recognitionSection.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
