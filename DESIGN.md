---
version: alpha
name: ArteagaMed
description: >-
  Public website of ArteagaMed, a home healthcare and assistance membership for
  retired Northern European visitors on the northern Costa Blanca.
colors:
  primary: '#174A5B'
  primary-deep: '#0F3442'
  on-primary: '#FFFFFF'
  on-primary-muted: '#D6E2E3'
  primary-container: '#E9F0F1'
  secondary: '#4F8F8B'
  secondary-text: '#356764'
  secondary-container: '#DCEBE9'
  tertiary: '#E8D8BD'
  tertiary-container: '#EFE4D1'
  tertiary-subtle: '#F3EBDD'
  on-tertiary: '#5C4A2A'
  neutral: '#F8F7F3'
  surface: '#FFFFFF'
  on-surface: '#24343B'
  on-surface-variant: '#4A5A61'
  outline: '#B9B1A2'
  outline-variant: '#D9D3C7'
  error: '#8F2D2D'
  error-container: '#FBEDEA'
typography:
  headline-display:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 68px
    fontWeight: 700
    lineHeight: '1.08'
    letterSpacing: -0.022em
  headline-display-mobile:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 40px
    fontWeight: 700
    lineHeight: '1.08'
    letterSpacing: -0.022em
  headline-xl:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 52px
    fontWeight: 700
    lineHeight: '1.1'
    letterSpacing: -0.018em
  headline-xl-mobile:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 34px
    fontWeight: 700
    lineHeight: '1.1'
    letterSpacing: -0.018em
  headline-lg:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 44px
    fontWeight: 700
    lineHeight: '1.12'
    letterSpacing: -0.012em
  headline-lg-mobile:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 32px
    fontWeight: 700
    lineHeight: '1.12'
    letterSpacing: -0.012em
  headline-md:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 28px
    fontWeight: 700
    lineHeight: '1.15'
  headline-md-mobile:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 24px
    fontWeight: 700
    lineHeight: '1.15'
  headline-sm:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 22px
    fontWeight: 700
    lineHeight: '1.2'
  headline-sm-mobile:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 20px
    fontWeight: 700
    lineHeight: '1.2'
  price:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 52px
    fontWeight: 700
    lineHeight: '1'
    letterSpacing: -0.02em
  price-mobile:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 40px
    fontWeight: 700
    lineHeight: '1'
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 23px
    fontWeight: 400
    lineHeight: '1.6'
  body-lg-mobile:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 20px
    fontWeight: 400
    lineHeight: '1.6'
  body-md:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 20px
    fontWeight: 400
    lineHeight: '1.6'
  body-md-mobile:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 18px
    fontWeight: 400
    lineHeight: '1.6'
  body-sm:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 17px
    fontWeight: 400
    lineHeight: '1.5'
  label-lg:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 18px
    fontWeight: 700
    lineHeight: '1.2'
  label-md:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 17px
    fontWeight: 600
    lineHeight: '1.3'
  label-sm:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 16px
    fontWeight: 700
    lineHeight: '1.1'
rounded:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 28px
  full: 9999px
spacing:
  3xs: 4px
  2xs: 8px
  xs: 12px
  s: 16px
  m: 24px
  l: 32px
  xl: 48px
  2xl: 64px
  section: 112px
  section-mobile: 64px
  gutter: 40px
  gutter-mobile: 16px
  container: 1200px
  control: 56px
  control-compact: 48px
