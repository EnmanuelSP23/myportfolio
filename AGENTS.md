<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project: myportafolio — "Enmanuel.it"

Personal IT portfolio site for Enmanuel Sanchez (GitHub: EnmanuelSP23). Single-page, statically prerendered.

## Stack & commands
- Next.js 16.2.10 (App Router, Turbopack) · React 19 · TypeScript · Tailwind 4 · `next/image` for images
- `npm run dev` (port 3000) · `npm run build` · `npm run start` · `npm run lint` — always run lint + build after edits

## Structure
- `app/page.tsx` composes: Navbar → Hero → About → Projects → Contact → Footer
- `app/components/*.tsx` — one component per section, all server components (no "use client" yet)
- `public/projects/*.jpg` — screenshots of each portfolio project (captured headless-Chrome from the running apps)
- `public/resume.pdf` — resume (Contact "Resume →" link is still `href="#"`)

## Design conventions
- **Section spacing:** `py-20 sm:py-28 px-6 sm:px-12 ... scroll-mt-16`.
  Do NOT use `min-h-[80vh] sm:min-h-screen flex items-center` — it made huge gaps between sections (removed 2026-09-25). Hero keeps `min-h-screen` intentionally.
- **Terminal motif** (Hero right column + Projects cards): `rounded-2xl bg-white border shadow-sm`, title bar `bg-gray-100 border-b` with red/yellow/green dots + centered `text-xs font-mono` title, body `font-mono text-xs sm:text-sm`, emerald `sysadmin@node-01:~$` prompts, `bg-gray-100 border rounded-lg` inset boxes with cyan labels. Match this when adding components.
- Palette: gray-50 page, gray-900 headings, blue-600 accents, emerald status, cyan inset labels.

## Content status (as of 2026-09-25)
- **Projects (done):** 4 terminal-style cards in 2×2 grid (`md:grid-cols-2`) — Shema, DailySpending, Laundry 1.0, Elly's Party Rentals. Data lives in the `projects` array in `app/components/Projects.tsx` (title, slug, desc, tags, img, url). Whole card links to its GitHub repo.
- **About:** user-authored personal narrative (CompTIA Tech+ in progress → A+ / Security+ planned). Do not rewrite his text.
- **Hero subtitle:** user-edited ("programming, system administration, cyber security, troubleshooting...").

## TODO / open threads
1. **Certifications & Languages section** — agreed to add a terminal-style strip in the empty band between Hero and About (user pointed at it). Details to be extracted from his Google Site:
   `https://sites.google.com/northshore.edu/myportfolio/home?authuser=2`
   — currently requires Google sign-in; user will either make it public ("Share → Anyone with the link") or paste cert/language details directly.
   Languages confirmed: Spanish + English (levels TBD). Certs: CompTIA path (confirm exact names/status — never invent credentials).
2. Contact section: `GitHub → LinkedIn → Resume →` links are all `href="#"` — need real URLs (resume can point to `/resume.pdf`).
3. Contact email is `enmanuel@example.com` — needs his real address.
