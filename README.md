# Diane Uwamariya — Developer Portfolio

A modern, animated personal developer portfolio built with **React + TypeScript + Vite**, **Tailwind CSS**, **shadcn/ui**-style components, and **Framer Motion**.

Six sections — Hero, About, Skills, Projects, Experience, Contact — tied together by a floating navigation dock that orbits the hero portrait and glides into a top bar as you scroll. Light and dark themes, with a warm orange accent (`#F4A621`) shared by both.

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
```

## Before you publish

Everything needed to deploy is in place, including the CV at
`public/Diane-Uwamariya-CV.pdf` — replace that file whenever you update your
résumé and the "Download CV" buttons keep working, no code change needed.

Optional but worth doing:

- **Project links.** `projects[].repoUrl` currently points at the GitHub profile.
  Swap in the individual repository URLs, and add `liveUrl` for anything deployed
  — a "Live demo" button appears automatically when `liveUrl` is set.
- **Profile photo.** `public/profiles.jpeg` is a full-body outdoor shot; a
  head-and-shoulders photo reads better to recruiters. Replace the file and the
  framing transform in [`ProfileShowcase.tsx`](src/components/hero/ProfileShowcase.tsx)
  can be dropped.

## Editing content

Almost all copy lives in **one file** — [`src/data/portfolio.ts`](src/data/portfolio.ts):

| Export | Drives |
| --- | --- |
| `profile` | Name, role, bio, contact details, GitHub, CV path |
| `techBadges` | Stack chips under the hero headline |
| `navItems` | Nav dock entries (id must match a section's `id`) |
| `aboutParagraphs`, `highlights`, `stats` | About section |
| `skillGroups` | Skills cards |
| `projects` | Project cards (`featured`, `repoUrl`, `liveUrl` optional) |
| `experience`, `education` | Experience timeline and academic record |

The orange accent is the `brand` scale in [`tailwind.config.js`](tailwind.config.js)
and the `--accent` / `--ring` tokens in [`src/index.css`](src/index.css).

## Light / dark mode

The floating button in the bottom-right corner switches themes. Behaviour:

- **First visit** follows the operating system's `prefers-color-scheme`, and keeps
  following it live if the visitor changes it.
- **Clicking the toggle** makes it an explicit choice, saved to `localStorage`
  under `portfolio-theme`, and the OS is no longer consulted.
- An inline script in [`index.html`](index.html) resolves the theme *before first
  paint*, so a dark-mode visitor never sees a white flash on load.

Colors come from the CSS variables in [`src/index.css`](src/index.css) — the
`:root` block is light, `.dark` is dark. Change a token there and both themes
follow. Logic lives in [`src/lib/theme.ts`](src/lib/theme.ts).

## Contact form

The form in [`Contact.tsx`](src/components/sections/Contact.tsx) has **no backend**.
It composes a pre-filled `mailto:` link, so the visitor's own mail client sends the
message. Nothing to deploy, nothing to expire. To switch to real inbox delivery,
replace the `handleSubmit` body with a `fetch` to a Formspree or Web3Forms endpoint.

## Project structure

```
src/
├── components/
│   ├── ui/            # Button, Badge, SectionHeading, brand icons
│   ├── motion/        # Reveal wrapper + shared animation variants
│   ├── hero/          # ProfileShowcase (decorative circular portrait)
│   ├── layout/        # AdaptiveNav (orbit → top bar), Footer, ThemeToggle
│   └── sections/      # Hero, About, Skills, Projects, Experience, Contact
├── hooks/
│   └── useActiveSection.ts   # scroll-spy for the nav dock
├── data/
│   └── portfolio.ts   # ← all content lives here
├── lib/
│   ├── theme.ts       # light/dark resolution + persistence
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

## Accessibility & SEO

- Respects `prefers-reduced-motion` (animations collapse to near-instant) and
  `prefers-color-scheme` (until the visitor picks a theme by hand).
- The theme toggle is a real `<button>` with `aria-pressed` and a label that
  states the action it performs.
- "Skip to content" link, semantic landmarks (`main`, `nav`, `footer`), and
  focus-visible ring styles throughout.
- Nav dock buttons have `aria-label`s and `aria-current` on the active section.
- Form inputs are labelled; submit status is announced via `aria-live`.
- Open Graph / Twitter cards and JSON-LD `Person` structured data in `index.html`.
