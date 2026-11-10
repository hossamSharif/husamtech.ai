---
name: modern-design
description: HusamTech design system. Use whenever creating or changing any page, section, component or style in this site, so new UI matches the existing clean white/teal look, works in light and dark themes, in Arabic (RTL) and English (LTR), on every screen size, and stays fast.
---

# HusamTech modern design system

Clean, airy, confident. White and teal in light mode; deep teal-black with a
bright teal accent in dark mode. Motion is subtle and never blocks content.

## 1. Colour — always use tokens

Tokens live in `src/styles/global.css` and are exposed as Tailwind colours.
Never hard-code a hex value or use `dark:` variants for colour; tokens switch
with `data-theme` on `<html>`.

| Tailwind class | Token | Use |
|---|---|---|
| `bg-bg` | `--bg` | page background |
| `bg-soft` | `--bg-soft` | alternating section background |
| `bg-surface` | `--surface` | cards, panels |
| `text-fg` | `--fg` | headings, body |
| `text-muted` | `--muted` | secondary text |
| `border-line` | `--line` | hairlines, card borders |
| `text-accent` / `bg-accent` | `--accent` | links, primary buttons, icons |
| `bg-tint` | `--accent-soft` | icon chips, badges |
| `text-on-accent` | `--on-accent` | text on `bg-accent` |

Text contrast must stay at or above 4.5:1 in both themes.

## 2. Layout and responsiveness (mobile-first, 320px → ultra-wide)

- Wrap content in `.container-x` (max 80rem, fluid gutters). Sections use `.section`.
- Write the phone layout first, then add `sm: md: lg: xl:` steps.
  Grids go 1 → 2 → 3/4 columns. Split sections stack on phones.
- Headings use the fluid classes `.h-display`, `.h-section` (built on `clamp()`).
- Touch targets ≥ 44px. Nothing may cause horizontal scroll at any width.
- Decorative elements are `aria-hidden` and must be clipped (`overflow-hidden` on the section).

## 3. RTL / i18n

- Use logical utilities only: `ps- pe- ms- me- start- end- text-start text-end border-s`.
  Never `pl- pr- ml- mr- left- right- text-left`.
- Mirror directional icons (arrows) with `rtl:-scale-x-100`.
- No copy in components: every string comes from `src/i18n/en.ts` and `ar.ts`
  (same shape, `ar` is typed against `en`). Add keys to both.
- No letter-spacing or uppercase on Arabic text (handled globally — don't override).

## 4. Components

- Buttons: `.btn .btn-primary` / `.btn .btn-ghost`.
- Cards: `.card` (surface, hairline border, radius 1.25rem, hover lift).
- Eyebrow label above headings: `.eyebrow`.
- Icons: `<Icon name="…" />` from `src/components/Icon.astro` (inline SVG, 1.75 stroke).
- Radius scale: 0.75rem controls, 1.25rem cards, 2rem feature panels.

## 5. Motion

- Scroll reveal: add `class="reveal"` and optionally `style="--d:120ms"` for stagger.
- Animate only `transform` and `opacity`. Durations 200–700ms, easing `var(--ease)`.
- Ambient loops (float, drift) are slow (6s+) and decorative only.
- Everything must respect `prefers-reduced-motion` (global rule already disables
  animation; don't add JS-driven motion that bypasses it).

## 6. Performance budget

- Astro components only; no UI framework or animation library.
- No client JS beyond the small script in `src/layouts/Base.astro`.
- Visuals are CSS/SVG. If a raster image is needed, use `astro:assets` `<Image>`
  with explicit dimensions and lazy loading (except above the fold).
- Per page: CSS + JS under 50 KB (excluding fonts).

## 7. Checklist before finishing a UI change

1. Light and dark both look right.
2. `/en/` and `/ar/` both look right (RTL mirrored, no clipped text).
3. 320, 375, 768, 1024, 1440, 1920px: no overflow, sensible columns.
4. `npm run build` and `npm run check` pass.
