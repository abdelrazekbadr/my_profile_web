# abdelrazek.github.io

Interactive professional profile — a single static page, no build step, no dependencies.

## Deploy as your GitHub profile site

1. Create a **public** repository named exactly `<your-username>.github.io`
   (for example `abdelrazekbadr.github.io`).
2. Upload `index.html`, `data.js`, `app.js`, `.nojekyll` and the `logos/` folder to the repository root.
3. Go to **Settings → Pages**. Under *Build and deployment*, set **Source: Deploy from a branch**,
   **Branch: `main` / `(root)`**, then **Save**.
4. The site is live at `https://<your-username>.github.io` within a minute or two.

Via the command line:

```bash
git init
git add .
git commit -m "Profile site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
git push -u origin main
```

## Company logos

All five are already in `logos/` and wired up:
`laplace.png`, `qwaed.png`, `genius-valley.png`, `samtia.png`, `advanced-photonix.png`.

To swap one, replace the file keeping the same name (transparent PNG, ~700px wide).
White or very light artwork needs `dark: true` on that company in `data.js` — that
puts a navy tile behind the logo so it stays visible on a white card. If a file is
ever missing, the card falls back to a quiet `LOGO` slot rather than breaking.

## Editing the content

Everything you'd want to change lives in **`data.js`**:

- `TIMELINE` — career entries (years, role, bullets, the "More on this" text, technology tags)
- `CHAIN` — `employer` (Laplace), then `placements`: each placement has its own years, `companies` (the sister-company group) and `clients` (that group's customers)
- `PROJECTS` — the Work grid
- `FILTER_TAGS` — which technology chips appear as filters
- `SKILLS` — the searchable skills groups

`index.html` holds the hero copy, the Background section and the footer.
`app.js` is behaviour only — you shouldn't need to touch it.

## Removing your phone number

It's in two places in `index.html`: the footer link `tel:+201014134331`.
Delete that one `<a>` line if you'd rather not publish it.
