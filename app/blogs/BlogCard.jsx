import Link from "next/link";
import React from "react";

export default function BlogCard({ title, description, technologies, link, ...props }) {
  return (
    <Link
      href={link}
      {...props}
      className="group rounded-2xl border border-border bg-surface p-5 shadow-card hover:shadow-card-hover hover:bg-surface-hover transition-all"
    >
      <h3 className="text-base sm:text-lg font-semibold text-primary group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="mt-1.5 text-sm text-muted leading-relaxed">{description}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {technologies.map((technology, index) => (
          <span
            key={index}
            className="rounded-full border border-border bg-bg-soft px-2.5 py-0.5 text-xs font-medium text-muted"
          >
            {technology}
          </span>
        ))}
      </div>
    </Link>
  )
}