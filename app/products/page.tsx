import { ProductGridSection } from "@/components/products/ProductGridSection";
import { AboutSection } from "@/components/shared/AboutSection";
import { ContactSection } from "@/components/shared/ContactSection";
import { HeroSection } from "@/components/shared/HeroSection";
import { productsPage } from "@/lib/products-page.data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has electronic typesetting, remaining essentially unchanged Lorem Ipsum has been the industry's standard dummy.",
};

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
      />
      <ProductGridSection />
      <ContactSection />
    </>
  );
}
