import React from 'react'
import { defaultImage, homeUrl } from '@/app/util'
import Stars from '@/app/components/Stars'

const DESCRIPTION = 'Books Panhareach Phat has read and recommends.'

export const metadata = {
  title: 'Books',
  description: DESCRIPTION,
  url: `${homeUrl}/books`,
  alternates: {
    canonical: `${homeUrl}/books`,
  },
  openGraph: {
    title: 'Books',
    description: DESCRIPTION,
    type: 'website',
    url: `${homeUrl}/books`,
    alternates: {
      canonical: `${homeUrl}/books`,
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
    title: 'Books',
    description: DESCRIPTION,
    creator: '@panhareach_phat',
    images: {
      url: defaultImage,
      alt: 'Panhareach Phat',
    },
  },
}

const books = [
  { title: 'Clean Code', note: 'Robert C. Martin', rating: 4.5 },
  { title: 'The Pragmatic Programmer', note: 'Hunt & Thomas', rating: 5 },
  { title: 'Atomic Habits', note: 'James Clear', rating: 4 },
]

export default function BooksPage() {
  return (
    <div className="container mx-auto max-w-screen-lg px-4 py-10 sm:py-14">
      <header className="mb-8 sm:mb-10">
        <span className="text-xs uppercase tracking-[0.18em] font-semibold text-accent">
          Lists
        </span>
        <h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-primary">
          Books
        </h1>
        <p className="mt-3 text-sm sm:text-base text-muted max-w-2xl leading-relaxed">
          {DESCRIPTION}
        </p>
        <p className="mt-2 text-xs text-subtle">{books.length} books</p>
      </header>

      <ul className="space-y-3 sm:space-y-4">
        {books.map((book, idx) => (
          <li
            key={book.title}
            className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-4 sm:p-5 shadow-card"
          >
            <span className="text-sm font-medium text-accent w-8 shrink-0">
              {String(idx + 1).padStart(2, '0')}
            </span>
            <div className="min-w-0 flex-1">
              <h2 className="text-base sm:text-lg font-semibold text-primary leading-snug">
                {book.title}
              </h2>
              {book.note && (
                <p className="mt-0.5 text-xs sm:text-sm text-muted">{book.note}</p>
              )}
            </div>
            {typeof book.rating === 'number' && (
              <Stars rating={book.rating} />
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}