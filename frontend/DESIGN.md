# ArteagaMed — marketing site design system

The public site lives in this Next.js app (`src/app/page.tsx` and friends). This file
records the decisions behind it so new pages stay consistent.

## 1. Design direction

**A calm, well-run local practice on the Mediterranean, not a hospital or an insurer.**
The page should read like a letter from a trusted family doctor who happens to live on the
Costa Blanca: plain words, generous space and nothing that blinks.

- Premium comes from **typography, spacing and hierarchy**. We don't use gradients, glows or stacked
  shadows.
- **One signature element:** the hand-drawn coastline map (Dénia to Benidorm, with the Peñón de
  Ifach). It's the only decorative illustration. Everything around it stays quiet.
- **Honesty is part of the brand.** Every price comes from `@eart/shared-types`. Anything that costs
  extra is labelled. 112 is always shown as the emergency route. Content we can't confirm is a
  dev-only placeholder, never invented.

## 2. Colour

| Token         | Hex       | Use                                                     |
| ------------- | --------- | ------------------------------------------------------- |
| `--blue-800`  | `#174A5B` | Brand, primary buttons, headings on light backgrounds   |
| `--blue-900`  | `#0F3442` | Button hover, dark sections                             |
| `--teal-500`  | `#4F8F8B` | Icons and illustrations only (3.5:1, not for text)      |
| `--teal-700`  | `#356764` | Teal text and links (6:1 on paper)                      |
| `--sand-300`  | `#E8D8BD` | Accent fills, the CTA colour on dark sections           |
| `--sand-100`  | `#F3EBDD` | Alternate section background                            |
| `--paper`     | `#F8F7F3` | Page background                                         |
| `--ink`       | `#24343B` | Body text (12:1 on paper)                               |
| `--ink-muted` | `#4A5A61` | Secondary text (6.7:1 on paper)                         |
| `--alert-700` | `#8F2D2D` | Emergency (112) messages only, always with icon + label |

Every text pairing meets WCAG AA. Body text meets AAA.

## 3. Typography

**Atkinson Hyperlegible Next** for everything. The Braille Institute designed it for low-vision
readers, and it keeps easily confused letters apart (I/l/1, 0/O). That matters more to a 70-year-old
reading on a phone than a fashionable display face would. Weights: 400 for text, 600 for UI, 700
for headings. We never use anything lighter than 400.

Scale (fluid, ~1.25 ratio): body 18–20px · lead 20–23px · h3 24–28px · h2 32–44px · h1 40–68px.
Body line height 1.6, headings 1.12. Text is capped at 64ch. Sentence case everywhere; no
all-caps labels.

## 4. Components

`src/components/ui`: `Button` (primary / secondary / on-dark; pill shape, 56px minimum height),
`Icon` (one 2px-stroke set, 28px default), `Badge` (icon + text, never colour alone), `Photo`
(art-directed slot with a dev-only brief when no photo is supplied), `SectionHeading`,
`EmergencyNote`. The FAQ accordion uses native `<details>`, so it's accessible without JS.

Corner radii follow hierarchy: 8px for inputs and badges, 16px for cards, 28px for photos, and
pills for buttons.

## 5. Homepage information architecture

The order answers the visitor's questions one after another:

1. **Hero:** what it is, where, and the two next steps
2. **Benefits:** why it matters (four plain benefits)
3. **Who it's for:** "is this for me?"
4. **How it works:** three steps
5. **Membership:** prices, what's included, what costs extra and what it is not
6. **Teleassistance:** the differentiator, on a dark band
7. **Services:** each one labelled Included / Depends on plan / Extra cost
8. **Why ArteagaMed**
9. **Trust:** team, registration, data and terms
10. **Where we work:** coastline map with a text list of towns
11. **FAQ:** includes the 112 distinction
12. **Contact:** phone, form and the emergency note
13. **Final CTA**

## 6. Responsive behaviour

Mobile-first. Single column under 720px, with the order unchanged. Navigation collapses into a
full-height menu at 1080px. On phones, a bottom bar with **Call** and **See membership** appears once
the hero has scrolled away. Tap targets are at least 48px, buttons 56px. There's no horizontal
scrolling at 320px.

## 7. Conversion strategy

- Primary goal **visitor → member**: "Explore membership" in the hero, nav and final CTA; plan cards
  link to `/register?plan=<id>`.
- Secondary goal **visitor → contact**: the phone number is always one tap away (header on
  desktop, sticky bar on mobile) and the contact form is a calm alternative.
- Each section ends with at most one CTA. The wording is consistent ("Explore membership", "Talk to
  ArteagaMed") and never aggressive.

## Motion

There's one orchestrated moment: the hero text and photo fade in on load. Everything else moves
only in response to the user (menus, accordions, hover). All of it is disabled under
`prefers-reduced-motion`.
