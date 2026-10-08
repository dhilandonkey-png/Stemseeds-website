import type { Metadata } from "next";

import { KitRequestForm } from "@/components/request-kits/kit-request-form";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { requestKits, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Request Kits",
  description:
    "Hospitals, schools, and community organizations can request free STEMSeeds STEMKits for the children they serve.",
};

export default function RequestKitsPage() {
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
              {requestKits.eyebrow}
              <span aria-hidden="true" className="h-px w-6 bg-fresh" />
            </p>
            <h1 className="mt-4 font-display text-4xl leading-[1.08] text-foreground sm:text-5xl md:text-6xl">
              {requestKits.title}
            </h1>
            <p className="mt-7 text-base leading-relaxed text-foreground/80 sm:text-lg">
              {requestKits.body}
            </p>
            <div className="mt-9 flex justify-center">
              <Button asChild size="lg">
                <a href="#request-form">Request STEMKits</a>
              </Button>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Prefer email? Write to us at{" "}
              <a
                href={`mailto:${site.email}`}
                className="font-semibold text-primary underline-offset-4 hover:underline"
              >
                {site.email}
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-mint/50 px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <ol className="grid gap-6 sm:grid-cols-3">
            {requestKits.steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.08}>
                <li className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-[0_8px_24px_rgba(8,62,72,0.06)]">
                  <span className="font-sans text-3xl font-bold tracking-tight text-primary/25">
                    0{index + 1}
                  </span>
                  <h2 className="mt-3 font-display text-xl text-foreground">
                    {step.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section id="request-form" className="scroll-mt-24 px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-center font-display text-3xl text-foreground sm:text-4xl">
              Request form
            </h2>
            <p className="mt-4 text-center text-base text-muted-foreground">
              {requestKits.note}
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <KitRequestForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
