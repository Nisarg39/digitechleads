# Migration Architecture

## Target Folder Structure

```
digitechleads/
├── app/
│   ├── layout.tsx              # Root layout with metadata, fonts
│   ├── page.tsx                # Homepage (composes all sections)
│   ├── globals.css             # Tailwind imports + base styles
│   ├── not-found.tsx           # 404 page
│   └── favicon.ico
├── components/
│   ├── navigation/
│   │   ├── Navbar.tsx          # Main navigation with dropdown
│   │   ├── MobileMenu.tsx      # Mobile drawer menu
│   │   └── ServiceDropdown.tsx # Mega menu dropdown
│   ├── footer/
│   │   └── Footer.tsx          # Site footer
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Ticker.tsx
│   │   ├── About.tsx
│   │   ├── DMInfo.tsx          # Digital Growth Engine
│   │   ├── CampaignLifecycle.tsx
│   │   ├── Services.tsx        # Services accordion
│   │   ├── Process.tsx
│   │   ├── Blog.tsx
│   │   ├── FAQ.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── Button.tsx          # Reusable button variants
│       ├── SectionLabel.tsx    # "About DigiTechLeads" label style
│       ├── BigTitle.tsx        # Bebas Neue heading style
│       ├── MetricCard.tsx      # Stats card component
│       ├── ServiceAccordion.tsx  # Accordion item component
│       └── FAQAccordion.tsx    # FAQ item component
├── lib/
│   ├── utils.ts                # cn() helper, utilities
│   ├── animations/
│   │   ├── fadeIn.ts           # Framer Motion variants
│   │   ├── slideUp.ts
│   │   └── stagger.ts
│   └── hooks/
│       ├── useScrollPosition.ts
│       └── useInView.ts
├── data/
│   ├── services.ts             # Services data array
│   ├── blog.ts                 # Blog posts data
│   ├── faq.ts                  # FAQ data
│   └── metrics.ts              # Hero/about metrics
├── public/
│   ├── images/
│   │   └── (logo, backgrounds)
│   └── fonts/
│       └── (if self-hosting)
├── docs/                       # Documentation
├── tailwind.config.ts
├── postcss.config.mjs
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## Component Boundaries

### Server Components (Default)
Most sections can be Server Components:
- `Hero` (except particles canvas)
- `About`
- `DMInfo`
- `CampaignLifecycle`
- `Services` (list only)
- `Process`
- `Blog`
- `FAQ`
- `Contact` (form wrapper)
- `Footer`

### Client Components (use "use client")
Components requiring client-side JavaScript:
- `Navbar` (scroll state, mobile menu toggle)
- `MobileMenu` (state, animations)
- `ServiceDropdown` (hover state)
- `ServicesAccordion` (expand/collapse state)
- `FAQAccordion` (expand/collapse state)
- `HeroParticles` (canvas animation)
- `Ticker` (CSS animation okay, but JS for pause/play)
- `ContactForm` (form state, validation)
- `AnimatedCounter` (count-up animation)
- `ScrollReveal` (intersection observer wrapper)

---

## State Management Strategy

| Feature | Approach |
|---------|----------|
| Mobile menu open/close | Local state in MobileMenu component |
| Service accordion | Local state per item, single expand allowed |
| FAQ accordion | Local state per item, multiple expands allowed |
| Nav scroll detection | Custom hook `useScrollPosition` |
| Scroll reveal | Framer Motion `whileInView` |
| Form validation | React Hook Form + Zod |
| Active service hash | URL hash + scrollIntoView |

---

## Animation Library Usage

| Library | Use For | Don't Use For |
|---------|---------|---------------|
| Framer Motion | Component mount/unmount, hover effects, scroll reveals, layout animations | Complex timelines |
| GSAP | Particle systems, complex sequencing, ScrollTrigger | Simple hover states |
| CSS/Tailwind | Simple transitions, keyframes for ticker, hover gradients | State-driven animations |

---

## Routing Strategy

Since this is a single-page site, we use:
- `app/page.tsx` - Main landing page
- Hash anchors (`#home`, `#about`, `#services`) for section navigation
- Smooth scroll behavior via CSS + JS
- No additional routes needed initially

---

## Performance Considerations

1. **Images**: Use Next.js `<Image />` component for all images
2. **Fonts**: Use `next/font` for Google Fonts (Bebas Neue, Plus Jakarta Sans)
3. **Animations**: Add `prefers-reduced-motion` support
4. **Particles**: Limit particle count on mobile, use `requestAnimationFrame`
5. **Code Splitting**: Each section as separate component enables natural code splitting
