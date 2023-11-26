"use client"

import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import Card from '../components/Card';
import Search from '../components/Search';

export default function BlogList({blogs}) {
    const [searchText, setSearchText] = useState('');
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    
    useEffect(() => {
        const filtered = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredBlogs(filtered);
    }, [searchText, blogs]);

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };  

  return (
    <>
        <Search searchText={searchText} handleSearchChange={handleSearchChange} />
        <div className='grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-5'>
            {filteredBlogs.map((blog) => (
                <BlogCard
                    key={blog.id}
                    title={blog.title}
                    description={blog.description}
                    technologies={blog.technologies}
                    link={`blogs/${blog.id}`}
                />
                ))}
        </div>
    </>
  )
}

function BlogCard({title, description, technologies, link, ...props}) {
    return (
      <Link href={link} {...props}>
      <Card className="sm:h-28 md:h-36">
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
      </Link>
    )
  }