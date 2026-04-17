# VersaLabs Studio - UI/UX Guidelines

## 1. The "Linear" Aesthetic

VersaLabs implements a premium "Big Tech / Startup" aesthetic heavily inspired by Linear and high-end DevOps tools.

### Core Philosophy
- **High Contrast, Low Saturation:** Avoid overly bright, generic colors. Rely heavily on monochromatic scales with stark, bright interactive accents.
- **Micro-Animations Are Mandatory:** No state change should be instantaneous. Almost every interactive element requires a rapid, responsive spring animation.
- **Glassmorphism:** Strategic use of blurred backgrounds, stark borders with low opacity (`white/[0.08]`), and overlapping layers.

## 2. Design Tokens

### Typography
- **Primary Font:** `Outfit` (Geometric, clean, modern tech feel).
- **Weights:** Emphasize extreme weights for contrast (`tracking-tighter` with `font-bold` for headings, `font-medium` for descriptive text).
- **Sizing:** Use very large display headings (`text-6xl` or `text-7xl`) for heroes, paired with small, dense, highly legible utility text (`text-[13px]`).

### Colors & Palettes (Dark Mode Default)
- **Background:** True Black (`#000000`) or Deep Void (`#0D0D0F`).
- **Surfaces:** `#161618` to `#1C1C1F`.
- **Borders:** Extremely subtle. `#ffffff0a` (White at 4% to 10% opacity).
- **Text:** Headings in pure White (`#ffffff`), structural/supporting text in `zinc-400` or `zinc-500`.
- **Accents:** Use gradients on text specifically to highlight operational keywords (e.g., `bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent`).

## 3. Interaction Mechanics

### Spring Physics
When adopting `framer-motion`, default to a tight spring for components:
```javascript
const SPRING = { stiffness: 300, damping: 30 };
```

### Hover & Tap States
- **Buttons:** Scale down on tap (`whileTap={{ scale: 0.98 }}`), scale up slightly on hover (`whileHover={{ scale: 1.02 }}`). Ensure hover triggers an imperceptible background color shifts (e.g. from `white` to `rgba(255, 255, 255, 0.9)`).
- **Cards (Group Hover):** Use `group` in Tailwind to scale icons or slightly shift borders when the parent card is hovered. Add subtle, inner glows.

## 4. Banned Practices
- 🚫 **Generic UI Framework Output:** Do not use out-of-the-box Bootstrap, MUI, or unmodified Tailwind defaults without our strict color tokens.
- 🚫 **Clown Colors:** Do not use heavily saturated primary colors (pure red, pure blue) unless specifically requested by an enterprise brand. Stick to controlled palettes.
- 🚫 **Unanimated Layout Shifts:** All layout height shifts or list reorderings must use `layout` animate properties.
