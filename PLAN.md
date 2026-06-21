# Iwhuruohna First Movement (IFM) — Website Project Plan

> **Source of truth for this repo.** Claude Code should read this file at the start of every session to stay aligned on architecture, decisions, and build order. Update it whenever a major decision changes.

---

## 1. Project overview

A professional, mobile-first website for the **Iwhuruohna First Movement (IFM)** — a socio-cultural and nationalist organization for the Iwhuruohna (Ikwerre) people of Rivers State, Nigeria.

**The site exists to do five jobs. Every feature must serve at least one:**

1. **Unite** — a digital home for Iwhuruohna people everywhere.
2. **Preserve** — protect the history, origin narrative, language, and traditions.
3. **Inform** — publish movement updates, events, and announcements.
4. **Amplify voices** — let members share their own stories.
5. **Project globally** — a polished face that makes IFM stand out beyond Rivers State.

---

## 2. Locked decisions

| Decision | Choice |
|---|---|
| Framework | **Next.js (App Router)** |
| Styling | **Tailwind CSS** |
| Backend (DB + Auth + Storage) | **Supabase** |
| Version control | **GitHub** |
| Hosting | **Vercel (Hobby / free)** |
| Launch strategy | **Static core pages first**, then add Supabase + admin |
| Login (phase 1) | **Admin-only.** Members read freely and submit stories via a form. Public accounts can be added later with minimal rework. |
| Budget | **₦0.** Custom domain is the only optional paid upgrade later. |

---

## 3. Tech stack & why

- **Next.js (App Router):** fast, SEO-friendly (critical for global reach — search engines must read the History pages), deploys natively on Vercel.
- **Tailwind CSS:** custom, consistent, professional styling built quickly.
- **Supabase:** one free service providing the Postgres database (posts/events/stories), authentication (admin login), and file storage (images). This is what powers "admin posts updates from the back end."
- **Vercel:** auto-deploys on every push to GitHub; free Hobby tier is fine for a community/non-profit site.

**Known free-tier caveat:** Supabase pauses a project after ~7 days of *inactivity*. An active site won't hit this; if it ever pauses, opening the dashboard resumes it.

---

## 4. Repository structure (target)

```
/
├── PLAN.md                  ← this file
├── README.md
├── .env.local               ← secrets (never committed)
├── next.config.js
├── tailwind.config.js
├── /public                  ← static assets (flag, logo, og-image)
├── /src
│   ├── /app
│   │   ├── page.tsx                 # Home
│   │   ├── about/page.tsx
│   │   ├── history/page.tsx
│   │   ├── news/page.tsx
│   │   ├── news/[slug]/page.tsx
│   │   ├── events/page.tsx
│   │   ├── stories/page.tsx
│   │   ├── stories/submit/page.tsx
│   │   ├── gallery/page.tsx
│   │   ├── contact/page.tsx
│   │   └── admin/                   # login-protected (phase 2)
│   │       ├── login/page.tsx
│   │       └── dashboard/page.tsx
│   ├── /components           # Navbar, Footer, Hero, Card, etc.
│   ├── /lib
│   │   └── supabase.ts       # Supabase client(s)
│   └── /styles
```

---

## 5. Sitemap & pages

| Page | Purpose | Phase |
|---|---|---|
| **Home** | Hero (flag/imagery + mission line), latest 3 updates, "Who We Are" teaser, CTAs | 1 |
| **About / The Movement** | Mission, "Iwhuruohna First" philosophy, rejection of political tokenism, industrialization vision, leadership | 1 |
| **Our History** | Flagship: origin narrative (Akalaka, the seven sons, Benin links), Ikwerre Essa, language, culture, distinct-identity position | 1 |
| **Contact** | Form + social links (Facebook, Instagram, YouTube) | 1 |
| **News & Updates** | Admin-published feed; list + individual post pages | 2 |
| **Events** | Upcoming + past events, auto-sorted | 2 |
| **Stories / Voices** | Member-submitted stories (admin-approved before publishing) + submission form | 2 |
| **Gallery** | Photos/videos grouped into albums | 3 |
| **Get Involved / Join** | Chapters, volunteering, how to join | 3 |
| **Admin dashboard** | Login-protected back end for managing all dynamic content | 2 |

---

## 6. Feature list

**Public (mostly static / read-only):**
- Fast, mobile-first pages with strong cultural imagery.
- News feed that updates instantly when admin publishes (no redeploy).
- Event listings (upcoming vs. past).
- Story submission form → enters admin approval queue.
- Media gallery with albums.
- Social embeds (Facebook / YouTube) to reinforce existing pages.
- Optional newsletter email capture (for diaspora reach later).
- SEO: meta tags, Open Graph image, sitemap, semantic HTML.

**Admin (login-protected, phase 2):**
- Email + password login (Supabase Auth).
- Create / edit / delete: news posts, events, gallery items.
- Approve / reject member story submissions.
- Upload images (Supabase Storage).

---

## 7. Data model (Supabase) — for phase 2

Tables (snake_case). Use Row Level Security (RLS).

