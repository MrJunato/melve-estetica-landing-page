---
name: web-design-guidelines
description: Review UI code for Web Interface Guidelines compliance. Use when asked to "review my UI", "check accessibility", "audit design", "review UX", or "check my site against best practices".
metadata:
  author: vercel
  version: "1.0.0"
  argument-hint: <file-or-pattern>
---

# Web Interface Guidelines

Review files for compliance with Web Interface Guidelines.

## How It Works

1. If network is available, fetch fresh guidelines from:
   `https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md`
2. Otherwise use the embedded snapshot below (2026-10-22).
3. Read the specified files, apply all rules, output terse `file:line` findings.

## Embedded snapshot (abbreviated from upstream command.md)

### Accessibility
- Icon-only buttons need `aria-label`
- Form controls need `<label>` or `aria-label`
- Interactive elements need keyboard handlers
- `<button>` for actions, `<a>`/`<Link>` for navigation (not `<div onClick>`)
- Images need `alt` (or `alt="">` if decorative); decorative icons `aria-hidden="true"`
- Async updates need `aria-live="polite"`; prefer semantic HTML; hierarchical headings; skip link

### Focus / Forms / Animation
- Visible `focus-visible` ring; never `outline-none` without replacement
- Inputs: `autocomplete`, `name`, correct `type`/`inputmode`; never block paste; clickable labels; inline errors + focus first error
- Honor `prefers-reduced-motion`; animate `transform`/`opacity` only; never `transition: all`

### Typography / Content / Images / Performance
- `…` not `...`; curly quotes; `text-wrap: balance/pretty` on headings
- Handle long/empty/user content; `min-w-0` in flex truncation
- `<img>` with `width`+`height`; lazy below fold; `priority` above fold
- Virtualize lists >50; no layout reads in render; preconnect CDN; prefer video over GIF

### Navigation / Touch / Layout / Theming / i18n / Hydration
- URL reflects state; links support open-in-new-tab; destructive actions need confirm/undo
- `touch-action: manipulation`; `overscroll-behavior: contain` in modals; keyboard alternative to gestures
- Safe-area insets; avoid unwanted scrollbars; flex/grid over JS measurement
- `color-scheme`, `theme-color`, explicit select colors; `Intl.*` for dates/numbers; `translate="no"` for brands/code
- No hydration mismatch; `suppressHydrationWarning` only when needed; hover/active states; active voice; specific button labels

## Output Format

Group by file. Terse findings.

```text
## src/Button.tsx

src/Button.tsx:42 - icon button missing aria-label
src/Button.tsx:18 - input lacks label

## src/Card.tsx

✓ pass
```

Source: https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines
Full rules: https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md
