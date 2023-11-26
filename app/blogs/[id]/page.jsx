import BlogDetail from "./BlogDetail";
import { blogs } from "@/app/util/blog";


export async function generateMetadata({ params }, parent) {
 
  const matchingBlog = blogs.find(blog => blog.id === params.id);

  return {
    title: matchingBlog.title,
    description: matchingBlog.description,
    images: matchingBlog.image === "" ? './banner.png' : matchingBlog.image,
    openGraph: {
      title: matchingBlog.title,
      description: matchingBlog.description,
      images: matchingBlog.image === "" ? './banner.png' : matchingBlog.image,
    },
  }
}
 
export default function BlogDetailPage({params}) {
  
  return (
    <>
    
      <div className="container mx-auto max-w-screen-lg px-4 py-5 bg-gray-900 rounded-lg shadow-lg mt-10">
        <BlogDetail fileName={params.id}/>
      </div>
    </>
  );
}
