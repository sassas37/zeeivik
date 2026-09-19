import {
  PawPrint,
  Stethoscope,
  ArrowRight,
  Phone,
  ShieldCheck,
  Award,
  HeartPulse,
} from 'lucide-react'
import { Section, Reveal, Eyebrow, CTAButton, PlaceholderImage } from '../components/ui'
import {
  ServiceCard,
  StatBand,
  SurgeonCard,
  ReviewCard,
  StepFlow,
  EntryCard,
} from '../components/blocks'
import Motif from '../components/Motif'
import { practice, specialties, stats, surgeons, reviews, ownerJourney } from '../lib/content'

const accreditations = [
  { icon: Award, label: 'ACVS Board-Certified' },
  { icon: ShieldCheck, label: 'AAHA Standards' },
  { icon: HeartPulse, label: 'Fear Free Approach' },
  { icon: PawPrint, label: 'Canine Rehab Certified' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <Motif className="pointer-events-none absolute -right-24 -top-24 h-[520px] w-[520px] text-primary/20" />
        <div className="mx-auto grid w-full max-w-content items-center gap-12 px-5 pb-16 pt-16 sm:px-8 sm:pt-20 lg:grid-cols-2 lg:pb-24">
          <Reveal>
            <Eyebrow>Surgical &amp; Rehabilitation Specialists</Eyebrow>
            <h1 className="mt-5 font-display text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.05] text-ink">
              Advanced surgical care,
              <span className="text-primary"> when your pet needs it most.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Board-certified surgeons and a dedicated rehabilitation team in{' '}
              {practice.address.city}, {practice.address.state} — partnering with pet
              owners and referring veterinarians for the best possible outcome.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton to="/pet-owners#consult" icon={ArrowRight}>
                Request a Consult
              </CTAButton>
              <CTAButton to="/referring-vets#refer" variant="secondary">
                Refer a Patient
              </CTAButton>
            </div>
            <a
              href={`tel:${practice.phoneDigits}`}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-primary"
            >
              <Phone size={16} className="text-primary" />
              Or call {practice.phoneDisplay}
            </a>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative">
              <PlaceholderImage
                label="Hero — surgeon with recovering patient"
                icon={PawPrint}
                ratio="aspect-[4/5]"
                className="shadow-card-lg"
              />
              <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-surface px-5 py-4 shadow-card sm:block">
                <div className="font-display text-2xl font-semibold text-primary">4.9★</div>
                <div className="text-xs text-muted">300+ client reviews*</div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Accreditation strip */}
        <div className="border-y border-border bg-surface/60">
          <div className="mx-auto flex w-full max-w-content flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5 py-5 sm:px-8">
            {accreditations.map((a) => (
              <span key={a.label} className="flex items-center gap-2 text-sm font-medium text-muted">
                <a.icon size={17} className="text-primary" />
                {a.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Dual-audience entry */}
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <EntryCard
              icon={PawPrint}
              kicker="For Pet Owners"
              title="Care for your companion"
              body="Worried about an upcoming surgery? Learn about our specialties, what to expect, and how to request a consultation with a board-certified surgeon."
              cta={<CTAButton to="/pet-owners" variant="ghost" icon={ArrowRight}>Explore pet owner care</CTAButton>}
            />
          </Reveal>
          <Reveal delay={120}>
            <EntryCard
              icon={Stethoscope}
              kicker="For Referring Veterinarians"
              title="Refer with confidence"
              body="A clear referral pathway, fast scheduling, surgical reports, and a CE library — built to support you and your clients before, during, and after surgery."
              cta={<CTAButton to="/referring-vets" variant="ghost" icon={ArrowRight}>See the referral toolkit</CTAButton>}
            />
          </Reveal>
        </div>
      </Section>

      {/* Specialties */}
      <Section id="specialties" alt>
        <Reveal>
          <Eyebrow>Specialties</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold text-ink sm:text-4xl">
            Focused surgical expertise — it’s all we do.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {specialties.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <ServiceCard item={s} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Stat band */}
      <Section>
        <Reveal>
          <StatBand stats={stats} />
        </Reveal>
      </Section>

      {/* Surgeons */}
      <Section id="surgeons" alt>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Reveal>
            <Eyebrow>Meet the Team</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">
              Board-certified surgeons
            </h2>
          </Reveal>
          <Reveal>
            <CTAButton to="/pet-owners" variant="secondary">
              Meet the full team
            </CTAButton>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {surgeons.map((s, i) => (
            <Reveal key={s.focus} delay={i * 90}>
              <SurgeonCard surgeon={s} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* What to expect */}
      <Section id="expect">
        <Reveal>
          <Eyebrow>What to Expect</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold text-ink sm:text-4xl">
            A clear path from consult to recovery.
          </h2>
        </Reveal>
        <div className="mt-12">
          <Reveal>
            <StepFlow steps={ownerJourney} />
          </Reveal>
        </div>
      </Section>

      {/* Reviews */}
      <Section alt>
        <Reveal>
          <Eyebrow>What families say</Eyebrow>
          <div className="mt-4 flex flex-wrap items-baseline gap-3">
            <h2 className="text-3xl font-semibold text-ink sm:text-4xl">
              4.9★ from 300+ reviews
            </h2>
            <span className="text-sm text-muted">*placeholder rating</span>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.author} delay={i * 90}>
              <ReviewCard review={r} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA band */}
      <Section>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface-2 px-6 py-14 text-center sm:px-12">
            <Motif className="pointer-events-none absolute -left-16 -top-16 h-80 w-80 text-primary/15" />
            <h2 className="relative mx-auto max-w-2xl text-3xl font-semibold text-ink sm:text-4xl">
              Ready to give your pet expert surgical care?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-muted">
              Request a consultation today, or call our team — we’re here Monday
              through Saturday.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <CTAButton to="/pet-owners#consult" icon={ArrowRight}>
                Request a Consult
              </CTAButton>
              <CTAButton href={`tel:${practice.phoneDigits}`} variant="secondary" icon={Phone}>
                {practice.phoneDisplay}
              </CTAButton>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
