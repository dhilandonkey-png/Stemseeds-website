import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  dark = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "flex items-center gap-2.5 text-xs font-semibold tracking-[0.22em] uppercase",
            align === "center" && "justify-center",
            dark ? "text-aqua" : "text-primary",
          )}
        >
          <span aria-hidden="true" className="h-px w-6 bg-fresh" />
          {eyebrow}
          {align === "center" ? (
            <span aria-hidden="true" className="h-px w-6 bg-fresh" />
          ) : null}
        </p>
      ) : null}
      <h2
        className={cn(
          "mt-3 font-display text-3xl leading-tight sm:text-4xl md:text-[2.75rem]",
          dark ? "text-mint" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            dark ? "text-aqua/90" : "text-muted-foreground",
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
