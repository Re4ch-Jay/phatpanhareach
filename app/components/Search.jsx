import React from 'react'

export default function Search({ searchText, handleSearchChange, placeholder }) {
  return (
    <div className="my-6 relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
      <input
        value={searchText}
        onChange={handleSearchChange}
        placeholder={placeholder ?? 'Search'}
        className="w-full rounded-full border border-border bg-surface pl-10 pr-4 py-2.5 text-sm text-primary placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-accent"
      />
    </div>
  )
}