# Abdelrazek Badr — Profile Site

Interactive professional profile for **Abdelrazek Elsaied Badr** — Software Engineering Technical Lead & Software Architect (Odoo ERP, Next.js B2B commerce, distributed engineering teams). A single static page: no build step, no runtime dependencies.

**Live:** <https://abdelrazekbadr.github.io/my_profile_web/>

## How this is deployed

This repository serves the site straight from the `docs/` folder on `main` — GitHub Pages is already configured that way (**Settings → Pages → Source: Deploy from a branch → Branch: `main` / `docs`**). To publish a change, just commit and push:

```bash
git add docs/
git commit -m "Update profile content"
git push
```

The site rebuilds within a minute or two.

## What's in `docs/`

| File | Purpose |
| --- | --- |
| `index.html` | Page markup, all CSS, hero copy, highlights strip, "In my own words" quotes, Background section, footer, and the `<head>` metadata (title, description, Open Graph/Twitter cards, canonical URL, JSON-LD `Person` schema) |
| `data.js` | **All career content.** Edit this file for anything factual — see below |
| `app.js` | Behaviour only (timeline filtering, the employment-chain renderer, the Work grid filter, skills search, nav scroll-spy) — shouldn't need to change when updating content |
| `resume.pdf` | Downloadable résumé, linked from the hero and footer (`Download résumé (PDF)`) |
| `og-card.png` | **Referenced by the Open Graph/Twitter meta tags but not yet added.** Until this exists, links shared on LinkedIn/Slack/WhatsApp will preview with no image. Add a 1200×630 PNG here (reuse the ink/brass palette + Fraunces headline) to fix that |
| `logos/` | Company logos for the "Delivery model" section |
| `.nojekyll` | Tells GitHub Pages not to run Jekyll over the files (needed since none of this is Jekyll content) |

## Editing career content — all in `data.js`

- **`TIMELINE`** — career entries: years, role, org, bullet points, the "More on this" expandable text, and technology tags. Each entry's `era` (`now` / `ksa` / `early`) controls which era filter tab shows it; `flag` (`now` / `odoo` / empty) controls the timeline dot styling.
- **`CHAIN`** — the "Delivery model" section: `employer` (Laplace Software, the constant), then `placements` — each with its own `years`, `companies` (the sister-company group placed with) and `clients` (that group's actual customers: ministries, STC, King Saud University, SAMTIA, etc.).
- **`PROJECTS`** — cards in the Work grid. Each needs a `tags` array matching entries in `FILTER_TAGS` to be filterable.
- **`FILTER_TAGS`** — which technology chips appear as filters above the Work grid, in display order.
- **`SKILLS`** — grouped, searchable skill tags shown in the Skills section.

Anything else — the hero headline/lede, the highlights strip, the four "In my own words" quotes, the Background/Education/Languages lists, and the footer — lives directly in `index.html`.

## Company logos

Five are in `logos/` and already wired to `CHAIN` in `data.js`: `laplace.png`, `qwaed.png`, `genius-valley.png`, `samtia.png`, `advanced-photonix.png`.

To swap one, replace the file keeping the same name (transparent PNG, ideally ~350–400px wide — the current files are 700px and heavier than they need to be for how small they render). White or very light artwork needs `dark: true` set on that company's entry in `data.js`, which puts a navy tile behind the logo so it stays visible on a white card. If a file is ever missing, the card falls back to a quiet `LOGO` placeholder instead of showing a broken image.

## Keeping this in sync with the CV

`data.js` is the most detailed and current version of the career narrative — treat it as the source of truth, and update `01_Resume/Abdelrazek_Badr_CV_2026.md` (in the main `Preparing_Interviews` repo) from it when either changes, rather than maintaining both by hand.
