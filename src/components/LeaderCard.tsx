import Image from "next/image";
import { Card } from "@/components/ui/card";
import type { Leader } from "@/lib/leaders-data";

export function LeaderCard({ leader }: { leader: Leader }) {
  return (
    <Card className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
      <div className="relative h-32 w-32 shrink-0 sm:h-36 sm:w-36">
        <div
          aria-hidden="true"
          className="absolute inset-0 scale-125 rounded-full bg-gradient-to-br from-brand-green/50 via-brand-green/20 to-transparent blur-xl"
        />
        <Image
          src={leader.photo}
          alt={leader.photoAlt}
          fill
          sizes="144px"
          className="object-contain drop-shadow-[0_12px_20px_rgba(10,107,55,0.4)] [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]"
        />
      </div>
      <div className="mt-4 sm:ml-6 sm:mt-0">
        <p className="font-heading text-lg font-bold text-foreground">{leader.name}</p>
        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gold">
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
