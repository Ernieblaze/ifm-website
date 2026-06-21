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
│   │   ├── page.tsx                 # Home (multi-section, see §5)
│   │   ├── about/page.tsx
│   │   ├── history/page.tsx
│   │   ├── news/page.tsx
│   │   ├── news/[slug]/page.tsx
│   │   ├── articles/page.tsx
│   │   ├── articles/[slug]/page.tsx
│   │   ├── events/page.tsx
│   │   ├── join/page.tsx             # member registration
│   │   ├── stories/page.tsx
│   │   ├── stories/submit/page.tsx
│   │   ├── gallery/page.tsx
│   │   ├── contact/page.tsx
│   │   └── admin/                   # login-protected (phase 2)
│   │       ├── login/page.tsx
│   │       └── dashboard/page.tsx
│   ├── /components           # Navbar, Footer, SectionHeading, Card, ui/, etc.
│   ├── /lib
│   │   ├── supabase.ts       # Supabase client(s) (phase 2)
│   │   └── placeholder-data.ts  # Phase 1 News/Articles/Events/stats — TODO(supabase)
│   └── /styles
```

---

## 5. Sitemap & pages

| Page | Purpose | Phase |
|---|---|---|
| **Home** | Full multi-section page: hero, mission strip (Preserve/Unite/Inform/Empower), About teaser, member stats band, Latest News preview, Featured Articles preview, History teaser, Upcoming Events preview, Join/Register CTA band, Gallery teaser | 1 |
| **About / The Movement** | Mission, "Iwhuruohna First" philosophy, rejection of political tokenism, industrialization vision, leadership | 1 |
| **Our History** | Flagship: origin narrative (Akalaka, the seven sons, Benin links), Ikwerre Essa, language, culture, distinct-identity position | 1 |
| **News & Updates** | List of movement announcements (placeholder content in Phase 1; list + individual post pages once admin-published in Phase 2) | 1 (static) → 2 (dynamic) |
| **Articles** | Longer-form editorial pieces on history, culture, and philosophy (placeholder content in Phase 1; list + individual article pages once dynamic) | 1 (static) → 2 (dynamic) |
| **Events** | Upcoming + past events, auto-sorted (placeholder content in Phase 1) | 1 (static) → 2 (dynamic) |
| **Join / Register** | Public member registration form; shows a live member count once wired to Supabase | 1 (static form) → 2 (persisted + live count) |
| **Contact** | Form + social links (Facebook, Instagram, YouTube) | 1 |
| **Stories / Voices** | Member-submitted stories (admin-approved before publishing) + submission form | 2 |
| **Gallery** | Photos/videos grouped into albums (homepage has a teaser grid in Phase 1) | 3 |
| **Admin dashboard** | Login-protected back end for managing all dynamic content | 2 |

---

## 6. Feature list

**Public (mostly static / read-only):**
- Fast, mobile-first pages with strong cultural imagery.
- Rich homepage: mission strip, About teaser, live-style member stats, News/Articles/Events previews, Join CTA, gallery teaser.
- News feed that updates instantly when admin publishes (no redeploy) — Phase 1 ships with placeholder content.
- Articles (long-form editorial) list + individual pages — Phase 1 ships with placeholder content.
- Event listings (upcoming vs. past) — Phase 1 ships with placeholder content.
- Public member registration (`/join`) with a displayed member count — Phase 1 form is client-only; Phase 2 persists to Supabase and the count goes live.
- Story submission form → enters admin approval queue.
- Media gallery with albums; homepage carries a teaser grid until real photography lands.
- Social embeds (Facebook / YouTube) to reinforce existing pages.
- Optional newsletter email capture (for diaspora reach later).
- SEO: meta tags, Open Graph image, sitemap, semantic HTML.

**Admin (login-protected, phase 2):**
- Email + password login (Supabase Auth).
- Create / edit / delete: news posts, articles, events, gallery items.
- Approve / reject member story submissions.
- View / manage registered members.
- Upload images (Supabase Storage).

---

## 7. Data model (Supabase) — for phase 2

Tables (snake_case). Use Row Level Security (RLS).

**`posts`** (news/updates)
- `id` uuid pk, `title` text, `slug` text unique, `excerpt` text, `body` text, `cover_image_url` text, `published` bool default false, `created_at` timestamptz, `updated_at` timestamptz

**`events`**
- `id` uuid pk, `title` text, `description` text, `location` text, `event_date` timestamptz, `cover_image_url` text, `published` bool default false, `created_at` timestamptz

**`articles`** (long-form editorial)
- `id` uuid pk, `title` text, `slug` text unique, `excerpt` text, `body` text, `author` text, `cover_image_url` text, `published` bool default false, `created_at` timestamptz, `updated_at` timestamptz

**`members`** (public registrations from `/join`)
- `id` uuid pk, `name` text, `email` text unique, `location` text, `note` text, `created_at` timestamptz

**`stories`** (member submissions)
- `id` uuid pk, `author_name` text, `author_contact` text, `title` text, `body` text, `image_url` text, `status` text default `'pending'` (`pending` | `approved` | `rejected`), `created_at` timestamptz

**`gallery_items`**
- `id` uuid pk, `title` text, `media_url` text, `media_type` text (`image` | `video`), `album` text, `created_at` timestamptz

**`subscribers`** (optional newsletter)
- `id` uuid pk, `email` text unique, `created_at` timestamptz

**RLS policy intent:**
- Anonymous (public) can **SELECT** rows where `published = true` (posts/events/articles), `status = 'approved'` (stories), and all `gallery_items`.
- Anonymous can **INSERT** into `stories` (submissions), `subscribers`, and `members` (registration) only. `members` should not be publicly readable beyond an aggregate count (expose via a count-only RPC/view, not direct table SELECT).
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

**Colors (locked):** defined as CSS variables + Tailwind v4 `@theme` tokens in `src/app/globals.css`, with a warm dark-mode variant (never cold gray):
- `brand-green` `#0A6B37` (light) / `#22B567` (dark) — anchor accent; gets real "moments of dominance" (hero, CTA band, About-teaser white band's icon accents) but never an everywhere-default
- `accent-green` `#129A4C` (light) / `#3DD686` (dark) — hover/lighter step
- `gold` `#C68A2E` (light) / `#D9A53F` (dark) — heritage accent, used for eyebrows/kickers
- `brand-red` `#E11D2A` (light) / `#FF4B57` (dark) — strong emphasis only (primary CTA, key links); the homepage Join/Register CTA button is red, not gold, to keep this rule consistent
- `cream` `#FAF6EC` — dominant background
- `white` / `surface` `#FFFFFF` (light) — cards and the About-teaser band sit on crisp white so they visibly lift off the cream
- `ink` `#14130F` — body text
- Semantic tokens (`background`, `foreground`, `surface`, `surface-muted`, `border`, `muted-foreground`, `ring`) swap per light/dark via `.dark` class, toggled with `next-themes`.
- Section-level color rotation: the homepage mission strip (Preserve/Unite/Inform/Empower) deliberately rotates icon tone across green/gold/red instead of repeating green on every icon.

