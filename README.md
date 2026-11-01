# KoffeeMan website

Public website for **Koffee Man** (also KoffeeMan), a café in NSP, Pitampura, Delhi.

This repository rebuilds the approved design prototype as a Next.js App Router app. The HTML prototype in `reference/` is a design reference only and is not served.

Sample photographs currently in `public/images/` are illustrative placeholders extracted from the prototype. Replace those files with original photography later; keep `src/data/images.ts` as the path map.

## Stack

- React + Next.js App Router + TypeScript (`strict`)
- Tailwind CSS
- Vitest + React Testing Library
- Playwright (browser tests)
- npm

There is no backend, cart, login, or payment flow in v1.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Local preview |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript |
| `npm run test` | Unit/component tests |
| `npm run test:e2e` | Playwright (install browsers once with `npx playwright install`) |
| `npm run build` | Production build |
| `npm run audit:prices` | Fail if currency/price symbols appear in source |

No environment secrets are required. See `.env.example`.

## Folder map

- `reference/` — owner prototype (not public)
- `public/images/` — replaceable brand, hero, menu, gallery assets
- `src/app/` — routes
- `src/components/` — layout, UI, menu, sections, locations
- `src/data/` — menu, locations, events, site config, image paths
- `src/lib/` — small helpers
- `tests/e2e/` — Playwright
- `.cursor/rules/` — agent constraints (no prices, tokens, security, git approval)

## Git

Work on feature branches from `develop`. Do not commit, merge, push, or deploy without an explicit approval from the owner.

## Deploy

### Cloudflare Pages (Free Plan)

The application is configured for zero-cost static hosting on **Cloudflare Pages Free Plan**:
- Unlimited bandwidth, global Anycast CDN edge caching, and automated SSL/TLS (HTTPS).
- Build command: `npm run build`
- Output directory: `out`
- Framework preset: `Next.js (Static HTML Export)`

#### Step-by-Step Setup:
1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/) and navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
2. Select the GitHub repository `Simran688/koffeman`.
3. Set the build configuration:
   - **Framework preset**: `Next.js (Static HTML Export)`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Environment variables**: Add `NODE_VERSION` with value `20`
4. Click **Save and Deploy**. Cloudflare will build the site and assign a free preview URL on `*.pages.dev`.
5. **Preview Deployments**: Every Git branch or Pull Request pushed to GitHub automatically generates an isolated preview deployment URL.
6. **Production Domain**: The `main` or `develop` branch deploys to `<project-name>.pages.dev`. A custom domain (such as `koffeeman.in`) can be connected under Custom Domains with free automatic SSL certificates.
7. **Security Headers**: Cloudflare Pages automatically serves strict security headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`) from the edge using the root `public/_headers` file.
