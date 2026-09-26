import { ContactInfoSection } from "@/components/contact/ContactInfoSection";
import { ContactSection } from "@/components/shared/ContactSection";
import { HeroSection } from "@/components/shared/HeroSection";
import { contactPage } from "@/data/contact-page.data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has electronic typesetting, remaining essentially unchanged Lorem Ipsum has been the industry's standard dummy.",
};

export default function ContactUsPage() {
  return (
    <>
      <HeroSection
        isVideo={contactPage.isVideo}
        imageSrcDesktop={contactPage.imageSrcDesktop}
        imageSrcMobile={contactPage.imageSrcMobile}
        className="md:h-190"
      />
      <ContactInfoSection />
      <ContactSection />
    </>
  );
}
