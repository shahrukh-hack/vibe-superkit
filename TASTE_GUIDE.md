# Designing with Impeccable Taste: The Vibe Coder Handbook

> *"Good design makes a product useful. Great design makes a product feel human, tactile, and unforgettable."*

This handbook is your compass for building modern websites with AI without falling into the trap of generic "AI slop".

---

## 1. The Anatomy of "AI Slop" vs. Bespoke Human Craft

| Cliché AI Pattern (Avoid) | High-Taste Human Alternative (Do This) |
|---|---|
| **Neon purple glowing card borders** on dark backgrounds | Subtle 1px crisp borders (`border-border/60`) with tactile inner ambient shadow |
| **Pill badges with sparkle emojis** (`✨ Next-Gen AI`) above every title | Editorial category headers or simple superscript tags (`[ 01 / ARCHITECTURE ]`) |
| **CSS gradient text across headline keywords** | High-contrast monochrome typography with intentional italicized serif accents |
| **Generic un-tracked `Inter` font** on everything | Expressive serif (`Fraunces`) paired with a geometric sans (`Plus Jakarta Sans`) |
| **Icon-stuffed bento box cards** with 3D spheres | Asymmetric editorial magazine layouts or live interactive previews |
| **Linear / ease-in-out CSS transitions** | Physics-based spring animations with velocity and damping (`framer-motion`) |
| **Jumpy native scrollbars** | Momentum-smoothed scroll via `Lenis` |

---

## 2. The 3 Curated Aesthetic Personalities

### Aesthetic A: The Modern Editorial
* **Inspiration**: Kinfolk, Stripe Press, high-end architectural journals.
* **Typography**: `Fraunces` / `Playfair` + `Plus Jakarta Sans`.
* **Colors**: Warm cream canvas, deep espresso ink, warm rust/ochre accents.
* **Feel**: Intellectual, timeless, organic, premium.

### Aesthetic B: Swiss Precision (Linear / Dieter Rams)
* **Inspiration**: Braun industrial design, Linear, Swiss typography posters.
* **Typography**: `Space Grotesk` (tight tracking `-0.04em`) + `Inter Tight`.
* **Colors**: High-contrast obsidian, surgical white, slate gray dividers.
* **Feel**: Precise, fast, ultra-functional, engineering-first.

### Aesthetic C: Tactile Studio Luxe
* **Inspiration**: Teenage Engineering, Apple Pro keynote design.
* **Typography**: Heavy geometric display + crisp monospaced tags.
* **Colors**: Rich dark charcoal, muted gold / champagne accents, subtle noise overlay.
* **Feel**: Industrial, physical hardware, tactile feedback.

---

## 3. Micro-Interaction Principles (Emil Kowalski Philosophy)

1. **Weight & Resistance**: Interactive elements must feel physical. Buttons should depress slightly on click (`scale: 0.97`) and lift subtly on hover (`y: -2px`).
2. **Spring Physics over Linear Timing**: Never use `transition: all 0.3s ease`. Use spring curves:
   ```ts
   transition: { type: "spring", stiffness: 400, damping: 28, mass: 0.6 }
   ```
3. **Contextual Feedback**: Use `sonner` for rich, stacked toast notifications with animated dismissals.
4. **Fluid Motion**: Animate layout changes using Framer Motion's `layout` and `layoutId` props.

---

## 4. Drop-in Prompt Templates for AI Coders

Copy and paste these prompts into Cursor, Claude, or Antigravity:

### Prompt 1: The Editorial Hero Section
> *"Build a modern, non-cliché hero section with an editorial serif heading, an asymmetric layout with a live interactive card on the right, tight negative letter-spacing, and subtle spring hover animations. Do NOT use purple glowing gradients or sparkle pill badges."*

### Prompt 2: The Precision Origin UI Form
> *"Create a polished settings/search modal using Radix UI primitives and Lucide icons, featuring keyboard shortcut badges (`⌘K`), clean floating label inputs, and smooth spring physics transitions."*

### Prompt 3: The Tactile Feature Grid
> *"Build a 3-part feature showcase using high-contrast typography, 1px subtle borders, inner tactile shadows, and micro-animated tab switchers with Framer Motion."*
