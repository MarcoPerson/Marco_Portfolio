# Marco Portfolio — Next.js (SSR/SSG)

Personal portfolio of Merveilles AGBETI-MESSAN, migrated from Create React App
to **Next.js 14 (App Router)**. Pages are statically generated, so the full
HTML — including all content and Open Graph / Twitter meta tags — is served on
the first request. This makes the site fully fetchable by crawlers and
link-preview bots (LinkedIn, Twitter/X, Slack, Google, etc.) without running
JavaScript.

## Requirements

- Node.js 18.17 or newer

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel

Push this folder to a GitHub repo and import it at https://vercel.com/new.
Vercel auto-detects Next.js — no configuration needed. Or from the CLI:

```bash
npm i -g vercel
vercel
```

## Project structure

```
app/
  layout.js       Root layout (Server Component) — exports full metadata
  page.js         Home page — assembles all sections (Server Component)
  providers.jsx   Client wrapper: ThemeProvider + Microsoft Clarity + .App shell
  globals.css     Global reset / base styles
components/        All UI sections (.jsx + matching .css)
context/
  darkcontext.js  Dark-mode theme context (client)
data/
  content.json    All site copy / content
  data.js         Projects and certifications arrays
hooks/
  useContent.js   Reads content.json
public/
  assets/         Images, icons, CVs, favicon
```

## Notes on the migration

- Components that use hooks, context, `emailjs`, `react-hook-form`, or the AOS
  scroll-animation library are marked `"use client"`. Pure layout files
  (`layout.js`, `page.js`) stay Server Components so their HTML is prerendered.
- Metadata (title, description, canonical, Open Graph, Twitter) is now defined
  via the `metadata` export in `app/layout.js`, sourced from `content.json`.
  Update `data/content.json` → `meta` to change it, and set `meta.url` to your
  final production domain so canonical/OG URLs resolve correctly.
- Poppins is loaded via a stylesheet `<link>` in the layout head, matching the
  original app. If you prefer self-hosted fonts with zero external requests,
  switch to `next/font/google`.
- The theme toggle applies an inline background colour to the `.App` container;
  the News and Research dark-mode CSS keys off that exact value, so it was kept
  verbatim.
