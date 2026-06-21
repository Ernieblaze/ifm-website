import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { LeaderCard } from "@/components/LeaderCard";
import { LEADERS } from "@/lib/leaders-data";

export function LeadershipSection() {
  return (
    <div>
      <Reveal>
        <SectionHeading eyebrow="Who leads the movement" title="Leadership" />
      </Reveal>
      <Stagger className="mt-8 grid gap-6 sm:grid-cols-2">
        {LEADERS.map((leader) => (
          <StaggerItem key={leader.name}>
            <LeaderCard leader={leader} />
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}
