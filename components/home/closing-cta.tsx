import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { closingCta } from "@/content/home";

export function ClosingCtaSection() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(17,120,134,0.35),transparent_50%),radial-gradient(circle_at_85%_80%,rgba(67,173,110,0.18),transparent_45%)]"
      />
      <Reveal className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="font-display text-3xl text-mint sm:text-4xl md:text-5xl">
          {closingCta.title}
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-aqua/90 sm:text-lg">
          {closingCta.body}
        </p>
        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-fresh text-fresh-deep hover:bg-fresh/85"
          >
            <Link href={closingCta.primary.href}>{closingCta.primary.label}</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-mint/40 text-mint hover:border-mint/70 hover:bg-mint/10 hover:text-mint"
          >
            <Link href={closingCta.secondary.href}>
              {closingCta.secondary.label}
            </Link>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
