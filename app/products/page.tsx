import { ProductGridSection } from "@/components/products/ProductGridSection";
import { AboutSection } from "@/components/shared/AboutSection";
import { ContactSection } from "@/components/shared/ContactSection";
import { HeroSection } from "@/components/shared/HeroSection";
import { productsPage } from "@/data/products-page.data";

export default function ProductsPage() {
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
        buttonText="Explore Products"
      />
      <ProductGridSection />
      <ContactSection />
    </>
  );
}
