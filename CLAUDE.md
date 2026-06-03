# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Next.js dev server at http://localhost:3000
- `npm run build` — production build
- `npm start` — serve the production build
- `npm run lint` — run `eslint .` (flat config via `eslint-config-next`)

Requires Node.js >= 22 (see `package.json` `engines`).

## Architecture

Personal portfolio site built with **Next.js 16 App Router** (JavaScript, not TypeScript), **React 19**, Tailwind CSS with `@tailwindcss/typography`, and `react-markdown`. The path alias `@/*` resolves to the repo root (see `jsconfig.json`), so imports like `@/data/blog` and `@/app/components/...` are used everywhere.

### Top-level layout

- `app/` — App Router routes and components. `layout.jsx` defines the global chrome (Navbar, Footer, ScrollToTop, the `hero-glow` background) and the SEO/OpenGraph/Twitter metadata template. **Every page replicates this metadata pattern** (a `title`/`description` plus matching `openGraph` and `twitter` blocks); copy an existing page's `export const metadata` when adding a route.
- `app/components/` — shared UI used by `app/page.jsx` and the list pages.
- `app/util/index.js` — exports `homeUrl` (production URL) and `defaultImage` (OG fallback). Every page's metadata imports these.
- `data/` — static content arrays joined to pages by convention: `data/blog/index.js`, `data/certifications/index.js`, `data/gallery/index.js`.
- `public/markdown/<id>.md` — blog body content (see Blog system).
- `public/` — static assets (banner.png, music.mp3, pdf/, assets/, including `assets/certification/` and `assets/galleries/` referenced by the data arrays).

### Theming (read before touching any styling)

The signature dark-gradient look described in older docs is **gone**. The site now uses a semantic-token theme with a light/dark toggle:

- `tailwind.config.js` has `darkMode: 'class'` and maps named colors (`bg`, `bg-soft`, `surface`, `surface-hover`, `border`, `primary`, `muted`, `subtle`, `accent`, `accent-hover`, `accent-fg`) to CSS variables via `rgb(var(--x) / <alpha-value>)`. Custom extras: `bg-hero-glow`, `shadow-card`, `shadow-card-hover`.
- `app/globals.css` defines those `--x` variables for `:root` (light) and `.dark` (dark) under `@layer base`.
- **Always style with the semantic classes** (`bg-bg`, `text-primary`, `bg-surface`, `text-muted`, `text-accent`, `border-border`, `shadow-card`, …) rather than hard-coded Tailwind palette colors, so both themes track automatically.
- `app/components/ThemeProvider.jsx` (`"use client"`) holds theme state and exposes `useTheme()`. To avoid a flash of the wrong theme, `layout.jsx` inlines `themeInitScript` in `<head>` (it sets the `dark` class from `localStorage` / `prefers-color-scheme` before paint), and `<html>`/`<body>` use `suppressHydrationWarning`. `ThemeToggle.jsx` is the UI control.

### Blog system

Blogs are split across two locations and joined by id:

1. `data/blog/index.js` — metadata array (`id`, `title`, `description`, `technologies`, `image`). The `id` is the lookup key everywhere and drives the listing page and `generateMetadata` on the detail page.
2. `public/markdown/<id>.md` — body content, fetched at runtime.

The detail route `app/blogs/[id]/page.jsx`:
- Server-side: finds the blog by id, generates OG/Twitter metadata, and computes "similar blogs" (blogs sharing any technology tag, case-insensitive).
- Client-side: `BlogDetail.jsx` (`"use client"`) `fetch`es `/markdown/<id>.md` from the public dir at runtime and renders it via `MarkdownRenderer` (a `react-markdown` wrapper styled with `prose-*` typography modifiers, themed against the tokens above).

**When adding a blog you must add both** an entry in `data/blog/index.js` **and** a `public/markdown/<id>.md` file with a matching id.

### List pages ("Lists" dropdown)

`app/games/`, `app/books/`, `app/songs/`, `app/tools/` are simple server pages whose content arrays are declared **inline at the top of each `page.jsx`** (not in `data/`). They share a layout: a "Lists" eyebrow + heading, a count, and a card list, with `Stars.jsx` rendering ratings. To edit a list, edit the array in its `page.jsx`.

### GitHub-backed pages (uncached, network at request time)

- `app/projects/page.jsx` — async server component that fetches `https://api.github.com/users/Re4ch-Jay/repos` and passes results to `ProjectList`.
- `app/statistics/page.jsx` — fetches GitHub followers/repos/stars (plus the local `blogs`/`gallery`/`certifications` counts) for the stats grid.

Neither configures caching, so each render hits the external APIs (and is subject to GitHub rate limits).

### Certifications & gallery

- `app/certifications/page.jsx` + `Certifications.jsx` read `data/certifications/index.js`; `isFeatured: true` surfaces an entry on the home page.
- `app/gallery/page.jsx` + `GalleryGrid.jsx`/`FashionGallery.jsx` read `data/gallery/index.js`; `isFeature: true` surfaces an image in the home preview grid.

### Comments

`app/components/Comments.jsx` injects the [Utterances](https://utteranc.es/) widget bound to the `Re4ch-Jay/phatpanhareach` GitHub repo (issues are the comment threads, keyed by URL). It mounts a `<script>` on the client behind an `injectedRef` guard that survives React StrictMode's dev double-invoke; it must remain a client component and is `useMemo`-wrapped in `BlogDetail.jsx` to avoid duplicate injection. (`Comments copy.jsx` is an unused duplicate.)

### Styling conventions

Tailwind only — no CSS modules or styled-components. Use the semantic theme tokens (see Theming). Markdown content relies on the typography plugin's `prose-*` modifiers in `MarkdownRenderer.jsx` to stay readable in both light and dark mode.