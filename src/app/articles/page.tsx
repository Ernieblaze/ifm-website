import type { Metadata } from "next";
import { BookOpenText } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Card } from "@/components/ui/card";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { ARTICLE_ITEMS } from "@/lib/placeholder-data";

export const metadata: Metadata = {
  title: "Articles",
};

export default function ArticlesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <span className="inline-flex items-center rounded-full bg-brand-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-green">
          Articles
        </span>
        <h1 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          From the Editorial Desk
        </h1>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
          Longer-form pieces on Iwhuruohna history, culture, and the
          movement&apos;s philosophy.
        </p>
      </Reveal>

      <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ARTICLE_ITEMS.map((item) => (
          <StaggerItem key={item.slug}>
            <Card className="h-full">
              <PlaceholderImage label="Article" icon={BookOpenText} className="mb-4" />
              <h2 className="font-heading text-lg font-semibold text-foreground">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.excerpt}
              </p>
              <p className="mt-4 text-xs text-muted-foreground">
                {item.author}, {item.readTime}
              </p>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
