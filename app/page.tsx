import { AboutSection } from "@/components/shared/AboutSection";
import { ContactSection } from "@/components/shared/ContactSection";
import { DriveItHomeSection } from "@/components/home/DriveItHomeSection";
import { FactorySection } from "@/components/home/FactorySection";
import { HeroSection } from "@/components/shared/HeroSection";
import { OurProductsSection } from "@/components/home/OurProductsSection";
import { ProductCatalogSection } from "@/components/home/ProductCatalogSection";
import { RangeOfProductsSection } from "@/components/home/RangeOfProductsSection";
import { StatsSection } from "@/components/home/StatsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { aboutSection, heroSection } from "@/lib/home-page.data";

export default function Home() {
  return (
    <>
      <HeroSection
        isVideo={heroSection.isVideo}
        videoSrc={heroSection.videoSrc}
        isChat={true}
      />
      <DriveItHomeSection />
      <AboutSection
        title={aboutSection.title}
        description={aboutSection.description}
      />
      <FactorySection />
      <OurProductsSection />
      <RangeOfProductsSection />
      <StatsSection />
      <ProductCatalogSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
