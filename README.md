# Auracoffee

A single-page pitch site for **Auracoffee** — built to showcase the space with
real photography and make the case for investing in (or partnering with) the shop.

## What's here

- `index.html` — page structure & copy (hero, photo gallery, story, differentiators, the ask, contact form)
- `styles.css` — all styling (warm coffee-shop palette, responsive layout, scroll animations)
- `script.js` — mobile nav toggle, scroll-reveal animations, animated stat counters, contact form handling
- `assets/images/` — photography used throughout the page

No build step or dependencies required — it's plain HTML/CSS/JS.

## Running it locally

```bash
# from the project root
python3 -m http.server 8000
# then open http://localhost:8000
```

Or just open `index.html` directly in a browser.

## Making it yours

1. **Swap the photos.** The images in `assets/images/` are AI-generated
   placeholders standing in for real venue photography. Drop your own photos
   into that folder and update the `src` attributes in `index.html`
   (search for `assets/images/`).
2. **Update the copy.** Edit the hero headline, "Our Story", and
   differentiator cards in `index.html` to reflect your actual brand voice,
   location, and menu.
3. **Update the numbers.** The hero stats and "The Opportunity" section use
   `data-count` attributes for the animated counters — search for
   `data-count` in `index.html` and replace the placeholder figures with your
   real metrics (traffic, revenue growth, raise amount, etc.).
4. **Wire up the contact form.** `#pitchForm` in `index.html`/`script.js`
   currently just shows a confirmation message. Point it at a form backend
   (e.g. Formspree, Netlify Forms, or your own endpoint) to actually collect
   leads.
5. **Update contact/social links** in the footer as needed.

## Deploying

Since this is a static site, it can be deployed as-is to any static host
(GitHub Pages, Netlify, Vercel, Cloudflare Pages, S3, etc.) — just upload the
project root.
