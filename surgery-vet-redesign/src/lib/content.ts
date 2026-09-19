// Real Veterinary Surgery Specialists (surgery.vet) content used for the draft.
// Numbers marked with PLACEHOLDER_NOTE are stand-ins to be replaced with real data.

import {
  Scissors,
  Bone,
  Activity,
  Stethoscope,
  type LucideIcon,
} from 'lucide-react'

export const PLACEHOLDER_NOTE = 'Placeholder — replace with verified figure.'

export const practice = {
  name: 'Veterinary Surgery Specialists',
  short: 'VSS',
  domain: 'surgery.vet',
  tagline: 'Advanced surgical & rehabilitation care, when your pet needs it most.',
  phoneDisplay: '(856) 856-VETS',
  phoneDigits: '8568568387',
  email: 'info@surgery.vet',
  address: {
    line1: '798 Route 73 South',
    city: 'West Berlin',
    state: 'NJ',
    zip: '08091',
  },
  hours: [
    { day: 'Mon – Fri', time: '9:00 AM – 7:00 PM' },
    { day: 'Saturday', time: '9:00 AM – 7:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ],
}

export interface Specialty {
  icon: LucideIcon
  title: string
  blurb: string
}

export const specialties: Specialty[] = [
  {
    icon: Scissors,
    title: 'Soft-Tissue Surgery',
    blurb:
      'From routine to complex soft-tissue procedures — oncologic, gastrointestinal, urogenital, and reconstructive surgery, performed with precision and care.',
  },
  {
    icon: Bone,
    title: 'Orthopedic Conditions',
    blurb:
      'Fracture repair, cruciate (TPLO/TTA), luxating patella, and joint surgery to restore comfortable, confident movement.',
  },
  {
    icon: Activity,
    title: 'Canine Rehabilitation & Modalities',
    blurb:
      'Post-operative and conditioning rehabilitation — therapeutic exercise, laser, and hydrotherapy modalities for a faster, fuller recovery.',
  },
  {
    icon: Stethoscope,
    title: 'Acupuncture',
    blurb:
      'Integrative acupuncture to support pain management and recovery alongside surgical and rehabilitative care.',
  },
]

export interface Stat {
  value: string
  label: string
  placeholder?: boolean
}

export const stats: Stat[] = [
  { value: '5,000+', label: 'Surgeries performed', placeholder: true },
  { value: '150+', label: 'Referring practices', placeholder: true },
  { value: '20+', label: 'Years of surgical expertise', placeholder: true },
  { value: '4.9★', label: 'Average client rating', placeholder: true },
]

export interface Surgeon {
  name: string
  credentials: string
  focus: string
  placeholder?: boolean
}

export const surgeons: Surgeon[] = [
  {
    name: 'Board-Certified Surgeon',
    credentials: 'DVM, DACVS',
    focus: 'Soft-tissue & oncologic surgery',
    placeholder: true,
  },
  {
    name: 'Board-Certified Surgeon',
    credentials: 'DVM, DACVS',
    focus: 'Orthopedic & reconstructive surgery',
    placeholder: true,
  },
  {
    name: 'Rehabilitation Lead',
    credentials: 'DVM, CCRP',
    focus: 'Canine rehabilitation & acupuncture',
    placeholder: true,
  },
]

export interface Review {
  quote: string
  author: string
  placeholder?: boolean
}

export const reviews: Review[] = [
  {
    quote:
      'They explained every step of my dog’s TPLO surgery and recovery. The rehab team had him walking comfortably weeks sooner than I expected.',
    author: 'Pet owner, Camden County',
    placeholder: true,
  },
  {
    quote:
      'As a referring vet, I always get a same-day call back and a clear surgical report. My clients are in excellent hands.',
    author: 'Referring veterinarian',
    placeholder: true,
  },
  {
    quote:
      'Compassionate, unhurried, and genuinely expert. You can tell surgery is all they do.',
    author: 'Pet owner, Burlington County',
    placeholder: true,
  },
]

export const ownerJourney = [
  {
    step: '01',
    title: 'Consultation',
    body: 'Your veterinarian refers you, or you reach out directly. We review records and meet you and your pet to plan the right surgical approach.',
  },
  {
    step: '02',
    title: 'Surgery',
    body: 'Board-certified surgeons perform the procedure in our dedicated surgical suite, with anesthesia monitoring and pain management throughout.',
  },
  {
    step: '03',
    title: 'Rehabilitation',
    body: 'A tailored rehabilitation plan — therapeutic exercise, laser, and hydrotherapy — guides your pet back to comfortable, confident movement.',
  },
]

export const ownerFaqs = [
  {
    q: 'Do I need a referral from my regular veterinarian?',
    a: 'A referral helps us receive your pet’s records and imaging, but you are also welcome to contact us directly to request a consultation.',
  },
  {
    q: 'What should I bring to the first visit?',
    a: 'Any recent records, lab work, and radiographs from your primary veterinarian, plus a list of current medications.',
  },
  {
    q: 'How long is recovery after surgery?',
    a: 'It depends on the procedure. We provide a written recovery plan and pair most surgical patients with a rehabilitation program to support healing.',
  },
  {
    q: 'What are my payment options?',
    a: 'We provide a detailed estimate before any procedure and accept major cards and approved pet-financing options. Ask us about CareCredit.',
  },
]

export const referralSteps = [
  {
    step: '01',
    title: 'Submit the referral',
    body: 'Use the online referral form below, or download the PDF and fax it with your patient’s records and imaging.',
  },
  {
    step: '02',
    title: 'We schedule promptly',
    body: 'Our referral coordinator contacts your client to book the consultation, usually within one business day.',
  },
  {
    step: '03',
    title: 'You stay informed',
    body: 'You receive a surgical report and discharge summary, and a same-day call for any urgent case communication.',
  },
]

export const referralServices = [
  'Soft-tissue & oncologic surgery',
  'Orthopedic surgery (TPLO, TTA, fracture repair)',
  'Minimally invasive procedures',
  'Canine rehabilitation & post-op recovery',
  'Acupuncture & integrative pain management',
  'Second-opinion surgical consults',
]
