import React from 'react'
import { SectionHeader } from './Experiences'

const PROJECTS = [
  { title: 'Akiko', description: 'A minimal JavaScript CLI package', technologies: ['JS', 'Node', 'CLI'], link: 'https://www.npmjs.com/package/akiko' },
  { title: 'Hashiru', description: 'A CLI starter kit for Express.js', technologies: ['JS', 'Node', 'CLI'], link: 'https://github.com/Re4ch-Jay/hashiru' },
  { title: 'FakerKH', description: 'JavaScript library for Khmer random words', technologies: ['JS', 'Node', 'Lib'], link: 'https://github.com/Re4ch-Jay/FakerKH' },
  { title: 'King-Typer', description: 'Typing test with accuracy, WPM, and head-to-head challenges', technologies: ['Laravel', 'React', 'MySQL'], link: 'https://github.com/Re4ch-Jay/King-Typer' },
  { title: 'Meditation Mobile App', description: 'An app that helps you calm, relax, and focus', technologies: ['Flutter', 'Mobile'], link: 'https://github.com/Re4ch-Jay/Meditation_App' },
  { title: 'Get Me QR', description: 'Generate your own QR codes', technologies: ['React'], link: 'https://getmeqr.vercel.app/' },
  { title: 'Book Store Mobile App', description: 'Buy books from home', technologies: ['Flutter'], link: 'https://github.com/Re4ch-Jay/Book-Store' },
  { title: 'Ecommerce Mobile App', description: 'Shop from home', technologies: ['Flutter'], link: 'https://github.com/Re4ch-Jay/Ecommerce-Flutter' },
  { title: 'Student Management System', description: 'Minimal SMS with auth & permissions', technologies: ['Laravel', 'MySQL'], link: 'https://github.com/Re4ch-Jay/Simple-Student-Management' },
  { title: 'Banking System', description: 'Simple banking system', technologies: ['Spring Boot'], link: 'https://github.com/Re4ch-Jay/Banking-System' },
]

export default function ProjectFeatures() {
  return (
    <section className="container mx-auto max-w-screen-lg px-4 py-12 sm:py-16">
      <SectionHeader
        eyebrow="Projects"
        title="Things I've shipped"
        description="A mix of open-source tools, side projects, and learning playgrounds."
      />
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ title, description, technologies, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="group rounded-2xl border border-border bg-surface p-5 shadow-card hover:shadow-card-hover hover:bg-surface-hover transition-all"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base sm:text-lg font-semibold text-primary">{title}</h3>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted group-hover:text-accent transition-colors shrink-0 mt-1" aria-hidden="true">
          <path d="M7 17L17 7M7 7h10v10" />
        </svg>
      </div>
      <p className="mt-1.5 text-sm text-muted leading-relaxed">{description}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {technologies.map((tech, i) => (
          <span
            key={i}
            className="rounded-full border border-border bg-bg-soft px-2.5 py-0.5 text-xs font-medium text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </a>
  )
}