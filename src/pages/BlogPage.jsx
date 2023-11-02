import React from 'react'
import Card from '../components/Card'
import { NavLink } from "react-router-dom"

export default function BlogPage() {
  return (
    <div className='container mx-auto max-w-screen-lg px-4 py-5'>
      <div className='grid grid-cols-2 justify-between items-center gap-5'>
       <BlogCard title={'First Blog'} description={'First Blog'} technologies={['JS']} link={'1'}/>
       <BlogCard title={'First Blog'} description={'First Blog'} technologies={['JS']} link={'1'}/>
       <BlogCard title={'First Blog'} description={'First Blog'} technologies={['JS']} link={'1'}/>
       <BlogCard title={'First Blog'} description={'First Blog'} technologies={['JS']} link={'1'}/>
      </div>
    </div>
  )
}

function BlogCard({title, description, technologies, link}) {
  return (
    <NavLink to={link}>
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
    </NavLink>
  )
}