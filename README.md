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
| `/work/` | `src/pages/work/index.astro` · work listed by "running since" |
| `/work/<slug>/` | `src/pages/work/[slug].astro` · case study as a zoom to the one pixel it changed |

## Brand system in code

- **Tokens** (night, ink, D1 to D3, graphite, bone, lime) and shared patterns: `src/styles/global.css`
- **Wordmark**: `src/components/Wordmark.astro`. The first i's dot is the lit pixel. The header and
  footer use `pixel="handoff"`, so the logo's pixel goes dark while a live field is on screen.
- **Live Field** (hairline quadtree that halves toward attention, one lit cell):
  `src/components/Field.astro` + `src/scripts/field.ts`
- **Site-wide cursor field**: also in `field.ts`, on the top layer and click-through. Set
  `cursor="off" | "subtle" | "strong"` on `<Base>` (default subtle). It turns off for touch, for
  reduced motion, and while the pointer is over a live field.
- **Resolve-in**: add `data-resolve` to any element. It arrives coarse to fine in 90ms steps
  (`src/scripts/resolve.ts`).
- Lime is a location, not an accent: at most one lit cell per screen, under 1% of a surface.

## Before launch

- **Case study content is placeholder.** Everything wrapped in `todo()` in `src/data/work.ts`
  renders with a dashed outline on the page. Replace each with real copy and metrics.
- **Images**: the card and case-study image slots show a field where the image goes. Each slot is
  marked "Image placeholder".
- **Booking**: CTAs open `mailto:hello@pixelmetrics.co` (`src/data/site.ts`). Swap `BOOK_URL` for a
  booking link when you have one.
- **Fonts**: Newsreader and Hanken Grotesk from Google Fonts stand in for licensed type.
- `site` in `astro.config.mjs` is set to `https://pixelmetrics.co`.
- No em dashes in the copy.
