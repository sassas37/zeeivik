# surgery.vet redesign — draft design spec

**Date:** 2026-06-29 · derived from `../RESEARCH-FINDINGS.md` and `../references/MOODBOARD.md`.
**Goal:** a first-draft frontend that adopts the synthesized concept (Small Door aesthetic + PetCure dual-audience referral IA + VRSP referral toolkit) for Veterinary Surgery Specialists (surgery.vet, West Berlin NJ).

## Scope (first draft)
3 routes: **Home `/`**, **For Pet Owners `/pet-owners`**, **For Referring Vets `/referring-vets`**. LTR English. Real VSS content. Marketing site (not a product app shell).

## Stack
Vite 5 · React 18 · TypeScript (strict) · Tailwind 3 + CSS-variable tokens · react-router-dom v6 · lucide-react. Scroll-reveal via IntersectionObserver hook (no animation library).

## Tokens
- `--bg` #FBF7F1 · `--surface` #FFFFFF · `--surface-2` #F4EEE6
- `--ink` #15303A · `--muted` #5B6B70
- `--primary` #115E67 (teal: brand, links, motif) · `--primary-soft` #E3EEEF
- `--accent` #E08A2B (amber — CTAs ONLY) · `--accent-2` #C9761E
- `--border` #E7DFD4 · `--green` #16A34A · `--red` #EF4444
- Fonts: **Fraunces** (display/headings) + **Inter** (body/UI), system fallbacks.
- Radii: cards `rounded-2xl`. Card shadow soft. Motion: fade/slide-up on scroll, hover-lift on cards. One anatomical/topographic SVG line motif (low-opacity teal) behind hero + section breaks. No carousel hero.

## Shared shell
- **Header** (sticky, transparent→solid on scroll): brand lockup; nav = For Pet Owners · For Referring Vets · Specialties · Surgeons; persistent amber "Request a Consult" + tap-to-call 856-856-VETS.
- **Footer**: location (798 Route 73 South, West Berlin NJ 08091), hours (Mon–Sat 9am–7pm, Sun closed), email info@surgery.vet, ACVS badge, dual-audience quick links, social.

## Pages
- **Home:** hero + accreditation strip → dual-audience entry cards → Specialties grid (Soft-Tissue Surgery, Orthopedic Conditions, Canine Rehabilitation & Modalities, Acupuncture) → milestone stat band → Meet the Surgeons teaser (DACVS) → What to Expect (consult→surgery→rehab) → quantified reviews → CTA band.
- **Pet Owners:** owner hero, service detail, what-to-expect, FAQs, payment options, reviews, Request-a-Consult form (stub).
- **Referring Vets:** DVM hero, How to Refer steps, online referral form (stub) + downloadable/fax fallback, CE/webinar library teaser, case-communication promise, referral-coordinator contact.

## Components
Header, Footer, Section, CTAButton, ServiceCard, StatBand, SurgeonCard, ReviewCard, StepFlow, Reveal, PlaceholderImage.

## Explicitly out of scope (YAGNI)
No backend (forms are styled, non-submitting stubs); no real photography (placeholder image blocks marked where photos go); placeholder stat numbers/testimonials clearly labeled; no CMS/auth/analytics; LTR only.

## UI deviations from app-ui-standard (recorded per §9)
1. **Marketing visual language** (warm ivory/teal/amber + Fraunces/Inter, big marketing type) instead of the product Default-Blue palette — the task is explicitly to adopt an external marketing aesthetic.
2. **Marketing layout** (top nav + hero + sections + footer) instead of the sidebar+header product shell.
3. **LTR only** — US English audience; RTL/Hebrew adds no value here.

## Success criteria
`tsc --noEmit` clean · `npm run build` passes · dev server renders all 3 routes · homepage reflects the warm/teal/amber concept with working dual-audience nav · verified by screenshot.
