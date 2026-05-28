import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-border/60 mt-16">
      <div className="container mx-auto max-w-screen-lg px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs sm:text-sm text-muted">
          © 2021 — {new Date().getFullYear()} Panhareach Phat. All rights reserved.
        </p>
        <p className="text-xs text-subtle">Built with Next.js & Tailwind</p>
      </div>
    </footer>
  )
}