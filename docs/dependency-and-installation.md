# Dependency and Installation

Exact npm install commands for the project.

---

## Milestone 1: Project Initialization

### Step 1: Create Next.js Project
```bash
cd "/Users/nash/Documents/FrontEnd Development/reactApp"
npx create-next-app@latest digitechleads-next --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --use-npm
```

Or with all flags explicit:
```bash
cd "/Users/nash/Documents/FrontEnd Development/reactApp"
echo "my-app" | npx create-next-app@latest digitechleads-next --ts --tailwind --eslint --app --no-src-dir --import-alias "@/*" --use-npm
```

**Post-creation steps:**
```bash
cd digitechleads-next
rm -rf .git  # Remove default git if you want to use existing
```

---

## Step 2: Core Dependencies

### Animation Libraries
```bash
npm install framer-motion gsap @gsap/react
```

| Package | Version | Purpose |
|---------|---------|---------|
| framer-motion | ^11.x | Component animations, gestures, layout |
| gsap | ^3.x | Complex timelines, ScrollTrigger, particles |
| @gsap/react | ^2.x | GSAP React integration hooks |

### Form Handling & Validation
```bash
npm install react-hook-form zod @hookform/resolvers
```

| Package | Version | Purpose |
|---------|---------|---------|
| react-hook-form | ^7.x | Form state management |
| zod | ^3.x | Schema validation |
| @hookform/resolvers | ^3.x | Zod + RHF integration |

### UI Components & Icons
```bash
npm install lucide-react clsx tailwind-merge class-variance-authority
```

| Package | Version | Purpose |
|---------|---------|---------|
| lucide-react | ^0.x | Icon library |
| clsx | ^2.x | Conditional class merging |
| tailwind-merge | ^2.x | Tailwind class deduplication |
| class-variance-authority | ^0.x | Component variant system |

### Utility Libraries
```bash
npm install @radix-ui/react-accordion @radix-ui/react-dialog
```

| Package | Version | Purpose |
|---------|---------|---------|
| @radix-ui/react-accordion | ^1.x | Accessible accordion primitives |
| @radix-ui/react-dialog | ^1.x | Accessible dialog primitives |

---

## Step 3: Development Dependencies

```bash
npm install -D prettier prettier-plugin-tailwindcss @types/gsap
```

| Package | Version | Purpose |
|---------|---------|---------|
| prettier | ^3.x | Code formatting |
| prettier-plugin-tailwindcss | ^0.x | Sort Tailwind classes |
| @types/gsap | ^3.x | TypeScript types for GSAP |

---

## Step 4: Font Setup (Google Fonts)

Next.js built-in font optimization - no install needed. Will configure in `app/layout.tsx`:

```typescript
import { Bebas_Neue, Plus_Jakarta_Sans } from 'next/font/google'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
})
```

---

## Complete Installation Command (One-Liner)

After project creation:
```bash
cd digitechleads-next && npm install framer-motion gsap @gsap/react react-hook-form zod @hookform/resolvers lucide-react clsx tailwind-merge class-variance-authority @radix-ui/react-accordion @radix-ui/react-dialog && npm install -D prettier prettier-plugin-tailwindcss @types/gsap
```

---

## Package.json Scripts

Ensure these scripts are present:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "format": "prettier --write ."
  }
}
```

---

## Post-Installation Configuration Checklist

- [ ] Verify `next.config.js` has output settings if needed
- [ ] Configure `tailwind.config.ts` with design tokens
- [ ] Set up `prettier.config.js` with Tailwind plugin
- [ ] Configure `.eslintrc.json` if extending
- [ ] Create `components.json` for shadcn/ui compatibility (optional)
- [ ] Add VS Code settings for format on save

---

## Version Lock Summary

```json
{
  "dependencies": {
    "next": "^14.x",
    "react": "^18.x",
    "react-dom": "^18.x",
    "framer-motion": "^11.x",
    "gsap": "^3.x",
    "@gsap/react": "^2.x",
    "react-hook-form": "^7.x",
    "zod": "^3.x",
    "@hookform/resolvers": "^3.x",
    "lucide-react": "^0.x",
    "clsx": "^2.x",
    "tailwind-merge": "^2.x",
    "class-variance-authority": "^0.x",
    "@radix-ui/react-accordion": "^1.x",
    "@radix-ui/react-dialog": "^1.x"
  },
  "devDependencies": {
    "typescript": "^5.x",
    "@types/node": "^20.x",
    "@types/react": "^18.x",
    "@types/react-dom": "^18.x",
    "@types/gsap": "^3.x",
    "eslint": "^8.x",
    "eslint-config-next": "^14.x",
    "postcss": "^8.x",
    "tailwindcss": "^3.x",
    "prettier": "^3.x",
    "prettier-plugin-tailwindcss": "^0.x"
  }
}
```
