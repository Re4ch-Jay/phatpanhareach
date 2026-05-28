import { defaultImage, homeUrl } from "@/app/util";
import BlogCard from "../BlogCard";
import BlogDetail from "./BlogDetail";
import { blogs } from '@/data/blog';

export async function generateMetadata({ params }, parent) {
  try {
    const matchingBlog = blogs.find(blog => blog.id === params.id);

    const image = matchingBlog.image || defaultImage;

    return {
      title: matchingBlog.title,
      description: matchingBlog.description,
      images: [
        {
          url: image,
          secureUrl: image,
          width: 1200,
          height: 627,
          alt: matchingBlog.title,
        }
      ],
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
        description: matchingBlog.description,
        creator: '@panhareach_phat',
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
    };
  } catch (e) {
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist",
    };
  }
}

export default function BlogDetailPage({ params }) {
  const matchingBlog = blogs.find(blog => blog.id === params.id);
  const image = matchingBlog?.image || '/banner.png';

  const similarBlogs = matchingBlog
    ? blogs.filter((blog) =>
        blog.id !== matchingBlog.id &&
        blog.technologies.some(
          (tech) =>
            matchingBlog.technologies
              .map((matchTech) => matchTech.toLowerCase())
              .includes(tech.toLowerCase())
        )
      )
    : [];

  return (
    <>
      <article className="container mx-auto max-w-screen-lg px-4 sm:px-6 py-8 sm:py-10 mt-10 bg-surface border border-border rounded-2xl shadow-card">
        <div className="flex justify-center items-center">
          <img
            alt={params.id}
            src={image}
            className="w-72 md:w-auto md:h-96 object-contain rounded-xl"
          />
        </div>
        <BlogDetail fileName={params.id} />
      </article>

      <section className="container mx-auto max-w-screen-lg px-4 sm:px-6 mt-12">
        {similarBlogs.length > 0 && (
          <>
            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">Similar reads</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          </>
        )}
      </section>
    </>
  );
}