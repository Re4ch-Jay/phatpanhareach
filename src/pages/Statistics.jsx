import {useState} from 'react'
import { NavLink } from "react-router-dom"
import Card from '../components/Card'
import React from 'react';
import useFetch from '../hooks/useFetch';

export default function Statistics() {
  const username = 'Re4ch-Jay';
  const [blogCount, setBlogCount] = useState([]);

  const { data: gitHubFollowers } = useFetch(`https://api.github.com/users/${username}/followers`);
  const { data: gitHubRepos } = useFetch(`https://api.github.com/users/${username}/repos?per_page=100&page=1`);
  const { data: gitHubStars } = useFetch(`https://api.github-star-counter.workers.dev/user/${username}`);

  return (
    <div className='container mx-auto max-w-screen-lg px-4 py-5'>
      <div className='grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-5'>
          <StatisticCard title='GitHub Followers' followersCount={gitHubFollowers.length} link={'https://github.com/Re4ch-Jay'} target='_blank'  />
          <StatisticCard title='GitHub Project Repos' followersCount={gitHubRepos.length} link={'https://github.com/Re4ch-Jay'} target='_blank' />
          <StatisticCard title='GitHub Stars' followersCount={gitHubStars.stars} link={'https://github.com/Re4ch-Jay'} target='_blank' />
          <StatisticCard title='GitHub Forks' followersCount={gitHubStars.forks} link={'https://github.com/Re4ch-Jay'} target='_blank' />
      </div>
    </div>
  )
}

function StatisticCard({title, followersCount, link, ...props}) {
  return (
    <NavLink to={link} {...props}>
    <Card className="sm:h-28 md:h-24">
      <>
        <p className="text-base">{title}</p>
        <p className="text-2xl font-bold">{followersCount}</p>
      </>
    </Card>
    </NavLink>
  )
}