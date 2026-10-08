import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Hospital, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { impactEvents } from "@/content/impact";

/** Events are listed newest first, so the first delivery is the latest. */
const latest = impactEvents.find(
  (event) => event.kind !== "recognition" && event.recipient,
);

export function LatestDeliverySection() {
  if (!latest) return null;
  const [photo] = latest.photos;

  return (
    <section className="px-6 py-16 sm:py-20" aria-label="Latest delivery">
      <Reveal className="mx-auto grid max-w-6xl items-center gap-8 overflow-hidden rounded-3xl border border-border bg-card shadow-[0_16px_40px_rgba(8,62,72,0.08)] lg:grid-cols-2 lg:gap-0">
        <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[360px]">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 1024px) 92vw, 580px"
            className="object-cover"
          />
        </div>
        <div className="px-6 pb-8 lg:px-10 lg:py-10">
          <p className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.22em] text-primary uppercase">
            <span aria-hidden="true" className="h-px w-6 bg-fresh" />
            Latest Delivery
          </p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs font-semibold tracking-[0.16em] text-primary uppercase">
            {latest.date ? (
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays aria-hidden="true" className="size-3.5" />
                {latest.date}
              </span>
            ) : null}
            {latest.location ? (
              <span className="inline-flex items-center gap-1.5">
                <MapPin aria-hidden="true" className="size-3.5" />
                {latest.location}
              </span>
            ) : null}
          </div>
          <h2 className="mt-3 font-display text-2xl leading-tight font-bold text-foreground sm:text-3xl">
            {latest.title}
          </h2>
          <p className="mt-3 inline-flex w-fit items-start gap-2 rounded-xl bg-secondary px-3 py-1.5 text-sm font-semibold text-secondary-foreground">
            <Hospital aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
            {latest.recipient}
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground/75">
            {latest.description}
          </p>
          <Button asChild variant="outline" className="mt-6">
            <Link href="/impact">
              See all of our impact
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
