# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**EART** is a home medical care service operating in the Costa Blanca region of Spain (Calpe, Moraira, Benissa, Teulada, Benidorm). The current repo contains a static marketing landing page; the full platform is being built on top of it.

The complete product has three pillars:
1. **Web platform** — patient registration, subscription management, profile/clinical history, and Stripe payments.
2. **Voice channel** — Amazon Chime SDK PSTN Audio routes inbound calls (+34 638 948 502) to a Lambda that streams audio to Amazon Nova Sonic 2 for AI-assisted intake; on completion the call transfers to extension 1000.
3. **Backend API** — stores patient records, clinical history, attached documents (X-rays, lab results), and medication history.

All infrastructure runs in **eu-west-1** (Ireland) to satisfy GDPR data residency requirements for EU patients.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js (TypeScript) |
| Backend | Node.js + TypeScript — REST API (Express or Fastify) |
| Database | PostgreSQL on RDS |
| Connection pooling | RDS Proxy |
| Cache / rate-limit | Redis (ElastiCache Serverless) |
| File storage | AWS S3 |
| Payments | Stripe |
| Auth | Amazon Cognito User Pools |
| Voice AI | Amazon Chime SDK PSTN Audio + Amazon Nova Sonic 2 (Bedrock) |
| Container runtime | AWS ECS Fargate |
| Load balancing | ALB (HTTPS, WAF attached) |
| CDN | CloudFront + WAF (static site + S3 assets) |
| IaC | Terraform |
| CI/CD | GitHub Actions |

---

## Repository Structure

```
/
├── frontend/             # Next.js app (ECS Fargate)
├── backend/              # Node.js REST API (ECS Fargate)
├── packages/
│   ├── shared-types/     # Zod schemas + TS types shared between frontend and backend
│   └── locales/          # i18n translation files (es/en/nl/no/fi)
├── infra/
│   ├── modules/          # Reusable Terraform modules
│   │   ├── networking/   # VPC, subnets, SGs, VPC endpoints
│   │   ├── ecs/          # Cluster, services, task definitions
│   │   ├── rds/          # RDS Postgres + RDS Proxy
│   │   ├── cognito/      # User Pool + App Client
│   │   ├── storage/      # S3 buckets + KMS keys
│   │   └── chime/        # SIP media application + Lambda
│   ├── staging/          # staging environment root module
│   └── production/       # production environment root module
├── .github/
│   └── workflows/        # CI/CD pipelines
└── (legacy static site files at root — index.html, main.js, styles.css, etc.)
```

---

## Networking & Security Architecture

All application workloads run inside a **VPC** with the following subnet layout:

- **Public subnets** (2 AZs): ALB, NAT Gateways only.
- **Private subnets — app tier** (2 AZs): ECS Fargate tasks, ElastiCache, Lambda.
- **Private subnets — data tier** (2 AZs): RDS (Multi-AZ), RDS Proxy.

No ECS task, RDS instance, or ElastiCache node should have a public IP or be reachable from the internet.

**VPC Endpoints** (Gateway or Interface) must be provisioned for every AWS service the application calls to keep traffic off the public internet: S3, ECR (dkr + api), Secrets Manager, SSM, CloudWatch Logs, Bedrock, Cognito.

**Security Groups** — one per tier with strict allow-only rules:
- ALB SG: ingress 443 from `0.0.0.0/0`, egress to ECS SG.
- ECS SG: ingress from ALB SG only, egress to RDS Proxy SG + ElastiCache SG + HTTPS to VPC endpoints.
- RDS Proxy SG: ingress from ECS SG only.
- ElastiCache SG: ingress from ECS SG only.

**WAF** (AWS WAF v2) attached to both the ALB and the CloudFront distribution with at minimum: AWS Managed Rules Common Rule Set, AWS Managed Rules Known Bad Inputs, rate-based rule (1000 req/5 min per IP).

---

## Current Static Site

The existing landing page at the repo root is a zero-dependency static site deployed to S3 + CloudFront via `.github/workflows/deploy.yml`. It currently supports four languages (`es`, `en`, `nl`, `no`); **Finnish (`fi`) must be added** to `translations.js` as a fifth language with full key coverage.

### Supported languages

| Code | Language |
|---|---|
| `es` | Spanish |
| `en` | English |
| `nl` | Dutch (Nederlands) |
| `no` | Norwegian (Norsk) |
| `fi` | Finnish (Suomi) — **to be added** |

### Language auto-detection

Language is resolved in this priority order:
1. User's explicit selection (persisted in `localStorage` as `earts_lang`).
2. **IP geolocation** — map visitor country to language: ES → `es`, NL/BE → `nl`, NO/SE/DK → `no`, FI → `fi`, default → `en`. In the Next.js app this runs in middleware (edge) before the first render. In the legacy static site a client-side geo lookup is acceptable.
3. `navigator.language` browser hint as final fallback.

