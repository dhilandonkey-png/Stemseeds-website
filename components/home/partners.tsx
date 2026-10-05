import { LogoMarquee } from "@/components/ui/logo-marquee";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { partnersSection } from "@/content/home";

export function PartnersSection() {
  return (
    <section className="border-y border-border bg-background px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow={partnersSection.eyebrow}
            title={partnersSection.title}
            lead={partnersSection.lead}
            align="center"
            className="max-w-3xl"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <LogoMarquee logos={[...partnersSection.logos]} className="mt-14" />
        </Reveal>
      </div>
    </section>
  );
}
