import React from 'react'
import Link from 'next/link'
import { SectionHeader } from './Experiences'

const FAQS = [
  {
    question: 'What are your favorite songs?',
    answer: 'My current playlist, straight from Spotify.',
    href: '/songs',
  },
  {
    question: 'What games do you play?',
    answer: 'The games I keep coming back to, rated.',
    href: '/games',
  },
  {
    question: 'What books do you recommend?',
    answer: 'Books I\'ve read and would hand to a friend.',
    href: '/books',
  },
  {
    question: 'What tools do you use?',
    answer: 'The software and hardware I rely on day to day.',
    href: '/tools',
  },
]

export default function Faq() {
  return (
    <section className="container mx-auto max-w-screen-lg px-4 py-12 sm:py-16">
      <SectionHeader
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="A few things people often ask. Tap one to see the full list."
      />
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {FAQS.map((faq) => (
          <Link
            key={faq.href}
            href={faq.href}
            className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-surface p-5 shadow-card hover:bg-surface-hover hover:shadow-card-hover transition-all"
          >
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-primary leading-snug">
                {faq.question}
              </h3>
              <p className="mt-1 text-sm text-muted">{faq.answer}</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        ))}
      </div>
    </section>
  )
}