### i18n Pattern (static site)
- `data-i18n="key"` — plain text
- `data-i18n-html="key"` — content with HTML tags (`<br>`, `<em>`, `<small>`)
- `data-i18n-placeholder="key"` — input/textarea placeholders

When changing copy, update **all five languages** in `translations.js`. The language switcher must expose all five options (ES / EN / NL / NO / FI).

---

## Patient Data Model

The `patients` table in PostgreSQL is the source of truth. The `cognito_sub` (Cognito User Pool `sub` claim) is the FK that links auth to the record.

| Field | Notes |
|---|---|
| `id` | UUID primary key |
| `cognito_sub` | Unique, indexed — links to Cognito identity |
| `full_name` | |
| `date_of_birth` | Derive age, don't store a mutable age value |
| `address` | |
| `country_of_origin` | ISO 3166-1 alpha-2 |
| `preferred_language` | `es` \| `en` \| `nl` \| `no` \| `fi` |
| `phone` | E.164 format |
| `email` | Stored for reference; Cognito is authoritative |
| `has_spanish_insurance` | boolean |
| `permanent_medications` | `text[]` or normalised medications table |
| `stripe_customer_id` | |
| `stripe_subscription_id` | |
| `subscription_status` | synced from Stripe webhook |
| `subscription_plan` | `basic` \| `integral` \| `continuada` \| `avanzada` |
| `consent_version` | version of Terms/Privacy accepted at registration |
| `consent_at` | timestamp of consent |
| `created_at` / `updated_at` | |

Clinical history entries, attached documents, and medication logs live in related tables (FK to `patients.id`). Document records store S3 object keys, never full URLs.

---

## Patient Registration & Auth (Cognito)

Authentication is handled entirely by **Amazon Cognito User Pools**. Never implement a custom auth layer.

- Email is the Cognito username. Password policy: minimum 10 chars, upper + lower + number + symbol.
- On successful Cognito sign-up, a **post-confirmation Lambda trigger** creates the patient row in PostgreSQL and sends a notification email to `eduardo@arteagamed.com`.
- Login returns Cognito tokens; the **access token** (Bearer) is kept in memory, the **refresh token** in an `httpOnly` Secure SameSite=Strict cookie.
- The API validates every request by verifying the JWT signature against the Cognito JWKS endpoint. Never decode without verifying.
- MFA is TOTP-ready: configure the User Pool to support TOTP at launch even if not mandatory, so it can be enabled without infrastructure changes.
- The patient portal must expose: view/edit basic info, upload documents, download full data export (GDPR Art. 20), request account deletion (GDPR Art. 17).

---

## Subscription & Payments (Stripe)

Four plans: Asistencia Básica (65€/mes, first month 100€), Integral (160€/mes, first month 200€), Continuada (350€/mes, first month 400€), Avanzada (750€/mes, first month 800€).

- Use **Stripe Payment Element** (not legacy Checkout) for PCI compliance — card data never touches our servers.
- Store `stripe_customer_id` and `stripe_subscription_id` on the patient record.
- Use **idempotency keys** on all Stripe API write calls (`Stripe-Idempotency-Key` header = `<patient_id>-<action>-<timestamp>`).
- Webhook endpoint (`POST /webhooks/stripe`):
  - Always validate `stripe-signature` before processing.
  - Store processed event IDs in Redis (TTL 24h) to deduplicate retries.
  - Handle at minimum: `invoice.payment_succeeded`, `invoice.payment_failed`, `customer.subscription.updated`, `customer.subscription.deleted`.
  - Respond `200` immediately; do all processing asynchronously or synchronously but within Stripe's 30 s timeout.

---

## Voice Channel (Chime SDK + Nova Sonic 2)

Asterisk is **not used**. The voice channel is built entirely on AWS:

- Inbound calls to +34 638 948 502 route through **Amazon Chime SDK PSTN Audio** (SIP media application — SMA).
- The SMA invokes a **Lambda function** on call events. The Lambda uses the Chime SDK Voice Connector to stream audio to **Amazon Nova Sonic 2** via the Bedrock streaming API for AI-assisted patient intake.
- Nova Sonic 2 conducts the conversation in the patient's language (`es`, `en`, `nl`, `no`, `fi`).
- On intake completion the Lambda issues a `TransferCall` action to route to **extension 1000** (a Chime SDK Voice Connector SIP endpoint or direct phone number — to be defined at provisioning time).
- Intake data captured by Nova Sonic 2 is written to the patient record via an internal API call (Lambda → ALB internal listener → API).
- All call recordings and transcripts stored in S3 use **SSE-KMS**. Transcripts are subject to GDPR retention rules.
- Lambda must be in the same VPC private subnet as the API and use the ECS SG egress rules to reach the internal ALB.

