# Section Mapping

Complete mapping from current HTML structure to Next.js components.

---

## 1. Navigation

### Current HTML Structure
- File: `index.html.html` lines 29-52, 271-275
- Elements: `nav`, `ul.nav-links`, `.has-dropdown`, `.nav-dropdown`, `.hamburger`, `.mmenu`

### Target Components
```
components/navigation/
├── Navbar.tsx          (main navigation wrapper)
├── DesktopNav.tsx      (desktop links + dropdown)
├── ServiceDropdown.tsx (mega menu with 12 services)
├── MobileMenu.tsx      (full-screen mobile drawer)
└── MobileNavLinks.tsx  (mobile menu links)
```

### Data
- Service items array (12 items with icons)
- Navigation links (Home, About, Services, Process, Blog, Contact)

### Behavior Mapping
| Current | Next.js |
|---------|---------|
| `onclick="toggleMenu()"` | React state `isMobileMenuOpen` |
| `nav.scrolled` class | `useScrollPosition` hook + conditional class |
| Hover dropdown | CSS + Framer for smooth reveal |
| Anchor links | Next.js Link with scroll behavior |

---

## 2. Hero Section

### Current HTML Structure
- File: `index.html.html` lines 53-104
- Elements: `#home`, `.hero-mesh`, `.hero-grid`, `#particles`, `.orb`, `.hero-content`, `.hero-visual`

### Target Components
```
components/sections/
├── Hero.tsx              (section wrapper)
├── HeroParticles.tsx     (canvas animation - client)
├── HeroContent.tsx       (text + CTAs)
├── HeroVisual.tsx        (DM funnel infographic)
└── ScrollHint.tsx        (scroll indicator)
```

### Data
- Badge text: "Premium Digital Marketing Agency"
- Title: "TURN ATTENTION INTO TRUST..."
- Subtitle text
- CTA buttons (2)
- Chips (4 items)
- Metrics (3 items with counters)

### Behavior Mapping
| Current | Next.js |
|---------|---------|
| Canvas particles (lines 418-426) | GSAP/Canvas in HeroParticles.tsx |
| CSS animations (orb, grid fade) | Framer Motion + CSS |
| Counter animation | Custom `AnimatedCounter` component |

---

## 3. Ticker

### Current HTML Structure
- File: `index.html.html` lines 107-113
- Elements: `.ticker`, `.ticker-track`

### Target Component
```
components/sections/Ticker.tsx
```

### Data
- Service names array (9 items)
- Duplicated for seamless loop

### Behavior
- CSS animation only (no state needed)
- `animation: tick 25s linear infinite`

---

## 4. About Section

### Current HTML Structure
- File: `index.html.html` lines 119-149, 296-321
- Elements: `#about`, `.about-wrap`, `.about-visual`, `.about-text`, `.about-points-premium`

### Target Components
```
components/sections/
├── About.tsx             (section wrapper)
├── AboutVisual.tsx       (glass card with stats)
├── AboutPoints.tsx       (4 premium point cards)
└── AnimatedBarChart.tsx  (CSS bar animations)
```

### Data
- Stats: 4 KPIs with numbers
- Points: 4 value propositions
- Keywords ribbon: 6 tags

### Behavior
- Scroll reveal animations (Framer Motion)
- Bar chart CSS animations on mount

---

## 5. Digital Growth Engine (DM Info)

### Current HTML Structure
- File: `index.html.html` lines 149-183
- Elements: `#dm-info`, `.dm-canvas`, `.flow-diagram`, `.channel-grid`

### Target Components
```
components/sections/
├── DMInfo.tsx            (section wrapper)
├── FlowDiagram.tsx       (5-node flow with arrows)
├── FlowNode.tsx          (individual node)
├── FlowArrow.tsx         (SVG arrow with dash animation)
└── ChannelGrid.tsx       (4-column channel cards)
```

### Data
- Flow nodes: 5 items (Target Audience → Revenue)
- Channel cards: 4 items with percentages

### Behavior
- Node entry animations (Framer stagger)
- SVG line dash animation (CSS)
- Hover effects on cards

---

## 6. Campaign Lifecycle

### Current HTML Structure
- File: `index.html.html` lines 381-404
- Elements: `#campaign-life`, `.campaign-timeline`, `.camp-step`

### Target Components
```
components/sections/
├── CampaignLifecycle.tsx (section wrapper)
├── Timeline.tsx          (vertical timeline)
└── TimelineStep.tsx      (individual step with tags)
```

### Data
- 4 steps: Research → Creative → Launch → Optimize
- Tags per step (3 each)

### Behavior
- GSAP ScrollTrigger for scroll-linked reveals
- Icon hover effects

---

## 7. Services Section

