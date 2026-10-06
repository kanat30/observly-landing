# Observly Landing Page

Marketing site for observly.co (Next.js 15, deployed on Vercel). The web app lives at app.observly.co.

## Source of truth

Copy and design come from the GTM repo (`observly-gtm`), not from this README:

- **Page copy:** `02-channels/landing-page/PAGE_SPEC.md` (NYC / Danielson variant)
- **Claims:** `00-foundation/CLAIMS.md` governs every sentence on the site. If a line isn't in SAY, it doesn't go on the page. Nothing in NEVER SAY may appear anywhere in this repo.
- **Brand:** `01-brand/BRAND_MINI.md` (voice A2, product tokens B2)

## Page structure

1. Hero — "From classroom visit to teacher conference in one afternoon." Start free trial + secondary CTA, four trust chips, iPhone + laptop screenshots
2. October IPC strip — hidden automatically from 2026-11-15 (New York time)
3. How it works — Dictate · Draft · Confirm · Share
4. Pillar 1 — same-day feedback, conference with the teacher's voice in it
5. Pillar 2 — goals that travel through the year
6. Pillar 3 — Built for NYC Advance (compliance tracker, Advance Mode, MOTP, walkthroughs, PDF export)
7. Trust block
8. Pricing — Starter / Plus / Max; rows: monthly, annual, seats, AI credits; same features on every tier; trial box
9. FAQ
10. Founder note
11. Final CTA

Primary CTA everywhere: **Start free trial** → https://app.observly.co/signup

## Content architecture

```
lib/content/
├── types.ts              # Content types (hero, seasonal strip, pillars, trust, pricing, founder note…)
├── base.ts               # Shared: product tokens, URLs, contact, trust, pricing, shared FAQs, founder note
├── frameworks.ts         # State → framework map (not used for serving)
├── index.ts              # Resolver; only `danielson` is served
└── variants/
    ├── danielson.ts      # NYC DOE — the live page, plus screenshot slot filenames
    ├── ttess.ts          # Not served; mirrors the NYC copy
    ├── cstp.ts           # Not served; mirrors the NYC copy
    └── generic.ts        # Not served; mirrors the NYC copy
```

`middleware.ts` pins every visitor to NY. Geo headers, `?region=` and the region cookie are ignored. The other variant files are kept but not served; don't add state-specific copy to them before it's in CLAIMS.md.

## Routes

| Route | What it does |
|---|---|
| `/` | Landing page |
| `/trial` | Redirects to https://app.observly.co/signup (the iPhone app's "request trial" opens observly.co/trial) |

Footer links: privacy → https://app.observly.co/privacy, terms → https://app.observly.co/terms, support +1 646 421 8566, kanat@observly.co, App Store.

## Screenshots

Slots show a labelled placeholder until the PNG exists. Drop the files into `public/screenshots/` with the exact names listed in `public/screenshots/README.md`:

`hero-iphone-recording.png` · `hero-laptop-review.png` · `growth-page-phone.png` · `conference-agenda-cards.png` · `goal-thread-web.png` · `compliance-tracker-web.png` · `advance-mode-checklist.png`

## Design

- Product tokens from BRAND_MINI §B2: burgundy `#6B2D3C` primary, ivory `#FAFAF7` background, gold `#D6B545` accent with dark text only (never gold text on light backgrounds)
- Type: Inter (via `next/font`)
- Logos in `public/logo/`: `observly-logo-trim.png` (dark wordmark, light backgrounds) in the header; `logo-dark-trim.png` (cream wordmark) on the burgundy footer. The `-trim` files are cropped from the original 1536×1024 canvases, which are kept alongside.
- Styles live in `app/layout.tsx`; radius and shadow follow the `data-theme` set by `lib/theme`

## Environment variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_GA_ID` | GA4 measurement ID. No analytics load when unset |
| `NEXT_PUBLIC_DEMO_VIDEO_URL` | 90-second demo video. When set, the secondary CTA becomes "Watch the 90-second demo" → `#demo` |
| `NEXT_PUBLIC_BOOKING_URL` | Calendar link for "Book a 20-minute walkthrough" (used while there's no demo video). Falls back to an email to kanat@observly.co |

## Analytics (GA4)

| Event | When | Params |
|---|---|---|
| `cta_trial_click` | Any "Start free trial" click | `location` (nav, hero, seasonal_strip, pricing_starter, pricing_plus, pricing_max, pricing_trial_box, founder, final) |
| `demo_play` | First play of the demo video | — |
| `pricing_view` | Pricing section first scrolled into view | — |
| `faq_open` | An FAQ item is opened | `question` |

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```
