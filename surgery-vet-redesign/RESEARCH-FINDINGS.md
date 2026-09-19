# surgery.vet — competitive design benchmark & redesign blueprint

**Date:** 2026-06-29 · **Reference site:** https://www.surgery.vet/ (Veterinary Surgery Specialists, West Berlin NJ)
**Method:** progressive multi-agent research funnel — 18 real vet sites fetched & scored live (web-grounded), then Opus synthesis.

---

## Bottom line
No single vet site is **both** visually distinctive **and** structurally right for a surgery-referral practice. Live inspection of 18 sites exposed a hard split:

- **Visually distinctive sites** (Small Door, Heart + Paw, Modern Animal, Bond Vet) are consumer **general-practice / membership** brands — beautiful, but no referring-vet path, no specialist credentialing, and multi-location/membership machinery that doesn't fit a small specialty practice.
- **Structurally relevant sites** (PetCure Oncology, VRSP, Friendship) are real referral/specialty practices — right IA, but visually generic or template-built.

**→ Recommendation = a hybrid concept, not a clone.**

## The recommendation
**Adopt Small Door's _aesthetic_ (`smalldoorvet.com`), built on PetCure Oncology's dual-audience referral _architecture_ (`petcureoncology.com`), with VRSP's referral _toolkit_ (`veterinaryreferralsurgery.com`).**
If you want one primary model to study: **PetCure Oncology** — the only site scoring both `relevance: high` and non-template, with the all-important dual-audience nav.

## Scoreboard (live inspection · scores out of 5; fit /15)

| Site | Fit | Visual | UX | Reimpl | Relevance | Role |
|---|---|---|---|---|---|---|
| PetCure Oncology | 9 | 3 | 3 | 3 | high | ⭐ Referral IA + trust spine |
| Small Door | 8 | 4 | 2 | 2 | low | ⭐ Aesthetic anchor |
| Heart + Paw | 8 | 4 | 2 | 2 | low | Borrow: graphic motif |
| Modern Animal | 8 | 4 | 2 | 2 | low | Borrow: quantitative trust |
| Bond Vet | 8 | 3 | 2 | 3 | low | Reference only (Wix) |
| Middlehope | 8 | 2 | 3 | 3 | low | Reference only (template) |
| VRSP | 7 | 1 | 3 | 3 | high | ⭐ Referral toolkit |
| Friendship Hospital | 7 | 2 | 3 | 2 | medium | Borrow: 3-audience nav |

Rejected (fit 0–7, generic/irrelevant): Vetopia, Crescenta/ccpet, Southwoods, Sandy Springs, Sactown, Pet Dominion, Modern Love, Somers, The Bond Between (a rescue nonprofit), BluePearl.

## Concept-to-adopt blueprint
- **Brand:** calm, premium *surgical-specialist referral destination* — not a wellness/lifestyle brand.
- **Color/type:** warm-white + whitespace (Small Door) · specialty **teal/blue** primary (PetCure) · one **amber accent reserved for CTAs only** · humanist sans + one bold display weight · one subtle anatomical/geometric signature motif (Heart + Paw idea).
- **IA (load-bearing): dual-audience split nav**
  - **For Pet Owners** → Specialties · Meet the Surgeons · What to Expect (consult→surgery→rehab) · Outcomes/Reviews · Request a Consult
  - **For Referring Vets** → How to Refer · online referral form · downloadable/fax form · CE/webinar library · case-communication promise
  - plus **Careers**
- **Booking:** persistent "Request a Consult" in sticky header, repeated 5–7× per page → short consult-request form (not a membership funnel); phone one tap away on mobile.
- **Trust:** milestone-stat band + named **board-certified (DACVS)** surgeon bios + real review counts (Modern Animal) + a *designed* accreditation row (ACVS badge) + founding-story narrative (PetCure).
- **Motion:** restrained — fade/slide-in on scroll, hover lift on cards. **No carousel-as-hero** (every template that promised motion failed live inspection on exactly this).
- **Reimplementability:** standard component stack (tokens + reusable cards + two audience templates). Omit membership/multi-location machinery.

## Data-quality findings (the web-grounded payoff)
- **BluePearl's primary domain was intermittently redirecting to Heart + Paw** during evaluation (it later resolved). Verify the canonical BluePearl URL before citing.
- **Roundups oversell templates:** sites praised by "best vet website" articles for parallax/bold-motion (Crescenta/ccpet, Vetopia, Southwoods, Sandy Springs, Sactown) were **generic templates** on actual inspection — the promised effects weren't there.
- **The Bond Between** is an animal-rescue nonprofit, not a vet practice (mis-surfaced by a roundup).

## Method note
Two passes. Pass 1 (auto-discovery) failed — cheap agents returned *search strategies* not named sites, so nothing real got evaluated. Pass 2 built the candidate list via targeted search, then a funnel that **fetched and scored each real site**. The lesson: for a *design* comparison you must look at the live site; you cannot triage design from a one-line description, and "best vet website" roundups can't be trusted unverified.

## Visual references
See `references/MOODBOARD.md` and the `00–05` full-page screenshots in `references/`.
