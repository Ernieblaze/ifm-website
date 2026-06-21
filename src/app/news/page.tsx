import type { Metadata } from "next";
import { Newspaper } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Card } from "@/components/ui/card";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { NEWS_ITEMS } from "@/lib/placeholder-data";

export const metadata: Metadata = {
  title: "News",
};

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function NewsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <span className="inline-flex items-center rounded-full bg-brand-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-green">
          News
        </span>
        <h1 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          News &amp; Updates
        </h1>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
          Movement announcements, culture notes, and updates from across the
          Iwhuruohna community.
        </p>
      </Reveal>

      <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {NEWS_ITEMS.map((item) => (
          <StaggerItem key={item.slug}>
            <Card className="h-full">
              <PlaceholderImage label={item.category} icon={Newspaper} className="mb-4" />
              <span className="text-xs font-semibold uppercase tracking-wide text-gold">
                {item.category}
              </span>
              <h2 className="mt-2 font-heading text-lg font-semibold text-foreground">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.excerpt}
              </p>
              <p className="mt-4 text-xs text-muted-foreground">{formatDate(item.date)}</p>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
