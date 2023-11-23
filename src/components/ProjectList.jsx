import React from 'react'
import Card from './Card'

export default function ProjectList() {
  return (
    <div className="container mx-auto max-w-screen-lg px-4 py-5">
        <p className="text-white text-center text-lg">I actively contribute to a range of open-source projects. While success may be elusive for now, I'm committed to continuous efforts and growth.</p>
        <div className="grid grid-cols-2 justify-center items-center gap-5 mt-10 cursor-pointer">
          <ProjectCard title="Akiko" description="A minimal JavaScript CLI Package" technologies={['JS', 'Node', 'CLI']} link='https://www.npmjs.com/package/akiko' />
          <ProjectCard title="King-Typer" description="A website for typing test based, accuracy, wpm and challenge with others" technologies={['Laravel', 'React', 'MySQL']} link='https://github.com/Re4ch-Jay/King-Typer' />
          <ProjectCard title="Sandbox-APIs" description="A collection of APIs endpoint similar to any social media" technologies={['Laravel', 'RestAPI']} link='https://github.com/Re4ch-Jay/Sandbox-APIs' />
          <ProjectCard title="Meditation Mobile App" description="An app that make you calm, relief, relax, and focus 🧘" technologies={['Flutter', 'Mobile App']} link='https://github.com/Re4ch-Jay/Meditation_App' />
          <ProjectCard title="Get Me QR" description="Software tool to generate your QR Code" technologies={['React']} link='https://getmeqr.vercel.app/' />
          <ProjectCard title="Book Store Mobile App" description="Buy book from home is better!" technologies={['Flutter']} link='https://github.com/Re4ch-Jay/Book-Store' />
          <ProjectCard title="Ecommerce Mobile App" description="Shopping at home is better!" technologies={['Flutter']} link='https://github.com/Re4ch-Jay/Ecommerce-Flutter' />
          <ProjectCard title="Student Management System" description="Minimal Student Management System with Authentication & Authorization" technologies={['Laravel', 'MySQL']} link='https://github.com/Re4ch-Jay/Simple-Student-Management' />
          <ProjectCard title="Banking System" description="Simple Banking System" technologies={['Spring Boot']} link='https://github.com/Re4ch-Jay/Banking-System' />
          <ProjectCard title="Spring Boot API" description="Build a Blog API with Spring Boot" technologies={['Spring Boot']} link='https://github.com/Re4ch-Jay/Spring-Boot-API' />
        </div>
    </div>
  )
}



function ProjectCard({title, description, technologies, link}) {
  return (
    <a href={link} target="_blank" >
    <Card className="h-72 md:h-36">
      <>
        <p className="text-xl font-bold">{title}</p>
        <p className="text-base">{description}</p>
        <div className="flex flex-row flex-wrap mt-3 gap-1">
          {technologies.map((technology, index) => (
            <p key={index} className="px-8 text-center bg-gray-800 text-white text-sm rounded">
              {technology}
            </p>
          ))}
    
        </div>
      </>
    </Card>
    </a>
  )
}
