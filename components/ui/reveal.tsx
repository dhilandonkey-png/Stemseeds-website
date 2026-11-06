import type { ReactNode } from "react";

/** Plain wrapper. Content shows immediately instead of fading in on scroll. */
export function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return <div className={className}>{children}</div>;
}
