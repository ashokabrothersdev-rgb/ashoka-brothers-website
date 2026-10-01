export type VisionImage = {
  src: string;
  alt: string;
};

export type AboutCarouselItem = {
  src: string;
  alt: string;
  title: string;
  badge: string;
  description: string;
};

const visionImages: VisionImage[] = [
  {
    src: "/images/about/about-1.png",
    alt: "Vision 1",
  },
  {
    src: "/images/about/about-1.png",
    alt: "Vision 2",
  },
  {
    src: "/images/about/about-1.png",
    alt: "Vision 3",
  },
];

const carouselData: AboutCarouselItem[] = [
  {
    src: "/images/about/about-2.png",
    alt: "Carousel 1",
    title: "Professionalism",
    badge: "CORE VALUES",
    description: "We believe in doing things the right way, with clear communication, dependable service and attention to every detail. Professionalism guides how we work and how we build lasting business relationships",
  },
  {
    src: "/images/about/about-3.png",
    alt: "Carousel 2",
    title: "Customer First",
    badge: "CORE VALUES",
    description: "We prioritize customer needs and satisfaction above all else. Our goal is to provide personalized service, build trust, and exceed expectations through every interaction.",
  },
  {
    src: "/images/about/about-4.png",
    alt: "Carousel 3",
    title: "Quality Focused",
    badge: "CORE VALUES",
    description: "Quality is at the heart of every product we offer. From material and finish to performance and consistency, we focus on hardware that delivers a secure hold and dependable results",
  },
  {
    src: "/images/about/about-2.png",
    alt: "Carousel 4",
    title: "Timely Delivery",
    badge: "Delivery",
    description: "We ensure that all our products are of the highest quality.",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;
const COLLAPSED_WIDTH = 374;
const EXPANDED_WIDTH = 758;
const CARD_GAP = 10;
const DESKTOP_PER_VIEW = 4;
const DESKTOP_FRAME =
  COLLAPSED_WIDTH * DESKTOP_PER_VIEW + CARD_GAP * (DESKTOP_PER_VIEW - 1);
const CARD_HEIGHT = 700;
const MOBILE_CARD_HEIGHT = 560;

export const aboutPage = {
  title: "About Ashoka Brothers",
  description:
    "Ashoka Brothers is committed to providing dependable hardware solutions that combine quality, precision and lasting performance. With a focused range of screws, bolts, nuts and hooks, we aim to make every fastening requirement simpler, more reliable and built to last",
  isVideo: false,
  imageSrcDesktop: "/images/screw-hero.webp",
  imageSrcMobile: "/images/screw-hero-m.webp",
  visionTitle: "Our Vision",
  visionDescription:
    "To be a trusted name in hardware, delivering reliable fastening solutions with consistent quality and lasting performance for every customer, every project, and every requirement",
  visionImages,
  carouselData,
  EASE,
  COLLAPSED_WIDTH,
  EXPANDED_WIDTH,
  CARD_GAP,
  DESKTOP_PER_VIEW,
  DESKTOP_FRAME,
  CARD_HEIGHT,
  MOBILE_CARD_HEIGHT,
};
