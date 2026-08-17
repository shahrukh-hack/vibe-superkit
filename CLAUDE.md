# Claude Code Guidelines: Vibe Superkit

This repository is an opinionated high-taste UI/UX design engine for modern web apps.

## Architecture
- **Framework**: Vite + React 19 + TypeScript
- **Styling**: Tailwind CSS + Custom CSS Variables in `src/styles/tokens.css`
- **Animation**: `framer-motion` (spring physics via `src/lib/motion-presets.ts`)
- **Smooth Scroll**: `lenis` (`src/lib/smooth-scroll.ts`)
- **Icons**: `lucide-react`
- **Toasts**: `sonner`
- **Primitives**: `@radix-ui`

## Design Rules for Code Generation
1. **Never generate cliché "AI SaaS" themes** (dark purple glows, gradient text keywords, icon-stuffed bento boxes).
2. **Prioritize Emil Kowalski-grade micro-interactions**:
   - Use `whileTap={{ scale: 0.98 }}` and `whileHover={{ y: -2 }}`.
   - Use spring physics: `{ type: 'spring', stiffness: 400, damping: 30 }`.
3. **Use the design tokens in `tokens.css`**: Reference `bg-background`, `text-foreground`, `bg-primary`, `border-border`, etc.
4. **Always merge Tailwind classes** using `cn(...)` from `src/lib/utils.ts`.
5. **Ensure responsive fluid layouts** that gracefully degrade down to 320px mobile screens.
