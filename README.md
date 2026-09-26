# The Pizza Crown — "Taste Above All"

A production-ready website for The Pizza Crown, a 100% pure vegetarian pizza
restaurant in Mamura, Sector 66, Noida.

## Tech stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS 3
- Framer Motion (page-load and scroll animations)
- Lucide React (icons)

The site is a single-page experience with anchor navigation (Home, Menu,
About, Location, Contact) — no router is included since none of the routes
need their own URL.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL to view the site.

## Build

```bash
npm run build
```

This runs a TypeScript project check (`tsc -b`) followed by `vite build`,
producing a static site in `dist/`.

## Deploying to Vercel

This is a standard static Vite app — no backend is required.

1. Push this project to a Git repository.
2. Import the repository in Vercel.
3. Framework preset: **Vite**. Build command: `npm run build`. Output
   directory: `dist`.
4. Deploy.

No environment variables or serverless functions are required.

## Photography

Menu, hero and about-section photos are real, unbranded vegetarian pizza
photography sourced under the free-to-use Unsplash License (commercial use
allowed, no attribution required), mapped by topping "tone" in
`src/data/images.ts`. No competitor branding (Domino's, Pizza Hut, etc.) is
used anywhere — that would be another brand's copyrighted, trademarked
imagery. Swap any URL in that file for your own restaurant's photos whenever
you have them; each `<img>` already has descriptive alt text and lazy
loading.

## Editing the menu

All menu content lives in one place: `src/data/menu.ts`. Every category and
item is typed (`src/types/menu.ts`), so adding, removing or re-pricing a
pizza only requires editing that one file — no component changes needed.

## Ordering flow

The site has no backend or payment processing. Every "Order" button builds a
pre-filled WhatsApp message (via `src/lib/whatsapp.ts`) to
`+91 7217843839`, and phone buttons use `tel:` links to
7217843839 / 9953623166.

## Business information

Only information provided by the restaurant is included on the site
(address, phone numbers, menu, prices). No opening hours, ratings, reviews,
social profiles, or other unverified details have been added — add these
yourself in the relevant components once confirmed.
