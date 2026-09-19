import { useState, type FormEvent } from 'react'
import {
  Stethoscope,
  ArrowRight,
  Download,
  Printer,
  Check,
  PlayCircle,
  MessageSquare,
  Phone,
} from 'lucide-react'
import { Section, Reveal, Eyebrow, CTAButton, PlaceholderImage } from '../components/ui'
import { StepFlow } from '../components/blocks'
import Motif from '../components/Motif'
import { practice, referralSteps, referralServices } from '../lib/content'

const webinars = [
  { title: 'TPLO vs. TTA: choosing the right cruciate repair', tag: 'Surgery · 1 CE' },
  { title: 'Post-operative rehabilitation protocols that work', tag: 'Rehab · 1 CE' },
  { title: 'Managing surgical pain: a multimodal approach', tag: 'Pain · 1 CE' },
]

function ReferralForm() {
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
        <input className={field} placeholder="Referring practice" required />
        <input className={field} placeholder="Referring veterinarian" required />
        <input className={field} type="email" placeholder="Practice email" required />
        <input className={field} type="tel" placeholder="Practice phone" required />
        <input className={field} placeholder="Patient name" required />
        <input className={field} placeholder="Species / breed" />
        <textarea className={`${field} sm:col-span-2`} rows={4} placeholder="Reason for referral & relevant history" />
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-accent-2"
        >
          Submit Referral <ArrowRight size={17} />
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

export default function ReferringVets() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-ink text-white">
        <Motif className="pointer-events-none absolute -right-20 -top-24 h-[480px] w-[480px] text-white/10" />
        <div className="mx-auto grid w-full max-w-content items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-accent">
              <span className="h-px w-6 bg-accent/60" />
              For Referring Veterinarians
            </span>
            <h1 className="mt-5 font-display text-[clamp(2.2rem,4.5vw,3.4rem)] font-semibold leading-[1.08] text-white">
              Refer with confidence. Your client stays yours.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
              A clear referral pathway, same-day case communication, surgical reports
              back to you, and a CE library to support your team. We co-manage — we
              never compete.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <CTAButton href="#refer" icon={ArrowRight}>Submit a Referral</CTAButton>
              <CTAButton href="#refer" variant="ghost" icon={Download} className="text-white hover:text-accent">
                Download referral form
              </CTAButton>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <PlaceholderImage label="Surgical team in theatre" icon={Stethoscope} ratio="aspect-[4/3]" />
          </Reveal>
        </div>
      </section>

      {/* How to refer */}
      <Section id="how">
        <Reveal>
          <Eyebrow>How to Refer</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold text-ink sm:text-4xl">
            Three simple steps
          </h2>
        </Reveal>
        <div className="mt-12"><Reveal><StepFlow steps={referralSteps} /></Reveal></div>
      </Section>

      {/* Services accepted */}
      <Section alt>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <Reveal>
            <Eyebrow>What we accept</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">
              Cases we welcome
            </h2>
            <p className="mt-4 max-w-md text-muted">
              From routine soft-tissue and orthopedic procedures to rehabilitation and
              second-opinion consults — send us the cases you would rather not manage
              in-house.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {referralServices.map((s) => (
                <li key={s} className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3.5 text-sm font-medium text-ink shadow-card">
                  <Check size={17} className="shrink-0 text-primary" /> {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* Referral form + fax fallback */}
      <Section id="refer">
        <div className="grid items-start gap-10 lg:grid-cols-[1.3fr_1fr]">
          <Reveal><ReferralForm /></Reveal>
          <Reveal delay={120}>
            <div className="rounded-2xl border border-border bg-surface-2 p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                <Printer size={22} />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-ink">Prefer fax or PDF?</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Download our referral form, complete it with your patient’s records and
                imaging, and fax it to the team. We confirm receipt the same business day.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <a href="#refer" className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-surface px-5 py-2.5 text-sm font-semibold text-primary hover:border-primary hover:bg-primary-soft">
                  <Download size={16} /> Download referral PDF
                </a>
                <span className="text-sm text-muted">Fax: (856) 000-0000 *placeholder</span>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* CE library */}
      <Section id="ce" alt>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Reveal>
            <Eyebrow>CE &amp; Webinars</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">
              Continuing education for your team
            </h2>
          </Reveal>
          <Reveal><span className="text-sm text-muted">*Placeholder library — content coming soon.</span></Reveal>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {webinars.map((w, i) => (
            <Reveal key={w.title} delay={i * 90}>
              <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-card">
                <div className="relative">
                  <PlaceholderImage label="" ratio="aspect-[16/9]" />
                  <span className="absolute inset-0 flex items-center justify-center text-primary/60">
                    <PlayCircle size={40} strokeWidth={1.5} />
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-accent-2">{w.tag}</span>
                  <h3 className="mt-2 text-base font-semibold leading-snug text-ink">{w.title}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Case communication promise */}
      <Section>
        <Reveal>
          <div className="grid items-center gap-8 rounded-3xl border border-border bg-primary-soft px-6 py-12 sm:px-12 lg:grid-cols-[auto_1fr]">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white">
              <MessageSquare size={30} strokeWidth={1.8} />
            </span>
            <div>
              <h2 className="text-2xl font-semibold text-ink sm:text-3xl">
                Our case-communication promise
              </h2>
              <p className="mt-3 max-w-2xl text-muted">
                You receive a surgical report and discharge summary for every patient,
                plus a same-day call for any urgent communication. Questions before
                referring? Reach our referral coordinator directly.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <CTAButton href={`tel:${practice.phoneDigits}`} icon={Phone}>
                  {practice.phoneDisplay}
                </CTAButton>
                <CTAButton href={`mailto:${practice.email}`} variant="secondary">
                  {practice.email}
                </CTAButton>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
