# Aura Coffee — Comayagua

A single-page site for **Aura Coffee**, a café-by-day / cocktail-bar-by-night
spot in Comayagua, Honduras. Built as a static site with a scroll-driven
day → night color transition, an animated hero, and an accordion menu.

## Structure

This is a static site with no build step:

- `index.html` — the entire page (markup, styles, and vanilla JS inline).
- `vercel.json` — minimal Vercel config (clean URLs).

## Deploying to Vercel

No local dev server is needed. To deploy:

1. Push this repo to GitHub (already done if you're reading this from the repo).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Leave the framework preset as **Other** — Vercel will detect and serve
   `index.html` automatically with zero configuration.
4. Click **Deploy**.

Every push to the connected branch will trigger a new deployment
automatically once the project is linked.

## Local preview (optional)

If you ever want to preview it locally, just open `index.html` directly in
a browser, or serve the folder with any static file server, e.g.:

```bash
npx serve .
```