**`posts`** (news/updates)
- `id` uuid pk, `title` text, `slug` text unique, `excerpt` text, `body` text, `cover_image_url` text, `published` bool default false, `created_at` timestamptz, `updated_at` timestamptz

**`events`**
- `id` uuid pk, `title` text, `description` text, `location` text, `event_date` timestamptz, `cover_image_url` text, `published` bool default false, `created_at` timestamptz

**`stories`** (member submissions)
- `id` uuid pk, `author_name` text, `author_contact` text, `title` text, `body` text, `image_url` text, `status` text default `'pending'` (`pending` | `approved` | `rejected`), `created_at` timestamptz

**`gallery_items`**
- `id` uuid pk, `title` text, `media_url` text, `media_type` text (`image` | `video`), `album` text, `created_at` timestamptz

**`subscribers`** (optional newsletter)
- `id` uuid pk, `email` text unique, `created_at` timestamptz

**RLS policy intent:**
- Anonymous (public) can **SELECT** rows where `published = true` (posts/events), `status = 'approved'` (stories), and all `gallery_items`.
- Anonymous can **INSERT** into `stories` (submissions) and `subscribers` only.
- Authenticated admins can do **everything** (full read/write/delete).

**Storage:** one public-read bucket (e.g. `media`) for images; write restricted to authenticated users.

**Auth:** Supabase email/password. Admins are added manually in the Supabase dashboard (no public sign-up in phase 1).

---

## 8. Admin & login approach

- Phase 1 ships with **no login** — fully static, immediately useful and shareable.
- Phase 2 adds `/admin/login`. After login, `/admin/dashboard` exposes content management.
- Only a small set of trusted admins exist; they're created directly in Supabase.
- Visitors never need accounts. Story submissions go through a public form → admin approves.
- **Future option:** public member accounts (profiles, members-only area, comments) can be added later — Supabase Auth supports it without re-architecting.

---

## 9. Design system

**Direction:** professional, modern, identity-rooted — not a generic template. Mobile-first.

**Colors:** finalize from the official **Iwhuruohna flag** (to be provided). Starting direction until then:
- Primary: deep green or rich earth tone
- Accent: gold / ochre
- Text: near-black
- Background: warm off-white / cream

**Typography:**
- Headings: a strong, characterful display/serif (heritage weight)
- Body: a clean, highly readable sans-serif

**Layout principles:**
- Full-width hero with a powerful cultural image + mission line.
- Imagery-forward (festivals, pageants, wrestling, gatherings, the flag).
- A subtle traditional pattern used sparingly as dividers/section backgrounds.
- Generous spacing; dignified, not corporate-cold.
- Mobile excellence before desktop.

> When building UI, follow the repo's `frontend-design` guidance for design tokens and styling constraints.

---

## 10. Build roadmap

**Phase 1 — Static core (launch target)**
1. Scaffold Next.js + Tailwind; init GitHub repo; first deploy to Vercel (live URL day one).
2. Build Navbar + Footer + design tokens (colors/fonts from flag).
3. Build Home, About, History, Contact (content hard-coded for now).
4. SEO basics + Open Graph image. **→ Ship & share.**

**Phase 2 — Backend + admin**
5. Create Supabase project; add tables, RLS, storage bucket; wire env vars.
6. Build admin login + dashboard.
7. Convert News and Events to dynamic (read from Supabase).
8. Build Stories page + submission form + approval flow.

**Phase 3 — Polish & grow**
9. Gallery + albums; social embeds.
10. Newsletter capture; Get Involved page.
11. Performance + accessibility + final design pass.
12. (Optional) custom domain.

---

## 11. Environment setup

```bash
# Phase 1
npx create-next-app@latest ifm-website --typescript --tailwind --app
cd ifm-website
git init && git add . && git commit -m "init"
# create GitHub repo, push, then import into Vercel

# Phase 2 — Supabase
npm install @supabase/supabase-js @supabase/ssr
```

**`.env.local`** (never commit):
```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...   # server-side only, never exposed to the browser
```
Add the same variables in **Vercel → Project → Settings → Environment Variables**.

---

## 12. Assets & content needed from the team

- [ ] Iwhuruohna **flag** image (+ logo if any) — drives the color palette
- [ ] **Mission statement** + short "Who We Are" paragraph
- [ ] **History** content for the flagship page (rough notes are fine)
- [ ] **Photos** cleared for use (events, culture, people)
- [ ] **Leadership** details to display publicly
- [ ] **Social links** (Facebook page, Instagram, YouTube)
- [ ] Number of **admins** needing login access

---

## 13. Cost

| Item | Cost |
|---|---|
| Next.js, Tailwind, Supabase, GitHub, Vercel | ₦0 |
| Live URL (`*.vercel.app`) | ₦0 |
| Custom domain (optional, later) | ~$10–15/yr |

---

## 14. Future enhancements (not now)

- Public member accounts + profiles
- Comments / discussion
- Multi-language (Ikwerre / English toggle)
- Donations / dues
- Chapter directory with maps
- Members-only resources area
