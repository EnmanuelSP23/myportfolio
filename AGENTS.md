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
- `app/components/*.tsx` — one component per section, all server components (no "use client" yet). Exception: `Certifications.tsx` is a card (no section/h2) rendered inside About's right column (`lg:col-span-5`); About is `lg:grid-cols-12` with narrative at `lg:col-span-7`.
- Navbar has a "Certs" link → `#certifications` (id lives on the card wrapper, `scroll-mt-24`).
- `public/projects/*.jpg` — screenshots of each portfolio project (captured headless-Chrome from the running apps)
- `public/resume.pdf` — resume (Contact "Resume →" link opens it in a new tab)

## Design conventions
- **Section spacing:** `py-20 sm:py-28 px-6 sm:px-12 ... scroll-mt-16`.
  Do NOT use `min-h-[80vh] sm:min-h-screen flex items-center` — it made huge gaps between sections (removed 2026-09-25). Hero keeps `min-h-screen` intentionally.
- **Terminal motif** (Hero right column + Projects cards): `rounded-2xl bg-white border shadow-sm`, title bar `bg-gray-100 border-b` with red/yellow/green dots + centered `text-xs font-mono` title, body `font-mono text-xs sm:text-sm`, emerald `sysadmin@node-01:~$` prompts, `bg-gray-100 border rounded-lg` inset boxes with cyan labels. Match this when adding components.
- Palette: gray-50 page, gray-900 headings, blue-600 accents, emerald status, cyan inset labels.
- **Terminal animations (added 2026-09-25, pure CSS in `app/globals.css`):** `.tw` + `.tw-career`/`.tw-neofetch` type command spans via `@keyframes typing` (width 0 → `var(--tw-w)` in `ch`, `steps(n)` = char count — set `--tw-w: Nch` and `steps(N)` together). `.term-line` + Tailwind `delay-[X.Xs]` staggers `@keyframes term-fade` on output lines (comment 0s → status 1.6–2.2s → prompt2 2.5s → box 3.7s → final prompt 4s). All text stays in the HTML (SEO/no-JS safe) — keep it this way; no client-component typewriters. `prefers-reduced-motion` block disables everything.

## Content status (as of 2026-09-25)
- **Projects (done):** 4 terminal-style cards in 2×2 grid (`md:grid-cols-2`) — Shema, DailySpending, Laundry 1.0, Elly's Party Rentals. Data lives in the `projects` array in `app/components/Projects.tsx` (title, slug, desc, tags, img, url). Whole card links to its GitHub repo.
- **About:** user-authored personal narrative (CompTIA Tech+ earned, A+ in progress → Network+ / Security+ planned). Do not rewrite his text.
- **Hero subtitle (adjusted 2026-09-25 at user request):** "Welcome to my IT portfolio. I'm building hands-on skills in programming, system administration, cyber security, troubleshooting, and IT support — always learning, always building."
- **Hero honesty pass (2026-09-25):** badge → "Cybersecurity & IT Support"; headline → "Building My Path in Cybersecurity & IT Systems"; competency tags → Cybersecurity, System Administration, Programming (Python / JavaScript), AI Tools & Automation, Troubleshooting & PC Fixes, IT Support & ITSM; stats row → Tech+ Certified / 5 Certificates Earned / 2 Languages; About chips → Linux, Windows, Python, JavaScript, HTML & CSS, Bash, Cybersecurity, Networking, Troubleshooting. Do NOT reintroduce cloud/K8s/Terraform/SRE claims (no AWS/Azure/DevOps/uptime stats — user has never held those roles). Terminal prompts/title bars (Hero + Footer) are `sysadmin@node-01` — no more `cloud-node`.
- **Hero terminal (edited 2026-09-25):** reflects real profile — `systemctl status career` (Tech+ CERTIFIED, A+ IN PROGRESS, cybersecurity ACTIVE, AI & programming DEVELOPING) + `neofetch --tech-stack` (Linux/Windows, security, AI tools, Python/JS/HTML/CSS, Bash/PowerShell). No invented cloud/K8s/CCNA claims.
- **Certifications & Languages (done 2026-09-25):** terminal-style card inside About's right column (`app/components/Certifications.tsx`, single-column cert list). Certs: CompTIA Tech+ (certified), CertNexus CyberSafe, Customer Service Foundations, Customer Service: Problem-Solving and Troubleshooting, IT Service Desk: Customer Service Fundamentals, + CompTIA A+ (in progress, yellow marker). Languages: Spanish (native), English (advanced).

- **Contact (done 2026-09-25):** all links live — GitHub `https://github.com/EnmanuelSP23`, LinkedIn (new tab), Resume `/resume.pdf` (new tab); email `enmanuelsanchezp23@gmail.com`; copy = "Open to IT support, help desk, and cybersecurity opportunities — or any project where I can keep learning. Let's talk."
- **SEO metadata (done 2026-09-25):** `layout.tsx` exports title/description/keywords/openGraph/twitter ("Enmanuel.it" siteName). No `og:image` or `metadataBase` yet — add at deploy time when domain exists.

## TODO / open threads
1. Deploy-time: Vercel + `enmanuel.it` domain, `metadataBase`, OG image, analytics.
2. Nice-to-haves user deferred: References section (from his Google Site), Goals timeline, cert PDF links (`public/certs/`), live demo URLs on projects, dark mode, contact form.
