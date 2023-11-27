"use client"

import React, { useState, useEffect } from 'react';

import Search from '../components/Search';
import BlogCard from './BlogCard';

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
