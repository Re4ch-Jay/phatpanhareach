"use client"
import React from 'react'

export default function Experiences() {
  const experiences = [
    {
      title: 'Software Developer - EWS Knowledge Transfer System',
      company: 'BiKay',
      year: '2024 - Now',
      short: 'Collaborate with French and local developers to develop a East-West Seed Knowledge Transfer System and mobile app that is used by millions of farmers.',
      full: [
        'Architected and implemented the East-West Seed Knowledge Transfer System.',
        'Developed scalable APIs and backend services for a mobile app used by millions of farmers.',
        'Ensured high availability and performance.',
        'Integrated real-time data sync using Redis and Docker.',
        'Worked closely with European and local teams to deliver features on time.'
      ],
      technologies: ['PHP', 'Laravel', 'Redis', 'Docker', 'PostgreSQL']
    },
    {
      title: 'Software Developer - World Health Organization Patient Management System',
      company: 'BiKay',
      year: '2024',
      short: 'Designed and implemented a scalable patient management system handling 10k+ patient records securely.',
      full: [
        'Designed and implemented a scalable patient management system for World Health Organization.',
        'Handled 10k+ patient records with robust security and privacy measures.',
        'Integrated role-based access control for secure data access.',
        'Optimized database queries, cutting data retrieval time by 40%.',
        'Developed reporting dashboards for healthcare analytics.',
        'Ensured GDPR compliance and data integrity.'
      ],
      technologies: ['PHP', 'Laravel', 'PostgreSQL', 'JWT', 'Open Swoole']
    },
    {
      title: 'AI Developer - Business AI App',
      company: 'BiKay',
      year: '2025',
      short: 'Developed an AI-powered business analytics app for CV matching, project offers, and chatbot support.',
      full: [
        'Developed an AI-powered business analytics application for HR and project management.',
        'Implemented CV matching and automated project offer recommendations.',
        'Integrated chatbot support using NLP and OpenAI APIs.',
        'Reduced manual workload by 50% for HR teams.',
        'Built real-time analytics dashboards and notification systems.',
        'Ensured scalability and maintainability of AI services.'
      ],
      technologies: ['React', 'Python', 'Django', 'Open AI', 'Docker']
    },
    {
      title: 'Backend Developer - Placodist',
      company: 'BiKay',
      year: '2025',
      short: 'Developed the first stage of the Placodist backend using Node.js, Fastify, PostgreSQL, and Prisma.',
      full: [
        'Developed the initial backend foundation for Placodist using Node.js and Fastify.',
        'Utilized PostgreSQL and Prisma for efficient data management.',
        'Established code standards and best practices for future development.',
        'Wrote migration scripts and set up automated testing pipelines.',
        'Enabled seamless collaboration for other developers joining the project.'
      ],
      technologies: ['Node.js', 'Fastify', 'PostgreSQL', 'Prisma', 'Jest']
    },
    {
      title: 'Software Developer - Huoutracco eCRM (Cambodia & Laos)',
      company: 'BiKay',
      year: '2025',
      short: 'Contributed to the implementation and support of an enterprise CRM system across Cambodia and Laos.',
      full: [
        'Contributed to the implementation and ongoing support of Huoutracco eCRM.',
        'Enabled efficient customer management across multiple regions (Cambodia & Laos).',
        'Integrated third-party APIs for enhanced CRM functionality.',
        'Improved data import/export processes for business operations.',
        'Provided technical support and training for regional teams.',
        'Ensured system reliability and scalability for enterprise use.'
      ],
      technologies: ['PHP', 'Laravel', 'REST API', 'PostgreSQL', 'Docker']
    },
    {
      title: 'Leader of CADT Coding Club',
      year: '2022 - 2024',
      short: 'Write technology related content on Facebook and Digital Community of Cambodia.',
      full: [
        'Founded and manage a vibrant tech community.',
        'Organized workshops, hackathons, and online events.',
        'Write and curate technology-related content for Facebook and Digital Community of Cambodia.',
        'Mentor junior members and facilitate knowledge sharing on software engineering best practices.',
        'Grew the community to thousands of aspiring developers and students.'
      ],
      technologies: ['Leadership', 'Community Building', 'Content Creation', 'Mentorship', 'Event Planning']
    },
    {
      title: 'Open Source Developer',
      year: '2023 - Now',
      short: 'Develop packages, tools etc, for open source community such as NPM and GitHub.',
      full: [
        'Develop and maintain open source packages and tools for the global developer community on NPM and GitHub.',
        'Collaborate with contributors worldwide, review pull requests, and ensure high code quality.',
        'Advocate for open source adoption in local tech circles.',
        'Present at meetups and conferences.',
        'Helped increase adoption of open source tools in Cambodia.'
      ],
      technologies: ['JavaScript', 'NPM', 'GitHub', 'TypeScript', 'CI/CD']
    },
  ]

  return (
    <div className="container mx-auto max-w-screen-lg px-4 py-8">
      <p className="text-white text-4xl font-extrabold mb-8">Experiences</p>
      {experiences.map((exp, idx) => (
        <Experience
          key={idx}
          title={exp.title}
          year={exp.year}
          company={exp.company}
          short={exp.short}
          full={exp.full}
          technologies={exp.technologies}
        />
      ))}
    </div>
  )
}

function Experience({title, year, company, short, full, technologies}) {
  const [shortRead, setShortRead] = React.useState(true)
  return (
    <div className="bg-gray-800 rounded-2xl shadow-lg p-8 mb-8">
      <h1 className="text-2xl text-white font-bold mb-2">{title} {company &&
        <span className="text-gray-400">- {company}</span>}</h1>
      <h4 className="text-yellow-400 text-xl font-semibold mb-4">{year}</h4>
      {shortRead ? (
        <p className="text-white text-lg mb-4">{short}</p>
      ) : (
        <ul className="list-disc pl-6 text-white text-lg mb-4">
          {full.map((point, i) => (
            <li key={i} className="mb-2">{point}</li>
          ))}
        </ul>
      )}
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, i) => (
          <span key={i} className="bg-gray-700 text-yellow-300 px-3 py-1 rounded-full text-sm font-medium">{tech}</span>
        ))}
      </div>
      <button
        className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white text-lg font-bold rounded-full transition"
        onClick={() => setShortRead(!shortRead)}
      >
        {shortRead ? 'See More' : 'See Less'}
      </button>
    </div>
  )
}
