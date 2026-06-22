import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { PatternDivider } from "@/components/PatternDivider";
import { JoinCtaBand } from "@/components/JoinCtaBand";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Story | Iwhuruohna FIRST Movement",
  description:
    "The journey of the Iwhuruohna FIRST Movement, from its founding in Port Harcourt to the community it has grown into today.",
};

interface Milestone {
  year: string;
  date: string;
  title: string;
  body: string;
}

// TODO(content): replace the placeholder entries below with confirmed
// milestones from the group records. Do not invent dates or details.
const milestones: Milestone[] = [
  {
    year: "2018",
    date: "10 November 2018",
    title: "The Movement Begins",
    body: "The Iwhuruohna FIRST Movement is founded in Port Harcourt, Rivers State, built around one promise, to protect the Iwhuruohna woman, man and child and put our people first.",
  },
  {
    year: "",
    date: "Add date",
    title: "[Milestone to confirm]",
    body: "Placeholder. Replace with a confirmed milestone from the group records.",
  },
  {
    year: "",
    date: "Add date",
    title: "[Milestone to confirm]",
    body: "Placeholder. Replace with a confirmed milestone from the group records.",
  },
  {
    year: "",
    date: "Add date",
    title: "[Milestone to confirm]",
    body: "Placeholder. Replace with a confirmed milestone from the group records.",
  },
];

export default function HistoryPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <Reveal>
          <span className="inline-flex items-center rounded-full bg-brand-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-green">
            Our Story
          </span>
          <h1 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Our Story
          </h1>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Our story begins in Port Harcourt on the 10th of November 2018.
            From that day, the <span className="no-break">Iwhuruohna</span>{" "}
            FIRST Movement set out with one purpose, to protect the{" "}
            <span className="no-break">Iwhuruohna</span> woman, man and
            child and to put our people first. What started as a shared
            conviction has grown into a community thousands strong, bound
            together by three words. Unity. Loyalty. Duty.
          </p>
        </Reveal>

        <PatternDivider className="my-10" />

        <ol className="space-y-10 border-l border-border pl-8">
          {milestones.map((item, index) => {
            const isPlaceholder = item.title.startsWith("[");
            return (
              <li key={item.title + item.date} className="relative">
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute -left-[2.6rem] top-1 flex h-4 w-4 items-center justify-center rounded-full ring-4 ring-background",
                    isPlaceholder
                      ? "border-2 border-dashed border-muted-foreground/40 bg-background"
                      : "bg-brand-green",
                  )}
                />
                <Reveal delay={index * 0.08}>
                  <div
                    className={cn(
                      "rounded-2xl border p-6",
                      isPlaceholder
                        ? "border-dashed border-border bg-transparent opacity-60"
                        : "border-border bg-surface shadow-md",
                    )}
                  >
                    <div className="flex flex-wrap items-baseline gap-2">
                      {item.year && (
                        <span className="font-heading text-2xl font-bold text-brand-green">
                          {item.year}
                        </span>
                      )}
                      <span
                        className={cn(
                          "text-xs font-semibold uppercase tracking-wide",
                          isPlaceholder ? "text-muted-foreground" : "text-gold",
                        )}
                      >
                        {item.date}
                      </span>
                    </div>
                    <h2 className="mt-2 font-heading text-xl font-semibold text-foreground">
                      {item.title}
                    </h2>
                    <p className="mt-2 leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </section>

      <JoinCtaBand />
    </>
  );
}
