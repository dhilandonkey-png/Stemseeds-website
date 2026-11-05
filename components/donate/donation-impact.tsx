"use client";

import Image from "next/image";
import { useState } from "react";
import { ExternalLink, Package } from "lucide-react";

import { Button } from "@/components/ui/button";
import { donationImpact } from "@/content/donate";
import { experiments } from "@/content/kits";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

const MAX_BOXES_SHOWN = 40;
const { costPerKit, presets, min, max } = donationImpact;

export function DonationImpact() {
  const [amount, setAmount] = useState(50);
  const kits = Math.floor(amount / costPerKit);
  const experimentsFunded = kits * experiments.length;
  const boxesShown = Math.min(kits, MAX_BOXES_SHOWN);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
      <div className="rounded-3xl border border-border bg-card p-6 shadow-[0_16px_40px_rgba(8,62,72,0.08)] sm:p-8">
        <p className="text-sm font-semibold text-foreground">
          Choose an amount
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {presets.map((preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => setAmount(preset)}
              aria-pressed={amount === preset}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-semibold tabular-nums transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                amount === preset
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-primary/20 text-foreground hover:border-primary/40 hover:bg-primary/5",
              )}
            >
              ${preset}
            </button>
          ))}
        </div>

        <label className="mt-6 block">
          <span className="sr-only">Donation amount</span>
          <input
            type="range"
            min={min}
            max={max}
            step={costPerKit}
            value={amount}
            onChange={(event) => setAmount(Number(event.target.value))}
            className="w-full accent-[var(--primary)]"
          />
        </label>
        <div className="mt-1 flex justify-between text-xs text-muted-foreground tabular-nums">
          <span>${min}</span>
          <span>${max}</span>
        </div>

        <div
          className="mt-8 rounded-2xl bg-mint/70 p-6 text-center"
          aria-live="polite"
        >
          <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
            A ${amount} gift funds
          </p>
          <p className="mt-2 font-display text-5xl font-bold text-primary tabular-nums sm:text-6xl">
            {kits}{" "}
            <span className="text-fresh">STEMKit{kits === 1 ? "" : "s"}</span>
          </p>
          <p className="mt-3 text-base text-foreground/80">
            That&apos;s{" "}
            <strong className="text-foreground tabular-nums">
              {experimentsFunded} hands-on experiments
            </strong>{" "}
            for{" "}
            <strong className="text-foreground tabular-nums">
              {kits} {kits === 1 ? "child" : "children"}
            </strong>{" "}
            in hospitals and underserved communities.
          </p>

          <div
            aria-hidden="true"
            className="mx-auto mt-6 flex max-w-md flex-wrap justify-center gap-1.5"
          >
            {Array.from({ length: boxesShown }, (_, index) => (
              <Package key={index} className="size-5 text-primary" />
            ))}
            {kits > MAX_BOXES_SHOWN ? (
              <span className="ml-1 self-center text-sm font-semibold text-primary">
                +{kits - MAX_BOXES_SHOWN}
              </span>
            ) : null}
          </div>
        </div>

        <Button asChild size="lg" className="mt-6 w-full">
          <a href={site.donateHref} target="_blank" rel="noopener noreferrer">
            Donate ${amount} on GoFundMe
            <ExternalLink className="size-4" aria-hidden="true" />
          </a>
        </Button>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Enter your amount on GoFundMe. Every ${costPerKit} sends one more kit.
        </p>
      </div>

      <div>
        <h3 className="font-display text-2xl text-foreground">
          What every ${costPerKit} kit includes
        </h3>
        <p className="mt-2 text-base leading-relaxed text-muted-foreground">
          {donationImpact.kitSummary}
        </p>
        <ul className="mt-6 space-y-4">
          {experiments.map((experiment) => (
            <li
              key={experiment.name}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-3 shadow-[0_8px_24px_rgba(8,62,72,0.05)]"
            >
              <div className="relative size-20 shrink-0 overflow-hidden rounded-xl bg-mint">
                <Image
                  src={experiment.image.src}
                  alt={experiment.image.alt}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  {experiment.name}
                </p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {experiment.tagline}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <ul className="mt-6 space-y-2 text-sm text-foreground/80">
          {donationImpact.alsoIncluded.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden="true" className="text-fresh">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
