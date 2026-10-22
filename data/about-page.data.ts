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

export type BioStat = {
  value: string;
  label: string;
};

export type BioMilestone = {
  year: string;
  name: string;
  description: string;
};

export type BioReason = {
  title: string;
  description: string;
};

const visionImage: VisionImage = {
  src: "/images/about/about-1.png",
  alt: "A man in a suit seated at his office desk",
};

const carouselData: AboutCarouselItem[] = [
  {
    src: "/images/about/about-2.webp",
    alt: "Carousel 1",
    title: "Professionalism",
    badge: "CORE VALUES",
    description:
      "We believe in doing things the right way, with clear communication, dependable service and attention to every detail. Professionalism guides how we work and how we build lasting business relationships",
  },
  {
    src: "/images/about/about-3.webp",
    alt: "Carousel 2",
    title: "Customer First",
    badge: "CORE VALUES",
    description:
      "We prioritize customer needs and satisfaction above all else. Our goal is to provide personalized service, build trust, and exceed expectations through every interaction.",
  },
  {
    src: "/images/about/about-4.webp",
    alt: "Carousel 3",
    title: "Quality Focused",
    badge: "CORE VALUES",
    description:
      "Quality is at the heart of every product we offer. From material and finish to performance and consistency, we focus on hardware that delivers a secure hold and dependable results",
  },
  {
    src: "/images/about/about-2.webp",
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

const bio = {
  eyebrow: "Our Story · Since 1975",
  title: "Welcome to OSCAR\u00a0SCREWS",
  tagline: "Crafting Excellence & Precision Fasteners Since 1975",
  intro:
    "At OSCAR SCREWS, we have been a pioneering force and trusted benchmark in the fastener industry for over five decades. Founded in 1975 by the visionary Mr. Ashok Kumar Gupta, our journey began with a humble 1,500 sq. ft. workshop driven by an unyielding dedication to quality, precision, and customer satisfaction.",
  legacyTitle: "Our Legacy of Growth & Engineering Excellence",
  legacy: [
    "Through relentless passion, customer trust, and continuous innovation, we have transformed from our modest origins into a manufacturing powerhouse. Today, OSCAR SCREWS operates across expansive, state-of-the-art facilities spanning over 50,000 sq. ft. of production capacity, equipped with modern machinery and rigorous quality-testing standards.",
    "Our legacy is built on strong relationships—serving a diverse client base ranging from long-standing industry partners to dynamic new enterprises across the globe.",
  ],
  stats: [
    { value: "1975", label: "Founded by Mr. Ashok Kumar Gupta" },
    { value: "50+", label: "Years of industry trust" },
    { value: "50,000+", label: "Sq. ft. of production capacity" },
  ] satisfies BioStat[],
  groupTitle: "Expanding Horizons: The Ashoka Group",
  groupIntro:
    "To further strengthen our manufacturing capabilities and supply chain footprint, our leadership expanded into key sister concerns under the dynamic guidance of Mr. Ashok Kumar Gupta’s sons, Mr. Ankush Gupta and Mr. Atul Gupta.",
  milestones: [
    {
      year: "1975",
      name: "OSCAR SCREWS",
      description:
        "Founded by Mr. Ashok Kumar Gupta in a 1,500 sq. ft. workshop, now over 50,000 sq. ft. of production capacity.",
    },
    {
      year: "2005",
      name: "Ashoka Steel Industries",
      description:
        "Spearheading high-grade raw material processing, wire drawing, and metallurgical excellence.",
    },
    {
      year: "2012",
      name: "Ashoka Sons",
      description:
        "Expanding our distribution networks and specialized fastener solutions to cater to evolving industrial demands.",
    },
  ] satisfies BioMilestone[],
  reasonsTitle: "Why Choose Us?",
  reasons: [
    {
      title: "50+ Years of Industry Trust",
      description: "Decades of specialized manufacturing expertise.",
    },
    {
      title: "Scale & Capacity",
      description:
        "Integrated manufacturing facilities capable of high-volume precision output.",
    },
    {
      title: "Quality Assurance",
      description:
        "Engineered to exact tolerances using premium raw materials and advanced heat-treatment/tempering processes.",
    },
    {
      title: "Customer-Centric Approach",
      description:
        "Tailored solutions, reliable delivery schedules, and competitive commercial terms.",
    },
  ] satisfies BioReason[],
  quote:
    "From a 1,500 sq. ft. workshop to a 50,000 sq. ft. industrial legacy—our commitment to turning raw steel into world-class holding power remains unbroken.",
};

export const aboutPage = {
  title: "About Ashoka Brothers",
  description:
    "Ashoka Brothers is committed to providing dependable hardware solutions that combine quality, precision and lasting performance. With a focused range of screws, bolts, nuts and hooks, we aim to make every fastening requirement simpler, more reliable and built to last.",
  readMoreDescription:
    "Backed by a commitment to consistent quality, we carefully select products that meet the practical demands of everyday applications. From individual requirements to larger projects, our range is designed to offer dependable performance across different needs. We believe in straightforward solutions, reliable products and service you can count on.",
  isVideo: false,
  imageSrcDesktop: "/images/screw-hero.webp",
  imageSrcMobile: "/images/screw-hero-m.webp",
  visionTitle: "Our Vision",
  visionDescription:
    "To be a trusted name in hardware, delivering reliable fastening solutions with consistent quality and lasting performance for every customer, every project, and every requirement",
  visionImage,
  bio,
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
