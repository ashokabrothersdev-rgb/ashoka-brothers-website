const destination = "Loha Mandi, Near Tunda Talab, Amritsar, Punjab 143001";

export const locationPage = {
  eyebrow: "Location",
  title: "Visit Our Office",
  intro:
    "Find us in Loha Mandi, near Tunda Talab, Amritsar. Visit to discuss your fastener requirements and bulk orders in person, or call us before you come.",
  image: {
    src: "/images/office-front.webp",
    alt: "The Ashoka Brothers office, with the OSCAR X sign on its front wall",
  },
  directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`,
};
