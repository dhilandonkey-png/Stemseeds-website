"use client";

import Link from "next/link";
import Balancer from "react-wrap-balancer";

import { Button, buttonVariants } from "@/components/ui/button";
import { PhotoMarquee } from "@/components/ui/photo-marquee";
import { cn } from "@/lib/utils";

type Hero10CTA = {
  ctaEnabled?: boolean;
  text: string;
  link?: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg";
};

export type Hero10Props = {
  title: string;
  titleLine2Prefix?: string;
  titleHighlight?: string;
  description: string;
  socialProof?: string;
  images: string[];
  imageAlts?: string[];
  primaryCTA?: Hero10CTA;
  secondaryCTA?: Hero10CTA;
  headingAs?: "h1" | "h2";
  className?: string;
};

function HeroCta({ cta, className }: { cta?: Hero10CTA; className?: string }) {
  if (!cta?.ctaEnabled || !cta.text) return null;

  const classes = cn(
    buttonVariants({
      variant: cta.variant ?? "default",
      size: cta.size ?? "lg",
    }),
    className,
  );

  if (cta.link) {
    const external = cta.link.startsWith("http");
    return (
      <Link
        href={cta.link}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {cta.text}
      </Link>
    );
  }

  return (
    <Button variant={cta.variant ?? "default"} size={cta.size ?? "lg"}>
      {cta.text}
    </Button>
  );
}

export function Hero10({
  title,
  titleLine2Prefix,
  titleHighlight,
  description,
  socialProof,
  images,
  imageAlts = [],
  primaryCTA,
  secondaryCTA,
  headingAs = "h2",
  className,
}: Hero10Props) {
  const HeadingTag = headingAs;
  const marqueePhotos = images.map((src, index) => ({
    src,
    alt: imageAlts[index] ?? "",
  }));

  return (
    <section
      className={cn(
        "relative overflow-hidden px-6 py-20 text-center md:py-24",
        className,
      )}
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center">
        <HeadingTag className="font-display text-4xl leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
          <Balancer>
            {title}
            {(titleLine2Prefix || titleHighlight) && (
              <>
                <br />
                {titleLine2Prefix ? `${titleLine2Prefix} ` : null}
                {titleHighlight ? (
                  <em className="text-primary italic">{titleHighlight}</em>
                ) : null}
              </>
            )}
          </Balancer>
        </HeadingTag>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          <Balancer>{description}</Balancer>
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <HeroCta cta={primaryCTA} />
          <HeroCta cta={secondaryCTA} />
        </div>
        {socialProof ? (
          <p className="mt-5 text-sm text-muted-foreground">{socialProof}</p>
        ) : null}
      </div>

      {marqueePhotos.length > 0 ? (
        <PhotoMarquee photos={marqueePhotos} speed={46} className="-mx-6 mt-16" />
      ) : null}
    </section>
  );
}
