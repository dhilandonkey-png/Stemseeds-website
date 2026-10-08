import type { Metadata } from "next";
import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { requestKits, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Request Kits",
  description:
    "Hospitals, schools, and community organizations can request free STEMSeeds STEMKits for the children they serve.",
};

const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent(
  requestKits.emailSubject,
)}&body=${encodeURIComponent(requestKits.emailBody)}`;

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
                <a href={mailtoHref}>
                  <Mail aria-hidden="true" />
                  Email a Kit Request
                </a>
              </Button>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Or write to us directly at{" "}
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

      <section className="px-6 py-16 sm:py-20">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="font-display text-2xl text-foreground sm:text-3xl">
            What to include in your request
          </h2>
          <ul className="mt-6 space-y-3 text-base text-foreground/80">
            {requestKits.include.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden="true" className="text-fresh">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 rounded-2xl bg-aqua/35 p-5 text-sm leading-relaxed text-foreground/80">
            {requestKits.note}
          </p>
        </Reveal>
      </section>
    </main>
  );
}