### Current HTML Structure
- File: `index.html.html` lines 184-210, 406
- Elements: `#services`, `.svc-accordion`, `.svc-item`, `.svc-header`, `.svc-body`

### Target Components
```
components/sections/
├── Services.tsx          (section wrapper)
├── ServiceAccordion.tsx  (accordion list)
└── ServiceItem.tsx       (individual service with expand)
```

### Data
- Source: `data/services.ts`
- 12 services with icons, titles, descriptions, sub-services

### Behavior Mapping
| Current | Next.js |
|---------|---------|
| `onclick="toggleSvc(this)"` | React state per item |
| Single expand (close others) | State management in parent |
| Hash link auto-open | `useEffect` with `window.location.hash` |
| Max-height transition | Framer Motion layout animation |

---

## 8. Process Section

### Current HTML Structure
- File: `index.html.html` lines 211-220, 408
- Elements: `#process`, `.process-flow`, `.proc-step`

### Target Components
```
components/sections/
├── Process.tsx           (section wrapper)
├── ProcessStep.tsx       (icon + text)
└── ProcessConnector.tsx  (horizontal line between steps)
```

### Data
- 4 steps: Discovery, Strategy, Execute, Optimize

### Behavior
- Scroll reveal with stagger
- Icon hover scale + glow

---

## 9. Blog Section

### Current HTML Structure
- File: `index.html.html` lines 221-237, 410
- Elements: `#blog`, `.blog-grid`, `.blog-card`

### Target Components
```
components/sections/
├── Blog.tsx              (section wrapper)
├── BlogCard.tsx          (article card)
└── BlogGrid.tsx          (asymmetric grid layout)
```

### Data
- Source: `data/blog.ts`
- 3 blog posts with gradient backgrounds, icons, tags

### Behavior
- Hover lift + border glow
- Image scale on hover

---

## 10. FAQ Section

### Current HTML Structure
- File: `index.html.html` lines 326-338
- Elements: `.faq-section`, `.faq-grid`, `.faq-item`

### Target Components
```
components/sections/
├── FAQ.tsx               (section wrapper)
├── FAQAccordion.tsx      (accordion list)
└── FAQItem.tsx           (question + answer)
```

### Data
- Source: `data/faq.ts`
- 6-8 FAQ items with questions and answers

### Behavior Mapping
| Current | Next.js |
|---------|---------|
| `onclick="toggleFaq(el)"` | React state |
| Max-height animation | Framer Motion layout |
| Plus/rotate icon | Conditional rotation |

---

## 11. Contact Section

### Current HTML Structure
- File: `index.html.html` lines 238-256, 411
- Elements: `#contact`, `.contact-wrap`, `.cform`

### Target Components
```
components/sections/
├── Contact.tsx           (section wrapper)
├── ContactInfo.tsx       (email, phone, address cards)
├── ContactForm.tsx       (form with validation - client)
├── FormInput.tsx         (reusable input)
└── FormSelect.tsx        (service dropdown)
```

### Data
- Contact info (hardcoded)
- Service options (from `data/services.ts`)

### Behavior Mapping
| Current | Nextjs |
|---------|---------|
| Form action="formsubmit.co" | Keep external or API route |
| Validation | React Hook Form + Zod |
| Success/error states | Toast notification |

---

## 12. Footer

### Current HTML Structure
- File: `index.html.html` lines 257-270, 412
- Elements: `footer`, `.footer-grid`, `.socials`

### Target Component
```
components/footer/Footer.tsx
```

### Data
- Logo
- About text
- Social links (Instagram, Facebook, Email, Phone)
- Navigation columns

### Behavior
- Social icon hover color change
- Link hover underline

---

## Hash Anchor Mapping

| Hash | Section Component | Notes |
|------|-----------------|-------|
| `#home` | Hero | Scroll to top |
| `#about` | About | |
| `#services` | Services | Expand accordion |
| `#service-seo` | Services | Auto-expand SEO item |
| `#service-ppc` | Services | Auto-expand PPC item |
| `#service-smm` | Services | Auto-expand SMM item |
| `#service-content` | Services | Auto-expand Content item |
| `#service-email` | Services | Auto-expand Email item |
| `#service-web` | Services | Auto-expand Web item |
| `#service-analytics` | Services | Auto-expand Analytics item |
| `#service-cro` | Services | Auto-expand CRO item |
| `#service-orm` | Services | Auto-expand ORM item |
| `#service-video` | Services | Auto-expand Video item |
| `#service-affiliate` | Services | Auto-expand Affiliate item |
| `#service-automation` | Services | Auto-expand Automation item |
| `#process` | Process | |
| `#blog` | Blog | |
| `#contact` | Contact | Focus form |
