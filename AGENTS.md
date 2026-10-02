<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project-specific guidance

This repository is a browser-first Next.js 16.2.2 App Router site with React 19, Tailwind CSS v4, Framer Motion, Lenis smooth scrolling, and advanced canvas/WebGL browser effects.

- Use `npm run dev`, `npm run build`, and `npm run lint` for local development and validation.
- The app is rooted in `src/app`; `src/app/layout.tsx` already wraps pages with `SmoothScrollProvider`.
- Browser APIs belong in client components only. Keep `use client` on files that use `window`, `document`, `navigator`, `requestAnimationFrame`, `<canvas>`, or WebGL.
- `src/components/sections/Hero.tsx`, `src/components/sections/Witness.tsx`, `src/components/ui/atc-shader.tsx`, and `src/components/providers/SmoothScrollProvider.tsx` are the main browser/animation examples.
- Prefer pre-rendered frame-sequence canvas animation patterns over Three.js / R3F unless the user explicitly requests real interactive 3D.
- Performance rules matter: use `devicePixelRatio` for canvas sizing, passive scroll listeners, and direct DOM/ref updates for hot canvas/opacity changes.
- Avoid new SSR logic around browser-only code. Guard access to `window`/`navigator` and keep browser effects inside `useEffect`.
- Reuse existing UI patterns from `src/components/ui/` and `src/components/sections/` when adding new visual or animation sections.

## Helpful documentation

- `README.md` — starter instructions and deployment guidance.
- `skills/3d-scroll-website/SKILL.md` — authoritative guidance for premium scroll-animated websites and canvas frame-sequence UX.
- `skills/3d-scroll-website/references/06-performance-optimization.md` — canvas, scroll, and animation performance rules.
- `skills/add-hand-tracking/README.md` — browser-local hand-tracking privacy and performance expectations.

## Custom Browser note

This repo is intended as a custom browser experience: modern browser rendering, smooth scroll, canvas effects, and shader demos are first-class. When asked to extend or fix the app, prioritize browser rendering fidelity and mobile-friendly performance.
