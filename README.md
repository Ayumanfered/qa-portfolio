# QA Portfolio — Next.js Personal Website

A production-ready personal portfolio for a QA Engineer / QA Lead, built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Design system

- **Palette**: deep navy (`navy-900/950`), paper/white background, light gray (`mist`), with a muted gold accent (`signal-accent`) and pass/fail signal colors used for QA-flavored UI (badges, checkmarks).
- **Type**: Fraunces (display serif) for headings, Inter (body), IBM Plex Mono for case IDs, labels, and data.
- **Signature motif**: a "test ledger" — dashed rule dividers and an animated checkmark icon used in place of generic bullets, plus an animated "test run" panel in the hero.
- Dark mode via `next-themes`, toggled in the header, respects system preference by default.

## Project structure

```
src/
  app/                  Route segments (App Router) — one folder per page
    about/about            About
    experience/             Experience timeline
    skills/                 Skills breakdown
    projects/               Case studies
    certifications/         Certifications
    blog/                   Blog index + [slug] dynamic post route
    resources/              Downloadable templates
    contact/                Contact form
    layout.tsx              Root layout: fonts, theme, header/footer, SEO defaults
    page.tsx                Home page
    globals.css             Design tokens & base styles
    sitemap.ts / robots.ts  SEO routes
    not-found.tsx           Custom 404
  components/
    layout/               Header, footer
    sections/             Page-specific composed sections (hero, featured projects, etc.)
    ui/                   Reusable primitives (section heading, reveal animation, checkmark, theme toggle)
  data/
    profile.ts            ALL editable content lives here — see "Customization" below
public/
  cv/, templates/         Drop your real PDF/DOCX/XLSX files here (placeholders included)
```

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

Build for production:

```bash
npm run build
npm start
```

## Customization

**Almost everything is editable from one file:** `src/data/profile.ts`. This includes your name, bio, education, skills (with proficiency levels), experience timeline, projects, certifications, testimonials, blog post metadata, and resource list. Editing layout/styling is not required to personalize content.

1. Open `src/data/profile.ts` and replace placeholder values (name, bio, links, etc.).
2. Replace the placeholder files in `public/cv/` and `public/templates/` with your real resume and templates (keep the same filenames, or update the paths in `profile.ts`).
3. Add a real Open Graph image at `public/og-image.png` (1200×630).
4. To extend blog post content, edit `src/app/blog/[slug]/page.tsx`, or swap in MDX/a CMS if you'll publish frequently.
5. Wire the contact form (`src/components/sections/contact-form.tsx`) to a real backend — e.g. Formspree, Resend, or a Next.js API route — by replacing the `handleSubmit` logic.
6. Update `SITE_URL` in `src/app/layout.tsx` and the `base` URL in `src/app/sitemap.ts` to your real domain.

## SEO

- Per-page metadata is set via the `metadata` export on each route.
- `sitemap.ts` and `robots.ts` generate `/sitemap.xml` and `/robots.txt` automatically.
- Open Graph and Twitter card metadata are set globally in `layout.tsx`.

## Accessibility

- Semantic landmarks (`header`, `main`, `nav`, `footer`), skip-to-content link.
- Visible focus rings on all interactive elements (`:focus-visible`).
- `prefers-reduced-motion` is respected — animations are disabled for users who request it.
- Form fields include labels, `aria-invalid`, and `aria-describedby` error wiring.

## Deployment

**Vercel (recommended)** — zero-config for Next.js:
1. Push this repo to GitHub.
2. Import the repo at vercel.com/new.
3. Deploy — no build settings needed.

**Netlify**:
1. Push to GitHub.
2. New site from Git, build command `npm run build`, publish directory `.next` (Netlify's Next.js runtime handles the rest).

**GitHub Pages**: requires `output: "export"` in `next.config.js` and a static export (note: this disables the dynamic blog route's on-demand rendering — pre-render all slugs via `generateStaticParams`, already configured).

## Tech stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · React Icons · next-themes
