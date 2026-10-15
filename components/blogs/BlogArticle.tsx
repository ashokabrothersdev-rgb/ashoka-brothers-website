import Image from "next/image";
import { Fragment } from "react";
import { ScrollRevealText } from "@/components/shared/ScrollRevealText";
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
      <ScrollRevealText>{section.sectionContent}</ScrollRevealText>
      {section.sectionSecondaryContent ? (
        <ScrollRevealText delay={0.12}>
          {section.sectionSecondaryContent}
        </ScrollRevealText>
      ) : null}
    </div>
  );
}

function MiddleImages({ images }: { images: { src: string; alt: string }[] }) {
  if (images.length === 0) return null;

  const paired = images.length > 1;

  return (
    <div
      className={
        paired
          ? "mx-auto mt-12 flex w-full max-w-234 flex-col gap-5 lg:mt-14 lg:w-fit lg:max-w-none lg:flex-row lg:gap-4"
          : "mx-auto mt-12 w-full max-w-234 lg:mt-14"
      }
    >
      {images.map((image) => (
        <figure
          key={image.src}
          className={
            paired
              ? "relative aspect-square w-full overflow-hidden lg:size-115 lg:shrink-0"
              : "relative aspect-3/2 w-full overflow-hidden"
          }
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover object-center"
            sizes={
              paired
                ? "(max-width: 1024px) 100vw, 460px"
                : "(max-width: 1024px) 100vw, 936px"
            }
          />
        </figure>
      ))}
    </div>
  );
}

export function BlogArticle({ blog }: { blog: Blog }) {
  const {
    mainImage,
    mainImageAlt,
    middleImage,
    middleImageAlt,
    middleImage2,
    middleImage2Alt,
    content,
  } = blog;
  const [intro, ...sections] = content;
  const middleImages = [
    middleImage ? { src: middleImage, alt: middleImageAlt } : null,
    middleImage2 ? { src: middleImage2, alt: middleImage2Alt ?? "" } : null,
  ].filter((image): image is { src: string; alt: string } => image !== null);
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
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-x-0 bottom-0 h-[12%] bg-linear-to-t from-[#B99470]/25 to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-360 px-5 pt-16 pb-24 text-center sm:px-10 lg:pt-27.5 lg:pb-28">
        {intro ? (
          <header>
            <div className="mx-auto flex max-w-270 items-center justify-center gap-3 sm:gap-7.5">
              <ScrewMark size={13} className="shrink-0" />
              <ScrollRevealText
                as="h1"
                className="min-w-0 font-canela text-[26px] leading-10 text-balance tracking-[1px] text-[#282828] sm:text-[40px] sm:leading-13 lg:text-[48px] lg:leading-15 lg:tracking-[1.92px]"
              >
                {intro.sectionTitle}
              </ScrollRevealText>
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
              <ScrollRevealText
                as="h2"
                className="font-canela text-[22px] leading-8 text-balance tracking-[0.8px] text-[#282828] sm:text-[30px] sm:leading-11.25 sm:tracking-[1.2px]"
              >
                {section.sectionTitle}
              </ScrollRevealText>
              <ArticleCopy
                section={section}
                className={`${copyClassName} mt-5`}
              />
            </section>
            {middleImages.length > 0 && index === 0 ? (
              <MiddleImages images={middleImages} />
            ) : null}
          </Fragment>
        ))}

        {middleImages.length > 0 && sections.length === 0 ? (
          <MiddleImages images={middleImages} />
        ) : null}
      </div>
    </article>
  );
}
