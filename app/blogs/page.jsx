import React from 'react';
import { blogs } from '../util/blog';
import BlogList from './BlogList';

export const metadata  = {
  title: "Blogs",
  description: "I'm an enthusiastic learner who thrives on exploring novel technologies.",
  openGraph: {
    title: "Blogs",
    description: "I'm an enthusiastic learner who thrives on exploring novel technologies.",
  }
}

export default function Blog() {

  return (
    <div className='container mx-auto max-w-screen-lg px-4 py-5'>
      <BlogList blogs={blogs}/>
    </div>
  );
}
