# 🏛️ Sarkari Naukari Maharashtra — Next.js SEO-First Government Jobs Portal

**महाराष्ट्र सरकारी नोकरी अलर्ट २०२६** — Latest Maharashtra government job notifications (MPCB Police Bharti, Talathi Bharti, MPSC, Teaching, Banking, Defence, Medical, Group C/D).

Built with **Next.js 14 App Router + TypeScript**, using **React Server Components everywhere** because **SEO is the #1 priority**.

---

## 🚀 Quick Start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all pages pre-rendered on server)
npm start        # serve production build
```

---

## 🔍 SEO Features (Server-Side First)

| Feature | Implementation |
|---|---|
| **100% Server Components** | No `"use client"` anywhere — every page ships as fully-formed HTML from the server |
| **Static Pre-rendering (SSG)** | `generateStaticParams()` builds all `/jobs/[slug]` and `/category/[category]` pages at build time |
| **ISR** | `revalidate = 3600` — hourly server regeneration for fresh job data |
| **Metadata API** | Unique `<title>`, description, keywords, canonical URL per page via `generateMetadata()` |
| **Open Graph + Twitter Cards** | Site-wide in `layout.tsx`; per-job OG tags on detail pages |
| **Dynamic OG Image** | `opengraph-image.tsx` renders a 1200×630 branded image on the server (`next/og`) |
| **JSON-LD Structured Data** | `JobPosting`, `ItemList`, `WebSite`, `BreadcrumbList`, FAQ content → Google Jobs rich results |
| **Microdata** | `itemScope/itemProp` on job cards |
| **sitemap.xml** | Generated server-side (`src/app/sitemap.ts`) with lastmod/priority/changefreq |
| **robots.txt** | Generated server-side (`src/app/robots.ts`) pointing to sitemap |
| **Bilingual keywords** | English + Marathi titles (पोलीस भरती, तलाठी भरती…) for regional search intent |
| **Semantic HTML** | Proper `h1→h2→h3`, `<article>`, `<nav aria-label>`, `<time dateTime>`, breadcrumbs |
| **Core Web Vitals** | Minimal client JS (~96 kB First Load), no layout shift, fast TTFB via static output |

---

## 🗂️ Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout: global metadata, header, footer (server)
│   ├── page.tsx                # Home: featured + latest jobs, JSON-LD ItemList
│   ├── jobs/page.tsx           # All jobs listing
│   ├── jobs/[slug]/page.tsx    # Job detail: SSG + generateMetadata + JobPosting JSON-LD + FAQ
│   ├── category/[category]/page.tsx  # Category pages (police, talathi, mpsc…)
│   ├── about/page.tsx
│   ├── privacy-policy/page.tsx
│   ├── not-found.tsx
│   ├── opengraph-image.tsx     # Server-generated OG image
│   ├── sitemap.ts              # Dynamic XML sitemap
│   ├── robots.ts               # Dynamic robots.txt
│   └── globals.css
├── components/
│   └── JobCard.tsx             # Server Component card with microdata
└── lib/
    └── jobs.ts                 # Server-only data store + helpers (never bundled to client)
```

## ➕ Adding a New Job

Edit `src/lib/jobs.ts` → append to the `jobs` array. Sitemap, home, category and detail pages update automatically on rebuild/revalidate.

> ⚠️ Demo data only. Replace with a CMS/database fetch (still server-side) for production, and verify all details against official recruitment websites.
