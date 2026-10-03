FROM node:22-alpine AS base
RUN npm install -g pnpm@9

# ── deps stage ────────────────────────────────────────────────────────────
FROM base AS deps
WORKDIR /app
COPY pnpm-workspace.yaml package.json pnpm-lock.yaml* ./
COPY packages/shared-types/package.json ./packages/shared-types/
COPY packages/locales/package.json ./packages/locales/
COPY frontend/package.json ./frontend/
RUN pnpm install --frozen-lockfile --filter @eart/web...

# ── build stage ───────────────────────────────────────────────────────────
FROM deps AS build
COPY tsconfig.base.json ./
COPY packages/shared-types ./packages/shared-types
COPY packages/locales ./packages/locales
COPY frontend ./frontend
RUN pnpm --filter @eart/shared-types build
RUN pnpm --filter @eart/locales build
RUN pnpm --filter @eart/web build

# ── production stage ──────────────────────────────────────────────────────
FROM node:22-alpine AS production
WORKDIR /app

RUN addgroup -S eart && adduser -S eart -G eart

COPY --from=build --chown=eart:eart /app/frontend/.next/standalone ./
COPY --from=build --chown=eart:eart /app/frontend/.next/static ./frontend/.next/static
COPY --from=build --chown=eart:eart /app/frontend/public ./frontend/public

USER eart
EXPOSE 3000

HEALTHCHECK --interval=15s --timeout=5s --start-period=30s --retries=3 \
  CMD wget -qO- http://localhost:3000/ || exit 1

ENV HOSTNAME="0.0.0.0"
CMD ["node", "frontend/server.js"]
