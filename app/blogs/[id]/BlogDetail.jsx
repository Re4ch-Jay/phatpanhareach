"use client"

import React, { useEffect, useState, useMemo } from 'react';
import Comments from '@/app/components/Comments';
import MarkdownRenderer from '@/app/components/MarkdownRenderer';


export default function BlogDetail({fileName}) {
    const markdownFilePath = `/markdown/${fileName}.md`;
  
    const fetchMarkdownContent = async () => {
      const response = await fetch(markdownFilePath);
      return response.text();
    };
  
    const [markdownContent, setMarkdownContent] = useState('');
  
    useEffect(() => {
      fetchMarkdownContent().then(setMarkdownContent);
    }, [markdownFilePath]);

  return (
    <>
        <div className='max-w-screen-lg text-white'>
          <MarkdownRenderer content={markdownContent} />
        </div>
        {useMemo(() => <Comments />, [])} {/* Memoize the Comments component */}
    </>
  )
}
