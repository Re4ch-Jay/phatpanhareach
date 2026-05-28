"use client"
import React, { useEffect, useState } from 'react'

export default function GalleryGrid({ items, showDescription = false }) {
  const [selected, setSelected] = useState(null)

  const close = () => setSelected(null)
  const prev = (e) => {
    e?.stopPropagation()
    setSelected((s) => (s > 0 ? s - 1 : s))
  }
  const next = (e) => {
    e?.stopPropagation()
    setSelected((s) => (s < items.length - 1 ? s + 1 : s))
  }

  useEffect(() => {
    if (selected === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft' && selected > 0) setSelected(selected - 1)
      if (e.key === 'ArrowRight' && selected < items.length - 1) setSelected(selected + 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selected, items.length])

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        {items.map((item, idx) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setSelected(idx)}
            className="group relative overflow-hidden rounded-2xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-44 sm:h-52 md:h-60 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 text-left">
              <div>
                <p className="text-white text-sm font-medium leading-snug">{item.title}</p>
                {showDescription && item.description && (
                  <p className="text-white/80 text-xs mt-1 leading-snug line-clamp-2">{item.description}</p>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>

      {selected !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={close}
        >
          <div className="relative w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute -top-12 right-0 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
            </button>
            <img
              src={items[selected].src}
              alt={items[selected].title}
              className="w-full max-h-[75vh] object-contain rounded-xl"
            />
            <div className="mt-3 text-center">
              <p className="text-white text-sm font-semibold">{items[selected].title}</p>
              {items[selected].description && (
                <p className="mt-1 text-white/75 text-xs max-w-xl mx-auto">{items[selected].description}</p>
              )}
            </div>
            <div className="mt-4 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={prev}
                disabled={selected === 0}
                aria-label="Previous"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors disabled:opacity-40 disabled:hover:bg-white/10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
              </button>
              <span className="text-xs text-white/70">{selected + 1} / {items.length}</span>
              <button
                type="button"
                onClick={next}
                disabled={selected === items.length - 1}
                aria-label="Next"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors disabled:opacity-40 disabled:hover:bg-white/10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}