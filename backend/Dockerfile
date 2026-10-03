FROM node:22-alpine AS base
RUN npm install -g pnpm@9

# ── deps stage ────────────────────────────────────────────────────────────
FROM base AS deps
WORKDIR /app
COPY pnpm-workspace.yaml package.json pnpm-lock.yaml* ./
COPY packages/shared-types/package.json ./packages/shared-types/
COPY backend/package.json ./backend/
RUN pnpm install --frozen-lockfile --filter @eart/api...

# ── build stage ───────────────────────────────────────────────────────────
FROM deps AS build
COPY tsconfig.base.json ./
COPY packages/shared-types ./packages/shared-types
COPY backend ./backend
RUN pnpm --filter @eart/shared-types build
RUN pnpm --filter @eart/api build

# ── production stage ──────────────────────────────────────────────────────
FROM node:22-alpine AS production
RUN npm install -g pnpm@9
WORKDIR /app

COPY pnpm-workspace.yaml package.json pnpm-lock.yaml* ./
COPY packages/shared-types/package.json ./packages/shared-types/
COPY backend/package.json ./backend/
RUN pnpm install --frozen-lockfile --prod --filter @eart/api...

COPY --from=build /app/packages/shared-types/dist ./packages/shared-types/dist
COPY --from=build /app/backend/dist ./backend/dist

# Run as non-root
RUN addgroup -S eart && adduser -S eart -G eart
USER eart

EXPOSE 3001
HEALTHCHECK --interval=15s --timeout=5s --start-period=30s --retries=3 \
  CMD wget -qO- http://localhost:3001/health || exit 1

CMD ["node", "backend/dist/index.js"]
