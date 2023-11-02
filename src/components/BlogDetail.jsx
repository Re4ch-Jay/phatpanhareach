import React from 'react';
import ReactMarkdown from 'react-markdown'
import Comments from './Comments';

export default function BlogDetail() {
    const markdown = 
`
## MarkdownPreview

## Header 2

### Header 3

\`\`\`sql
select * from posts;
\`\`\`
[Link](www.google.com)

Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni blanditiis inventore quo fuga ab nesciunt, iure eius magnam? Aut cupiditate quae molestias ratione labore quaerat atque cumque iure nemo culpa!
`;


  return (
    <div className="container mx-auto max-w-screen-lg px-4 py-5 bg-gray-900 rounded-lg shadow-lg">
        <ReactMarkdown className='max-w-screen-lg prose text-white prose-headings:text-white prose-a:text-white prose-blockquote:text-white prose-strong:text-white'>
            {markdown}
        </ReactMarkdown>
        <Comments/>
    </div> 
  );
}

