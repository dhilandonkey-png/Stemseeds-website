"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { InstagramIcon } from "@/components/ui/instagram-icon";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/content/site";

const fieldClasses =
  "w-full rounded-xl border border-input bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="px-6 py-20 sm:py-28">
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Contact Us"
            title="Say hello"
            lead="Questions about kits, chapters, or partnerships? Send us a message or reach out on Instagram."
          />
          <a
            href={site.instagram.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-mint/60 py-2.5 pr-5 pl-3 text-sm font-medium text-primary transition-colors hover:border-primary/30 hover:bg-mint"
          >
            <span className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <InstagramIcon />
            </span>
            @{site.instagram.handle}
          </a>
        </Reveal>

        <Reveal delay={0.12}>
          <form
            className="rounded-3xl border border-border bg-card p-6 shadow-[0_12px_32px_rgba(8,62,72,0.08)] sm:p-8"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-first-name"
                  className="mb-1.5 block text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase"
                >
                  First Name
                </label>
                <input
                  id="contact-first-name"
                  name="firstName"
                  autoComplete="given-name"
                  required
                  className={fieldClasses}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-last-name"
                  className="mb-1.5 block text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase"
                >
                  Last Name
                </label>
                <input
                  id="contact-last-name"
                  name="lastName"
                  autoComplete="family-name"
                  required
                  className={fieldClasses}
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="contact-email"
                className="mb-1.5 block text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase"
              >
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={fieldClasses}
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="contact-message"
                className="mb-1.5 block text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase"
              >
                Write a Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                className={fieldClasses}
              />
            </div>
            <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
              Submit
            </Button>
            <p aria-live="polite" className="mt-4 text-sm text-muted-foreground">
              {submitted
                ? "This form isn't connected to an inbox yet. For now, please send your message to @stemseeds.initiative on Instagram and we'll get back to you."
                : null}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
