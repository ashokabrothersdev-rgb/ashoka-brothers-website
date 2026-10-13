import Image from "next/image";
import { Fragment } from "react";
import { ScrewMark } from "@/components/shared/ScrewMark";
import type { Blog } from "@/data/blogs-page.data";

type Section = Blog["content"][number];

function ArticleCopy({
  section,
  className,
}: {
  section: Section;
  className: string;
}) {
  return (
    <div className={className}>
      <p>{section.sectionContent}</p>
      {section.sectionSecondaryContent ? (
        <p>{section.sectionSecondaryContent}</p>
      ) : null}
    </div>
  );
}

function MiddleImage({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="relative mx-auto mt-12 aspect-3/2 w-full max-w-234 overflow-hidden lg:mt-14">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-center"
        sizes="(max-width: 1024px) 100vw, 936px"
      />
    </figure>
  );
}

export function BlogArticle({ blog }: { blog: Blog }) {
  const { mainImage, mainImageAlt, middleImage, middleImageAlt, content } =
    blog;
  const [intro, ...sections] = content;
  const copyClassName =
    "mx-auto max-w-234 space-y-2 font-canela text-[15px] leading-7 text-[#282828] sm:text-[17px] sm:leading-8.5";

  return (
    <article>
      <div className="w-full h-175 relative">
        <Image
          src={mainImage}
          alt={mainImageAlt}
          width={1000}
          height={700}
          priority
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/40 to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-360 px-5 pt-16 pb-24 text-center sm:px-10 lg:pt-27.5 lg:pb-28">
        {intro ? (
          <header>
            <div className="mx-auto flex max-w-270 items-center justify-center gap-3 sm:gap-7.5">
              <ScrewMark size={13} className="shrink-0" />
              <h1 className="min-w-0 font-canela text-[26px] text-balance leading-10 tracking-[1px] text-[#282828] sm:text-[40px] sm:leading-13 lg:text-[48px] lg:leading-15 lg:tracking-[1.92px]">
                {intro.sectionTitle}
              </h1>
              <ScrewMark size={13} className="shrink-0" />
            </div>
            <ArticleCopy
              section={intro}
              className={`${copyClassName} mt-7.5`}
            />
          </header>
        ) : null}

        {sections.map((section, index) => (
          <Fragment key={`${section.sectionTitle}-${index}`}>
            <section className="mt-8 lg:mt-12.5">
              <h2 className="font-canela text-[22px] text-balance leading-8 tracking-[0.8px] text-[#282828] sm:text-[30px] sm:leading-11.25 sm:tracking-[1.2px]">
                {section.sectionTitle}
              </h2>
              <ArticleCopy
                section={section}
                className={`${copyClassName} mt-5`}
              />
            </section>
            {middleImage && index === 0 ? (
              <MiddleImage src={middleImage} alt={middleImageAlt} />
            ) : null}
          </Fragment>
        ))}

        {middleImage && sections.length === 0 ? (
          <MiddleImage src={middleImage} alt={middleImageAlt} />
        ) : null}
      </div>
    </article>
  );
}
