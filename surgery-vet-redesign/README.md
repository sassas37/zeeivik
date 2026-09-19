# surgery.vet redesign — draft

A first-draft frontend concept for **Veterinary Surgery Specialists** (surgery.vet, West Berlin NJ), built from the competitive design research in `RESEARCH-FINDINGS.md`.

**Concept:** Small Door's warm aesthetic + PetCure Oncology's dual-audience referral IA + VRSP's referral toolkit. See `docs/DESIGN.md` for the full spec and `references/MOODBOARD.md` for the visual sources.

## Run

```bash
npm install
npm run dev        # Vite dev server (default http://localhost:5179)
npm run build      # type-check + production build
npm run typecheck  # tsc --noEmit
```

## Stack
Vite 5 · React 18 · TypeScript (strict) · Tailwind 3 (CSS-variable tokens) · react-router-dom v6 · lucide-react.

## Pages
- `/` — Home (hero, dual-audience entry, specialties, stats, surgeons, what-to-expect, reviews, CTA)
- `/pet-owners` — services, what-to-expect, FAQs, payment, reviews, consult-request form (stub)
- `/referring-vets` — how to refer, accepted cases, referral form (stub) + fax fallback, CE library, case-communication promise

## Status / placeholders
This is a **design draft, not the live site**. Forms are styled stubs that do not submit. Photography is represented by placeholder blocks. Statistics, testimonials, surgeon bios, and the fax number are clearly-marked placeholders to be replaced with verified content.

## UI Deviations

This project intentionally deviates from the personal `app-ui-standard` (which targets product apps), per its §9 deviation clause, because the task was to adopt an external **marketing** aesthetic:

1. **Visual language** — warm ivory / specialty-teal / amber palette + Fraunces+Inter type, instead of the standard Default-Blue product palette. Driven by the "adopt Small Door's aesthetic" goal.
2. **Layout** — marketing layout (top nav + hero + content sections + footer) instead of the standard sidebar + header product shell.
3. **Direction** — LTR English only. The standard mandates LTR+RTL; RTL/Hebrew adds no value for this US (West Berlin, NJ) English-audience marketing site.

Engineering conventions from the standard are retained: React 18 + TS (strict) + Vite + Tailwind + lucide-react, and tokens declared as CSS variables on `:root`.
