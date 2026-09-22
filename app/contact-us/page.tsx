import { ContactSection } from "@/components/shared/ContactSection";
import { HeroSection } from "@/components/shared/HeroSection";
import { contactPage } from "@/lib/contact-page.data";

export default function ContactUsPage() {
  return (
    <>
      <HeroSection
        isVideo={contactPage.isVideo}
        imageSrcDesktop={contactPage.imageSrcDesktop}
        imageSrcMobile={contactPage.imageSrcMobile}
        className="md:h-190"
      />
      <ContactSection />
    </>
  );
}
