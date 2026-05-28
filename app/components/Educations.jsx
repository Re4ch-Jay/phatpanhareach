import React from 'react'
import { SectionHeader } from './Experiences'

const ITEMS = [
  {
    title: 'Phnom Penh Thmey High School',
    year: '2015 — 2021',
    description: 'My high school years — formative friendships and a Grade B finish.',
  },
  {
    title: 'Western International School',
    year: '2018 — 2020',
    description: 'GEP program.',
  },
  {
    title: 'Australian Centre of Education',
    year: '2020 — 2021',
    description: 'GEP program and IELTS preparation. Scored 5.5.',
  },
  {
    title: 'Cambodia Academy of Digital Technology',
    year: '2021 — Now',
    description: 'Where my software development career started.',
  },
]

export default function Educations() {
  return (
    <section className="container mx-auto max-w-screen-lg px-4 py-12 sm:py-16">
      <SectionHeader
        eyebrow="Education"
        title="Where I learned"
      />
      <div className="mt-8 relative pl-6">
        <div aria-hidden="true" className="absolute left-2 top-1 bottom-1 w-px bg-border" />
        <div className="space-y-6">
          {ITEMS.map((item, idx) => (
            <Education key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Education({ title, year, description }) {
  return (
    <div className="relative">
      <span
        aria-hidden="true"
        className="absolute -left-[1.05rem] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-bg"
      />
      <h3 className="text-base sm:text-lg font-semibold text-primary">{title}</h3>
      <p className="text-xs sm:text-sm font-medium text-accent mt-0.5">{year}</p>
      <p className="mt-1.5 text-sm sm:text-base text-muted leading-relaxed">{description}</p>
    </div>
  )
}