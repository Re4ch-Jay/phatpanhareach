import React from 'react'
import { defaultImage, homeUrl } from '@/app/util'

const PLAYLIST_URL = 'https://open.spotify.com/playlist/1pdjdWGEl32fcHsVOolzo2'

// Extracts the playlist id from a full Spotify URL (with or without query string).
function getPlaylistId(url) {
  const match = url.match(/playlist\/([A-Za-z0-9]+)/)
  return match ? match[1] : null
}

const DESCRIPTION = 'Songs on Panhareach Phat\'s playlist.'

export const metadata = {
  title: 'Songs',
  description: DESCRIPTION,
  url: `${homeUrl}/songs`,
  alternates: {
    canonical: `${homeUrl}/songs`,
  },
  openGraph: {
    title: 'Songs',
    description: DESCRIPTION,
    type: 'website',
    url: `${homeUrl}/songs`,
    alternates: {
      canonical: `${homeUrl}/songs`,
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
    title: 'Songs',
    description: DESCRIPTION,
    creator: '@panhareach_phat',
    images: {
      url: defaultImage,
      alt: 'Panhareach Phat',
    },
  },
}

export default function SongsPage() {
  const playlistId = getPlaylistId(PLAYLIST_URL)

  return (
    <div className="container mx-auto max-w-screen-lg px-4 py-10 sm:py-14">
      <header className="mb-8 sm:mb-10">
        <span className="text-xs uppercase tracking-[0.18em] font-semibold text-accent">
          Lists
        </span>
        <h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-primary">
          Songs
        </h1>
        <p className="mt-3 text-sm sm:text-base text-muted max-w-2xl leading-relaxed">
          {DESCRIPTION}
        </p>
        {playlistId && (
          <a
            href={PLAYLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted transition-colors hover:text-primary"
          >
            Open in Spotify
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
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </a>
        )}
      </header>

      {playlistId ? (
        <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-card">
          <iframe
            title="Spotify playlist"
            src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
            width="100%"
            height="560"
            loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
            style={{ border: 0 }}
          />
        </div>
      ) : (
        <p className="rounded-2xl border border-border bg-surface p-5 text-sm text-muted shadow-card">
          No playlist configured yet. Add your Spotify playlist link to{' '}
          <code className="text-primary">PLAYLIST_URL</code> in{' '}
          <code className="text-primary">app/songs/page.jsx</code>.
        </p>
      )}
    </div>
  )
}
