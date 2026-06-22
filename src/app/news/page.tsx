import type { Metadata } from "next";
import { Newspaper, BookOpenText, CalendarDays, MapPin } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Card } from "@/components/ui/card";
import { SampleBadge } from "@/components/SampleBadge";
import { JoinCtaBand } from "@/components/JoinCtaBand";
import { news, articles, events } from "@/data/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "News and Events | Iwhuruohna FIRST Movement",
  description:
    "Movement updates, articles, and events from the Iwhuruohna FIRST Movement.",
};

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function NewsPage() {
  const upcomingEvents = events.filter((item) => item.status === "upcoming");
  const pastEvents = events.filter((item) => item.status === "past");

  return (
    <>
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <Reveal>
          <span className="inline-flex items-center rounded-full bg-brand-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-green">
            News and Events
          </span>
          <h1 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            News and Events
          </h1>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Movement announcements, articles, and events from across the
            Iwhuruohna community, all in one place.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <Reveal>
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Latest News
          </h2>
        </Reveal>
        <Stagger className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <StaggerItem key={item.id}>
              <Card className={cn("h-full", item.isSample && "border-dashed opacity-80")}>
                <div className="flex items-center justify-between gap-2">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                    <Newspaper className="h-5 w-5" aria-hidden="true" />
                  </span>
                  {item.isSample && <SampleBadge />}
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.excerpt}
                </p>
                <p className="mt-4 text-xs text-muted-foreground">{formatDate(item.date)}</p>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="bg-surface-muted">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Reveal>
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Articles
            </h2>
          </Reveal>
          <Stagger className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((item) => (
              <StaggerItem key={item.id}>
                <Card className={cn("h-full", item.isSample && "border-dashed opacity-80")}>
                  <div className="flex items-center justify-between gap-2">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                      <BookOpenText className="h-5 w-5" aria-hidden="true" />
                    </span>
                    {item.isSample && <SampleBadge />}
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.excerpt}
                  </p>
                  <p className="mt-4 text-xs text-muted-foreground">
                    {item.author ? `${item.author}, ` : ""}
                    {formatDate(item.date)}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Upcoming Events
          </h2>
        </Reveal>
        <Stagger className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {upcomingEvents.map((item) => (
            <StaggerItem key={item.id}>
              <Card className={cn("h-full", item.isSample && "border-dashed opacity-80")}>
                <div className="flex items-center justify-between gap-2">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                    <CalendarDays className="h-5 w-5" aria-hidden="true" />
                  </span>
                  {item.isSample && <SampleBadge />}
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <p className="mt-4 flex items-center gap-1.5 text-sm text-muted-foreground">
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

        {pastEvents.length > 0 && (
          <>
            <Reveal>
              <h2 className="mt-16 font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Past Events
              </h2>
            </Reveal>
            <Stagger className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pastEvents.map((item) => (
                <StaggerItem key={item.id}>
                  <Card
                    className={cn(
                      "h-full opacity-70",
                      item.isSample && "border-dashed opacity-60",
                    )}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-muted-foreground/10 text-muted-foreground">
                        <CalendarDays className="h-5 w-5" aria-hidden="true" />
                      </span>
                      {item.isSample && <SampleBadge />}
                    </div>
                    <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                    <p className="mt-4 flex items-center gap-1.5 text-sm text-muted-foreground">
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
          </>
        )}
      </section>

      <JoinCtaBand />
    </>
  );
}
