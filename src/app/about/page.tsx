import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { PatternDivider } from "@/components/PatternDivider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "About",
};

const SECTIONS = [
  {
    value: "mission",
    label: "Mission",
    heading: "Why IFM exists",
    body: "IFM is a socio-cultural and nationalist movement for the Iwhuruohna people — built to unite our community, preserve our history and language, inform members of movement updates, amplify the voices of our people, and project our identity to the world.",
  },
  {
    value: "philosophy",
    label: "Philosophy",
    heading: "Iwhuruohna First",
    body: "We reject political tokenism. \"Iwhuruohna First\" means our people's interests, dignity, and development come before any party or politician's convenience — and it means building real industry and opportunity at home, not waiting for it.",
  },
  {
    value: "leadership",
    label: "Leadership",
    heading: "Who leads the movement",
    body: "IFM is guided by a small council of trusted community leaders. Full leadership profiles are coming soon as the movement's public presence grows.",
  },
] as const;

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Reveal>
        <span className="inline-flex items-center rounded-full bg-brand-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-green">
          About
        </span>
        <h1 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          The Movement
        </h1>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          What IFM stands for, why it rejects political tokenism, and where
          the movement is headed.
        </p>
      </Reveal>

      <PatternDivider className="my-10" />

      <Reveal>
        <Tabs defaultValue="mission">
          <TabsList>
            {SECTIONS.map((section) => (
              <TabsTrigger key={section.value} value={section.value}>
                {section.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {SECTIONS.map((section) => (
            <TabsContent key={section.value} value={section.value}>
              <h2 className="font-heading text-xl font-semibold text-foreground">
                {section.heading}
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {section.body}
              </p>
            </TabsContent>
          ))}
        </Tabs>
      </Reveal>
    </section>
  );
}