components:
  page:
    backgroundColor: '{colors.neutral}'
    textColor: '{colors.on-surface}'
    typography: '{typography.body-md}'
  text-muted:
    backgroundColor: '{colors.neutral}'
    textColor: '{colors.on-surface-variant}'
    typography: '{typography.body-md}'
  link:
    backgroundColor: '{colors.neutral}'
    textColor: '{colors.secondary-text}'
    typography: '{typography.body-md}'
  section-alt:
    backgroundColor: '{colors.tertiary-subtle}'
    textColor: '{colors.on-surface}'
  card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.on-surface}'
    rounded: '{rounded.md}'
    padding: '{spacing.l}'
  photo:
    backgroundColor: '{colors.tertiary-container}'
    rounded: '{rounded.lg}'
  illustration-sea:
    backgroundColor: '{colors.secondary}'
  band-dark:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
  band-dark-muted:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary-muted}'
  band-sand:
    backgroundColor: '{colors.tertiary}'
    textColor: '{colors.primary-deep}'
  footer:
    backgroundColor: '{colors.primary-deep}'
    textColor: '{colors.on-primary-muted}'
  button-primary:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    typography: '{typography.label-lg}'
    rounded: '{rounded.full}'
    height: '{spacing.control}'
    padding: '{spacing.l}'
  button-primary-hover:
    backgroundColor: '{colors.primary-deep}'
    textColor: '{colors.on-primary}'
  button-secondary:
    backgroundColor: '{colors.neutral}'
    textColor: '{colors.primary}'
    typography: '{typography.label-lg}'
    rounded: '{rounded.full}'
    height: '{spacing.control}'
    padding: '{spacing.l}'
  button-secondary-hover:
    backgroundColor: '{colors.primary-container}'
    textColor: '{colors.primary-deep}'
  button-on-dark:
    backgroundColor: '{colors.tertiary}'
    textColor: '{colors.primary-deep}'
    typography: '{typography.label-lg}'
    rounded: '{rounded.full}'
    height: '{spacing.control}'
  button-on-dark-hover:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.primary-deep}'
  button-compact:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    typography: '{typography.label-md}'
    rounded: '{rounded.full}'
    height: '{spacing.control-compact}'
  nav-link:
    backgroundColor: '{colors.neutral}'
    textColor: '{colors.on-surface}'
    typography: '{typography.label-md}'
    rounded: '{rounded.sm}'
  nav-link-hover:
    backgroundColor: '{colors.tertiary-container}'
    textColor: '{colors.primary-deep}'
  language-select:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.on-surface}'
    typography: '{typography.label-md}'
    rounded: '{rounded.full}'
    height: '{spacing.control-compact}'
  icon-caption:
    backgroundColor: '{colors.neutral}'
    textColor: '{colors.primary}'
    typography: '{typography.label-sm}'
    size: '{spacing.control}'
  icon-circle:
    backgroundColor: '{colors.secondary-container}'
    textColor: '{colors.secondary-text}'
    rounded: '{rounded.full}'
    size: 60px
  step-number:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    rounded: '{rounded.full}'
    size: '{spacing.control}'
  badge-included:
    backgroundColor: '{colors.secondary-container}'
    textColor: '{colors.secondary-text}'
    typography: '{typography.label-md}'
    rounded: '{rounded.sm}'
  badge-plan:
    backgroundColor: '{colors.primary-container}'
    textColor: '{colors.primary}'
    typography: '{typography.label-md}'
    rounded: '{rounded.sm}'
  badge-extra:
    backgroundColor: '{colors.tertiary-container}'
    textColor: '{colors.on-tertiary}'
    typography: '{typography.label-md}'
    rounded: '{rounded.sm}'
  badge-recommended:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    typography: '{typography.label-md}'
    rounded: '{rounded.sm}'
  emergency-note:
    backgroundColor: '{colors.error-container}'
    textColor: '{colors.error}'
    rounded: '{rounded.sm}'
    padding: '{spacing.m}'
  divider:
    backgroundColor: '{colors.outline-variant}'
    height: 1px
  divider-strong:
    backgroundColor: '{colors.outline}'
    height: 1px
---

# ArteagaMed

## Overview

**The welcome folder a long-established family practice in Calpe hands to its new British and
Scandinavian winter patients**, rebuilt as a website. Warm off-white card, the practice's deep
Mediterranean blue, one honest photograph of the bay, and everything printed large enough to
read without glasses. It is written by the doctor who will actually come to your door.

The reader is 60 to 85, often reading on a phone in a holiday flat, sometimes with a son or
daughter helping from home. They are not ill; they are on holiday, and they want to know that
someone reliable is nearby. Within ten seconds the page must answer four questions: what is it
(a healthcare membership), who is it for (visitors on the Costa Blanca), why it matters (Spanish
healthcare is hard to navigate from outside), and what to do next (explore the membership).

The folder is calm, plain-spoken and generous with space. It is not a hospital brochure, an
insurance contract, an emergency service or a tech startup landing page. Premium comes from
typography, spacing and hierarchy, never from effects. Honesty is part of the look: every price
is printed, anything that costs extra is labelled, and 112 is always named as the emergency
number.

## Colors

One deep blue, one soft teal, one warm sand, on warm off-white paper.

