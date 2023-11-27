import React from 'react';
import { blogs } from '@/data/blog';
import BlogList from './BlogList';

export const metadata  = {
  title: "Blogs",
  description: "I'm an enthusiastic learner who thrives on exploring novel technologies.",
  openGraph: {
    title: "Blogs",
    description: "I'm an enthusiastic learner who thrives on exploring novel technologies.",
    images: {
      url: '/banner.png',
      alt: 'Phat Panhareach',
    }
  },
  twitter: {
    card: 'summary_large_image',
    site: '@panhareach_phat',
    title: "Blogs",
    description: "I'm an enthusiastic learner who thrives on exploring novel technologies.",
    creator: '@panhareach_phat',
    images: {
      url: '/banner.png',
      alt: 'Phat Panhareach',
    }
  },
}

export default function Blog() {

  return (
    <div className='container mx-auto max-w-screen-lg px-4 py-5'>
      <BlogList blogs={blogs}/>
    </div>
  );
}
