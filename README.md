# adrianocorbelinoii.com

Personal website of Adriano Corbelino II.

## Stack

- [Next.js 15](https://nextjs.org/) (App Router) + React 19
- TypeScript
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) (Radix) + [lucide-react](https://lucide.dev/)
- Deployed on [Vercel](https://vercel.com/) (+ Vercel Analytics)
- English only, dark theme only, mobile-first

## Getting Started

This project uses [pnpm](https://pnpm.io/).

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project layout

- `src/app/` — routes (`/`, `/cv`, `/projects`) plus typed `sitemap.ts` / `robots.ts`
- `src/components/` — `nav-bar`, `social-links`, and `ui/` (shadcn primitives)
- `src/content/site.ts` — typed site content (bio, links, nav, social)
- `src/lib/utils.ts` — `cn()` class-name helper

## Scripts

```bash
pnpm dev      # dev server
pnpm build    # production build
pnpm start    # serve production build
pnpm lint     # eslint
```
