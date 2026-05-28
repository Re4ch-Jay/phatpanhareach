import React from 'react'
import { SectionHeader } from './Experiences'

const TECHS = [
  { name: 'PHP', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png' },
  { name: 'JavaScript', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png' },
  { name: 'C# .NET', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1200px-Logo_C_sharp.svg.png' },
  { name: 'Java', img: 'https://upload.wikimedia.org/wikipedia/de/thumb/e/e1/Java-Logo.svg/1200px-Java-Logo.svg.png' },
  { name: 'Dart', img: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Dart_logo.png' },
  { name: 'Laravel', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png' },
  { name: 'React', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png' },
  { name: 'Next.js', img: 'https://logowik.com/content/uploads/images/nextjs7685.logowik.com.webp' },
  { name: 'ASP.NET', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/2048px-Microsoft_.NET_logo.svg.png' },
  { name: 'Spring Boot', img: 'https://dz2cdn1.dzone.com/storage/temp/12434118-spring-boot-logo.png' },
  { name: 'Node', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png' },
  { name: 'Flutter', img: 'https://seeklogo.com/images/F/flutter-logo-5086DD11C5-seeklogo.com.png' },
  { name: 'Tailwind', img: 'https://files.raycast.com/nwt9ncojkvwmjfkaada8upafvpnu' },
  { name: 'MySQL', img: 'https://aety.io/wp-content/uploads/2016/11/mysql-logo.png' },
  { name: 'SQL Server', img: 'https://cyclr.com/wp-content/uploads/2022/03/ext-550.png' },
]

export default function Technologies() {
  return (
    <section className="container mx-auto max-w-screen-lg px-4 py-12 sm:py-16">
      <SectionHeader
        eyebrow="Tech"
        title="Tools of the trade"
        description="I enjoy exploring and mastering different stacks. Here are some I've worked with."
      />
      <div className="mt-8 flex flex-wrap gap-2">
        {TECHS.map((t) => (
          <div
            key={t.name}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-primary hover:bg-surface-hover transition-colors"
          >
            <img className="h-4 w-4 object-contain" src={t.img} alt="" />
            <span>{t.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}