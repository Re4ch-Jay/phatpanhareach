import { useEffect, useState, useMemo } from 'react';
import Comments from '../components/Comments'; // Import the Comments component
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import db from "../firebase";

export default function BlogDetail() {
  const [blog, setBlog] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getBlog = async () => {
      try {
        const data = await getDoc(doc(db, 'blogs', id));
        setBlog(data.data());
      } catch (error) {
        console.log(error);
      }
    };
    getBlog();
  }, [id]);

  return (
    <div className="container mx-auto max-w-screen-lg px-4 py-5 bg-gray-900 rounded-lg shadow-lg">
      <div className='max-w-screen-lg text-white'>
        <h1 className="text-white text-2xl font-bold">{blog.title}</h1>
        <h4 className="text-lg text-white">{blog.description}</h4>
        <br />
        <p>{blog.content}</p>
      </div>
      {useMemo(() => <Comments />, [])} {/* Memoize the Comments component */}
    </div>
  );
}
