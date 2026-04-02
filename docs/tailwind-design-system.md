# Tailwind Design System

Complete design token migration from current CSS to Tailwind CSS.

---

## Color Tokens

### Brand Colors (Gold Palette)

| Token Name | HEX Value | CSS Variable | Tailwind Class |
|------------|-----------|--------------|----------------|
| Gold Primary | `#F5A623` | `--gold` | `text-gold` / `bg-gold` |
| Gold Light | `#FFD06A` | `--gold2` | `text-gold-2` / `bg-gold-2` |
| Gold Dark | `#E8920F` | `--gold3` | `text-gold-3` / `bg-gold-3` |

### Background Colors

| Token Name | HEX Value | CSS Variable | Usage |
|------------|-----------|--------------|-------|
| BG Primary | `#0D1117` | `--bg` | Main page background |
| BG Secondary | `#131920` | `--bg2` | Section backgrounds |
| BG Tertiary | `#1A2332` | `--bg3` | Cards, elevated surfaces |
| BG Quaternary | `#1E2A3A` | `--bg4` | Accent backgrounds |

### Text Colors

| Token Name | HEX Value | CSS Variable | Usage |
|------------|-----------|--------------|-------|
| White | `#F0EDE6` | `--white` | Primary text |
| Muted | `#8A97A8` | `--muted` | Secondary/muted text |

### Semantic Colors

| Token Name | HEX Value | CSS Variable | Usage |
|------------|-----------|--------------|-------|
| Border | `rgba(245,166,35,0.15)` | `--border` | Card borders, dividers |
| Success | `#00C850` | - | Live indicators |

---

## Tailwind Config Extension

```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#F5A623",
          2: "#FFD06A",
          3: "#E8920F",
        },
        bg: {
          DEFAULT: "#0D1117",
          2: "#131920",
          3: "#1A2332",
          4: "#1E2A3A",
        },
        muted: "#8A97A8",
        cream: "#F0EDE6",
        success: "#00C850",
      },
      fontFamily: {
        bebas: ["var(--font-bebas)", "Bebas Neue", "sans-serif"],
        jakarta: ["var(--font-jakarta)", "Plus Jakarta Sans", "sans-serif"],
      },
      borderColor: {
        gold: {
          DEFAULT: "rgba(245,166,35,0.15)",
          30: "rgba(245,166,35,0.30)",
          35: "rgba(245,166,35,0.35)",
        },
      },
      backgroundColor: {
        gold: {
          4: "rgba(245,166,35,0.04)",
          5: "rgba(245,166,35,0.05)",
          6: "rgba(245,166,35,0.06)",
          8: "rgba(245,166,35,0.08)",
          10: "rgba(245,166,35,0.10)",
          12: "rgba(245,166,35,0.12)",
          15: "rgba(245,166,35,0.15)",
        },
      },
      boxShadow: {
        gold: {
          sm: "0 4px 20px rgba(245,166,35,0.4)",
          DEFAULT: "0 12px 30px rgba(245,166,35,0.35)",
          lg: "0 20px 60px rgba(0,0,0,0.5)",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.9s ease both",
        pulse: "pulse 2s infinite",
        shimmer: "shimmer 3s linear infinite",
        tick: "tick 25s linear infinite",
        "dash-move": "dashMove 2s linear infinite",
        ping: "ping 1.5s infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(35px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          from: { backgroundPosition: "0% center" },
          to: { backgroundPosition: "200% center" },
        },
        tick: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        dashMove: {
          from: { strokeDashoffset: "0" },
          to: { strokeDashoffset: "-60" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## Typography Scale

### Font Families
- **Display/Headings**: Bebas Neue (400)
- **Body/UI**: Plus Jakarta Sans (300, 400, 500, 600, 700)

### Heading Sizes (Current → Tailwind)

| Element | Current Size | Tailwind Class |
|---------|--------------|----------------|
| Hero Title | `clamp(4rem, 9.5vw, 9.5rem)` | `text-[clamp(4rem,9.5vw,9.5rem)]` or custom |
| Big Title | `clamp(2.8rem, 5.5vw, 5.5rem)` | `text-[clamp(2.8rem,5.5vw,5.5rem)]` |
| About Headline | `clamp(2rem, 4vw, 4rem)` | `text-[clamp(2rem,4vw,4rem)]` |
| Section H3 | `1.6rem` | `text-2xl` |
| Card Title | `1rem` | `text-base` |

### Body Text Sizes

| Element | Current Size | Tailwind Class |
|---------|--------------|----------------|
| Body Large | `1.05rem` | `text-base` |
| Body Regular | `0.95rem` | `text-sm` |
| Body Small | `0.875rem` | `text-sm` |
| Caption | `0.72rem` | `text-xs` |

### Typography Utility Classes

```css
/* In globals.css or as Tailwind @layer */
.text-hero {
  font-family: var(--font-bebas);
  font-size: clamp(4rem, 9.5vw, 9.5rem);
  line-height: 0.9;
  letter-spacing: 0.02em;
}

.text-big-title {
  font-family: var(--font-bebas);
  font-size: clamp(2.8rem, 5.5vw, 5.5rem);
  line-height: 0.95;
  letter-spacing: 0.02em;
}

.text-outline {
  -webkit-text-stroke: 2px #F5A623;
  color: transparent;
}

