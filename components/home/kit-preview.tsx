import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { experiments } from "@/content/kits";
import { cn } from "@/lib/utils";

const difficultyStyles: Record<string, string> = {
  Easy: "bg-fresh/15 text-fresh-deep",
  Medium: "bg-sea/20 text-primary",
  Hard: "bg-primary text-primary-foreground",
};

export function KitPreviewSection() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="The STEMKit"
            title="Three experiments in every box"
            lead="Each hand-packaged kit holds three hospital-safe engineering projects, with educational flyers that explain the science behind the fun."
          />
          <Button asChild variant="outline" className="shrink-0">
            <Link href="/stem-kit">
              Explore the kit
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experiments.map((experiment, index) => (
            <Reveal key={experiment.name} delay={index * 0.1}>
              <SpotlightCard
                as="article"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_8px_24px_rgba(8,62,72,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(8,62,72,0.14)]"
              >
                <div className="relative aspect-[4/3] bg-mint/70 p-5 sm:p-6">
                  <div className="relative h-full w-full">
                    <Image
                      src={experiment.image.src}
                      alt={experiment.image.alt}
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 360px"
                      className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-xl text-foreground">
                      {experiment.name}
                    </h3>
                    <span
                      className={cn(
                        "rounded-full px-3 py-1 text-xs font-semibold",
                        difficultyStyles[experiment.difficulty],
                      )}
                    >
                      {experiment.difficulty}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {experiment.tagline}
                  </p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
