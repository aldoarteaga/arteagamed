# ArteagaMed

Public website for [arteagamed.com](https://arteagamed.com): healthcare and assistance membership
for international visitors on the Costa Blanca. Static Next.js site in five languages
(Spanish by default, plus English, Dutch, Norwegian and Finnish).

```
pnpm install
pnpm dev      # local development
pnpm build    # static export in frontend/out
```

Pushing to `main` deploys automatically to S3 + CloudFront (`.github/workflows/deploy.yml`).
See `CLAUDE.md` and `DESIGN.md` for details.
