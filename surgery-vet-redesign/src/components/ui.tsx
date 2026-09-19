import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { type LucideIcon } from 'lucide-react'
import { useReveal } from '../lib/useReveal'

export function Container({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`mx-auto w-full max-w-content px-5 sm:px-8 ${className}`}>{children}</div>
  )
}

export function Section({
  children,
  id,
  alt = false,
  className = '',
}: {
  children: ReactNode
  id?: string
  alt?: boolean
  className?: string
}) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-24 ${alt ? 'bg-surface-2' : ''} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  )
}

// Scroll-reveal wrapper.
export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-primary">
      <span className="h-px w-6 bg-primary/50" />
      {children}
    </span>
  )
}

type CTAProps = {
  children: ReactNode
  to?: string
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  icon?: LucideIcon
}

export function CTAButton({
  children,
  to,
  href,
  variant = 'primary',
  className = '',
  icon: Icon,
}: CTAProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-2'
  const styles = {
    primary:
      'bg-accent text-white shadow-card hover:bg-accent-2 hover:-translate-y-0.5',
    secondary:
      'border border-primary/30 text-primary bg-surface hover:border-primary hover:bg-primary-soft',
    ghost: 'text-primary hover:text-accent-2',
  }[variant]
  const content = (
    <>
      {children}
      {Icon ? <Icon size={17} strokeWidth={2.2} /> : null}
    </>
  )
  const cls = `${base} ${styles} ${className}`
  if (to) {
    return (
      <Link to={to} className={cls}>
        {content}
      </Link>
    )
  }
  return (
    <a href={href} className={cls}>
      {content}
    </a>
  )
}

// Tasteful placeholder for real photography. Clearly marked.
export function PlaceholderImage({
  label = 'Photography',
  icon: Icon,
  className = '',
  ratio = 'aspect-[4/3]',
}: {
  label?: string
  icon?: LucideIcon
  className?: string
  ratio?: string
}) {
  return (
    <div
      className={`relative ${ratio} overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary-soft to-surface-2 ${className}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-primary/55">
        {Icon ? <Icon size={30} strokeWidth={1.6} /> : null}
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em]">
          {label}
        </span>
      </div>
    </div>
  )
}
