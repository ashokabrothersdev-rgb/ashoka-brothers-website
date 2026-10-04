import { BlogsSection } from "@/components/blogs/BlogsSection";
import { AboutSection } from "@/components/shared/AboutSection";
import { HeroSection } from "@/components/shared/HeroSection";
import { blogsPage } from "@/data/blogs-page.data";

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
        buttonHref="#blogs"
      />
      <BlogsSection />
    </>
  );
}
