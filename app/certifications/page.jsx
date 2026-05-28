import React from 'react'
import { certifications } from '@/data/certifications'
import { defaultImage, homeUrl } from '@/app/util'

export const metadata = {
  title: 'Certifications',
  description: 'Professional certifications completed by Panhareach Phat.',
  url: `${homeUrl}/certifications`,
  alternates: {
    canonical: `${homeUrl}/certifications`,
  },
  openGraph: {
    title: 'Certifications',
    description: 'Professional certifications completed by Panhareach Phat.',
    type: 'website',
    url: `${homeUrl}/certifications`,
    alternates: {
      canonical: `${homeUrl}/certifications`,
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
    title: 'Certifications',
    description: 'Professional certifications completed by Panhareach Phat.',
    creator: '@panhareach_phat',
    images: {
      url: defaultImage,
      alt: 'Panhareach Phat',
    },
  },
}

export default function CertificationsPage() {
  return (
    <div className="container mx-auto max-w-screen-lg px-4 py-10 sm:py-14">
      <header className="mb-8 sm:mb-10">
        <span className="text-xs uppercase tracking-[0.18em] font-semibold text-accent">
          Credentials
        </span>
        <h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-primary">
          Certifications
        </h1>
        <p className="mt-3 text-sm sm:text-base text-muted max-w-2xl leading-relaxed">
          Professional certifications I've completed.
        </p>
        <p className="mt-2 text-xs text-subtle">{certifications.length} certificates</p>
      </header>

      <div className="space-y-6 sm:space-y-8">
        {certifications.map((cert, idx) => (
          <article
            key={cert.image}
            className="rounded-2xl border border-border bg-surface p-5 sm:p-7 shadow-card"
          >
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-xs font-medium text-accent">
                  Certificate {String(idx + 1).padStart(2, '0')}
                </p>
                <h2 className="mt-1 text-lg sm:text-xl font-semibold text-primary leading-snug">
                  {cert.title}
                </h2>
              </div>
              <div className="rounded-xl border border-border bg-bg-soft overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