.label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #F5A623;
}
```

---

## Spacing System

### Section Padding
- Default: `110px 5%` → `py-28 px-[5%]`
- Mobile: `60px 5%` → `py-16 px-[5%]`

### Component Spacing Scale

| Current Value | Tailwind Equivalent |
|---------------|---------------------|
| `0.25rem` (4px) | `space-1` |
| `0.5rem` (8px) | `space-2` |
| `0.75rem` (12px) | `space-3` |
| `1rem` (16px) | `space-4` |
| `1.25rem` (20px) | `space-5` |
| `1.5rem` (24px) | `space-6` |
| `2rem` (32px) | `space-8` |
| `2.5rem` (40px) | `space-10` |
| `3rem` (48px) | `space-12` |
| `4rem` (64px) | `space-16` |
| `5rem` (80px) | `space-20` |
| `6rem` (96px) | `space-24` |

---

## Component Pattern Library

### Button Variants

```typescript
// components/ui/Button.tsx
const buttonVariants = cva(
  "inline-flex items-center gap-2 font-bold uppercase tracking-wider transition-all duration-300",
  {
    variants: {
      variant: {
        gold: [
          "bg-gradient-to-br from-gold to-gold-3",
          "text-bg",
          "px-8 py-4",
          "rounded-sm",
          "hover:-translate-y-1",
          "hover:shadow-gold",
        ],
        ghost: [
          "border border-gold-35",
          "text-gold",
          "px-8 py-4",
          "rounded-sm",
          "hover:bg-gold-10",
          "hover:border-gold",
          "hover:-translate-y-1",
        ],
        outline: [
          "border border-white/20",
          "text-white",
          "px-6 py-3",
          "rounded-lg",
          "hover:border-gold/50",
        ],
      },
      size: {
        sm: "text-xs px-4 py-2",
        md: "text-sm px-6 py-3",
        lg: "text-sm px-8 py-4",
      },
    },
    defaultVariants: {
      variant: "gold",
      size: "lg",
    },
  }
);
```

### Card Patterns

```typescript
// Common card base
const cardBase = [
  "bg-bg-3",
  "border border-gold",
  "rounded-xl",
  "transition-all duration-300",
];

// Hover state
const cardHover = [
  "hover:border-gold-35",
  "hover:shadow-lg",
];

// Example: Metric Card
// className={cn(cardBase, cardHover, "p-6")}
```

### Glass Effect Pattern

```css
.glass {
  background: linear-gradient(180deg, rgba(26,35,50,0.92), rgba(19,25,32,0.86));
  border: 1px solid rgba(245,166,35,0.12);
  backdrop-filter: blur(20px);
}
```

---

## Border Radius Scale

| Current | Tailwind |
|---------|----------|
| `3px` | `rounded-sm` |
| `6px` | `rounded-md` |
| `8px` | `rounded-lg` |
| `10px` | `rounded-xl` |
| `12px` | `rounded-xl` |
| `14px` | `rounded-2xl` |
| `16px` | `rounded-2xl` |
| `18px` | `rounded-2xl` |
| `24px` | `rounded-3xl` |
| `999px` | `rounded-full` |

---

## Shadow System

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-gold-sm` | `0 4px 20px rgba(245,166,35,0.4)` | Nav CTA hover |
| `shadow-gold` | `0 12px 30px rgba(245,166,35,0.35)` | Button hover |
| `shadow-gold-lg` | `0 20px 60px rgba(0,0,0,0.5)` | Dropdowns, modals |
| `shadow-card` | `0 16px 30px rgba(0,0,0,0.24)` | Card hover |

---

## Gradient Patterns

### Gold Gradient (Buttons, Ticker)
```css
bg-gradient-to-br from-gold to-gold-3
/* Or for shimmer ticker: */
bg-gradient-to-r from-gold-3 via-gold to-gold-2
```

### Background Mesh Gradient
```css
bg-[radial-gradient(ellipse_80%_60%_at_15%_50%,rgba(245,166,35,0.07),transparent_55%)]
```

### Card Glass Gradient
```css
bg-gradient-to-b from-white/[0.03] to-gold/[0.04]
```

---

## Animation Tokens

### Durations
- Fast: `150ms` → `duration-150`
- Normal: `300ms` → `duration-300`
- Slow: `500ms` → `duration-500`
- Reveal: `800ms` → `duration-700`

### Easings (Tailwind defaults)
- `ease` (default)
- `ease-in`
- `ease-out`
- `ease-in-out`

### Custom Easings (for Framer Motion)
```typescript
const customEasings = {
  smooth: [0.34, 1.56, 0.64, 1], // Bounce-like
  gentle: [0.4, 0, 0.2, 1],
  snappy: [0.25, 0.1, 0.25, 1],
};
```

---

## Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| `sm` | 640px | Mobile landscape |
| `md` | 768px | Tablet |
| `lg` | 1024px | Small desktop |
| `xl` | 1280px | Desktop |
| `2xl` | 1536px | Large desktop |

### Current Media Query Mapping
- `max-width: 480px` → Default mobile styles
- `max-width: 768px` → `md:` overrides
- `max-width: 1100px` → `lg:` overrides
- `max-width: 1200px` → `xl:` overrides

---

## Z-Index Scale

| Layer | Value | Usage |
|-------|-------|-------|
| Base | 0 | Content |
| Elevated | 10 | Cards, buttons |
| Navigation | 1000 | Fixed nav |
| Mobile Menu | 999 | Full-screen menu |
| Overlay | 50 | Backdrops |
| Modal | 100 | Dialogs |
| Tooltip | 1000 | Floating elements |
