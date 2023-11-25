import { useEffect, useState, useMemo } from 'react';
import Comments from '../components/Comments';
import { useParams } from 'react-router-dom';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { blogs } from '../blog';
import { Helmet } from 'react-helmet';

export default function BlogDetail() {
  const { fileName } = useParams();
  const markdownFilePath = `/markdown/${fileName}.md`;

  const fetchMarkdownContent = async () => {
    const response = await fetch(markdownFilePath);
    return response.text();
  };

  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    fetchMarkdownContent().then(setMarkdownContent);
  }, [markdownFilePath]);

  const matchingBlog = blogs.find(blog => blog.id === fileName);

  return (
    <>
     {matchingBlog && (
        <Helmet>
          <title>{matchingBlog.title}</title>
          <meta property="og:description" content={matchingBlog.description} />
          <meta property="og:image" content={matchingBlog.image === "" ? "/banner.png" : matchingBlog.image} />
        </Helmet>
      )}
     
      <div className="container mx-auto max-w-screen-lg px-4 py-5 bg-gray-900 rounded-lg shadow-lg mt-10">
        <div className='max-w-screen-lg text-white'>
          <MarkdownRenderer content={markdownContent} />
        </div>
        {useMemo(() => <Comments />, [])} {/* Memoize the Comments component */}
      </div>
    </>
  );
}
