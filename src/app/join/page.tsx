import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { RegisterForm } from "@/components/RegisterForm";
import { STATS } from "@/lib/placeholder-data";

export const metadata: Metadata = {
  title: "Join",
};

export default function JoinPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Reveal>
        <span className="inline-flex items-center rounded-full bg-brand-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-green">
          Join IFM
        </span>
        <h1 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Become a Member
        </h1>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          Registration takes a minute. Join {STATS.members.toLocaleString()}+
          Iwhuruohna people already part of the movement, at home and in the
          diaspora.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <RegisterForm />
      </Reveal>
    </section>
  );
}
