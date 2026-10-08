import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

import { InstagramIcon } from "@/components/ui/instagram-icon";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/content/site";

const cardClass =
  "group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-[0_8px_24px_rgba(8,62,72,0.06)] transition-colors hover:border-primary/30 hover:bg-mint/40 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-20 sm:py-28">
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Contact Us"
            title="Say hello"
            lead="Questions about kits, chapters, donations, or partnerships? Email us or message us on Instagram and our team will get back to you."
          />
        </Reveal>

        <Reveal delay={0.12} className="flex flex-col gap-4">
          <a href={`mailto:${site.email}`} className={cardClass}>
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Mail className="size-5" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                Email
              </span>
              <span className="block truncate text-base font-semibold text-foreground">
                {site.email}
              </span>
            </span>
          </a>
          <a
            href={site.instagram.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cardClass}
          >
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <InstagramIcon />
            </span>
            <span>
              <span className="block text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                Instagram
              </span>
              <span className="block text-base font-semibold text-foreground">
                @{site.instagram.handle}
              </span>
            </span>
          </a>
          <Link href="/request-kits" className={cardClass}>
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-fresh/20 text-fresh-deep">
              <ArrowRight className="size-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                Hospitals, schools &amp; organizations
              </span>
              <span className="block text-base font-semibold text-foreground">
                Request STEMKits for your kids
              </span>
            </span>
          </Link>
          <p className="text-xs leading-relaxed text-muted-foreground">
            We only use the information you send us to respond to your message.
            We never sell or share it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
