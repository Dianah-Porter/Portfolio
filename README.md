# Developer Portfolio

A modern, animated personal developer portfolio built with **React + TypeScript + Vite**, **Tailwind CSS**, **shadcn/ui**-style components, and **Framer Motion**.

The landing experience features a clean two-column hero, a right-edge floating navigation dock, glassmorphism accents, soft shadows, and smooth scroll-reveal animations. Color palette: white / black with a warm orange accent (`#F4A621`).

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
```

## Make it yours

Almost everything you need to personalize lives in **one file**:

- [`src/data/portfolio.ts`](src/data/portfolio.ts) — your name, role, greeting, bio, tech badges, and the nav items.
- **Profile photo:** drop your image into `public/` and point `profile.avatar` at it (replaces the placeholder `public/profile.svg`).
- **Brand color:** the orange accent is the `brand` scale in [`tailwind.config.js`](tailwind.config.js) and the `--accent` / `--ring` tokens in [`src/index.css`](src/index.css).

The About / Skills / Projects / Experience / Contact sections are intentionally
lightweight placeholders ([`PlaceholderSection`](src/components/sections/PlaceholderSection.tsx))
so the navigation, scroll-spy, and animations work end-to-end — swap each one for real content when you're ready.

## Project structure

```
src/
├── components/
│   ├── ui/            # shadcn/ui-style primitives (Button, Badge)
│   ├── motion/        # Reveal wrapper + shared animation variants
│   ├── hero/          # ProfileShowcase (decorative circular portrait)
│   ├── layout/        # FloatingDock (right-edge nav)
│   └── sections/      # Hero + PlaceholderSection
├── hooks/
│   └── useActiveSection.ts   # scroll-spy for the nav dock
├── data/
│   └── portfolio.ts   # ← your content lives here
├── lib/
│   └── utils.ts       # cn() class-name helper
├── App.tsx
└── index.css          # Tailwind + theme tokens
```

## Tech

- React 19 + TypeScript + Vite
- Tailwind CSS 3 with CSS-variable theme tokens
- shadcn/ui-style components (CVA + `cn` + Radix Slot)
- Framer Motion (fade-in, slide-in, hover scaling, scroll reveal)
- lucide-react icons

## Accessibility

- Respects `prefers-reduced-motion` (animations collapse to near-instant).
- Nav dock buttons have `aria-label`s and `aria-current` on the active section.
- Semantic landmarks (`main`, `nav`, `footer`) and focus-visible ring styles.
