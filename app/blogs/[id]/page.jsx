import { defaultImage, homeUrl } from "@/app/util";
import BlogCard from "../BlogCard";
import BlogDetail from "./BlogDetail";
import { blogs } from '@/data/blog';

export async function generateMetadata({ params }, parent) {
  const matchingBlog = blogs.find(blog => blog.id === params.id);

  const image = matchingBlog.image || defaultImage;

  return {
    title: matchingBlog.title,
    description: matchingBlog.description,
    images: image,
    url: `${homeUrl}/blogs/${matchingBlog.id}`,
    alternates: {
      canonical: `${homeUrl}/blogs/${matchingBlog.id}`,
    },
    openGraph: {
      title: matchingBlog.title,
      description: matchingBlog.description,
      url: `${homeUrl}/blogs/${matchingBlog.id}`,
      type: "website",
      alternates: {
        canonical: `${homeUrl}/blogs/${matchingBlog.id}`,
      },
      images: [
        {
          url: image,
          secureUrl: image,
          width: 1200,
          height: 627,
          alt: matchingBlog.title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@panhareach_phat',
      title: matchingBlog.title,
      description: matchingBlog.description ,
      creator: '@panhareach_phat',
      images: {
        url: image,
        alt: matchingBlog.title,
      }
    },
  };
}

export default function BlogDetailPage({ params }) {
  const matchingBlog = blogs.find(blog => blog.id === params.id);
  const image = matchingBlog.image || '/banner.png';
  
  const similarBlogs = blogs.filter((blog) =>
    blog.id !== matchingBlog.id && // Exclude the blog with the matching ID
    blog.technologies.some(
      (tech) =>
        matchingBlog.technologies
          .map((matchTech) => matchTech.toLowerCase())
          .includes(tech.toLowerCase())
    )
  );

  return (
    <>
      <div className="container mx-auto max-w-screen-lg px-4 py-5 bg-gray-900 rounded-lg shadow-lg mt-10">
        <div className="flex justify-center items-center">
          <img alt={params.id} src={image} className="w-80 md:w-auto md:h-96"  />
        </div>
        <BlogDetail fileName={params.id} />
      </div>
      <div className="container mx-auto max-w-screen-lg mt-10 px-4 md:px-0">
        {similarBlogs.length !== 0 && <p className="text-white text-2xl font-bold">Similar Blog</p>}
          <div className='grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-5 mt-5'>
          {similarBlogs.map(blog => (
            
                <BlogCard
                  key={blog.id}
                  title={blog.title}
                  description={blog.description}
                  technologies={blog.technologies}
                  link={`${blog.id}`}
                />
            
            ))}
          </div>
      </div>
    </>
  );
}
