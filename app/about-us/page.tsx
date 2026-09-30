import { ValuesCarousel } from "@/components/about/ValuesCarousel";
import { VisionSection } from "@/components/about/VisionSection";
import { AboutSection } from "@/components/shared/AboutSection";
import { HeroSection } from "@/components/shared/HeroSection";
import { aboutPage } from "@/data/about-page.data";

export default function AboutUsPage() {
  return (
    <>
      <HeroSection
        isVideo={aboutPage.isVideo}
        imageSrcDesktop={aboutPage.imageSrcDesktop}
        imageSrcMobile={aboutPage.imageSrcMobile}
        className="md:h-190"
      />
      <AboutSection
        title={aboutPage.title}
        description={aboutPage.description}
      />
      <VisionSection
        title={aboutPage.visionTitle}
        description={aboutPage.visionDescription}
        images={aboutPage.visionImages}
      />
      <ValuesCarousel items={aboutPage.carouselData} />
    </>
  );
}
