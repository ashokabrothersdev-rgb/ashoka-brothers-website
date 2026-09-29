import { blogsPage } from "@/data/blogs-page.data";
import { BlogCard } from "./BlogCard";

export function BlogsSection() {
  return (
    <section id="blogs" className="bg-black pt-10 pb-10 lg:pt-14.5 lg:pb-25">
      <div className="mx-auto max-w-381.5 px-5 sm:px-10">
        <h2 className="font-canela pl-7 font-semibold text-[40px] leading-none tracking-[5%] text-[#5D5D5D]/50 uppercase sm:text-[64px] lg:text-[150px]">
          Blogs
        </h2>

        <div className="md:-mt-7.5 -mt-1 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-7.5">
          {blogsPage.blogs.map((blog) => (
            <BlogCard key={blog.title} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
