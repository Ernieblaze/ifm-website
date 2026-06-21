import type { Metadata } from "next";
import { CalendarDays, MapPin } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Card } from "@/components/ui/card";
import { EVENT_ITEMS } from "@/lib/placeholder-data";

export const metadata: Metadata = {
  title: "Events",
};

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function EventsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <span className="inline-flex items-center rounded-full bg-brand-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-green">
          Events
        </span>
        <h1 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Upcoming Events
        </h1>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
          Gatherings, town halls, and forums for the Iwhuruohna community at
          home and abroad.
        </p>
      </Reveal>

      <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {EVENT_ITEMS.map((item) => (
          <StaggerItem key={item.slug}>
            <Card className="h-full">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                <CalendarDays className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="mt-4 font-heading text-lg font-semibold text-foreground">
                {item.title}
              </h2>
              <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                {formatDate(item.date)}
              </p>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                {item.location}
              </p>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
