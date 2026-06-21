import Image from "next/image";
import { Card } from "@/components/ui/card";
import type { Leader } from "@/lib/leaders-data";

export function LeaderCard({ leader }: { leader: Leader }) {
  return (
    <Card className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
      <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border border-border shadow-md sm:h-32 sm:w-32">
        <Image
          src={leader.photo}
          alt={leader.photoAlt}
          fill
          sizes="128px"
          className="object-cover"
        />
      </div>
      <div className="mt-4 sm:ml-6 sm:mt-0">
        <p className="font-heading text-lg font-semibold text-foreground">{leader.name}</p>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-gold">
          {leader.title}
        </p>
        {leader.quote ? (
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            &ldquo;{leader.quote}&rdquo;
          </p>
        ) : (
          <p className="mt-3 text-sm italic text-muted-foreground/70">
            A short message from {leader.name.split(" ")[0]} is coming soon.
          </p>
        )}
      </div>
    </Card>
  );
}
