import { AboutSection } from "@/components/home/AboutSection";
import { ContactSection } from "@/components/home/ContactSection";
import { DriveItHomeSection } from "@/components/home/DriveItHomeSection";
import { FactorySection } from "@/components/home/FactorySection";
import { HeroSection } from "@/components/home/HeroSection";
import { OurProductsSection } from "@/components/home/OurProductsSection";
import { ProductCatalogSection } from "@/components/home/ProductCatalogSection";
import { RangeOfProductsSection } from "@/components/home/RangeOfProductsSection";
import { StatsSection } from "@/components/home/StatsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { Footer } from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <DriveItHomeSection />
        <AboutSection />
        <FactorySection />
        <OurProductsSection />
        <RangeOfProductsSection />
        <StatsSection />
        <ProductCatalogSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
