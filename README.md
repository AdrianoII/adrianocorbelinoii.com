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

## CV

The CV is authored once in [`cv/cv.qmd`](cv/cv.qmd) ([Quarto](https://quarto.org)) and
rendered into two committed artifacts:

- `public/Resume_EN.pdf` — the downloadable PDF
- `src/content/cv.generated.html` — a body-only HTML fragment injected into `/cv`

To regenerate after editing `cv/cv.qmd` (requires the Quarto CLI):

```bash
./cv/build.sh
```

Commit the regenerated artifacts. A GitHub Action ([`.github/workflows/cv.yml`](.github/workflows/cv.yml))
also re-renders and commits them automatically on any push that touches `cv/`.
