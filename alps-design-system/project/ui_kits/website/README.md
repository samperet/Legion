# ALPS Marketing Website — UI Kit

High‑fidelity recreation of the ALPS marketing surface — the most plausible primary surface for a consulting firm of this profile.

## Files

- `index.html` — full clickable homepage demo with nav, hero, practice grid, perspectives, contact CTA, footer.
- `Header.jsx` — sticky nav, scrolls from transparent to opaque‑blurred.
- `Hero.jsx` — deep navy hero block with the arc motif behind the headline.
- `EyebrowHeading.jsx` — eyebrow + heading + lede pattern reused across sections.
- `PracticeGrid.jsx` — 3‑up card grid for service areas.
- `TeamRow.jsx` — partner roster with portraits and bios.
- `StatBlock.jsx` — large editorial stat callouts.
- `PerspectivesList.jsx` — articles/insights listing.
- `QuoteBlock.jsx` — pull quote with attribution.
- `ContactSection.jsx` — short form + meeting info.
- `Footer.jsx` — tall navy footer.
- `Button.jsx`, `Card.jsx`, `Field.jsx` — atoms.

## Notes
- All components use the tokens in `../../colors_and_type.css`.
- Image placeholders use `<image-slot>` so the user can drag‑drop real photography.
- Click‑thru fakes: nav links scroll to anchors; "Schedule a Conversation" opens a small in‑page modal; form is non‑functional.
