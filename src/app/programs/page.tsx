import type { Metadata } from "next";
import { Crown, Mic, School, HeartHandshake, Factory } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Card } from "@/components/ui/card";
import { JoinCtaBand } from "@/components/JoinCtaBand";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Programs | Iwhuruohna FIRST Movement",
  description:
    "What the Iwhuruohna FIRST Movement does today, across culture, education, and development, to protect and uplift the Iwhuruohna woman, man and child.",
};

interface Program {
  icon: typeof Crown;
  title: string;
  body: string;
  tone?: "green" | "red";
}

const programs: Program[] = [
  {
    icon: Crown,
    title: "Cultural Revival and Miss IFM",
    body: "We work to revive and celebrate Iwhuruohna culture and identity. The Miss IFM pageant is part of this, a platform that celebrates the Iwhuruohna woman and carries our cultural pride forward to a new generation.",
  },
  {
    icon: Mic,
    title: "Student Debates",
    body: "We organize student debates across institutions including the University of Port Harcourt, Rivers State University, and Ignatius Ajuru University of Education. These debates sharpen young minds, build confidence, and keep our students engaged with the ideas that shape our future.",
  },
  {
    icon: School,
    title: "School Outreach",
    body: "We take our message into schools to stand against cultism and drug abuse. Through outreach we speak directly to young people about the dangers these bring, and we offer them a stronger path built on unity, loyalty, and duty.",
    tone: "red",
  },
  {
    icon: HeartHandshake,
    title: "Women and Girl Child Empowerment",
    body: "We are committed to the empowerment of women and the girl child. Protecting and uplifting the Iwhuruohna woman and girl sits at the heart of who we are, and our work gives them voice, support, and opportunity.",
  },
  {
    icon: Factory,
    title: "Industrialization Agenda",
    body: "We pursue an industrialization agenda for our people. Human development and an industrial revolution are central to our mission, and we push for the kind of progress that brings real prosperity to the Iwhuruohna nation.",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <Reveal>
          <span className="inline-flex items-center rounded-full bg-brand-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-green">
            Programs
          </span>
          <h1 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            What We Do
          </h1>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Our work is how we put <span className="no-break">Iwhuruohna</span>{" "}
            FIRST. Across culture, education, and development, every program
            is built to protect and uplift the{" "}
            <span className="no-break">Iwhuruohna</span> woman, man and
            child. These are the areas where we are active today.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <StaggerItem key={program.title}>
              <Card className="h-full">
                <span
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-full",
                    program.tone === "red"
                      ? "bg-brand-red/10 text-brand-red"
                      : "bg-brand-green/10 text-brand-green",
                  )}
                >
                  <program.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  {program.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {program.body}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <JoinCtaBand />
    </>
  );
}
