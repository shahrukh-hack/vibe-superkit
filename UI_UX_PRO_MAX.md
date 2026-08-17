# UI UX Pro Max: Design Intelligence & Systems Manual

> **UI UX Pro Max** is the design intelligence framework that turns AI coding assistants (Antigravity, Cursor, Claude Code, Windsurf) into agency-grade Design Engineers.

---

## 📐 1. The Design Intelligence Matrix

### A. Layout & Spatial Rhythms
* **The 8pt Grid Hierarchy**: All layout spacing (`gap`, `padding`, `margin`) must use multiples of 4 or 8:
  * Micro-spacing: `4px` (`gap-1`), `8px` (`gap-2`), `12px` (`gap-3`)
  * Container padding: `16px` (`p-4`), `24px` (`p-6`), `32px` (`p-8`), `48px` (`p-12`)
* **Visual Anchor Principles**:
  * Every page section starts with a category monogram or index indicator: `[ 01 / SECTION NAME ]`.
  * Maintain consistent container max-widths: `max-w-6xl` for hero and showcases, `max-w-4xl` for articles.

---

## 🎨 2. Color Science & Contrast Mathematics

Never use arbitrary hex values. Use HSL tokens with mathematical lightness deltas:

| Role | Light Theme (Editorial) | Dark Theme (Tactile Luxe) |
|---|---|---|
| **Background** | `hsl(40 33% 98%)` (Warm Cream) | `hsl(224 25% 6%)` (Obsidian Charcoal) |
| **Foreground / Text** | `hsl(30 15% 12%)` (Espresso Ink) | `hsl(220 15% 94%)` (Soft Platinum) |
| **Card Surface** | `hsl(40 25% 95%)` | `hsl(224 20% 10%)` |
| **Border Stroke** | `hsl(35 15% 85%)` | `hsl(224 16% 18%)` |
| **Accent Primary** | `hsl(24 80% 46%)` (Terracotta) | `hsl(43 96% 56%)` (Champagne Gold) |

---

## ⚡ 3. UI Component Blueprint Specs

### Input Fields & Search Bars
1. Include left icon adornment for visual recognition (`Search`, `Mail`, `Key`).
2. Include right interactive actions (Clear `✕`, Show Password `👁`, Copy `📋`).
3. Include keyboard shortcut chips (`kbd`: `⌘K`, `/`, `ESC`).
4. Display accessible helper text and instant validation feedback.

### Buttons & Interactive Surfaces
1. **Hover State**: Lift by `-1.5px` to `-2px` with smooth spring.
2. **Press State**: Scale down to `0.96` or `0.97` to simulate physical tactile resistance.
3. **Focus State**: `focus-visible:ring-2 focus-visible:ring-primary/20` with 2px offset.

### Modals, Drawers & Popovers
1. Use backdrop blur (`backdrop-blur-md bg-background/80`).
2. Use stacked sonner toasts for feedback with custom icons.
3. Animate entries with spring damping: `{ type: "spring", stiffness: 350, damping: 28 }`.

---

## 🔌 4. MCP (Model Context Protocol) Integration

You can connect AI agents directly to the UI UX Pro Max and 21st.dev MCP servers by adding this to your AI configuration:

```json
{
  "mcpServers": {
    "ui-ux-pro-max": {
      "command": "npx",
      "args": ["-y", "ui-ux-pro-mcp"]
    },
    "21st-dev": {
      "command": "npx",
      "args": ["-y", "21st-dev-mcp"]
    }
  }
}
```
