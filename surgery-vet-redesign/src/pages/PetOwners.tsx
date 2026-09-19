import { useState, type FormEvent } from 'react'
import { PawPrint, Phone, ArrowRight, ChevronDown, CreditCard, Check } from 'lucide-react'
import { Section, Reveal, Eyebrow, CTAButton, PlaceholderImage } from '../components/ui'
import { ServiceCard, StepFlow, ReviewCard } from '../components/blocks'
import Motif from '../components/Motif'
import { practice, specialties, ownerJourney, ownerFaqs, reviews } from '../lib/content'

function ConsultForm() {
  const [sent, setSent] = useState(false)
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
  }
  const field =
    'w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-primary focus:outline-none'
  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-surface p-7 shadow-card sm:p-9">
      <div className="grid gap-4 sm:grid-cols-2">
        <input className={field} placeholder="Your name" required />
        <input className={field} placeholder="Pet’s name" required />
        <input className={field} type="email" placeholder="Email" required />
        <input className={field} type="tel" placeholder="Phone" required />
        <input className={`${field} sm:col-span-2`} placeholder="Your referring veterinarian (if any)" />
        <textarea className={`${field} sm:col-span-2`} rows={4} placeholder="Briefly, what does your pet need help with?" />
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-accent-2"
        >
          Request Consultation <ArrowRight size={17} />
        </button>
        {sent ? (
          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
            <Check size={16} /> Demo form — no data is sent.
          </span>
        ) : (
          <span className="text-xs text-muted">Demo form — submission is not wired up.</span>
        )}
      </div>
    </form>
  )
}

export default function PetOwners() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-surface-2">
        <Motif className="pointer-events-none absolute -right-20 -top-24 h-[460px] w-[460px] text-primary/15" />
        <div className="mx-auto grid w-full max-w-content items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>For Pet Owners</Eyebrow>
            <h1 className="mt-5 font-display text-[clamp(2.2rem,4.5vw,3.4rem)] font-semibold leading-[1.08] text-ink">
              Expert care for your companion, every step of the way.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              When your pet needs surgery, you want specialists you can trust. Our
              board-certified team explains every step — and our rehabilitation
              program helps them heal comfortably.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <CTAButton to="/pet-owners#consult" icon={ArrowRight}>Request a Consult</CTAButton>
              <CTAButton href={`tel:${practice.phoneDigits}`} variant="secondary" icon={Phone}>
                {practice.phoneDisplay}
              </CTAButton>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <PlaceholderImage label="Pet owner with recovering dog" icon={PawPrint} ratio="aspect-[4/3]" className="shadow-card-lg" />
          </Reveal>
        </div>
      </section>

      {/* Specialties */}
      <Section>
        <Reveal>
          <Eyebrow>Our Specialties</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold text-ink sm:text-4xl">
            Surgical &amp; rehabilitation services
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

      {/* What to expect */}
      <Section id="expect" alt>
        <Reveal>
          <Eyebrow>What to Expect</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold text-ink sm:text-4xl">
            From first consult to full recovery
          </h2>
        </Reveal>
        <div className="mt-12">
          <Reveal><StepFlow steps={ownerJourney} /></Reveal>
        </div>
      </Section>

      {/* FAQs + payment */}
      <Section id="faqs">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Reveal>
              <Eyebrow>FAQs</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">Common questions</h2>
            </Reveal>
            <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-surface">
              {ownerFaqs.map((f) => (
                <details key={f.q} className="group px-6 py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold text-ink">
                    {f.q}
                    <ChevronDown size={18} className="shrink-0 text-primary transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
          <Reveal delay={120}>
            <div className="rounded-2xl border border-border bg-primary-soft p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                <CreditCard size={22} />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-ink">Payment &amp; financing</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                We provide a clear written estimate before any procedure, so there are
                no surprises. We accept major cards and approved pet-financing options.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink/80">
                {['Detailed pre-surgery estimates', 'Major credit cards accepted', 'CareCredit financing available'].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <Check size={16} className="text-primary" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Reviews */}
      <Section alt>
        <Reveal>
          <Eyebrow>What families say</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">Trusted by local pet families</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.author} delay={i * 90}><ReviewCard review={r} /></Reveal>
          ))}
        </div>
      </Section>

      {/* Consult form */}
      <Section id="consult">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <Eyebrow>Request a Consult</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">
              Let’s talk about your pet’s care
            </h2>
            <p className="mt-4 max-w-md text-muted">
              Send a request and our team will reach out to schedule. Prefer to talk
              now? Call{' '}
              <a href={`tel:${practice.phoneDigits}`} className="font-semibold text-primary">
                {practice.phoneDisplay}
              </a>
              .
            </p>
          </Reveal>
          <Reveal delay={120}><ConsultForm /></Reveal>
        </div>
      </Section>
    </>
  )
}
