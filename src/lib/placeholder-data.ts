// TODO(supabase): every array below is placeholder content for Phase 1.
// Replace with live reads from the `posts` / `events` tables (see PLAN.md §7)
// once the Supabase backend lands in Phase 2.

export interface NewsItem {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export const NEWS_ITEMS: NewsItem[] = [
  {
    slug: "first-general-assembly",
    title: "IFM convenes first general assembly",
    excerpt:
      "Members from across Rivers State and the diaspora gathered to set the movement's direction for the year ahead.",
    date: "2026-05-12",
    category: "Movement Update",
  },
  {
    slug: "diaspora-chapters-opening",
    title: "Chapters opening for diaspora members",
    excerpt:
      "Iwhuruohna people abroad will soon have a structured way to organize, connect, and contribute.",
    date: "2026-04-28",
    category: "Announcement",
  },
  {
    slug: "language-preservation-drive",
    title: "A renewed push to document the Ikwerre Essa",
    excerpt:
      "IFM is recording oral histories and language samples from elders before they are lost.",
    date: "2026-04-09",
    category: "Culture",
  },
];

export interface ArticleItem {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
}

export const ARTICLE_ITEMS: ArticleItem[] = [
  {
    slug: "akalaka-and-the-seven-sons",
    title: "Akalaka and the seven sons: revisiting the origin narrative",
    excerpt:
      "A closer look at the lineage that founded the houses of the Iwhuruohna people.",
    author: "IFM Culture Desk",
    readTime: "6 min read",
  },
  {
    slug: "why-iwhuruohna-first-matters",
    title: "Why \"Iwhuruohna First\" is not a slogan",
    excerpt:
      "Unpacking the philosophy behind the movement's rejection of political tokenism.",
    author: "IFM Editorial",
    readTime: "4 min read",
  },
  {
    slug: "building-industry-at-home",
    title: "What an industrialized homeland could look like",
    excerpt:
      "Notes on the movement's long-term vision for opportunity that doesn't require leaving home.",
    author: "IFM Editorial",
    readTime: "5 min read",
  },
];

export interface EventItem {
  slug: string;
  // TODO(content): fill in title, date, location, and status as real dated
  // events are confirmed. Until then, the UI falls back to a generic
  // "Event N" label and a "Details coming soon" line.
  title?: string;
  date?: string;
  location?: string;
  status?: "upcoming" | "past";
}

export const EVENT_ITEMS: EventItem[] = [
  { slug: "event-1" },
  { slug: "event-2" },
  { slug: "event-3" },
];

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
