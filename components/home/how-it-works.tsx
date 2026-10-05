import { Package, PenTool, Sparkles, Truck } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { howItWorks } from "@/content/home";

const stepIcons = {
  design: PenTool,
  build: Package,
  deliver: Truck,
  inspire: Sparkles,
} as const;

export function HowItWorksSection() {
  return (
    <section className="relative bg-mint/50 px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow={howItWorks.eyebrow}
            title={howItWorks.title}
            align="center"
          />
        </Reveal>

        <ol className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div
            aria-hidden="true"
            className="absolute top-7 right-[12%] left-[12%] hidden border-t-2 border-dashed border-sea/40 lg:block"
          />
          {howItWorks.steps.map((step, index) => {
            const Icon = stepIcons[step.icon as keyof typeof stepIcons];
            return (
              <Reveal
                key={step.number}
                delay={index * 0.1}
                className="relative"
              >
                <li className="flex h-full flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="relative z-10 flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[0_10px_24px_rgba(8,62,72,0.22)]">
                    <Icon className="size-6" aria-hidden="true" />
                    <span className="absolute -top-2 -right-2 flex size-7 items-center justify-center rounded-full bg-fresh text-[0.7rem] font-bold text-fresh-deep">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="mt-5 font-sans text-sm font-bold tracking-[0.18em] text-primary uppercase">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
