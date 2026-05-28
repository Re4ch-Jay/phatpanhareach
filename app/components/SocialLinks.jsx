import React from 'react'

const LINKS = [
  { platform: 'GitHub', url: 'https://github.com/Re4ch-Jay' },
  { platform: 'GitLab', url: 'https://gitlab.com/panhareachphat' },
  { platform: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100054954846588' },
  { platform: 'Twitter', url: 'https://twitter.com/panhareach_phat' },
  { platform: 'Instagram', url: 'https://www.instagram.com/p.p.reach/' },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/panhareach-phat-a243452a5' },
]

export default function SocialLinks() {
  return (
    <section className="container mx-auto max-w-screen-lg px-4 py-6">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {LINKS.map(({ platform, url }) => (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium text-muted hover:text-primary hover:bg-surface-hover transition-colors"
          >
            {platform}
          </a>
        ))}
      </div>
    </section>
  )
}