**Typography (locked):**
- Headings: **Fraunces** (serif) via `next/font/google`, mapped to `font-heading`.
- Body/UI: **Inter** via `next/font/google`, mapped to default `font-sans`.
- "Iwhuruohna" never breaks mid-word in headings (`.no-break` + `text-wrap: balance` on headings).

**Component libraries (locked):**
- **shadcn/ui pattern + Radix primitives** (owned source, not a runtime dep) for Button, Input, Textarea, Label, Tabs, Tooltip, Dialog, Sheet, Dropdown Menu — in `src/components/ui/`.
- **framer-motion** for scroll-reveal (`Reveal`, `Stagger`/`StaggerItem`), hover/press elevation on cards and buttons, the one quiet hero float, and route transitions (`PageTransition`) — fast (200–500ms), ease-out, no bounce.
- **lucide-react** for all icons.
- **sonner** for toast feedback on forms.

**Motion conventions (locked, `src/components/motion/`):**
- `Reveal` — single-block fade/slide-in, triggers once via `whileInView`.
- `Stagger` + `StaggerItem` — wrap card grids/lists for a cascading reveal (`staggerChildren`); use instead of manually offsetting `Reveal` delays.
- `Counter` — scroll-triggered count-up for stats; jumps straight to the final value under reduced motion.
- `PageTransition` — wraps `{children}` in the root layout for a quick cross-fade between routes.
- The hero's `HeroMark` is the **only** continuous/looping animation on the site (slow vertical float) — no other looping motion.
- The whole app is wrapped in `<MotionConfig reducedMotion="user">` (`src/app/layout.tsx`) so transform/loop animations are automatically disabled for users with `prefers-reduced-motion` set; opacity fades still play.