- **Mediterranean blue** {colors.primary} is the practice's colour: headings, primary buttons,
  the step numbers and the teleassistance band. {colors.primary-deep} is its pressed and night
  version (button hover, footer). Text on blue is {colors.on-primary}; quieter text on blue is
  {colors.on-primary-muted}.
- **Soft teal** {colors.secondary} is the sea. It appears in illustrations only, never as text
  (3.5:1 on paper). Teal text and links use {colors.secondary-text} (6:1); icon circles and the
  "Included" badge sit on {colors.secondary-container}.
- **Warm sand** {colors.tertiary} is the beach. It is the call-to-action colour on blue
  backgrounds and fills the closing band. {colors.tertiary-container} is for hover states,
  photo frames and the "Extra cost" badge, whose text is {colors.on-tertiary}.
  {colors.tertiary-subtle} is the alternate section background.
- **Paper** {colors.neutral} is the page, never pure white. Cards lift onto {colors.surface}.
  Body text is {colors.on-surface} (12:1); secondary text is {colors.on-surface-variant}
  (6.7:1).
- **Rules** are {colors.outline-variant} for hairlines and {colors.outline} for stronger
  dividers and control borders.
- **Emergency red** {colors.error} on {colors.error-container} is reserved for the 112 message.
  It is never used for decoration, errors in copy or promotions.

Every text pairing meets WCAG AA; body text meets AAA. Colour never carries meaning on its own:
badges and notes always pair it with an icon and a word.

## Typography

One family, **Atkinson Hyperlegible Next**, designed by the Braille Institute for low-vision
readers. It keeps easily confused characters apart (I, l and 1; 0 and O; a slashed zero in
prices), which matters more to a 75-year-old on a phone than a fashionable display face would.

- **Headlines** ({typography.headline-display} down to {typography.headline-sm}) are Bold,
  sentence case, slightly tightened, and balanced across lines. The display size is used once
  per page, for the hero. {typography.headline-xl} is for subpage titles and the closing call
  to action.
- **Body** {typography.body-md} is the reading size: 20px on desktop, never below 18px on
  phones, line height 1.6, lines capped at 64 characters. The lead paragraph under a heading
  uses {typography.body-lg}. {typography.body-sm} at 17px is the smallest text on the site and
  is used only for hints and fine print.
- **Labels** ({typography.label-lg} for buttons, {typography.label-md} for navigation and
  badges, {typography.label-sm} for captions under icons) are SemiBold or Bold so they read at
  arm's length.
- **Prices** use {typography.price}.

Weights are 400, 600 and 700 only. Nothing lighter than 400, no italics for emphasis, no
all-caps labels.

**Fluid scaling.** A token with a `-mobile` sibling (for example `headline-lg` and
`headline-lg-mobile`) scales smoothly between the two sizes from a 360px to a 1280px wide
screen. Sizes are generated in rem so they follow the reader's browser font setting.

## Layout & Spacing

Mobile-first, single column under 720px, with a fixed maximum width of {spacing.container}
plus fluid side gutters ({spacing.gutter-mobile} on phones to {spacing.gutter} on desktop).

- **Spacing** follows a 4px base: {spacing.3xs}, {spacing.2xs}, {spacing.xs}, {spacing.s},
  {spacing.m}, {spacing.l}, {spacing.xl} and {spacing.2xl}. Sections are separated by
  {spacing.section-mobile} on phones to {spacing.section} on desktop.
- **Alignment** is left-aligned everywhere, including headings and the closing call to action.
  Centred paragraphs are harder to read for this audience.
- **Rhythm.** Each section has one heading, an optional lead and at most one call to action.
  Sections alternate between paper, white, sand and one blue band so the page never feels like
  one long scroll of identical cards.
- **Touch.** Every tap target is at least {spacing.control-compact}; buttons are
  {spacing.control} tall.

## Elevation & Depth

Depth comes from **tonal layers**, like card on a desk, not from shadows. The page is paper,
cards are white with a hairline border, and the blue band sits flat. One soft, blue-tinted
shadow is allowed on the recommended plan card, the hero caption and a plan card on hover. The
sticky header and the phone quick-action bar separate from content with a hairline, not a glow.
No stacked shadows, glass, blur or gradients.

## Shapes

Corners soften with importance and size, like rounded card stock.

