---
name: taste-engine
description: Enforces modern high-taste UI/UX design, physics animations, and bespoke typography for web applications, eliminating generic AI-generated aesthetic clichés.
---

# Taste Engine: High-Aesthetic UI/UX Skill

This skill guides the agent in creating bespoke, production-ready, human-crafted user interfaces.

## When to Activate
Activate this skill whenever:
- Designing a new web page, landing page, component, or dashboard.
- Modernizing or redesigning an existing UI.
- Choosing color palettes, typography scales, or animation curves.

## Design Decision Matrix

### 1. Aesthetic Themes
- **Editorial Warm**:
  - Headings: `font-serif` (Fraunces/Playfair)
  - Colors: Cream `#FBF9F5`, Warm Charcoal `#1A1816`, Amber `#D97706`
  - Vibe: New York Times Magazine, Kinfolk, boutique studio.
- **Swiss Precision**:
  - Headings: `font-display` (Space Grotesk) with `tracking-[-0.04em]`
  - Colors: Crisp Monochrome (99% white, 5% deep ink), subtle 1px surgical borders.
  - Vibe: Braun, Dieter Rams, Linear app.
- **Tactile Luxe**:
  - Headings: Heavy grotesque with high contrast body.
  - Colors: Obsidian `#0C0E12`, warm stone `#23272F`, gold/champagne accents.
  - Vibe: Apple Pro hardware, high-end design engineering.

### 2. Motion Standards (Emil Kowalski Philosophy)
- Default Spring: `{ type: "spring", stiffness: 380, damping: 28, mass: 0.6 }`
- Gentle Spring: `{ type: "spring", stiffness: 220, damping: 24 }`
- Snappy Hover: `{ scale: 1.02, y: -2 }`
- Tap Feedback: `{ scale: 0.97 }`
- Scrolling: Momentum smooth-scroll with `Lenis`.

### 3. Component Architecture
- Use `clsx` and `tailwind-merge` (`cn` function).
- Ensure high contrast readability (WCAG AAA compliant).
- Use Radix UI primitives for headless accessibility.
