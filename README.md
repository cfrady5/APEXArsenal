# APEX Arsenal Marketplace — website

Public marketing site for the APEX Arsenal Marketplace, built with Next.js (App Router) and styled directly from the
APEX Arsenal Brand Guidelines (Oswald + Lato, APEX Purple / DoD Black / Hazy Blue section rhythm, purple-washed
grayscale imagery).

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Pages

| Route          | Source copy section |
| -------------- | ------------------- |
| `/`            | Home                |
| `/industry`    | For Industry        |
| `/government`  | For Government      |
| `/resources`   | Resources (videos, FAQ, help desk) |

## Configure call-to-action destinations

Links to the solicitation, rubric, submission portal, government marketplace and office-hours scheduler are read from
environment variables (see `.env.example`). Until a value is set, each link falls back to a pre-addressed email to the
help desk so no button dead-ends. Explainer videos show a "coming soon" poster until an embed URL is provided.

## Brand assets

- `public/brand/` — official logo lockups, APEX mark and X icon (SVG), plus app-icon PNGs.
- `public/images/` — purple-washed photography from the brand guidelines.
- `app/globals.css` — design tokens (`:root`) and every component style. APEX Purple is used as-is for rules,
  bars and large numerals; small text and white-on-purple buttons use the slightly deepened `--purple-ink` /
  `--purple-text` tones so they clear WCAG AA contrast (the true brand purple reaches only 3.8:1 on white).
- Motion is limited to short reveal transitions, a staggered hero entrance and a navigation progress bar, all
  disabled under `prefers-reduced-motion`.
- `lib/content.ts` — focus areas, process steps, checklist and FAQ copy.
