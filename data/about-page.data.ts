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
    src: "/images/about-1.png",
    alt: "Vision 1",
  },
  {
    src: "/images/about-1.png",
    alt: "Vision 2",
  },
  {
    src: "/images/about-1.png",
    alt: "Vision 3",
  },
];

const carouselData: AboutCarouselItem[] = [
  {
    src: "/images/about-2.png",
    alt: "Carousel 1",
    title: "Quality Assurance",
    badge: "Quality",
    description: "We ensure that all our products are of the highest quality.",
  },
  {
    src: "/images/about-2.png",
    alt: "Carousel 2",
    title: "Customer Satisfaction",
    badge: "Customer",
    description: "We ensure that all our products are of the highest quality.",
  },
  {
    src: "/images/about-2.png",
    alt: "Carousel 3",
    title: "Customer Satisfaction",
    badge: "Customer",
    description: "We ensure that all our products are of the highest quality.",
  },
  {
    src: "/images/about-2.png",
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
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has electronic typesetting, remaining essentially unchanged Lorem Ipsum has been the industry's standard dummy.",
  isVideo: false,
  imageSrcDesktop: "/images/screw-hero.png",
  imageSrcMobile: "/images/screw-hero-m.png",
  visionTitle: "Our Vision",
  visionDescription:
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
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
