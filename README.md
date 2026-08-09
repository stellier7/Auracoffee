# Aura Coffee

Marketing site for **Aura Coffee**, a small-batch coffee roastery and café — built with [Next.js](https://nextjs.org) (App Router), TypeScript, and Tailwind CSS.

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

- `src/app` — App Router entry points (`layout.tsx`, `page.tsx`, global styles)
- `src/components` — Page sections (`Navbar`, `Hero`, `Story`, `Menu`, `Process`, `Testimonials`, `Visit`, `Footer`)
- `public` — Static assets

## Scripts

- `npm run dev` — Start the development server
- `npm run build` — Create a production build
- `npm run start` — Run the production build locally
- `npm run lint` — Run ESLint

## Deploying to Vercel

This is a standard Next.js app, so it deploys to [Vercel](https://vercel.com) with zero configuration:

1. Push this repository to GitHub/GitLab/Bitbucket.
2. In Vercel, click **Add New… → Project** and import the repo.
3. Leave the framework preset as **Next.js** and click **Deploy**.

No environment variables are required for the base site.
