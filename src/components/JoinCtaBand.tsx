import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { STATS } from "@/lib/placeholder-data";

export function JoinCtaBand() {
  return (
    <section className="bg-brand-green text-cream">
      <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
        <Reveal>
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            <span className="no-break">Iwhuruohna</span> FIRST.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/80">
            Add your voice to a movement of over{" "}
            {STATS.members.toLocaleString()}.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <Button asChild size="lg" variant="destructive">
              <Link href="/join">Join the Movement</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
