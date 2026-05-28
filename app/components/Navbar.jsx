"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Audio from './Audio'
import ThemeToggle from './ThemeToggle'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/projects', label: 'Projects' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/statistics', label: 'Statistics' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname?.startsWith(href)

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-bg/70 backdrop-blur supports-[backdrop-filter]:bg-bg/60">
      <div className="container mx-auto max-w-screen-lg px-4">
        <div className="flex h-14 items-center justify-between gap-3">
          <Link
            href="/"
            className="text-sm md:text-base font-semibold tracking-tight text-primary"
          >
            Panhareach Phat
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  'px-3 py-1.5 rounded-full text-sm transition-colors ' +
                  (isActive(link.href)
                    ? 'bg-surface text-primary'
                    : 'text-muted hover:text-primary hover:bg-surface')
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Audio />
            <ThemeToggle />
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-primary"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {open ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M3 6h18M3 12h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <nav className="md:hidden pb-3 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={
                  'px-3 py-2 rounded-lg text-sm transition-colors ' +
                  (isActive(link.href)
                    ? 'bg-surface text-primary'
                    : 'text-muted hover:text-primary hover:bg-surface')
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}