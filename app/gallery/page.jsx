import React from 'react'
import { gallery } from '@/data/gallery'
import GalleryGrid from '@/app/components/GalleryGrid'
import { defaultImage, homeUrl } from '@/app/util'

export const metadata = {
  title: 'Gallery',
  description: 'A visual journal — fashion, moments, and everyday photography by Panhareach Phat.',
  url: `${homeUrl}/gallery`,
  alternates: {
    canonical: `${homeUrl}/gallery`,
  },
  openGraph: {
    title: 'Gallery',
    description: 'A visual journal — fashion, moments, and everyday photography by Panhareach Phat.',
    type: 'website',
    url: `${homeUrl}/gallery`,
    alternates: {
      canonical: `${homeUrl}/gallery`,
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
    title: 'Gallery',
    description: 'A visual journal — fashion, moments, and everyday photography by Panhareach Phat.',
    creator: '@panhareach_phat',
    images: {
      url: defaultImage,
      alt: 'Panhareach Phat',
    },
  },
}

export default function GalleryPage() {
  return (
    <div className="container mx-auto max-w-screen-lg px-4 py-10 sm:py-14">
      <header className="mb-8 sm:mb-10">
        <span className="text-xs uppercase tracking-[0.18em] font-semibold text-accent">Off the keyboard</span>
        <h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-primary">Gallery</h1>
        <p className="mt-3 text-sm sm:text-base text-muted max-w-2xl leading-relaxed">
          A visual journal — fashion, moments, and everyday photography. Click any image to view it full size, or use the arrow keys to step through.
        </p>
        <p className="mt-2 text-xs text-subtle">{gallery.length} photos</p>
      </header>

      <GalleryGrid items={gallery} showDescription />
    </div>
  )
}