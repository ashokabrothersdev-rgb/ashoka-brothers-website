import { ValuesCarousel } from "@/components/about/ValuesCarousel";
import { VisionSection } from "@/components/about/VisionSection";
import { AboutSection } from "@/components/shared/AboutSection";
import { HeroSection } from "@/components/shared/HeroSection";
import { aboutPage } from "@/data/about-page.data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has electronic typesetting, remaining essentially unchanged Lorem Ipsum has been the industry's standard dummy.",
};

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
