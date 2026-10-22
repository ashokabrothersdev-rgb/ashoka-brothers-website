import type { Metadata } from "next";
import { MapSection } from "@/components/contact/MapSection";
import { LocationDetails } from "@/components/location/LocationDetails";
import { LocationHero } from "@/components/location/LocationHero";

export const metadata: Metadata = {
  title: "Location",
  description:
    "Visit Ashoka Brothers at 300/6, Loha Mandi, Near Tunda Talab, Amritsar. Get directions, phone numbers and email.",
};

export default function LocationPage() {
  return (
    <>
      <LocationHero />
      <LocationDetails />
      <MapSection />
    </>
  );
}
