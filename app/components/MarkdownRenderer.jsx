import React from 'react'
import ReactMarkdown from 'react-markdown'

export default function MarkdownRenderer({ content }) {
  return (
    <div className="container mx-auto max-w-screen-lg px-4 sm:px-6 py-8 sm:py-10 bg-surface border border-border rounded-2xl shadow-card mt-10">
      <ReactMarkdown
        className={[
          'max-w-none prose prose-sm sm:prose-base',
          'prose-headings:text-primary',
          'prose-p:text-muted',
          'prose-li:text-muted',
          'prose-strong:text-primary',
          'prose-a:text-accent hover:prose-a:text-accent-hover',
          'prose-blockquote:text-muted prose-blockquote:border-l-accent',
          'prose-code:text-primary prose-code:bg-bg-soft prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none',
          'prose-pre:bg-bg-soft prose-pre:border prose-pre:border-border',
          'prose-hr:border-border',
        ].join(' ')}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}