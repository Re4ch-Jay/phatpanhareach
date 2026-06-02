import React from 'react'

function StarRow({ filled }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          className="shrink-0 text-accent"
          aria-hidden="true"
        >
          <path
            d="m12 17.27 5.18 3.13-1.37-5.9 4.58-3.97-6.03-.51L12 4.5 9.64 10.02l-6.03.51 4.58 3.97-1.37 5.9z"
            fill={filled ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  )
}

/**
 * Renders a 5-star rating. `rating` is 0–5 and supports fractional values
 * (e.g. 4.5). A filled row is clipped over an empty row to show partial stars.
 */
export default function Stars({ rating = 0, max = 5 }) {
  const pct = Math.max(0, Math.min(1, rating / max)) * 100

  return (
    <div
      className="relative inline-flex shrink-0"
      role="img"
      aria-label={`Rated ${rating} out of ${max}`}
    >
      <StarRow filled={false} />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${pct}%` }}
      >
        <StarRow filled />
      </div>
    </div>
  )
}
