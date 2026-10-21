import { ScrollRevealText } from "@/components/shared/ScrollRevealText";
import { blogs } from "@/data/blogs-page.data";
import { BlogCard } from "./BlogCard";

export function BlogsSection() {
  return (
    <section id="blogs" className="bg-black pt-10 pb-10 lg:pt-14.5 lg:pb-25">
      <div className="mx-auto max-w-381.5 px-5 sm:px-10">
        <ScrollRevealText
          as="h2"
          className="pl-7 font-serif text-[50px] leading-none font-semibold tracking-[5%] text-[#5D5D5D]/50 uppercase sm:text-[64px] lg:text-[150px]"
        >
          Blogs
        </ScrollRevealText>

        <div className="md:-mt-10 -mt-2 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-7.5">
          {blogs.map((blog) => (
            <BlogCard key={blog.title} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
