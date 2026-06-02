import React from 'react'
import { defaultImage, homeUrl } from '@/app/util'
import Stars from '@/app/components/Stars'

const DESCRIPTION = 'Games Panhareach Phat enjoys playing.'

export const metadata = {
  title: 'Games',
  description: DESCRIPTION,
  url: `${homeUrl}/games`,
  alternates: {
    canonical: `${homeUrl}/games`,
  },
  openGraph: {
    title: 'Games',
    description: DESCRIPTION,
    type: 'website',
    url: `${homeUrl}/games`,
    alternates: {
      canonical: `${homeUrl}/games`,
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
    title: 'Games',
    description: DESCRIPTION,
    creator: '@panhareach_phat',
    images: {
      url: defaultImage,
      alt: 'Panhareach Phat',
    },
  },
}

const games = [
  { title: 'Elden Ring', note: 'Action RPG', rating: 5 },
  { title: 'The Witcher 3: Wild Hunt', note: 'Open-world RPG', rating: 5 },
  { title: 'Kingdom Come: Deliverance 1 & 2', note: 'Open-world RPG', rating: 4.5 },
  { title: 'Baldur Gate 3', note: 'Turn Base RPG', rating: 5 },
  { title: 'Divinity Original Sin 2', note: 'Turn Base RPG', rating: 4.5 },
  { title: 'Zelda: Breath of the Wild', note: 'Action Adventure', rating: 4.5 },
]

export default function GamesPage() {
  return (
    <div className="container mx-auto max-w-screen-lg px-4 py-10 sm:py-14">
      <header className="mb-8 sm:mb-10">
        <span className="text-xs uppercase tracking-[0.18em] font-semibold text-accent">
          Lists
        </span>
        <h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-primary">
          Games
        </h1>
        <p className="mt-3 text-sm sm:text-base text-muted max-w-2xl leading-relaxed">
          {DESCRIPTION}
        </p>
        <p className="mt-2 text-xs text-subtle">{games.length} games</p>
      </header>

      <ul className="space-y-3 sm:space-y-4">
        {games.map((game, idx) => (
          <li
            key={game.title}
            className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-4 sm:p-5 shadow-card"
          >
            <span className="text-sm font-medium text-accent w-8 shrink-0">
              {String(idx + 1).padStart(2, '0')}
            </span>
            <div className="min-w-0 flex-1">
              <h2 className="text-base sm:text-lg font-semibold text-primary leading-snug">
                {game.title}
              </h2>
              {game.note && (
                <p className="mt-0.5 text-xs sm:text-sm text-muted">{game.note}</p>
              )}
            </div>
            {typeof game.rating === 'number' && (
              <Stars rating={game.rating} />
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}