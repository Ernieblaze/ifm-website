// TODO(supabase): this file is the Phase 1 data seam for News, Articles, and
// Events. In Phase 2, replace these arrays with live Supabase queries against
// the `posts`, `articles`, and `events` tables (see PLAN.md §7) once the admin
// dashboard exists. Every entry below is sample placeholder content, flagged
// with isSample: true, and safe to delete once real content is published.

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author?: string;
  isSample: boolean;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author?: string;
  isSample: boolean;
}

export interface EventItem {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  status: "upcoming" | "past";
  isSample: boolean;
}

export const news: NewsItem[] = [
  {
    id: "n1",
    title: "[Sample] Movement update",
    excerpt:
      "Placeholder news copy. The admin will publish real updates on the Miss IFM pageant here.",
    date: "2025-01-01",
    isSample: true,
  },
  {
    id: "n2",
    title: "[Sample] Student debate season opens",
    excerpt:
      "Placeholder news copy. Real coverage of student debates across partner institutions will appear here.",
    date: "2025-01-15",
    isSample: true,
  },
  {
    id: "n3",
    title: "[Sample] School outreach drive announced",
    excerpt:
      "Placeholder news copy. The admin will publish real updates on school outreach against cultism and drug abuse here.",
    date: "2025-02-01",
    isSample: true,
  },
];

export const articles: Article[] = [
  {
    id: "a1",
    title: "[Sample] Why the Miss IFM pageant matters",
    excerpt:
      "Placeholder article copy. A real piece on cultural revival and the Miss IFM pageant will appear here.",
    date: "2025-01-05",
    author: "IFM Editorial",
    isSample: true,
  },
  {
    id: "a2",
    title: "[Sample] Inside our student debate program",
    excerpt:
      "Placeholder article copy. A real piece on student debates will appear here.",
    date: "2025-01-20",
    author: "IFM Editorial",
    isSample: true,
  },
  {
    id: "a3",
    title: "[Sample] Supporting women and the girl child",
    excerpt:
      "Placeholder article copy. A real piece on women and girl child empowerment will appear here.",
    date: "2025-02-05",
    author: "IFM Editorial",
    isSample: true,
  },
];

export const events: EventItem[] = [
  {
    id: "e1",
    title: "[Sample] Miss IFM pageant night",
    description:
      "Placeholder event copy. Real date, venue, and details will replace this sample.",
    date: "2025-03-01",
    location: "Port Harcourt, Rivers State",
    status: "upcoming",
    isSample: true,
  },
  {
    id: "e2",
    title: "[Sample] Student debate finals",
    description:
      "Placeholder event copy. Real date, venue, and details will replace this sample.",
    date: "2025-03-15",
    location: "University of Port Harcourt",
    status: "upcoming",
    isSample: true,
  },
  {
    id: "e3",
    title: "[Sample] School outreach visit",
    description:
      "Placeholder event copy. Real date, venue, and details will replace this sample.",
    date: "2024-11-10",
    location: "Port Harcourt, Rivers State",
    status: "past",
    isSample: true,
  },
];
