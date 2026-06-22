import Link from "next/link";
import Image from "next/image";
import {
  Flag,
  Users,
  HeartHandshake,
  ShieldCheck,
  Landmark,
  Factory,
  GraduationCap,
  Heart,
  Newspaper,
  BookOpenText,
  CalendarDays,
  MapPin,
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
import { LeadershipSection } from "@/components/LeadershipSection";
import {
  NEWS_ITEMS,
  ARTICLE_ITEMS,
  EVENT_ITEMS,
  GALLERY_ITEMS,
  STATS,
} from "@/lib/placeholder-data";
import { LEADERS } from "@/lib/leaders-data";
import { cn } from "@/lib/utils";

const TONE_CLASSES = {
  green: "bg-brand-green/10 text-brand-green",
  gold: "bg-gold/15 text-gold",
  red: "bg-brand-red/10 text-brand-red",
} as const;

const CORE_VALUES = [
  { icon: Flag, title: "Nationalism", tone: "green" },
  { icon: Users, title: "Unity", tone: "gold" },
  { icon: HeartHandshake, title: "Loyalty", tone: "red" },
  { icon: ShieldCheck, title: "Duty", tone: "green" },
  { icon: Landmark, title: "Cultural Preservation", tone: "gold" },
  { icon: Factory, title: "Industrial Development", tone: "red" },
] as const satisfies ReadonlyArray<{
  icon: typeof Flag;
  title: string;
  tone: keyof typeof TONE_CLASSES;
}>;

const PROGRAMS = [
  {
    icon: Landmark,
    title: "Cultural Revival",
    body: "Language, traditions, music, and the Miss IFM pageant.",
  },
  {
    icon: GraduationCap,
    title: "Youth and Education",
    body: "Student debates (UniPort, UST, Ignatius Ajuru) and school outreach against cultism and drug abuse.",
  },
  {
    icon: Heart,
    title: "Women and Girl-Child",
    body: "Empowerment, skills, and visibility.",
  },
  {
    icon: Factory,
    title: "Industrialization Agenda",
    body: "Advocating industries, employment, and self-reliance for Iwhuruohna land.",
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
          <div className="flex flex-col items-start gap-12 lg:flex-row lg:items-center lg:justify-between">
            <Reveal className="max-w-2xl">
              <span className="inline-flex items-center rounded-full bg-gold/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-gold">
                <span className="no-break">Iwhuruohna</span> FIRST Movement. Est. 2018
              </span>
              <h1 className="mt-6 font-heading text-6xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-7xl lg:text-8xl">
                Unity. Loyalty. Duty.
              </h1>
              <p className="mt-4 font-heading text-2xl font-semibold text-brand-green sm:text-3xl">
                <span className="no-break">Iwhuruohna</span> FIRST.
              </p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                A nationalist movement protecting the{" "}
                <span className="no-break">Iwhuruohna</span> woman, man, and
                child, building our future through unity and an industrial
                revolution.
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

            <Reveal delay={0.15} className="self-center lg:shrink-0 lg:self-auto">
              <div
                className="relative mx-auto h-[280px] w-[280px] rounded-full p-[10%] sm:h-[320px] sm:w-[320px] lg:h-[400px] lg:w-[400px]"
                style={{
                  background:
                    "radial-gradient(circle at center, #0A6B37 0%, rgba(10,107,55,0.45) 35%, rgba(10,107,55,0) 70%)",
                }}
              >
                <Image
                  src={LEADERS[0].photo}
                  alt={LEADERS[0].photoAlt}
                  fill
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 320px, 280px"
                  className="object-contain drop-shadow-[0_20px_35px_rgba(10,107,55,0.45)] [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]"
                  priority
                />
              </div>
              <p className="mt-4 text-center">
                <span className="block font-heading text-lg font-bold text-foreground sm:text-xl">
                  {LEADERS[0].name}
                </span>
                <span className="block text-sm font-medium text-muted-foreground">
                  {LEADERS[0].title}
                </span>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 1. About */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-wide text-gold">
              Who We Are
            </span>
            <h2 className="mt-2 font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              About the Movement
            </h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
              The <span className="no-break">Iwhuruohna</span> FIRST Movement
              (IFM) is a nationalist movement devoted to protecting the{" "}
              <span className="no-break">Iwhuruohna</span> woman, man, and
              child. United under one purpose, we preach the gospel of{" "}
              <span className="no-break">Iwhuruohna</span> FIRST, pursuing
              human development, an industrial revolution, and the
              emancipation of our people. Protectionism, nationalism, and
              progress are what we stand for. Join us. United, we are
              formidable.
            </p>
            <Link
              href="/about"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green transition-colors hover:text-accent-green"
            >
              Read more about the movement →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 2. Mission */}
      <section className="bg-surface-muted">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-wide text-gold">
              Our Mission
            </span>
            <p className="mt-4 font-heading text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
              To protect and uplift the <span className="no-break">Iwhuruohna</span>{" "}
              people through nationalism and unity, and to drive an
              industrial revolution that delivers real development,
              employment, and self-reliance to our land, rejecting tokenism
              in favour of lasting empowerment.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. Core values */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-gold">
            What We Stand For
          </span>
          <h2 className="mt-2 font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Core Values
          </h2>
        </Reveal>
        <Stagger className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CORE_VALUES.map((value) => (
            <StaggerItem key={value.title}>
              <Card className="flex h-full flex-col items-center text-center">
                <span
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-full",
                    TONE_CLASSES[value.tone],
                  )}
                >
                  <value.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
                  {value.title}
                </h3>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <PatternDivider className="mx-auto max-w-6xl px-4 sm:px-6" />

      {/* 4. Stats band */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <div className="grid gap-8 rounded-2xl border border-border bg-surface p-8 text-center shadow-md sm:grid-cols-3 sm:p-12">
            <div className="flex flex-col items-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                <Users className="h-6 w-6" aria-hidden="true" />
              </span>
              <p className="mt-4 font-heading text-3xl font-bold text-brand-green">
                <Counter value={STATS.members} suffix="+" />
              </p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">
                Members
              </p>
            </div>
            <div className="flex flex-col items-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                <CalendarDays className="h-6 w-6" aria-hidden="true" />
              </span>
              <p className="mt-4 font-heading text-3xl font-bold text-brand-green">
                {STATS.founded}
              </p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">
                Founded
              </p>
            </div>
            <div className="flex flex-col items-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                <MapPin className="h-6 w-6" aria-hidden="true" />
              </span>
              <p className="mt-4 font-heading text-2xl font-bold text-brand-green sm:text-3xl">
                {STATS.headquarters}
              </p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">
                Headquarters
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 5. What we do */}
      <section className="bg-surface-muted">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-wide text-gold">
              Programs
            </span>
            <h2 className="mt-2 font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              What We Do
            </h2>
          </Reveal>
          <Stagger className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROGRAMS.map((program) => (
              <StaggerItem key={program.title}>
                <Card className="h-full">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                    <program.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                    {program.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {program.body}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* 6. Leadership */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <LeadershipSection />
      </section>

      {/* 7. Latest news */}
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

      {/* 8. Featured articles */}
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
                    {item.author}, {item.readTime}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* 9. History teaser */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-wide text-gold">
            Our History
          </span>
          <h2 className="mt-2 font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Origins of the <span className="no-break">Iwhuruohna</span> people
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            Akalaka, the seven sons, the Benin links, and the Ikwerre Essa
            form the origin narrative that makes us a distinct people.
          </p>
          <Link
            href="/history"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green transition-colors hover:text-accent-green"
          >
            Read our history →
          </Link>
        </Reveal>
      </section>

      {/* 10. Upcoming events teaser */}
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
          {EVENT_ITEMS.slice(0, 3).map((item, index) => {
            const label = item.title ?? `Event ${index + 1}`;
            return (
              <StaggerItem key={item.slug}>
                <Card className="h-full">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                    <CalendarDays className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                    {label}
                  </h3>
                  {item.date || item.location ? (
                    <>
                      {item.date && (
                        <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                          <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                          {formatDate(item.date)}
                        </p>
                      )}
                      {item.location && (
                        <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                          {item.location}
                        </p>
                      )}
                    </>
                  ) : (
                    <p className="mt-2 text-sm text-muted-foreground">
                      Details coming soon.
                    </p>
                  )}
                </Card>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      {/* 11. Join / register CTA band */}
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

      {/* 12. Gallery teaser */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Moments"
            title="Gallery"
            description="Places the movement has been and things we have done."
            href="/gallery"
            linkLabel="View full gallery"
          />
        </Reveal>
        <Stagger className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {GALLERY_ITEMS.map((item) => (
            <StaggerItem key={item.slug}>
              <Card className="aspect-square overflow-hidden p-0">
                <div className="relative h-full w-full">
                  <Image
                    src={item.image}
                    alt={item.caption ?? "Photo from the movement"}
                    fill
                    sizes="(min-width: 1024px) 180px, (min-width: 640px) 220px, 45vw"
                    className="object-cover"
                  />
                </div>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </>
  );
}
