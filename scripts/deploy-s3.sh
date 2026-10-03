#!/usr/bin/env bash
# Upload the static export (frontend/out) to the website's S3 bucket.
#
# CloudFront only maps "/" to index.html, so every other page is also stored
# under its extensionless key ("teleassistance.html" -> "teleassistance",
# "en.html" -> "en") with Content-Type text/html, matching the site's links.
#
# Usage: scripts/deploy-s3.sh <bucket> [--dryrun]
set -euo pipefail

BUCKET="${1:?usage: deploy-s3.sh <bucket> [--dryrun]}"
shift
EXTRA=("$@")
cd "$(dirname "$0")/../frontend/out"

pages=()
while IFS= read -r f; do pages+=("${f%.html}"); done < <(
  find . -name '*.html' ! -path './index.html' ! -path './404.html' | sed 's|^\./||' | sort
)
excludes=()
for p in "${pages[@]}"; do excludes+=(--exclude "$p"); done

# 1. Hashed build assets: cached for a year. Not deleted, so pages still cached
#    by browsers or CloudFront keep working during a deploy.
aws s3 sync _next "s3://$BUCKET/_next" \
  --cache-control "public,max-age=31536000,immutable" ${EXTRA[@]+"${EXTRA[@]}"}

# 2. Everything else (HTML, images, sitemap...). --delete removes files that are
#    no longer part of the site; the extensionless page keys are excluded so
#    they are not deleted here.
aws s3 sync . "s3://$BUCKET" --delete --exclude "_next/*" "${excludes[@]}" \
  --cache-control "public,max-age=300" ${EXTRA[@]+"${EXTRA[@]}"}

# 3. Extensionless copy of every page.
for p in "${pages[@]}"; do
  aws s3 cp "$p.html" "s3://$BUCKET/$p" --content-type "text/html; charset=utf-8" \
    --cache-control "public,max-age=300" --only-show-errors ${EXTRA[@]+"${EXTRA[@]}"}
done
echo "Uploaded ${#pages[@]} pages plus index.html to s3://$BUCKET"
