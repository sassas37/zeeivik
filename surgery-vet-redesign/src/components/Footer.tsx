import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Award } from 'lucide-react'
import { practice } from '../lib/content'

export default function Footer() {
  return (
    <footer className="bg-ink text-white/85">
      <div className="mx-auto grid w-full max-w-content gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 font-display text-base font-bold text-white">
              VSS
            </span>
            <span className="font-display text-lg font-semibold text-white">
              Veterinary Surgery Specialists
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            Board-certified surgical &amp; rehabilitation care for pets — and a
            dedicated referral partner for veterinarians.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold text-white/80">
            <Award size={14} className="text-accent" />
            ACVS Board-Certified Surgeons
          </div>
        </div>

        <div>
          <h4 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/55">
            For Pet Owners
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/pet-owners" className="text-white/75 hover:text-white">Our Specialties</Link></li>
            <li><Link to="/pet-owners#expect" className="text-white/75 hover:text-white">What to Expect</Link></li>
            <li><Link to="/pet-owners#faqs" className="text-white/75 hover:text-white">FAQs</Link></li>
            <li><Link to="/pet-owners#consult" className="text-white/75 hover:text-white">Request a Consult</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/55">
            For Referring Vets
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/referring-vets#how" className="text-white/75 hover:text-white">How to Refer</Link></li>
            <li><Link to="/referring-vets#refer" className="text-white/75 hover:text-white">Referral Form</Link></li>
            <li><Link to="/referring-vets#ce" className="text-white/75 hover:text-white">CE &amp; Webinars</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/55">
            Visit Us
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
              <span>
                {practice.address.line1}
                <br />
                {practice.address.city}, {practice.address.state} {practice.address.zip}
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="shrink-0 text-accent" />
              <a href={`tel:${practice.phoneDigits}`} className="hover:text-white">
                {practice.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="shrink-0 text-accent" />
              <a href={`mailto:${practice.email}`} className="hover:text-white">
                {practice.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock size={16} className="mt-0.5 shrink-0 text-accent" />
              <span>
                {practice.hours.map((h) => (
                  <span key={h.day} className="block">
                    {h.day}: {h.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-content flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-white/50 sm:flex-row sm:px-8">
          <span>© 2026 Veterinary Surgery Specialists · surgery.vet</span>
          <span>Redesign concept draft — not the live site.</span>
        </div>
      </div>
    </footer>
  )
}
