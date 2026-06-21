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
  title: string;
  date: string;
  location: string;
  status: "upcoming" | "past";
}

export const EVENT_ITEMS: EventItem[] = [
  {
    slug: "annual-cultural-gathering",
    title: "Annual Cultural Gathering",
    date: "2026-08-15",
    location: "Port Harcourt, Rivers State",
    status: "upcoming",
  },
  {
    slug: "diaspora-town-hall",
    title: "Diaspora Town Hall (Virtual)",
    date: "2026-07-02",
    location: "Online",
    status: "upcoming",
  },
  {
    slug: "youth-leadership-forum",
    title: "Youth Leadership Forum",
    date: "2026-09-20",
    location: "Ikwerre LGA",
    status: "upcoming",
  },
];

// TODO(supabase): replace with a live count query once member registration
// (see /join) is wired to Supabase Auth + a `members` table.
export const STATS = {
  members: 1400,
  communities: 12,
  events: 36,
};