---

## ECS (Fargate)

Both Next.js and the Node.js API run as Fargate services behind the ALB:

- One ECS cluster, two services (`web`, `api`), one ECR repository per service.
- ALB listener 443 (ACM certificate): `/api/*` → `api` target group; `/*` → `web` target group.
- The `api` target group should use an **internal ALB** if the frontend does not need to be co-located — this reduces the attack surface.
- **Task IAM roles** (least privilege):
  - `web` task role: no AWS permissions needed at runtime (Cognito calls are client-side).
  - `api` task role: `s3:GetObject`/`s3:PutObject` on documents bucket, `secretsmanager:GetSecretValue` for DB credentials and Stripe keys, `bedrock:InvokeModelWithResponseStream` for Nova Sonic 2 (voice Lambda only).
- Secrets injected from **AWS Secrets Manager** via ECS `secrets` field in task definition — never baked into the image or passed as plain env vars.
- Resource sizing starting point: `api` — 1 vCPU / 2 GB; `web` — 0.5 vCPU / 1 GB. Adjust based on load testing.
- **Auto-scaling**: target tracking on CPU (target 60%) and ALB `RequestCountPerTarget`. Min 1, max defined per environment.
- Health check path: `GET /health` (API), `GET /` (web). Both must return `200` within 5 s.
- **ECS Exec** disabled in production; enabled in staging only.
- ECR images scanned on push (`imageScanOnPush = true`). Block deploys if CRITICAL vulnerabilities found (enforce via CI).

---

## RDS & Connection Pooling

- PostgreSQL on **RDS Multi-AZ** (production), Single-AZ (staging).
- Application connects exclusively through **RDS Proxy** — never directly to the RDS endpoint. This prevents connection exhaustion from Fargate scaling events.
- RDS Proxy credentials stored in Secrets Manager; RDS Proxy handles rotation transparently.
- `rds.force_ssl = 1` parameter group — reject unencrypted connections.
- Storage encrypted with a **customer-managed KMS key** (`enable_key_rotation = true`).
- Automated backups: 7-day retention (staging), 30-day (production). Enable point-in-time recovery.
- Never run DDL manually against production. All schema changes go through migrations in the deploy pipeline.

---

## Redis (ElastiCache Serverless)

Redis is used for:
- **Stripe webhook deduplication** — store processed Stripe event IDs (TTL 24 h).
- **Rate limiting** — sliding window counters on auth endpoints and the Stripe webhook.
- **Session / short-lived token cache** — optional; Cognito tokens are stateless but refresh token rotation state can be tracked here.

Use ElastiCache Serverless (Redis OSS compatible) to avoid managing cluster sizing. In-transit encryption enabled. No public endpoint.

---

## GDPR & Legal

GDPR (EU 2016/679) compliance is a hard requirement. All data must remain in **eu-west-1**.

- Explicit consent checkbox at registration: separate checkboxes for (1) Terms of Use + Privacy Policy, (2) processing of medical data under GDPR Art. 9(2)(a). Store `consent_version` and `consent_at` on the patient record.
- **Data residency**: never replicate patient data to regions outside the EU. Confirm all AWS services used (Bedrock, Cognito, etc.) are configured to eu-west-1.
- **Right to access** (Art. 15) and **data portability** (Art. 20): patient portal must allow full data export as JSON/PDF.
- **Right to erasure** (Art. 17): account deletion flow must hard-delete or anonymise all PII within 30 days; S3 documents must be deleted; Cognito user must be deleted.
- **Data minimisation**: only collect fields that are directly needed for service delivery.
- **Audit logging**: all read/write operations on clinical records must be logged with actor, timestamp, and action. Store audit logs in a separate S3 bucket with Object Lock (WORM, 7-year retention).
- **Breach notification**: document the incident response procedure; 72-hour notification window to the AEPD (Spanish DPA) applies.
- **S3 encryption**: SSE-KMS with CMK. Block all public access. Bucket policy must deny `s3:PutObject` without `x-amz-server-side-encryption: aws:kms`.
- **S3 versioning** enabled on the documents bucket to allow recovery from accidental deletion.
- **RDS encryption**: CMK at rest, SSL in transit, RDS audit logging enabled.
- All **CMKs** must have `enable_key_rotation = true`.
- **Terms of Use** must clearly state: EART's liability is limited to medical consultation within the scope of the active subscription; the service does not replace emergency care. A Data Processing Agreement (DPA) clause must be included.

---

## IaC (Terraform)

All AWS resources are defined in `infra/`. Conventions:

