import Card from '../components/Card'
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

  return (
    <div className='container mx-auto max-w-screen-lg px-4 py-5'>
      <div className='grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-5'>
          <StatisticCard title='GitHub Followers' number={gitHubFollowers.length} link={'https://github.com/Re4ch-Jay'} target='_blank'  />
          <StatisticCard title='GitHub Project Repos' number={gitHubRepos.length} link={'https://github.com/Re4ch-Jay'} target='_blank' />
          <StatisticCard title='GitHub Stars' number={gitHubStars.stars} link={'https://github.com/Re4ch-Jay'} target='_blank' />
          <StatisticCard title='GitHub Forks' number={gitHubStars.forks} link={'https://github.com/Re4ch-Jay'} target='_blank' />
          <StatisticCard title='Blogs' number={blogs.length} link={'/blogs'}  />
      </div>
    </div>
  )
}

function StatisticCard({title, number, link, ...props}) {
  return (
    <Link href={link} {...props}>
    <Card className="sm:h-28 md:h-24">
      <>
        <p className="text-base">{title}</p>
        <p className="text-2xl font-bold">{number}</p>
      </>
    </Card>
    </Link>
  )
}