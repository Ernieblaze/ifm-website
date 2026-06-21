import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { PatternDivider } from "@/components/PatternDivider";

export const metadata: Metadata = {
  title: "Our History",
};

const TIMELINE = [
  {
    era: "Origins",
    title: "Akalaka and the seven sons",
    body: "The Iwhuruohna origin narrative begins with Akalaka and the lineage of seven sons whose descendants became the founding houses of our people.",
  },
  {
    era: "Migration",
    title: "Links to Benin",
    body: "Oral history traces threads connecting Iwhuruohna ancestry to the broader Benin migrations that shaped much of the Niger Delta region.",
  },
  {
    era: "Identity",
    title: "Ikwerre Essa and a distinct people",
    body: "The Ikwerre Essa and our language place Iwhuruohna people as a distinct cultural identity within Rivers State, not a subset of any other group.",
  },
  {
    era: "Today",
    title: "Carrying the culture forward",
    body: "IFM exists to document, teach, and celebrate this history so it survives intact for the generations who come after us.",
  },
] as const;

export default function HistoryPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Reveal>
        <span className="inline-flex items-center rounded-full bg-brand-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-green">
          Our History
        </span>
        <h1 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Origins of the <span className="no-break">Iwhuruohna</span> People
        </h1>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          This flagship page will grow into the full origin narrative,
          covering Akalaka, the seven sons, Benin links, Ikwerre Essa, our
          language, our culture, and our distinct identity. Below is a
          preview of what it will cover.
        </p>
      </Reveal>

      <PatternDivider className="my-10" />

      <ol className="space-y-10 border-l border-border pl-8">
        {TIMELINE.map((item, index) => (
          <li key={item.title} className="relative">
            <span className="absolute -left-[2.6rem] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-green ring-4 ring-background" />
            <Reveal delay={index * 0.08}>
              <span className="text-xs font-semibold uppercase tracking-wide text-gold">
                {item.era}
              </span>
              <h2 className="mt-1 font-heading text-xl font-semibold text-foreground">
                {item.title}
              </h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
