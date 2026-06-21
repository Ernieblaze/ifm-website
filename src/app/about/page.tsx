import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { PatternDivider } from "@/components/PatternDivider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LeadershipSection } from "@/components/LeadershipSection";

export const metadata: Metadata = {
  title: "About",
};

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
          The <span className="no-break">Iwhuruohna</span> FIRST Movement
          (IFM) is a nationalist movement devoted to protecting the{" "}
          <span className="no-break">Iwhuruohna</span> woman, man, and child.
          United under one purpose, we preach the gospel of{" "}
          <span className="no-break">Iwhuruohna</span> FIRST, pursuing human
          development, an industrial revolution, and the emancipation of our
          people. Protectionism, nationalism, and progress are what we stand
          for. Join us. United, we are formidable.
        </p>
      </Reveal>

      <PatternDivider className="my-10" />

      <Reveal>
        <Tabs defaultValue="mission">
          <TabsList>
            <TabsTrigger value="mission">Mission</TabsTrigger>
            <TabsTrigger value="philosophy">Philosophy</TabsTrigger>
            <TabsTrigger value="leadership">Leadership</TabsTrigger>
          </TabsList>

          <TabsContent value="mission">
            <h2 className="font-heading text-xl font-semibold text-foreground">
              Our Mission
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              To protect and uplift the{" "}
              <span className="no-break">Iwhuruohna</span> people through
              nationalism and unity, and to drive an industrial revolution
              that delivers real development, employment, and self-reliance
              to our land, rejecting tokenism in favour of lasting
              empowerment.
            </p>
          </TabsContent>

          <TabsContent value="philosophy">
            <h2 className="font-heading text-xl font-semibold text-foreground">
              Iwhuruohna First
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              We reject political tokenism. &quot;Iwhuruohna First&quot;
              means our people&apos;s interests, dignity, and development
              come before any party or politician&apos;s convenience. It
              means building real industry and opportunity at home, not
              waiting for it.
            </p>
          </TabsContent>

          <TabsContent value="leadership">
            <LeadershipSection />
          </TabsContent>
        </Tabs>
      </Reveal>
    </section>
  );
}
