import React from 'react'
import { defaultImage, homeUrl } from '@/app/util'
import Stars from '@/app/components/Stars'

const DESCRIPTION = 'Tools Panhareach Phat uses day to day.'

export const metadata = {
  title: 'Tools',
  description: DESCRIPTION,
  url: `${homeUrl}/tools`,
  alternates: {
    canonical: `${homeUrl}/tools`,
  },
  openGraph: {
    title: 'Tools',
    description: DESCRIPTION,
    type: 'website',
    url: `${homeUrl}/tools`,
    alternates: {
      canonical: `${homeUrl}/tools`,
    },
    images: {
      url: defaultImage,
      secureUrl: defaultImage,
      width: 1200,
      height: 627,
      alt: 'Panhareach Phat',
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@panhareach_phat',
    title: 'Tools',
    description: DESCRIPTION,
    creator: '@panhareach_phat',
    images: {
      url: defaultImage,
      alt: 'Panhareach Phat',
    },
  },
}

const hardware = [
  { title: 'MacBook Apple M1 Pro 2021', note: 'Laptop', rating: 5 },
  { title: 'IPhone 14 Pro Max', note: 'Phone', rating: 5 },
]

const software = [
  { title: 'VS Code', note: 'Code editor', rating: 4.5 },
  { title: 'JetBrains', note: 'IDE', rating: 5 },
  { title: 'Claude AI', note: 'AI Agent', rating: 5 },
  { title: 'Docker', note: 'Container', rating: 5 },
  { title: 'Chrome', note: 'Browser', rating: 4.5 },
]

const sections = [
  { label: 'Hardware', items: hardware },
  { label: 'Software', items: software },
]

function ToolList({ items }) {
  return (
    <ul className="space-y-3 sm:space-y-4">
      {items.map((tool, idx) => (
        <li
          key={tool.title}
          className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-4 sm:p-5 shadow-card"
        >
          <span className="text-sm font-medium text-accent w-8 shrink-0">
            {String(idx + 1).padStart(2, '0')}
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="text-base sm:text-lg font-semibold text-primary leading-snug">
              {tool.title}
            </h3>
            {tool.note && (
              <p className="mt-0.5 text-xs sm:text-sm text-muted">{tool.note}</p>
            )}
          </div>
          {typeof tool.rating === 'number' && <Stars rating={tool.rating} />}
        </li>
      ))}
    </ul>
  )
}

export default function ToolsPage() {
  const total = software.length + hardware.length

  return (
    <div className="container mx-auto max-w-screen-lg px-4 py-10 sm:py-14">
      <header className="mb-8 sm:mb-10">
        <span className="text-xs uppercase tracking-[0.18em] font-semibold text-accent">
          Lists
        </span>
        <h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-primary">
          Tools
        </h1>
        <p className="mt-3 text-sm sm:text-base text-muted max-w-2xl leading-relaxed">
          {DESCRIPTION}
        </p>
        <p className="mt-2 text-xs text-subtle">{total} tools</p>
      </header>

      <div className="space-y-10 sm:space-y-12">
        {sections.map((section) => (
          <section key={section.label}>
            <h2 className="mb-4 flex items-baseline gap-2 text-lg sm:text-xl font-semibold text-primary">
              {section.label}
              <span className="text-xs font-normal text-subtle">
                {section.items.length}
              </span>
            </h2>
            <ToolList items={section.items} />
          </section>
        ))}
      </div>
    </div>
  )
}
