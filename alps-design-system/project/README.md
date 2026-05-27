# ALPS Design System

**Acadia Leadership Partners, Inc.** — a consulting firm serving senior executives. Visuals borrow from Big 4 design principles (Deloitte, EY, KPMG, PwC) — generous whitespace, conservative restraint, editorial structure, quiet authority — and pair them with a single literal motif: **the Alps**. The wordmark's arc is a mountain peak. The hero is a real alpine photograph. The voice is composed, but the imagery is aspirational, adventurous, and confident.

> The system is for late‑career and semi‑retired executives. It should feel like a Sunday‑edition feature about a sherpa, not a startup landing page.

---

## Source materials provided

- `uploads/ALPS Logo (1).png` — the primary wordmark (an "A" forming a peak with an arched arc rising over the letters, then "LPS" in dark slate).
- `uploads/White Swiss Alps.png` — hero photograph. Snow‑capped peaks, soft blue sky, aspirational alpine register. **This is the brand's primary imagery direction.** Real alpine photography over generic stock business shots, always.
- Brand colors (from the user):
  - `#2299CE` — **hero** (alpine blue / cyan)
  - `#103758` — **supporting** (deep navy)
  - `#445253` — **supporting** (slate graphite)
- Typeface family: **Montserrat** (loaded from Google Fonts as a substitute pending licensed font files — see *Caveats*).

No codebase, Figma file, or product screenshots were attached. The system is therefore a **first‑principles brand foundation** plus a marketing‑site UI kit and a slide template — both reasonable surfaces for a consulting firm. Iterate from here.

---

## Index

| File / folder | Purpose |
|---|---|
| `README.md` | This document — brand context, content fundamentals, visual foundations, iconography. |
| `SKILL.md` | Agent‑skill manifest so this folder can be downloaded and used in Claude Code. |
| `colors_and_type.css` | All design tokens — colors, type ramp, spacing, radii, shadows. Import once. |
| `assets/` | Logos, marks, and brand imagery. |
| `fonts/` | (Empty placeholder.) Licensed font files go here when provided. |
| `preview/` | Small HTML cards that render in the Design System tab. |
| `ui_kits/website/` | Marketing‑site UI kit — homepage, services, team, contact, with JSX components. |
| `slides/` | Boardroom‑style slide templates — title, section, comparison, big quote, data, closing. |

---

## Content fundamentals

ALPS speaks the way a trusted senior advisor speaks across a polished walnut table — direct, measured, plainspoken, and never breathless.

**Voice**
- **Confident, not loud.** State the thing. Don't sell it.
- **Plain English.** Avoid jargon when an ordinary word will do. Use "experience" before "expertise," "team" before "talent stack."
- **First person plural.** *We* believe, *we* partner, *we* advise. Not "I" and not corporate "the firm."
- **Address the reader as a peer.** "You" — never "users," never "clients" in body copy (acceptable in headings).
- **Past tense for credibility.** "Forty years in the C‑suite." "Two decades restructuring family businesses." Tense signals lived experience.

**Casing**
- Headlines: **Title Case** for primary headings (H1, H2). Sentence case is acceptable for tertiary headings and UI labels.
- Buttons & nav: Title Case. ("Schedule a Conversation," not "schedule a conversation" and not "SCHEDULE A CONVERSATION.")
- Avoid ALL CAPS in body. A small uppercase eyebrow label (tracked, 11–12px) is the only sanctioned caps use.

**Tone examples**
- ✅ *"We work alongside leadership teams navigating succession, growth, or transition."*
- ✅ *"Forty years of operating experience. One conversation at a time."*
- ✅ *"Tell us what you're working through. We'll tell you whether we can help."*
- ❌ *"Unlock next‑gen leadership synergy with our AI‑powered advisory platform."*
- ❌ *"Hey there 👋 — ready to crush your goals?"*
- ❌ *"World‑class, best‑in‑class, industry‑leading solutions."*

**Punctuation & numbers**
- Em dash with hair spaces — like this — for asides.
- Spell out numbers under ten in body copy; numerals in stats and tables.
- Use a true ampersand "&" sparingly, mostly in service titles ("Strategy & Operations").

**Emoji & exclamation**
- **No emoji.** Ever, in any surface. The audience would notice and dislike it.
- **No exclamation points** in body copy. One in a headline if it earns it (it rarely does).

