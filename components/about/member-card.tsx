import Image from "next/image";

import type { TeamMember } from "@/content/team";
import { cn } from "@/lib/utils";

export function MemberCard({
  member,
  className,
}: {
  member: TeamMember;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_8px_24px_rgba(8,62,72,0.06)]",
        className,
      )}
    >
      <div className="relative aspect-[4/4.4] overflow-hidden bg-mint">
        <Image
          src={member.image}
          alt={member.imageAlt}
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 300px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h4 className="font-display text-lg text-foreground">{member.name}</h4>
        {member.role ? (
          <p className="mt-1.5 inline-flex w-fit rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">
            {member.role}
          </p>
        ) : null}
        {member.school ? (
          <p className="mt-2 text-xs font-medium text-muted-foreground">
            {member.school}
          </p>
        ) : null}
        <p className="mt-3 text-sm leading-relaxed text-foreground/75">
          {member.bio}
        </p>
      </div>
    </article>
  );
}

/** For members who share a single photo (e.g. UTS co-presidents). */
export function SharedPhotoCard({
  members,
  className,
}: {
  members: TeamMember[];
  className?: string;
}) {
  const [first] = members;

  return (
    <article
      className={cn(
        "grid overflow-hidden rounded-2xl border border-border bg-card shadow-[0_8px_24px_rgba(8,62,72,0.06)] md:grid-cols-[0.8fr_1.2fr]",
        className,
      )}
    >
      <div className="relative min-h-[280px] overflow-hidden bg-mint">
        <Image
          src={first.image}
          alt={first.imageAlt}
          fill
          sizes="(max-width: 768px) 90vw, 380px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col divide-y divide-border">
        {members.map((member) => (
          <div key={member.name} className="flex flex-col p-5">
            <h4 className="font-display text-lg text-foreground">
              {member.name}
            </h4>
            {member.role ? (
              <p className="mt-1.5 inline-flex w-fit rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">
                {member.role}
              </p>
            ) : null}
            {member.school ? (
              <p className="mt-2 text-xs font-medium text-muted-foreground">
                {member.school}
              </p>
            ) : null}
            <p className="mt-3 text-sm leading-relaxed text-foreground/75">
              {member.bio}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}
