# CLAUDE.md

Guidance for Claude Code (claude.ai/code) when working in this repository.

## Project

**ArteagaMed** is a home healthcare and assistance membership for international (mostly
Northern European, retired) visitors on the northern Costa Blanca: Calpe, Moraira, Benissa,
Teulada and Benidorm. This repo contains only the **public marketing website**
(arteagamed.com). There is no backend, database, login or online payment.

## Stack and layout

- **Next.js 15 (App Router) + TypeScript**, built as a **static export** (`output: 'export'`).
  No server runs in production, so middleware, cookies/headers, server actions, API routes,
  response headers and image optimisation are not available. Keep it that way unless the
  hosting changes.
- Plain CSS Modules plus design tokens in `frontend/src/app/globals.css`; no CSS framework.
- pnpm workspace with a single package, `frontend/`.

```
frontend/
  src/app/(es)/…            Spanish routes at "/" (root layout with <html lang="es">)
  src/app/[locale]/…        en, nl, no, fi under /en, /nl, /no, /fi (second root layout)
  src/app/sitemap.ts, robots.ts
  src/components/pages/     HomePage, TeleassistancePage, LegalPage (take a `locale`)
  src/components/home/      Homepage sections
  src/components/layout/    RootDocument, header, footer, language selector, sticky bar
  src/components/ui/        Button, Icon, Badge, Photo, EmergencyNote, SectionHeading
  src/content/              site facts (phone, towns), plans + prices, photos, testimonials
  src/i18n/                 dictionaries (es/en/nl/no/fi) and locale/URL helpers
  public/images/            photography (CC0 stock for now), public/og.png
scripts/deploy-s3.sh        uploads frontend/out to S3
scripts/design-tokens.mjs   generates frontend/src/app/tokens.css from DESIGN.md
DESIGN.md                   design system (DESIGN.md format, google-labs-code/design.md)
```

## Commands

```
pnpm install
pnpm dev          # http://localhost:3000
pnpm typecheck
pnpm lint
pnpm build        # static site in frontend/out
```

## Deployment

`.github/workflows/deploy.yml` runs on every push to `main` that touches the site. It
typechecks, lints and builds, then `scripts/deploy-s3.sh` syncs `frontend/out` to the S3
bucket and the workflow invalidates CloudFront. Secrets: `AWS_ACCESS_KEY_ID`,
`AWS_SECRET_ACCESS_KEY`, `AWS_REGION`, `S3_BUCKET`, `CLOUDFRONT_DISTRIBUTION_ID`.

CloudFront only maps `/` to `index.html` and has no URL-rewrite function, so the deploy
script also uploads every page under its extensionless key (`teleassistance.html` →
`teleassistance`, `en.html` → `en`) with `Content-Type: text/html`. Internal links must
therefore use extensionless paths without a trailing slash (`/en/teleassistance`).

Test a deploy safely with `scripts/deploy-s3.sh <bucket> --dryrun`.

## Languages

- Spanish is the default and lives at `/`; English, Dutch, Norwegian (bokmål) and Finnish
  live under `/en`, `/nl`, `/no` and `/fi`. There is no automatic language detection.
- Build every URL with `localePath(locale, path)` from `src/i18n/locales.ts`. Never hard-code
  `/` or `/en/...` in components.
- All visible copy lives in `src/i18n/dictionaries/*.ts`. `en.ts` defines the shape and the
  other files use `satisfies Dictionary`, so a missing key fails the typecheck. When copy
  changes, update all five languages.
- Spanish uses _usted_, Dutch _u_, Norwegian and Finnish the informal forms.

## Content rules (healthcare: important)

- Never describe ArteagaMed as insurance, an emergency service, a hospital or guaranteed
  coverage. Always keep 112 as the route for emergencies.
- Prices come only from `src/content/plans.ts`; never type a price into copy, except the
  per-visit extras in the dictionaries.
- Only list towns that are actually served (`site.towns`).
- Do not invent testimonials, credentials, registrations or partnerships. Real
  testimonials go in `src/content/testimonials.ts` (the section stays hidden while empty).
  Unconfirmed trust items show as placeholders in development only.
- Contact is by phone (`site.phone`). Email and WhatsApp are shown once `site.email` /
  `site.whatsapp` are set.

## Design system (DESIGN.md)

`DESIGN.md` at the repo root follows the [DESIGN.md format](https://github.com/google-labs-code/design.md):
YAML tokens (colors, typography, spacing, rounded, components) plus the design rationale in
prose. It is the source of truth for the look of the site.

- Never hard-code colours, font sizes, spacing or radii in CSS. Use the generated custom
  properties (`--color-*`, `--type-<level>-size|weight|line-height|letter-spacing`,
  `--spacing-*`, `--rounded-*`). To change a value, edit `DESIGN.md`, then run
  `pnpm design:tokens` and commit the regenerated `frontend/src/app/tokens.css`.
- `pnpm design:lint` validates DESIGN.md (broken references, WCAG contrast of component
  colour pairs, section order). Keep it at 0 errors and 0 warnings. The deploy workflow runs
  it and fails if `tokens.css` is out of date.
- Fluid sizes come from `-mobile` sibling tokens (e.g. `headline-lg` + `headline-lg-mobile`).
- Quote unitless line heights (`lineHeight: "1.6"`); @google/design.md 0.4.0 drops bare numbers.
- Audience is 60+: body text 18–20px, WCAG AA contrast at minimum, 48px+ tap targets, visible
  focus, semantic HTML, native controls (`<select>`, `<details>`), `prefers-reduced-motion`
  respected. Read DESIGN.md before changing styles.

## Conventions

- TypeScript strict mode (`exactOptionalPropertyTypes` and `noUncheckedIndexedAccess` on).
- Read environment variables only through `src/config.ts`.
- ESLint (typescript-eslint, type-checked) and Prettier (100 cols, single quotes).
