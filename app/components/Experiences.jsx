"use client"
import React from 'react'

const EXPERIENCES = [
  {
    title: 'Software Developer — EWS Knowledge Transfer System',
    company: 'BiKay',
    year: '2024 — Now',
    short: 'Collaborate with French and local developers to build the East-West Seed Knowledge Transfer System and mobile app used by millions of farmers.',
    full: [
      'Architected and implemented the East-West Seed Knowledge Transfer System.',
      'Developed scalable APIs and backend services for a mobile app used by millions of farmers.',
      'Ensured high availability and performance.',
      'Integrated real-time data sync using Redis and Docker.',
      'Worked closely with European and local teams to deliver features on time.',
    ],
    technologies: ['PHP', 'Laravel', 'Redis', 'Docker', 'PostgreSQL'],
  },
  {
    title: 'Software Developer — WHO Patient Management System',
    company: 'BiKay',
    year: '2024',
    short: 'Designed and implemented a scalable patient management system handling 10k+ records securely.',
    full: [
      'Designed and implemented a scalable patient management system for the World Health Organization.',
      'Handled 10k+ patient records with robust security and privacy measures.',
      'Integrated role-based access control for secure data access.',
      'Optimized database queries, cutting data retrieval time by 40%.',
      'Developed reporting dashboards for healthcare analytics.',
      'Ensured GDPR compliance and data integrity.',
    ],
    technologies: ['PHP', 'Laravel', 'PostgreSQL', 'JWT', 'Open Swoole'],
  },
  {
    title: 'AI Developer — Business AI App',
    company: 'BiKay',
    year: '2025',
    short: 'Built an AI-powered business analytics app for CV matching, project offers, and chatbot support.',
    full: [
      'Developed an AI-powered business analytics application for HR and project management.',
      'Implemented CV matching and automated project offer recommendations.',
      'Integrated chatbot support using NLP and OpenAI APIs.',
      'Reduced manual workload by 50% for HR teams.',
      'Built real-time analytics dashboards and notification systems.',
      'Ensured scalability and maintainability of AI services.',
    ],
    technologies: ['React', 'Python', 'Django', 'OpenAI', 'Docker'],
  },
  {
    title: 'Backend Developer — Placodist',
    company: 'BiKay',
    year: '2025',
    short: 'Built the first stage of the Placodist backend using Node.js, Fastify, PostgreSQL, and Prisma.',
    full: [
      'Developed the initial backend foundation for Placodist using Node.js and Fastify.',
      'Utilized PostgreSQL and Prisma for efficient data management.',
      'Established code standards and best practices for future development.',
      'Wrote migration scripts and set up automated testing pipelines.',
      'Enabled seamless collaboration for other developers joining the project.',
    ],
    technologies: ['Node.js', 'Fastify', 'PostgreSQL', 'Prisma', 'Jest'],
  },
  {
    title: 'Software Developer — Huoutracco eCRM (Cambodia & Laos)',
    company: 'BiKay',
    year: '2025',
    short: 'Contributed to the implementation and support of an enterprise CRM across Cambodia and Laos.',
    full: [
      'Contributed to the implementation and ongoing support of Huoutracco eCRM.',
      'Enabled efficient customer management across multiple regions (Cambodia & Laos).',
      'Integrated third-party APIs for enhanced CRM functionality.',
      'Improved data import/export processes for business operations.',
      'Provided technical support and training for regional teams.',
      'Ensured system reliability and scalability for enterprise use.',
    ],
    technologies: ['PHP', 'Laravel', 'REST API', 'PostgreSQL', 'Docker'],
  },
  {
    title: 'Leader — CADT Coding Club',
    year: '2022 — 2024',
    short: 'Founded and led a vibrant tech community; wrote tech content for the Cambodian developer scene.',
    full: [
      'Founded and managed a vibrant tech community.',
      'Organized workshops, hackathons, and online events.',
      'Wrote and curated technology-related content for Facebook and Digital Community of Cambodia.',
      'Mentored junior members and facilitated knowledge sharing on software engineering best practices.',
      'Grew the community to thousands of aspiring developers and students.',
    ],
    technologies: ['Leadership', 'Community', 'Content', 'Mentorship'],
  },
  {
    title: 'Open Source Developer',
    year: '2023 — Now',
    short: 'Develop and maintain open source packages and tools on NPM and GitHub.',
    full: [
      'Develop and maintain open source packages and tools for the global developer community on NPM and GitHub.',
      'Collaborate with contributors worldwide, review pull requests, and ensure high code quality.',
      'Advocate for open source adoption in local tech circles.',
      'Present at meetups and conferences.',
      'Helped increase adoption of open source tools in Cambodia.',
    ],
    technologies: ['JavaScript', 'NPM', 'GitHub', 'TypeScript', 'CI/CD'],
  },
]

export default function Experiences() {
  return (
    <section id="experiences" className="container mx-auto max-w-screen-lg px-4 py-12 sm:py-16">
      <SectionHeader
        eyebrow="Experience"
        title="What I've been building"
        description="A selection of roles and initiatives spanning backend engineering, AI, and developer community work."
      />
      <div className="mt-8 space-y-4">
        {EXPERIENCES.map((exp, idx) => (
          <Experience key={idx} {...exp} />
        ))}
      </div>
    </section>
  )
}

export function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="flex flex-col items-start gap-2">
      {eyebrow && (
        <span className="text-xs uppercase tracking-[0.18em] font-semibold text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">
        {title}
      </h2>
      {description && (
        <p className="text-sm sm:text-base text-muted max-w-2xl">{description}</p>
      )}
    </div>
  )
}

function Experience({ title, year, company, short, full, technologies }) {
  const [expanded, setExpanded] = React.useState(false)
  return (
    <article className="group rounded-2xl border border-border bg-surface p-5 sm:p-7 shadow-card hover:shadow-card-hover transition-shadow">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-primary leading-snug">
            {title}
            {company && <span className="text-muted font-normal"> · {company}</span>}
          </h3>
          <p className="mt-1 text-xs sm:text-sm font-medium text-accent">{year}</p>
        </div>
      </div>

      {expanded ? (
        <ul className="mt-4 space-y-2 text-sm sm:text-base text-muted">
          {full.map((point, i) => (
            <li key={i} className="flex gap-2">
              <span aria-hidden="true" className="mt-2 h-1 w-1 rounded-full bg-accent shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed">{short}</p>
      )}

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

      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-accent hover:text-accent-hover transition-colors"
      >
        {expanded ? 'Show less' : 'Read more'}
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={'transition-transform ' + (expanded ? 'rotate-180' : '')}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    </article>
  )
}