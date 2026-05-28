# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Next.js dev server at http://localhost:3000
- `npm run build` — production build
- `npm start` — serve the production build
- `npm run lint` — run `next lint`

Requires Node.js >= 22 (see `package.json` `engines`).

## Architecture

Personal portfolio site built with **Next.js 14 App Router** (JavaScript, not TypeScript). React 18, Tailwind CSS with `@tailwindcss/typography`, and `react-markdown`. The path alias `@/*` resolves to the repo root (see `jsconfig.json`), so imports like `@/data/blog` and `@/app/components/...` are used everywhere.

### Top-level layout

- `app/` — App Router routes and components. `layout.jsx` defines the global Navbar + Footer chrome and the SEO/OpenGraph/Twitter metadata template (all page-level metadata extends from this pattern).
- `app/components/` — shared UI components used by `app/page.jsx` (Hero, Experiences, ProjectFeatures, Educations, Technologies, FashionGallery, SocialLinks, etc.).
- `app/util/index.js` — exports `homeUrl` (production URL) and `defaultImage` (OG fallback). Every page's metadata imports these.
- `data/blog/index.js` — static array of blog metadata (id, title, description, technologies, image). The `id` is the lookup key everywhere.
- `public/markdown/<id>.md` — the actual blog content. The id in `data/blog/index.js` must match a markdown filename here.
- `public/` — static assets (banner.png, music.mp3, pdf/, assets/).

### Blog system (important to understand)

Blogs are split across two locations and joined by id:

1. `data/blog/index.js` — metadata array, used for the listing page and for `generateMetadata` on the detail page.
2. `public/markdown/<id>.md` — body content.

The detail route `app/blogs/[id]/page.jsx`:
- Server-side: finds the matching blog by id, generates OG/Twitter metadata, and computes "similar blogs" (blogs that share any technology tag, case-insensitive).
- Client-side: `BlogDetail.jsx` (`"use client"`) `fetch`es `/markdown/<id>.md` from the public directory at runtime and renders it via `MarkdownRenderer` (a `react-markdown` wrapper styled with Tailwind `prose-*` classes).

When adding a new blog, you must add **both** an entry in `data/blog/index.js` **and** a `public/markdown/<id>.md` file with a matching id.

### Projects page

`app/projects/page.jsx` is an async server component that fetches `https://api.github.com/users/Re4ch-Jay/repos` at request time and passes the result to `ProjectList`. There is no caching configuration, so this hits GitHub on each render.

### Comments

`app/components/Comments.jsx` injects the [Utterances](https://utteranc.es/) widget bound to the `Re4ch-Jay/phatpanhareach` GitHub repo (issues are used as the comment thread, keyed by URL). It mounts a `<script>` on the client; the component must remain a client component and is `useMemo`-wrapped in `BlogDetail.jsx` to avoid duplicate script injection.

### Styling

Tailwind only — no CSS modules or styled-components. The site's signature look is the `bg-gradient-to-br from-gray-900 to-gray-500` wrapper applied in `app/layout.jsx`; pages render against this dark gradient. Markdown content relies on the typography plugin's `prose-*` modifiers (see `MarkdownRenderer.jsx`) to keep text readable on the dark background.