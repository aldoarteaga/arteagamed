#!/usr/bin/env node
/**
 * Generates frontend/src/app/tokens.css from the YAML tokens in DESIGN.md,
 * using the official DESIGN.md parser (@google/design.md).
 *
 * Naming mirrors `design.md export --format css-vars`:
 *   colors.primary      -> --color-primary
 *   spacing.m           -> --spacing-m
 *   rounded.md          -> --rounded-md
 *   typography.body-md  -> --type-body-md-size / -weight / -line-height / -letter-spacing
 *
 * A token with a `-mobile` sibling (typography or spacing) becomes one fluid
 * value: clamp(mobile, …, desktop) between 360px and 1280px viewports, in rem.
 *
 * Usage: node scripts/design-tokens.mjs [--check]
 *   --check  exit 1 if tokens.css is out of date instead of writing it.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { lint } from '@google/design.md/linter';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const source = join(root, 'DESIGN.md');
const target = join(root, 'frontend/src/app/tokens.css');
const check = process.argv.includes('--check');

const MIN_VIEWPORT = 360;
const MAX_VIEWPORT = 1280;
const ROOT_FONT_SIZE = 16;

const report = lint(readFileSync(source, 'utf8'));
const problems = report.findings.filter((f) => f.severity === 'error' || f.severity === 'warning');
if (problems.length > 0) {
  for (const f of problems) console.error(`${f.severity}: ${f.path ?? ''} ${f.message}`);
  console.error('DESIGN.md must lint with 0 errors and 0 warnings (`pnpm design:lint`).');
  process.exit(1);
}
const ds = report.designSystem;

const round = (n) => Number(n.toFixed(4));
const toPx = (d) => (d.unit === 'rem' || d.unit === 'em' ? d.value * ROOT_FONT_SIZE : d.value);
const toRem = (px) => `${round(px / ROOT_FONT_SIZE)}rem`;
const dim = (d) => `${d.value}${d.unit}`;

/** Fluid size between a phone (min) and desktop (max) dimension. */
function fluid(min, max) {
  const minPx = toPx(min);
  const maxPx = toPx(max);
  if (minPx === maxPx) return toRem(maxPx);
  const slope = (maxPx - minPx) / (MAX_VIEWPORT - MIN_VIEWPORT);
  const intercept = minPx - slope * MIN_VIEWPORT;
  return `clamp(${toRem(minPx)}, ${toRem(intercept)} + ${round(slope * 100)}vw, ${toRem(maxPx)})`;
}

/** Entries of a token map, merging `name` + `name-mobile` into one fluid entry. */
function withFluidPairs(map, sizeOf) {
  const out = [];
  for (const [name, token] of map) {
    if (name.endsWith('-mobile') && map.has(name.slice(0, -'-mobile'.length))) continue;
    const mobile = map.get(`${name}-mobile`);
    out.push([name, token, mobile ? fluid(sizeOf(mobile), sizeOf(token)) : null]);
  }
  return out;
}

const lines = [];
const section = (title) => lines.push('', `  /* ${title} */`);

section('Colors');
for (const [name, c] of ds.colors) {
  const value = c.a !== undefined && c.a < 1 ? `rgb(${c.r} ${c.g} ${c.b} / ${round(c.a)})` : c.hex;
  lines.push(`  --color-${name}: ${value};`);
}

section('Typography (font family is loaded with next/font in RootDocument)');
for (const [name, t, fluidSize] of withFluidPairs(ds.typography, (t) => t.fontSize)) {
  lines.push(`  --type-${name}-size: ${fluidSize ?? toRem(toPx(t.fontSize))};`);
  if (t.fontWeight !== undefined) lines.push(`  --type-${name}-weight: ${t.fontWeight};`);
  // Unitless line heights must be quoted in DESIGN.md: @google/design.md 0.4.0
  // drops bare YAML numbers for lineHeight. They parse as a dimension with no unit.
  if (t.lineHeight !== undefined) lines.push(`  --type-${name}-line-height: ${dim(t.lineHeight)};`);
  if (t.letterSpacing !== undefined)
    lines.push(`  --type-${name}-letter-spacing: ${dim(t.letterSpacing)};`);
}

section('Spacing');
for (const [name, d, fluidSize] of withFluidPairs(ds.spacing, (d) => d)) {
  lines.push(
    `  --spacing-${name}: ${fluidSize ?? (typeof d === 'object' && d.unit ? dim(d) : d)};`,
  );
}

section('Rounded');
for (const [name, d] of ds.rounded) lines.push(`  --rounded-${name}: ${dim(d)};`);

const css = `/* Generated from DESIGN.md by scripts/design-tokens.mjs. Do not edit; run \`pnpm design:tokens\`. */
:root {${lines.join('\n')}
}
`;

if (check) {
  let current = '';
  try {
    current = readFileSync(target, 'utf8');
  } catch {}
  if (current !== css) {
    console.error('tokens.css is out of date with DESIGN.md; run `pnpm design:tokens`.');
    process.exit(1);
  }
  console.log('tokens.css is up to date.');
} else {
  writeFileSync(target, css);
  console.log(`Wrote ${target.replace(root + '/', '')}`);
}