**Vibe**
A Sunday‑edition newspaper feature, not a startup landing page. Generous whitespace, long paragraphs allowed but always tight, never breezy.

---

## Visual foundations

### Colors
- **Hero — `#2299CE` (ALPS Blue).** Used sparingly: logo, primary CTAs, a single accent line, key data points. Never as a large background fill — it's a punctuation color, not a wallpaper.
- **Deep Navy — `#103758`.** The serious anchor color. Footers, dark hero blocks, primary text on light backgrounds when extra weight is needed.
- **Slate Graphite — `#445253`.** Default body text and secondary UI. Slightly green‑tinted, which keeps it from feeling cold.
- **Neutrals:** off‑white `#FAFAF8` (page), warm white `#FFFFFF` (cards), pale fog `#E8EDF1`, divider `#D7DEE3`, muted `#6F7A7D`.
- **No semantic alarms.** Consulting work has no "error red" or "success green" in the marketing surfaces. Inside the (not‑yet‑built) app, semantics live as muted tones — moss `#5F7A4C`, ochre `#B07A2B`, brick `#9A3B2E` — never bright web reds and greens.

### Type
- **Montserrat** for everything: weights 300, 400, 500, 600, 700.
- Display headings use Montserrat 600 with **negative letter‑spacing (−0.02em)** to feel editorial.
- A small Montserrat 500 **eyebrow** label in uppercase, tracked +0.12em, sits above most H1/H2.
- Body is 400, 16–18px, line‑height 1.6–1.7.
- Tabular numerals (`font-variant-numeric: tabular-nums`) on all stats and tables.

### Spacing & grid
- Spacing scale: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192`. (Doubling base‑4 with a couple of editorial jumps.)
- Container max‑width **1200px** with **80px** gutter on desktop; sections breathe with **96–128px** vertical padding.
- A persistent **12‑column grid** with **24px** gutters underpins all layouts.

### Backgrounds
- The marketing hero is a **full‑bleed alpine photograph** (`assets/hero-alps.png`) with a left‑weighted navy gradient scrim (rgba(10, 37, 64, 0.85) → 0%) so a white headline reads cleanly over the sky.
- Interior surfaces are **flat off‑white or warm white** — the photo is a hero‑only treatment, not a recurring background.
- No additional gradients. No textures. No grain. No hand‑drawn illustration. No stock business photography.
- Editorial sections may use a single full‑bleed alpine photograph with a 30–50% navy tint overlay — sparingly, never decorative.
- **Mountain language is the metaphor.** Where copy uses imagery ("summit," "ascent," "expedition"), surround it with literal alpine photography or a quiet arc; never both at once.

### Iconography
See dedicated section below. Short version: **Lucide**, 1.5px stroke, slate or navy, never blue except on hover.

### Borders & dividers
- **1px hairlines**, color `#D7DEE3` or `rgba(16, 55, 88, 0.12)`.
- A single accent: a **2px** ALPS‑blue underline on the active nav item and on H2 eyebrow labels — 32px wide, sitting 8px above the heading.
- No double‑borders, no dashed.

### Corner radii
- **4px** for most components (buttons, inputs, cards).
- **0px** for hero blocks and full‑width bars — sharp edges read "serious."
- **999px** (pill) only for status chips and the optional "back to top" button.
- Never the giant `border-radius: 24px` pill‑card aesthetic.

### Shadows
- **None on resting cards.** Cards use a 1px border instead — feels more print‑like.
- One sanctioned shadow on **hover/lifted** state: `0 12px 32px -16px rgba(16, 55, 88, 0.25)`.
- A second, deeper one for modals: `0 24px 64px -24px rgba(16, 55, 88, 0.35)`.
- Inner shadows are **forbidden**. They read as web 2.0 to this audience.

### Cards
A card is: 1px border `#D7DEE3`, 4px radius, 32px internal padding, white fill. On hover, the border darkens to `#445253` and the lifted shadow appears. Optional 2px top accent border in ALPS Blue for "featured" cards.

### Animation & motion
- **Almost none.** Hover transitions are 150–200ms `ease‑out` on color/border/shadow only.
- **No bounces, no springs, no parallax, no scroll‑triggered fades.** The audience would find them unprofessional.
- The two permitted "delights": a slow draw‑in of the logo arc on first page load (~800ms `ease‑out`) and a **24‑second Ken Burns** on the hero photograph (gentle scale 1.08 → 1.0, runs once). Both only on marketing pages — never internal surfaces.

