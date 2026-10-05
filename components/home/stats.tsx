import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Reveal } from "@/components/ui/reveal";
import { stats } from "@/content/site";

export function StatsSection() {
  return (
    <section
      aria-label="Our impact in numbers"
      className="relative px-6 py-16 sm:py-20"
    >
      <Reveal className="mx-auto max-w-5xl">
        <dl className="grid grid-cols-1 overflow-hidden rounded-3xl border border-border bg-mint/60 sm:grid-cols-3 sm:divide-x sm:divide-border">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 px-8 py-10 text-center sm:py-12"
            >
              <dd className="font-sans text-5xl font-bold tracking-tight text-primary tabular-nums sm:text-6xl">
                <AnimatedCounter value={stat.value} />
                {stat.suffix ? (
                  <span className="text-fresh">{stat.suffix}</span>
                ) : null}
              </dd>
              <dt className="text-xs font-semibold tracking-[0.22em] text-muted-foreground uppercase">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
