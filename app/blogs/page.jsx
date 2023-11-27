import React from 'react';
import { blogs } from '@/data/blog';
import BlogList from './BlogList';
import { defaultImage, homeUrl } from '../util';

export const metadata  = {
  title: "Blogs",
  description: "I'm an enthusiastic learner who thrives on exploring novel technologies.",
  url: `${homeUrl}/blogs`,
  canonical: `${homeUrl}/blogs`,
  openGraph: {
    title: "Blogs",
    description: "I'm an enthusiastic learner who thrives on exploring novel technologies.",
    url: `${homeUrl}/blogs`,
    canonical: `${homeUrl}/blogs`,
    images: {
      url: defaultImage,
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
      url: defaultImage,
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
