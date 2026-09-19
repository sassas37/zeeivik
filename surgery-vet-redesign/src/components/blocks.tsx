import type { ReactNode } from 'react'
import { Star, type LucideIcon } from 'lucide-react'
import type { Specialty, Stat, Surgeon, Review } from '../lib/content'
import { PlaceholderImage } from './ui'

export function ServiceCard({ item }: { item: Specialty }) {
  const Icon = item.icon
  return (
    <div className="group h-full rounded-2xl border border-border bg-surface p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-white">
        <Icon size={24} strokeWidth={1.9} />
      </span>
      <h3 className="mt-5 text-xl font-semibold text-ink">{item.title}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-muted">{item.blurb}</p>
    </div>
  )
}

export function StatBand({ stats }: { stats: Stat[] }) {
  const hasPlaceholder = stats.some((s) => s.placeholder)
  return (
    <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 text-white sm:px-12">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-4xl font-semibold sm:text-5xl">
              {s.value}
              {s.placeholder ? <span className="align-super text-base text-accent">*</span> : null}
            </div>
            <div className="mt-2 text-sm text-white/70">{s.label}</div>
          </div>
        ))}
      </div>
      {hasPlaceholder ? (
        <p className="mt-8 text-center text-[11px] text-white/45">
          * Placeholder figures — to be replaced with verified practice data.
        </p>
      ) : null}
    </div>
  )
}

export function SurgeonCard({ surgeon }: { surgeon: Surgeon }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5 shadow-card">
      <PlaceholderImage label="Surgeon photo" ratio="aspect-[4/5]" />
      <h3 className="mt-4 text-lg font-semibold text-ink">{surgeon.name}</h3>
      <span className="mt-1 inline-block rounded-md bg-primary-soft px-2 py-0.5 text-xs font-bold text-primary">
        {surgeon.credentials}
      </span>
      <p className="mt-2 text-sm text-muted">{surgeon.focus}</p>
      {surgeon.placeholder ? (
        <p className="mt-2 text-[11px] italic text-muted/70">Bio coming soon.</p>
      ) : null}
    </div>
  )
}

export function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-border bg-surface p-7 shadow-card">
      <div className="flex gap-0.5 text-accent">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink/90">
        “{review.quote}”
      </blockquote>
      <figcaption className="mt-4 text-sm font-semibold text-muted">
        — {review.author}
      </figcaption>
    </figure>
  )
}

export interface Step {
  step: string
  title: string
  body: string
}

export function StepFlow({ steps }: { steps: Step[] }) {
  return (
    <ol className="grid gap-6 md:grid-cols-3">
      {steps.map((s) => (
        <li
          key={s.step}
          className="relative rounded-2xl border border-border bg-surface p-7 shadow-card"
        >
          <span className="font-display text-3xl font-semibold text-accent">{s.step}</span>
          <h3 className="mt-3 text-lg font-semibold text-ink">{s.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
        </li>
      ))}
    </ol>
  )
}

export function EntryCard({
  icon: Icon,
  kicker,
  title,
  body,
  cta,
}: {
  icon: LucideIcon
  kicker: string
  title: string
  body: string
  cta: ReactNode
}) {
  return (
    <div className="group flex h-full flex-col rounded-3xl border border-border bg-surface p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent-2">
        <Icon size={24} strokeWidth={1.9} />
      </span>
      <span className="mt-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-primary">
        {kicker}
      </span>
      <h3 className="mt-1 text-2xl font-semibold text-ink">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{body}</p>
      <div className="mt-6">{cta}</div>
    </div>
  )
}
