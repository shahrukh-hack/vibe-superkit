---
name: ui-ux-pro-max
description: Complete AI design intelligence system providing structured design rules, typographic scales, color mathematics, and component patterns across React, Next.js, and Tailwind CSS.
---

# UI UX Pro Max: AI Design Intelligence System

This skill equips the agent with professional design agency intelligence, eliminating aesthetic guesswork and enforcing mathematically sound UI/UX systems.

## Core Design Intelligence Modules

### 1. Mathematical Spacing & Typography Scale
- **Base Grid**: 4px / 8px incremental rhythm (`4px`, `8px`, `12px`, `16px`, `24px`, `32px`, `48px`, `64px`, `96px`).
- **Typographic Scale Ratio**: Major Third (1.250) or Perfect Fourth (1.333)
  - Caption / Tag: `text-xs` (12px / leading-4)
  - Body Small: `text-sm` (14px / leading-5)
  - Body Standard: `text-base` (16px / leading-6)
  - Subheading: `text-lg` to `text-xl` (18px–20px / leading-7 / tracking-tight)
  - Title / Section Header: `text-2xl` to `text-3xl` (24px–30px / leading-tight / tracking-tight)
  - Display Hero: `text-4xl` to `text-6xl` (36px–60px / leading-[1.08] / tracking-[-0.03em])

### 2. Design Style Taxonomy
- **Editorial / Humanist**: Serif headings (`Fraunces`, `Playfair`), high optical contrast, warm cream backgrounds, tactile physical boundaries.
- **Swiss Functionalist (Linear / Dieter Rams)**: Geometric display (`Space Grotesk`, `Inter Tight`), 1px surgical borders, monochromatic neutrals, extreme information density with high legibility.
- **Tactile Studio (Teenage Engineering / Apple Pro)**: Dark charcoal obsidian, fine specular borders, spring micro-interactions, rich physical depth.
- **Neo-Brutalist Kinetic**: Monospaced accents, hard contrast lines, vivid accent accents (`#22C55E`, `#F59E0B`), micro-stagger animations.

### 3. Component Construction Rules
- **Buttons**: Minimum click target `44x44px` on mobile, active press scale down (`scale: 0.97`), clear visual distinction between Primary, Secondary, Outline, and Ghost.
- **Forms & Inputs**: Floating labels or clear upper micro-labels, inline error states with ARIA attributes, keyboard shortcut badges (`⌘K`).
- **Modals & Drawers**: Backdrop blur (`backdrop-blur-md`), physics-based slide/scale transition, ESC key listener, focus trap.
- **Color Contrast**: Enforce WCAG 2.1 AA (minimum 4.5:1 for normal text, 3:1 for large text).

### 4. Interactive Easing & Motion Formula
- Use Spring Physics rather than linear transitions:
  - Snappy Interaction: `{ type: "spring", stiffness: 420, damping: 30 }`
  - Modal / Drawer Reveal: `{ type: "spring", stiffness: 260, damping: 26 }`
  - Stagger Children: `0.05s` delay between sequential list items.
