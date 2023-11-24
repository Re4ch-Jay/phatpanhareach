import React from 'react'
import ReactMarkdown from 'react-markdown';

export default function MarkdownRenderer({content}) {
  return (
    <div className="container mx-auto max-w-screen-lg px-4 py-5 bg-gray-900 rounded-lg shadow-lg mt-10">
      <ReactMarkdown className="max-w-none p-10 bg-gray-900 prose prose-headings:text-white prose-p:text-white prose-a:text-white prose-blockquote:text-white prose-figure:text-white prose-li:text-white prose-ol:text-white"> 
        {content}
      </ReactMarkdown>
    </div>
  )
}
