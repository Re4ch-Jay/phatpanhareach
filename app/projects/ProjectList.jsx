"use client"

import React, { useEffect, useState } from 'react'
import Search from '../components/Search'

export default function ProjectList({ projects }) {
  const [searchText, setSearchText] = useState('')
  const [filteredProjects, setFilteredProjects] = useState(projects || [])

  useEffect(() => {
    if (!Array.isArray(projects)) {
      setFilteredProjects([])
      return
    }
    const q = searchText.toLowerCase()
    setFilteredProjects(
      projects.filter((project) => {
        const name = project.name?.toLowerCase().includes(q)
        const language = project.language && project.language.toLowerCase().includes(q)
        return name || language
      })
    )
  }, [searchText, projects])

  const handleSearchChange = (event) => {
    setSearchText(event.target.value)
  }

  return (
    <>
      <header className="mb-2">
        <span className="text-xs uppercase tracking-[0.18em] font-semibold text-accent">GitHub</span>
        <h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-primary">Projects</h1>
        <p className="mt-2 text-sm sm:text-base text-muted max-w-2xl">
          A live list of my public repositories.
        </p>
      </header>
      <Search
        searchText={searchText}
        handleSearchChange={handleSearchChange}
        placeholder="Search by project name or language"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            description={project.description}
            language={project.language}
            link={project.html_url}
          />
        ))}
      </div>
    </>
  )
}

function ProjectCard({ name, description, language, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="group rounded-2xl border border-border bg-surface p-5 shadow-card hover:shadow-card-hover hover:bg-surface-hover transition-all"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-primary group-hover:text-accent transition-colors break-words">
          {name}
        </h3>
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
          className="text-muted group-hover:text-accent transition-colors shrink-0 mt-1"
          aria-hidden="true"
        >
          <path d="M7 17L17 7M7 7h10v10" />
        </svg>
      </div>
      {description && (
        <p className="mt-1.5 text-sm text-muted leading-relaxed line-clamp-2">{description}</p>
      )}
      {language && (
        <div className="mt-4">
          <span className="rounded-full border border-border bg-bg-soft px-2.5 py-0.5 text-xs font-medium text-muted">
            {language}
          </span>
        </div>
      )}
    </a>
  )
}