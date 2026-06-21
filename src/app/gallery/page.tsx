import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Card } from "@/components/ui/card";
import { GALLERY_ITEMS } from "@/lib/placeholder-data";

export const metadata: Metadata = {
  title: "Gallery",
};

export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <span className="inline-flex items-center rounded-full bg-brand-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-green">
          Gallery
        </span>
        <h1 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Moments from the Movement
        </h1>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
          Places the movement has been and things we have done.
        </p>
      </Reveal>

      <Stagger className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {GALLERY_ITEMS.map((item) => (
          <StaggerItem key={item.slug}>
            <Card className="aspect-[4/3] overflow-hidden p-0">
              <div className="relative h-full w-full">
                <Image
                  src={item.image}
                  alt={item.caption ?? "Photo from the movement"}
                  fill
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 320px, 45vw"
                  className="object-cover"
                />
              </div>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
