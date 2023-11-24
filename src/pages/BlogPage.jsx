import { useState, useEffect } from 'react';
import Card from '../components/Card';
import { NavLink } from 'react-router-dom';
import Search from '../components/Search';
import React from 'react';
import { blogs } from '../blog';

export default function BlogPage() {
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
    <div className='container mx-auto max-w-screen-lg px-4 py-5'>
      <Search searchText={searchText} handleSearchChange={handleSearchChange} />
      <div className='grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-5'>
        {filteredBlogs.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            description={blog.description}
            technologies={blog.technologies}
            link={`${blog.id}`}
          />
        ))}
      </div>
    </div>
  );
}

function BlogCard({title, description, technologies, link, ...props}) {
  return (
    <NavLink to={link} {...props}>
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
    </NavLink>
  )
}