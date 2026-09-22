import { AboutSection } from "@/components/shared/AboutSection";
import { HeroSection } from "@/components/shared/HeroSection";
import { productsPage } from "@/lib/products-page.data";

export default function AboutUsPage() {
  return (
    <>
      <HeroSection
        isVideo={productsPage.isVideo}
        imageSrcDesktop={productsPage.imageSrcDesktop}
        imageSrcMobile={productsPage.imageSrcMobile}
        className="md:h-190"
      />
      <AboutSection
        title={productsPage.title}
        description={productsPage.description}
      />
    </>
  );
}
