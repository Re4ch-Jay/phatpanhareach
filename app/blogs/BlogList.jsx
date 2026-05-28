"use client"

import React, { useState, useEffect } from 'react';
import Search from '../components/Search';
import BlogCard from './BlogCard';

export default function BlogList({ blogs }) {
  const [searchText, setSearchText] = useState('');
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);

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
      <header className="mb-2">
        <span className="text-xs uppercase tracking-[0.18em] font-semibold text-accent">Writing</span>
        <h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-primary">Blogs</h1>
        <p className="mt-2 text-sm sm:text-base text-muted max-w-2xl">
          Notes on programming, life, and whatever else I'm thinking about.
        </p>
      </header>
      <Search searchText={searchText} handleSearchChange={handleSearchChange} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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