# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static event website for OpenClaw SD Weekend (openclawsd.com), built with Astro 5.

## Commands

- `npm run dev` -- start dev server
- `npm run build` -- production build to `dist/`
- `npm run preview` -- preview production build
- `npm run og` -- generate OG image via `scripts/generate-og-image.mjs`

No linter or test suite is configured.

## Architecture

Single-page Astro site with static output. All event data (events, communities, sponsors, organizers) is defined inline in the frontmatter of `src/pages/index.astro` -- there is no CMS or data layer.

- `src/pages/index.astro` -- main site page; contains all data arrays and HTML
- `src/pages/agents.md.ts` -- Astro endpoint that serves event details as plain markdown at `/agents.md`; duplicates data from index.astro
- `src/pages/404.astro` -- custom 404 page
- `src/styles/global.css` -- all styles in one file
- `src/assets/images/` -- images processed by Astro's `<Image>` component (optimized at build)
- `public/` -- static assets served as-is (logos, favicons, organizer headshots)

When event data changes, update both `index.astro` and `agents.md.ts` to keep them in sync.
