import React from 'react'
import Link from 'next/link'
import { certifications } from '@/data/certifications'
import { SectionHeader } from './Experiences'

export default function Certifications() {
  const featured = certifications.filter((c) => c.isFeatured)
  const remaining = certifications.length - featured.length

  return (
    <section className="container mx-auto max-w-screen-lg px-4 py-12 sm:py-16">
      <SectionHeader
        eyebrow="Certifications"
        title="Certified & studied"
        description="A selection of professional certifications I've completed."
      />

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {featured.map((cert) => (
          <Link
            key={cert.image}
            href="/certifications"
            className="group rounded-2xl border border-border bg-surface p-5 shadow-card hover:shadow-card-hover hover:bg-surface-hover transition-all"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-bg-soft">
              <img
                src={cert.image}
                alt={cert.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-4 text-base sm:text-lg font-semibold text-primary leading-snug group-hover:text-accent transition-colors">
              {cert.title}
            </h3>
          </Link>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          href="/certifications"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-primary hover:bg-surface-hover transition-colors"
        >
          View certifications
          {remaining > 0 && (
            <span className="text-xs font-medium text-muted">+{remaining} more</span>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
