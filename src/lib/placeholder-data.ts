// News, Articles, and Events now live in src/data/content.ts, the Phase 2
// Supabase seam for that content domain. This file holds Gallery (real
// photos, placeholder captions) and Stats (mostly real, see below).

export interface GalleryItem {
  slug: string;
  image: string;
  // TODO(content): add a real caption once captions are confirmed.
  caption?: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  { slug: "gallery-1", image: "/images/gallery-1.jpg" },
  { slug: "gallery-2", image: "/images/gallery-2.jpg" },
  { slug: "gallery-3", image: "/images/gallery-3.jpg" },
  { slug: "gallery-4", image: "/images/gallery-4.jpg" },
  { slug: "gallery-5", image: "/images/gallery-5.jpg" },
  { slug: "gallery-6", image: "/images/gallery-6.jpg" },
];

// TODO(supabase): replace `members` with a live count query once member
// registration (see /join) is wired to Supabase Auth + a `members` table.
// `founded` and `headquarters` are fixed facts, not placeholders.
export const STATS = {
  members: 8000,
  founded: "10 Nov 2018",
  headquarters: "Port Harcourt, Rivers State",
};
