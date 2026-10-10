# PixelMetrics website

Marketing site for PixelMetrics, built with [Astro](https://astro.build) from the
Claude Design handoff "Direction D · Live Resolution" (`project/`, `chats/`).

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npx astro check   # type check
```

## Pages

| Route | File |
| --- | --- |
| `/` | `src/pages/index.astro` · hero, services, method, proof, why us, call to action |
| `/work/` | `src/pages/work/index.astro` · case studies plus more client work |
| `/work/<slug>/` | `src/pages/work/[slug].astro` · case study: result, screenshots, before and after |

## Brand system in code

- **Tokens** (night, ink, D1 to D3, graphite, bone, lime) and shared patterns: `src/styles/global.css`
- **Wordmark**: `src/components/Wordmark.astro`. The first i's dot is the lit pixel.
- **One pixel effect: pixel in.** Screenshots build from coarse blocks to sharp over about 1.4 seconds, once,
  as they scroll into view (`src/components/Shot.astro` + `src/scripts/pixelate.ts`). It is the only
  pixel animation on the site; keep it that way so the site stays calm. It is skipped for visitors who
  turn off motion.
- Lime is a location, not an accent: the logo's dot, the full stop on big headlines, the open service.
- **Case studies** live in `src/data/work.ts`, screenshots in `src/assets/work/`. The first image leads
  the case study and the card; a `phone: true` image sits beside the others.

## Before launch

- Anything wrapped in `todo()` in `src/data/work.ts` renders with a dashed outline. None are left today.
- **Booking**: CTAs open `mailto:hello@pixelmetrics.dev` (the mailbox still needs setting up) (`src/data/site.ts`). Swap `BOOK_URL` for a
  booking link when you have one.
- **Fonts**: Newsreader and Hanken Grotesk from Google Fonts stand in for licensed type.
- `site` in `astro.config.mjs` is set to `https://pixelmetrics.dev`.
- No em dashes in the copy.
