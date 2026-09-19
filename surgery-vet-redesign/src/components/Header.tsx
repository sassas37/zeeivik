import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Phone, Menu, X } from 'lucide-react'
import { practice } from '../lib/content'
import { CTAButton } from './ui'

const navItems = [
  { label: 'For Pet Owners', to: '/pet-owners' },
  { label: 'For Referring Vets', to: '/referring-vets' },
  { label: 'Specialties', to: '/#specialties' },
  { label: 'Surgeons', to: '/#surgeons' },
]

function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <Link to="/" onClick={onClick} className="flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary font-display text-base font-bold text-white">
        VSS
      </span>
      <span className="leading-tight">
        <span className="block font-display text-[17px] font-semibold text-ink">
          Veterinary Surgery Specialists
        </span>
        <span className="block text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
          Surgery &amp; Rehabilitation · NJ
        </span>
      </span>
    </Link>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border bg-surface/90 backdrop-blur-md shadow-card'
          : 'border-b border-transparent bg-bg/70 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-content items-center justify-between gap-4 px-5 sm:px-8">
        <Brand />

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary ${
                  isActive && !item.to.includes('#') ? 'text-primary' : 'text-ink'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={`tel:${practice.phoneDigits}`}
            className="flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-primary"
          >
            <Phone size={16} strokeWidth={2.2} className="text-primary" />
            {practice.phoneDisplay}
          </a>
          <CTAButton to="/pet-owners#consult">Request a Consult</CTAButton>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-ink lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-surface lg:hidden">
          <div className="mx-auto flex w-full max-w-content flex-col gap-1 px-5 py-4 sm:px-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink hover:bg-primary-soft"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-3 border-t border-border pt-4">
              <a
                href={`tel:${practice.phoneDigits}`}
                className="flex items-center gap-2 px-3 text-sm font-semibold text-ink"
              >
                <Phone size={16} className="text-primary" />
                {practice.phoneDisplay}
              </a>
              <CTAButton to="/pet-owners#consult" className="w-full">
                Request a Consult
              </CTAButton>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
