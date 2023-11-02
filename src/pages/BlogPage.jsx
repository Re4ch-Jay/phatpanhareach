import {useState, useEffect} from 'react'
import Card from '../components/Card'
import { NavLink } from "react-router-dom"
import db from "../firebase";
import { collection, getDocs } from 'firebase/firestore';

export default function BlogPage() {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
     const getBlogs = async () => {
      try {
        const data = await getDocs(collection(db, "blogs"))
        setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.log(error)
      }
     }
     getBlogs();
  },[]);

  return (
    <div className='container mx-auto max-w-screen-lg px-4 py-5'>
      <div className='grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-5'>
        {blogs.map(blog => (
          <BlogCard title={blog.title} description={blog.description} technologies={blog.technologies} link={blog.id}/>
        ))}
      </div>
    </div>
  )
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