- {rounded.xs}: focus rings.
- {rounded.sm}: badges, small notes, navigation hovers.
- {rounded.md}: cards and the contact and form panels.
- {rounded.lg}: photographs and the map.
- {rounded.full}: buttons, chips, the language selector, icon circles and step numbers.

Icons are one hand-drawn set on a 24px grid with 2px rounded strokes, shown at 28px by default
and never below 20px. No medical crosses, syringes or hospital symbols; the logo is a sun rising
over the sea.

## Components

- **Buttons.** `button-primary` is the single most important action in a view ("Explore
  membership"). `button-secondary` is the outlined alternative next to it. On the blue band,
  `button-on-dark` uses sand. `button-compact` is only for the header. Labels say exactly what
  happens; no arrows appended, no "Buy now".
- **Plan cards** are `card`s in a two-column grid on desktop. The recommended plan gets a 3px
  blue border and the `badge-recommended` label, never a different colour scheme. Each card
  shows the name, a one-line summary, the monthly price in `price`, the first-month price,
  four highlights, a native disclosure for the full list, and a sand box listing what costs
  extra.
- **Cost badges** (`badge-included`, `badge-plan`, `badge-extra`) always pair an icon with a
  word: a tick for included, an "i" for depends on plan, a euro sign for extra cost.
- **Emergency note** (`emergency-note`): red left rule, warning icon, red title, ink body.
  It appears in the contact section, the teleassistance page and the emergency page.
- **FAQ and "Everything included"** use native `<details>` with a plus icon that rotates to a
  cross, so they work without JavaScript and with screen readers.
- **Navigation.** A thin blue utility strip with the 24-hour phone number and the 112 line,
  then a sticky paper header. Below 1200px the links collapse into a full-screen menu opened by
  a button labelled with a word ("Menú"), not just an icon, next to a labelled "Llamar" button.
- **Language selector** (`language-select`) is a native `<select>` listing every language by
  its own name (Español, English, Nederlands, Norsk, Suomi).
- **Photographs** sit in `photo` frames with a fixed aspect ratio and a focal point, so the
  subject stays in view at every width.
- **Service area map** is the one illustration: a hand-drawn coastline from Dénia to Benidorm
  on `illustration-sea` tones, with a dot for each town that is actually served.

## Motion

Motion only answers the visitor. Menus open, disclosures expand, buttons change colour on
hover, all in 200ms with `cubic-bezier(0.2, 0.7, 0.2, 1)`. The hero text and photo fade in
once on load; nothing else animates on its own. With `prefers-reduced-motion`, everything is
instant.

## Imagery

Real, warm, daylight photographs of older Europeans enjoying the coast, and of a professional
talking with an older person at home. People look capable, not frail. No doctors posing with
clipboards, hospital corridors, syringes or wheelchairs in the foreground. Current photos are
CC0 stock; photos of the real team and members (with written consent) replace them as soon as
they exist.

## Page Structure

The homepage answers the visitor's questions in order, one section each: hero (what, where,
next step) → four benefits → who it is for → how it works (three numbered steps) → membership
plans → what is included, what costs extra and what membership is not → teleassistance (the blue
band) → services with cost badges → why ArteagaMed → trust → where we work (map) → questions →
contact → closing call to action.

- **Primary goal, visitor to member:** "Explore membership" in the hero, header and closing
  band; plan buttons lead to the contact section, where joining is a phone call.
- **Secondary goal, visitor to call:** the phone number is one tap away on every screen (utility
  strip and header on desktop, header and quick-action bar on phones).
- Spanish is the default language at `/`; the other languages mirror every page under their
  own prefix.

## Do's and Don'ts

- **Do** answer what, who, why and what next in the first screen.
- **Do** keep body text at 18px or more, and text contrast at WCAG AA or better.
- **Do** label every icon-only control with a visible word.
- **Do** show prices, extra costs and 112 plainly; honesty is part of the design.
- **Do** keep one primary button per view and use left alignment.
- **Don't** make it look like a hospital, insurer or emergency service: no red crosses, sirens,
  stethoscope hero shots or "24/7 emergency" banners.
- **Don't** add gradients, glows, glass, stacked shadows, parallax or auto-playing motion.
- **Don't** use thin weights, italics for emphasis, all-caps labels or text over busy photos.
- **Don't** use teal {colors.secondary} or sand {colors.tertiary} for text on paper.
- **Don't** invent testimonials, credentials or partnerships, and don't mark towns that are not
  served.
