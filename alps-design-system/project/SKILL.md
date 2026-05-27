---
name: alps-design
description: Use this skill to generate well-branded interfaces and assets for ALPS (Acadia Leadership Partners, Inc), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation

- **Brand:** Acadia Leadership Partners — a consulting firm serving senior executives. Big 4 design vocabulary. Audience is semi‑retired / late‑career leadership.
- **Tone:** confident, plain‑spoken, never breathless. No emoji. No exclamation points. No startup jargon.
- **Look:** generous whitespace, restrained color (mostly off‑white + deep navy), sharp 4px corners, 1px hairlines instead of shadows. The arc from the logo is the only ornamental motif.
- **Type:** Montserrat at every weight; tight letter‑spacing on display, tabular numerals on stats, a small uppercase eyebrow on most headings.
- **Tokens:** `colors_and_type.css` defines every color, size, radius, and shadow. Import it once and use the variables — never re‑hex.
- **Components:** `ui_kits/website/` has Header, Hero, PracticeGrid, TeamRow, QuoteBlock, PerspectivesList, ContactSection, Footer as JSX, all stitched together in `index.html`.
- **Slides:** `slides/` has six 1920×1080 templates (title, section, comparison, big quote, data, closing) and a `deck-stage.js`‑powered `index.html`.

## When you generate something

1. **Always** load `colors_and_type.css` first.
2. **Always** copy assets from `assets/` (logo, arc.svg) — never recreate them.
3. **Always** use Montserrat. If you don't have access to Google Fonts, fall back to system‑ui — and flag this to the user.
4. **Never** invent new brand colors. The palette is `#2299CE` / `#103758` / `#445253` plus the neutrals in the CSS file.
5. **Never** use emoji, drop shadows on resting cards, gradients, or playful illustration.
6. **Iconography** uses Lucide at 1.5px stroke. CDN link is fine.
