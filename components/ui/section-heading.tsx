import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  lead,
  align = "left",
  dark = false,
  className,
}: {
  /** Kept so existing callers compile; no longer shown. */
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
      <h2
        className={cn(
          "font-display text-3xl leading-tight sm:text-4xl md:text-[2.75rem]",
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
