"use client"
import React, { useRef, useState } from 'react'

export default function Audio() {
  const [isMusicOn, setIsMusicOn] = useState(false)
  const audioRef = useRef(null)

  const toggle = () => {
    const el = audioRef.current
    if (!el) return
    if (isMusicOn) {
      el.pause()
      el.currentTime = 0
      setIsMusicOn(false)
    } else {
      el.play()
      setIsMusicOn(true)
    }
  }

  return (
    <>
      <audio className="hidden" ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mp3" />
      </audio>
      <button
        type="button"
        onClick={toggle}
        aria-label={isMusicOn ? 'Stop music' : 'Play music'}
        title={isMusicOn ? 'Stop music' : 'Play music'}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-primary hover:bg-surface-hover transition-colors"
      >
        {isMusicOn ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        )}
      </button>
    </>
  )
}