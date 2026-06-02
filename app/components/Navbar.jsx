"use client"

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Audio from './Audio'
import ThemeToggle from './ThemeToggle'

const LISTS_LINKS = [
  { href: '/games', label: 'Games' },
  { href: '/books', label: 'Books' },
  { href: '/songs', label: 'Songs' },
  { href: '/tools', label: 'Tools' },
]

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/projects', label: 'Projects' },
  { href: '/certifications', label: 'Certifications' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/statistics', label: 'Statistics' },
  { label: 'Lists', children: LISTS_LINKS },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [listsOpen, setListsOpen] = useState(false)
  const listsRef = useRef(null)

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname?.startsWith(href)

  const isListsActive = LISTS_LINKS.some((link) => isActive(link.href))

  useEffect(() => {
    const handleClick = (e) => {
      if (listsRef.current && !listsRef.current.contains(e.target)) {
        setListsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  useEffect(() => {
    setListsOpen(false)
  }, [pathname])

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
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.label} ref={listsRef} className="relative">
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={listsOpen}
                    onClick={() => setListsOpen((v) => !v)}
                    className={
                      'inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm transition-colors ' +
                      (isListsActive || listsOpen
                        ? 'bg-surface text-primary'
                        : 'text-muted hover:text-primary hover:bg-surface')
                    }
                  >
                    {link.label}
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
                      className={'transition-transform ' + (listsOpen ? 'rotate-180' : '')}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  {listsOpen && (
                    <div className="absolute right-0 mt-2 w-44 rounded-xl border border-border bg-bg shadow-card p-1.5 flex flex-col gap-0.5">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={
                            'px-3 py-2 rounded-lg text-sm transition-colors ' +
                            (isActive(child.href)
                              ? 'bg-surface text-primary'
                              : 'text-muted hover:text-primary hover:bg-surface')
                          }
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
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
              )
            )}
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
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.label} className="flex flex-col gap-1">
                  <span className="px-3 pt-2 pb-1 text-xs uppercase tracking-[0.14em] font-semibold text-subtle">
                    {link.label}
                  </span>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setOpen(false)}
                      className={
                        'px-3 py-2 ml-2 rounded-lg text-sm transition-colors ' +
                        (isActive(child.href)
                          ? 'bg-surface text-primary'
                          : 'text-muted hover:text-primary hover:bg-surface')
                      }
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
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
              )
            )}
          </nav>
        )}
      </div>
    </header>
  )
}