**Layout principles:**
- Full-width hero, cream-dominant with sparse green/gold accent marks (no solid green blocks).
- A subtle geometric pattern motif (`PatternDivider`) used sparingly as a section divider.
- Generous spacing; dignified, not corporate-cold.
- Mobile excellence before desktop; phone nav uses a slide-in Sheet, and the wordmark shortens to "Iwhuruohna" below the `sm` breakpoint to avoid crowding.
- All interactive controls keep a minimum 44×44px touch target (nav icons, theme toggle, sheet/dialog close, tabs, social icons).
- Imagery-forward sections (festivals, pageants, wrestling, gatherings, the flag) once real photography is provided — see §12.

---

## 10. Build roadmap

**Phase 1 — Static core (launch target)**
1. Scaffold Next.js + Tailwind; init GitHub repo; first deploy to Vercel (live URL day one).
2. Build Navbar + Footer + design tokens (colors/fonts from flag).
3. Build Home, About, History, Contact (content hard-coded for now).
4. Build the full multi-section homepage, plus News, Articles, Events, and Join pages with placeholder content (`src/lib/placeholder-data.ts`) — all marked with `TODO(supabase)` for Phase 2.
5. SEO basics + Open Graph image. **→ Ship & share.**

**Phase 2 — Backend + admin**
6. Create Supabase project; add tables (incl. `articles`, `members`), RLS, storage bucket; wire env vars.
7. Build admin login + dashboard.
8. Convert News, Articles, and Events to dynamic (read from Supabase); replace `placeholder-data.ts`.
9. Persist `/join` registrations to `members`; show a live member count on the homepage stats band.
10. Build Stories page + submission form + approval flow.

**Phase 3 — Polish & grow**
11. Gallery + albums (replace homepage teaser); social embeds.
12. Newsletter capture; Get Involved page.
13. Performance + accessibility + final design pass.
14. (Optional) custom domain.

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

- [x] **Logo** — official crest (`public/images/logo.png`, transparent PNG) is in use in the Navbar, Footer, and as the site favicon (`src/app/icon.png`, a 512×512 padded square crop generated from the source crest so it isn't squished in browser tabs)
- [ ] Iwhuruohna **flag** image — still needed to finalize/confirm the color palette (current palette is a placeholder direction, not yet flag-derived)
- [ ] **Mission statement** + short "Who We Are" paragraph
- [ ] **History** content for the flagship page (rough notes are fine)
- [ ] **Photos** cleared for use (events, culture, people)
- [x] **Leadership** — first leader live: Emeka Ihruoha, IFM Supreme Leader (`public/images/leader.jpg`, `src/lib/leaders-data.ts`). Shown in the Home hero, a homepage Leadership section, and reused inside the About page's Leadership tab via `LeadershipSection`/`LeaderCard`. Each leader has a placeholder for a short message/quote until supplied — more leaders can be added by extending the `LEADERS` array.
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