### Hover & press states
- **Hover:** color shifts 1 step on the value ramp (e.g., ALPS Blue → `#1A7AA8`); for cards, the border darkens and the lifted shadow appears.
- **Press:** color shifts another step darker; **no shrink, no scale.** Buttons stay still.
- **Focus:** 2px outline in ALPS Blue, 2px offset. Visible, accessible, restrained.

### Transparency & blur
- A single sanctioned use: the **header backdrop** uses `backdrop-filter: blur(20px)` with an 85% white fill once the user scrolls.
- No frosted‑glass cards. No semi‑transparent overlays except the full‑bleed photo tint described above.

### Imagery treatment
- **Alpine landscapes are the brand's hero medium.** Real mountain photography (snow, granite, sky, occasional lake) — never generic business stock, never AI‑generated, never tinted purple or warm‑orange. Cool palette, plenty of negative sky.
- Portraits are environmental (a person at a desk, in a boardroom, at a window), shot tight, eye contact optional. Warm‑neutral grade, slightly desaturated.
- All photography is **either** full‑bleed and tinted **or** appearing in a clean 16:9 or 4:5 frame with no border, no rounded corners on landscape (4px max on portrait).
- Copy can lean into mountain language ("summit," "ascent," "expedition," "guide," "the next peak") — but never twice on the same surface, and never as a metaphor for something silly. Save it for the moments that earn it.

### Layout rules
- One **fixed** element: the header, which transitions from transparent (over a dark hero) to opaque‑blurred (when scrolled). Nothing else is fixed.
- Footers are tall, dark navy, contain the wordmark, four columns of links, and a single line of plain‑text small print.
- Section transitions are demarcated by **80–128px of vertical space**, not by ruling lines or color bands. The eye should rest.

---

## Iconography

ALPS uses **[Lucide](https://lucide.dev)** as a substitute icon system (CDN‑loaded; flagged as a substitution — see *Caveats*). Lucide's 1.5px stroke and minimal geometry sit naturally next to Montserrat and read as professional rather than playful.

**Rules**
- **Stroke icons only** — never filled, never duotone.
- Default size **20px** (`h-5 w-5`); 16px for inline, 24px for nav, 32–48px for feature blocks.
- Color: **`#445253` (slate)** by default; **`#2299CE` (blue)** on hover, focus, and active states; **`#103758` (navy)** when an icon needs extra weight (e.g., a dark hero).
- **Never recolor an icon set arbitrarily.** Icons inherit `currentColor`.
- **No emoji.** Not as bullets, not as labels, not even in error states.
- **No unicode glyphs as icons** (✓, →, ★, etc.) — use the Lucide equivalent: `check`, `arrow-right`, `star`.
- One sanctioned ornamental graphic exists: a thin **arc** SVG (`assets/arc.svg`) that echoes the logo. It can appear at low opacity behind hero text or as a horizontal divider, never repeated.

**Common icons in use**
`arrow-right`, `arrow-up-right`, `chevron-down`, `check`, `mail`, `phone`, `map-pin`, `calendar`, `linkedin`, `external-link`, `menu`, `x`, `plus`, `minus`, `quote`, `building-2`, `users`, `briefcase`, `trending-up`, `target`, `compass`.

---

## Caveats

1. **No source code, Figma, or screenshots** were provided — only the logo and three brand colors. The visual decisions in this system are reasonable defaults consistent with the "Big 4, serving senior executives" brief. **Treat everything as a starting point and tell the designer what to adjust.**
2. **Montserrat is loaded from Google Fonts** as a substitute for any licensed font files ALPS may use. If you have official `.woff2` files, drop them in `fonts/` and update `colors_and_type.css`.
3. **Lucide icons are CDN‑loaded** as a substitute for any in‑house icon set. If ALPS has custom marks, replace via `assets/icons/`.
4. **No real photography** is included. Portraits and environmental shots are referenced as `image-slot` placeholders the user can drag‑drop into.
5. **No actual product UI** existed to recreate, so the UI kit covers a **marketing website** — the most plausible primary surface for a consulting firm of this profile.
