import React from 'react';
import Link from 'next/link';
import { blogs } from '@/data/blog';

async function getData(url) {
  const res = await fetch(url)
  return res.json();
}

export default async function Statistics() {
  const username = 'Re4ch-Jay';

  const gitHubFollowers = await getData(`https://api.github.com/users/${username}/followers`);
  const gitHubRepos = await getData(`https://api.github.com/users/${username}/repos?per_page=100&page=1`);
  const gitHubStars = await getData(`https://api.github-star-counter.workers.dev/user/${username}`);

  const cards = [
    { title: 'GitHub Followers', number: gitHubFollowers.length, link: 'https://github.com/Re4ch-Jay', external: true },
    { title: 'GitHub Repositories', number: gitHubRepos.length, link: 'https://github.com/Re4ch-Jay', external: true },
    { title: 'GitHub Stars', number: gitHubStars.stars, link: 'https://github.com/Re4ch-Jay', external: true },
    { title: 'GitHub Forks', number: gitHubStars.forks, link: 'https://github.com/Re4ch-Jay', external: true },
    { title: 'Blogs', number: blogs.length, link: '/blogs', external: false },
  ]

  return (
    <div className="container mx-auto max-w-screen-lg px-4 py-10">
      <header className="mb-8">
        <span className="text-xs uppercase tracking-[0.18em] font-semibold text-accent">Numbers</span>
        <h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-primary">Statistics</h1>
        <p className="mt-2 text-sm sm:text-base text-muted max-w-2xl">
          Live snapshot of my GitHub presence and writing output.
        </p>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {cards.map((c) => (
          <StatisticCard key={c.title} {...c} />
        ))}
      </div>
    </div>
  )
}

function StatisticCard({ title, number, link, external }) {
  const content = (
    <>
      <p className="text-xs sm:text-sm font-medium text-muted">{title}</p>
      <p className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-primary">
        {Number.isFinite(number) ? number : '—'}
      </p>
    </>
  )

  const className =
    'block rounded-2xl border border-border bg-surface p-5 shadow-card hover:shadow-card-hover hover:bg-surface-hover transition-all'

  return external ? (
    <a href={link} target="_blank" rel="noreferrer noopener" className={className}>
      {content}
    </a>
  ) : (
    <Link href={link} className={className}>
      {content}
    </Link>
  )
}