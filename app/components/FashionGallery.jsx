import React from 'react'
import Link from 'next/link'
import { gallery } from '@/data/gallery'
import { SectionHeader } from './Experiences'
import GalleryGrid from './GalleryGrid'

const PREVIEW_COUNT = 6

export default function FashionGallery() {
  const preview = gallery.slice(0, PREVIEW_COUNT)
  const remaining = gallery.length - preview.length

  return (
    <section className="container mx-auto max-w-screen-lg px-4 py-12 sm:py-16">
      <SectionHeader
        eyebrow="Off the keyboard"
        title="Fashion gallery"
        description="A glimpse into my creative side — fashion and photography."
      />
      <div className="mt-8">
        <GalleryGrid items={preview} />
      </div>
      <div className="mt-8 flex justify-center">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-primary hover:bg-surface-hover transition-colors"
        >
          See full gallery
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