- **Remote state**: S3 backend + DynamoDB lock table. Each layer (networking, data, app) has its own state file to limit blast radius.
- **Module structure**: shared logic lives in `infra/modules/`; environment roots (`staging/`, `production/`) call the modules with environment-specific variables.
- **No hard-coded secrets**: reference via `data "aws_secretsmanager_secret_version"` or `data "aws_ssm_parameter"`. Never put secrets in `.tfvars` committed to the repo.
- **Tagging**: every resource must have `project = "eart"` and `env = var.environment`.
- **Security scanning**: run `tfsec` and/or `checkov` in CI on every PR. Block merge on HIGH/CRITICAL findings.
- **Plan before apply**: CI runs `terraform plan` on PRs (output posted as a comment). `terraform apply` runs only on merge to `main`, gated by a manual approval step in production.
- **Drift detection**: schedule a weekly `terraform plan` run and alert on non-empty diffs.

---

## CI/CD (GitHub Actions)

Pipeline per app (`web`, `api`) triggered on push to `main` and on PRs:

**PR checks** (all must pass before merge):
1. TypeScript type check (`tsc --noEmit`)
2. ESLint + Prettier
3. Unit + integration tests
4. `tfsec` / `checkov` on `infra/`
5. `terraform plan` (output posted as PR comment)
6. ECR image build + scan (no push)

**Deploy to staging** (on merge to `main`):
1. Build Docker images, push to ECR with `git-sha` and `latest` tags.
2. `terraform apply` staging — auto-approved.
3. Run DB migrations (`node-pg-migrate up` or Prisma migrate deploy) against staging RDS via a one-off ECS task.
4. `aws ecs update-service --force-new-deployment` for `web` and `api`.
5. Smoke tests against staging URL.

**Deploy to production** (manual trigger or tag `v*`):
1. Same image already in ECR (promote by tag, don't rebuild).
2. `terraform apply` production — requires manual approval in GitHub Actions.
3. DB migrations via one-off ECS task.
4. ECS rolling deploy.

---

## Observability

- **Structured logging**: all application logs must be JSON with fields `level`, `message`, `requestId`, `service`, `env`. Use `pino` (Node.js). Ship to **CloudWatch Logs**.
- **Distributed tracing**: instrument with **AWS X-Ray**. Trace ID propagated through ALB → ECS → RDS Proxy → Lambda. Use `aws-xray-sdk` for Node.js.
- **Metrics**: application-level custom CloudWatch metrics for: active subscriptions by plan, Stripe payment failures, voice call completion rate, auth failure rate.
- **Alarms**: set CloudWatch Alarms on P99 API latency > 2 s, ECS task failure, RDS FreeStorageSpace < 20%, Stripe webhook failure rate > 5%.
- **Log retention**: CloudWatch log groups set to 90 days (staging), 365 days (production).
- **Audit logs** (clinical record access): separate log group with indefinite retention, also shipped to S3 audit bucket with Object Lock.

---

## Backup & Recovery

- **RDS**: automated daily snapshots retained 7 days (staging) / 30 days (production). Manual snapshot before every production deployment. Point-in-time recovery enabled.
- **S3 documents bucket**: versioning enabled. S3 lifecycle rule: move non-current versions to Glacier after 90 days, expire after 7 years (GDPR retention).
- **ElastiCache**: Redis data is ephemeral by design — no persistence required for the use cases defined above.
- **RTO / RPO targets** (to be validated at launch): RTO 4 h, RPO 1 h for production.

---

## Code Conventions

- **TypeScript strict mode** (`"strict": true`) across all packages.
- **ESLint + Prettier** enforced via pre-commit hooks (Husky + lint-staged) and CI.
- Environment variables validated at startup with `zod`. Define a schema in `src/config.ts`; the rest of the app imports from there — never `process.env` directly.
- **API versioning**: all routes prefixed `/v1/`. Breaking changes require a new version prefix.
- **Error handling**: use a centralised error handler in Express/Fastify. Never leak stack traces to API responses. Use structured error objects `{ code, message, requestId }`.
- **Database migrations**: `node-pg-migrate` or Prisma Migrate. Migrations run as a separate step before the ECS service update. Never run raw DDL in application code.
- **S3 documents**: always use **presigned URLs** for client uploads/downloads. URLs expire in 15 minutes. Never expose the bucket name or region in API responses.
- **Stripe**: validate `stripe-signature` header before any processing. Use idempotency keys on all write calls.
- **Auth**: Cognito handles all auth. Verify JWTs on every API request using the Cognito JWKS endpoint. Never trust unverified claims.
- **Testing**: unit tests with Vitest, integration tests against a local Postgres + Redis via Docker Compose. Target 80% coverage on business logic (patient records, subscriptions, GDPR data export).
