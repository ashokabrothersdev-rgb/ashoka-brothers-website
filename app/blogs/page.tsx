import { BlogsSection } from "@/components/blogs/BlogsSection";
import { AboutSection } from "@/components/shared/AboutSection";
import { HeroSection } from "@/components/shared/HeroSection";
import { blogsPage } from "@/data/blogs-page.data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has electronic typesetting, remaining essentially unchanged Lorem Ipsum has been the industry's standard dummy.",
};

export default function BlogsPage() {
  return (
    <>
      <HeroSection
        isVideo={blogsPage.isVideo}
        imageSrcDesktop={blogsPage.imageSrcDesktop}
        imageSrcMobile={blogsPage.imageSrcMobile}
        className="md:h-190"
      />
      <AboutSection
        title={blogsPage.title}
        description={blogsPage.description}
      />
      <BlogsSection />
    </>
  );
}
