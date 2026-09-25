import Image from "next/image";
import Link from "next/link";
import { type Blog } from "@/lib/blogs-page.data";

export function BlogCard({ blog }: { blog: Blog }) {
  return (
    <article className="flex h-full flex-col bg-white">
      <div className="relative h-62.5 overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-x-0 bottom-0 bg-[#FAF7F2]/20 px-4 py-2 sm:px-5">
          <span className=" text-[14px] leading-none tracking-[0.14em] text-white uppercase">
            Blog
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-7.5 gap-5 sm:gap-7.5">
        <h3 className="font-canela text-[22px] leading-7 tracking-[0.5px] text-[#282828] sm:text-[30px] sm:leading-8">
          {blog.title}
        </h3>
        <p className="line-clamp-2 font-jost text-[14px] leading-5 text-[#282828] sm:text-[16px] sm:leading-5.5">
          {blog.description}
        </p>

        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3.5">
            <Image
              src={blog.authorImage}
              alt={blog.author}
              width={42}
              height={42}
              className="size-10.5 shrink-0 rounded-full object-cover"
            />
            <p className="truncate text-[14px] leading-4 text-[#505050] sm:text-[16px]">
              {blog.author} <span className="text-[#505050]">|</span>{" "}
              {blog.date}
            </p>
          </div>

          <Link
            href={blog.href}
            aria-label={`Read ${blog.title}`}
            className="flex size-9 shrink-0 items-center justify-center transition-opacity hover:opacity-90"
          >
            <Image
              src="/images/arrow-5.svg"
              alt="Arrow Right"
              width={12}
              height={12}
              className="size-4"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
