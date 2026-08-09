# Aura Coffee — Comayagua

A single-file pitch page for **Aura Coffee**, a café in Comayagua, Honduras that
runs as a specialty coffee shop by day and a cocktail bar by night.

## What's here

- `index.html` — the entire site (structure, styles, and script all in one file)
- `assets/images/` — venue photography used throughout the page

No build step or dependencies — it's a single static HTML file.

## Making it yours

The photos currently in `assets/images/` are AI-generated placeholders standing
in for real venue photography. Each spot to swap is marked with an HTML
comment in `index.html`:

- `aura-hero.jpg` — the full-bleed cover photo behind the headline
- `aura-day.jpg` — the daytime café photo in the "La cafetería" card
- `aura-night.jpg` — the nighttime bar photo in the "La barra" card
- `aura-location.jpg` — the facade photo in the "Ubicación" section

Replace those four files with real photos of the place (same filenames, or
update the `src` attributes in `index.html` to match new filenames), then
update the menu items/prices and contact details to match reality.

## Deploying

Since this is a single static HTML file, it can be deployed as-is to any
static host (Vercel, Netlify, GitHub Pages, etc.) — just upload the project
root, or point your host at `index.html`.
