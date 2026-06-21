import Link from "next/link";
import {
  Shield,
  Users,
  Megaphone,
  HeartHandshake,
  Newspaper,
  BookOpenText,
  CalendarDays,
  MapPin,
  ImageIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Counter } from "@/components/motion/Counter";
import { PatternDivider } from "@/components/PatternDivider";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { HeroMark } from "@/components/HeroMark";
import { SectionHeading } from "@/components/SectionHeading";
import { NEWS_ITEMS, ARTICLE_ITEMS, EVENT_ITEMS, STATS } from "@/lib/placeholder-data";

const VALUES = [
  {
    icon: Shield,
    title: "Preserve",
    body: "Our history, language, and traditions — documented and protected.",
  },
  {
    icon: Users,
    title: "Unite",
    body: "One digital home for Iwhuruohna people everywhere.",
  },
  {
    icon: Megaphone,
    title: "Inform",
    body: "Movement updates and events, the moment they happen.",
  },
  {
    icon: HeartHandshake,
    title: "Empower",
    body: "Real opportunity and industry built at home.",
  },
] as const;

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <HeroMark className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] sm:-right-16 sm:top-[-8rem]" />

        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
          <Reveal>
            <span className="inline-flex items-center rounded-full bg-gold/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-gold">
              Iwhuruohna First Movement
            </span>
            <h1 className="mt-6 max-w-2xl font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
              Uniting, preserving, and projecting{" "}
              <span className="no-break">Iwhuruohna</span> identity — for
              generations to come.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              A digital home for the Iwhuruohna (Ikwerre) people of Rivers
              State, Nigeria — wherever they are in the world.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" variant="primary">
                <Link href="/about">Learn About the Movement</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/history">Explore Our History</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 1. Mission / information strip */}
      <section className="border-y border-border bg-surface-muted">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <Stagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => (
              <StaggerItem key={value.title}>
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                    <value.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="mt-1 text-sm leading-snug text-muted-foreground">
                      {value.body}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* 2. About teaser */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-wide text-gold">
            Who We Are
          </span>
          <h2 className="mt-2 font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            A movement, not a moment
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            IFM is a socio-cultural and nationalist movement for the
            Iwhuruohna people — built to unite our community, preserve our
            history and language, inform members of movement updates,
            amplify the voices of our people, and project our identity to
            the world.
          </p>
          <Link
            href="/about"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green transition-colors hover:text-accent-green"
          >
            Read more about the movement →
          </Link>
        </Reveal>
      </section>

      <PatternDivider className="mx-auto max-w-6xl px-4 sm:px-6" />

      {/* 3. Stats band */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <div className="grid gap-8 rounded-2xl border border-border bg-surface p-8 text-center sm:grid-cols-3 sm:p-12">
            <div>
              <p className="font-heading text-4xl font-semibold text-brand-green">
                <Counter value={STATS.members} suffix="+" />
              </p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">
                Registered members
              </p>
            </div>
            <div>
              <p className="font-heading text-4xl font-semibold text-brand-green">
                <Counter value={STATS.communities} suffix="+" />
              </p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">
                Communities represented
              </p>
            </div>
            <div>
              <p className="font-heading text-4xl font-semibold text-brand-green">
                <Counter value={STATS.events} suffix="+" />
              </p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">
                Events hosted
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 4. Latest news */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Stay informed"
            title="Latest News"
            href="/news"
            linkLabel="View all news"
          />
        </Reveal>
        <Stagger className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {NEWS_ITEMS.slice(0, 3).map((item) => (
            <StaggerItem key={item.slug}>
              <Card className="h-full">
                <PlaceholderImage label={item.category} icon={Newspaper} className="mb-4" />
                <span className="text-xs font-semibold uppercase tracking-wide text-gold">
                  {item.category}
                </span>
                <h3 className="mt-2 font-heading text-lg font-semibold text-foreground">
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

      {/* 5. Featured articles */}
      <section className="bg-surface-muted">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="From the editorial desk"
              title="Featured Articles"
              href="/articles"
              linkLabel="View all articles"
            />
          </Reveal>
          <Stagger className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ARTICLE_ITEMS.slice(0, 3).map((item) => (
              <StaggerItem key={item.slug}>
                <Card className="h-full">
                  <PlaceholderImage label="Article" icon={BookOpenText} className="mb-4" />
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.excerpt}
                  </p>
                  <p className="mt-4 text-xs text-muted-foreground">
                    {item.author} · {item.readTime}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* 6. History teaser */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-wide text-gold">
            Our History
          </span>
          <h2 className="mt-2 font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Origins of the <span className="no-break">Iwhuruohna</span> people
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            Akalaka, the seven sons, the Benin links, and the Ikwerre Essa —
            the origin narrative that makes us a distinct people.
          </p>
          <Link
            href="/history"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green transition-colors hover:text-accent-green"
          >
            Read our history →
          </Link>
        </Reveal>
      </section>

      {/* 7. Upcoming events teaser */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Save the date"
            title="Upcoming Events"
            href="/events"
            linkLabel="View all events"
          />
        </Reveal>
        <Stagger className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EVENT_ITEMS.slice(0, 3).map((item) => (
            <StaggerItem key={item.slug}>
              <Card className="h-full">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                  <CalendarDays className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
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

      {/* 8. Join / register CTA band */}
      <section className="bg-brand-green text-cream">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
          <Reveal>
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Become part of the movement
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-cream/80">
              Register as a member and help shape a stronger, more united
              future for the Iwhuruohna people.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3">
              <Button asChild size="lg" variant="accent">
                <Link href="/join">Register Now</Link>
              </Button>
              <p className="text-sm text-cream/70">
                Join {STATS.members.toLocaleString()}+ members already part
                of IFM
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. Gallery teaser */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-wide text-gold">
            Moments
          </span>
          <h2 className="mt-2 font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Gallery
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
            Photos from gatherings, festivals, and community events will live
            here as the movement grows.
          </p>
        </Reveal>
        <Stagger className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <StaggerItem key={index}>
              <PlaceholderImage label="Photo coming soon" icon={ImageIcon} aspect="square" />
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </>
  );
}
