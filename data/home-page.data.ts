export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "The product quality has been consistently good, with the right finish and reliable performance. Ashoka Brothers - a dependable choice for our regular hardware requirements",
    name: "Rajiv Mehta",
    role: "Business Owner",
  },
  {
    quote:
      "We’ve been sourcing our fastening requirements from Ashoka Brothers and have always found the products reliable. Good quality, good range, and consistent service",
    name: "Amit Sharma",
    role: "Contractor",
  },
  {
    quote:
      "What stands out is the consistency in quality. The screws and fasteners have a good finish and hold well across different applications. Always a reliable experience",
    name: "Vikram Patel",
    role: "Hardware Dealer",
  },
  {
    quote:
      "Ashoka Brothers offers a good range of hardware for our day-to-day requirements. The products are dependable, and their service makes the overall experience smooth",
    name: "Suresh Kumar",
    role: "Business Owner",
  },
];

export const products = [
  {
    src: "/images/products/product-2.png",
    alt: "Gold wood screw driven into timber",
    width: 1536,
    height: 1268,
  },
  {
    src: "/images/products/product-1.png",
    alt: "Silver self-tapping screw standing upright",
    width: 1200,
    height: 1000,
  },
];

export const stats = [
  { value: 25, suffix: "+", label: "Product Varities" },
  { value: 4, suffix: "", label: "Core Categories" },
  { value: 100, suffix: "%", label: "Focus on Quality" },
];

export const productCatalog = [
  "Carraigebolt",
  "Chipboard Screw",
  "CSK Philips Self Tapping Screw",
  "CSK Slotted Self Tapping Screw",
  "Golden Polish Machine Screw",
  "Pure Brass Wood Screw",
  "Philips Head Wood Screw",
  "Drywall Screw",
];

export const categories = [
  { src: "/icons/screws.svg", label: "Screws", width: 100, height: 100 },
  { src: "/icons/bolts.svg", label: "Bolts", width: 100, height: 100 },
  { src: "/icons/nuts.svg", label: "Nuts", width: 100, height: 100 },
  { src: "/icons/hooks.svg", label: "Hooks", width: 100, height: 100 },
];

export type DriveIcon = {
  src: string;
  width: number;
  height: number;
  alt: string;
  className: string;
  title: {
    first: string;
    second: string;
  };
  description: {
    first: string;
    second: string;
    third: string;
  };
};

export const icons: DriveIcon[] = [
  {
    src: "/icons/screw.svg",
    width: 159,
    height: 196,
    alt: "Screws",
    className: "w-[120px] sm:w-[140px] lg:w-[159px]",
    title: {
      first: "Our Screws",
      second: "Drive it Home",
    },
    description: {
      first: "Clean Threads.",
      second: "Firm Hold.",
      third: "Made to Last.",
    },
  },
  {
    src: "/icons/nut-bolt.svg",
    width: 126,
    height: 179,
    alt: "Nuts and bolts",
    className: "w-[100px] sm:w-[118px] lg:w-[126px]",
    title: {
      first: "Bolts and Nuts",
      second: "Hold it Together",
    },
    description: {
      first: "Precision Threads.",
      second: "Solid Grip.",
      third: "Build to stay.",
    },
  },
  {
    src: "/icons/hook.svg",
    width: 133,
    height: 196,
    alt: "Hooks",
    className: "w-[108px] sm:w-[122px] lg:w-[133px]",
    title: {
      first: "Premium Hooks",
      second: "Hang it Right",
    },
    description: {
      first: "Strong Hold.",
      second: "Simple Form.",
      third: "Ready for Work.",
    },
  },
];

export const aboutSection = {
  title: "Ashoka Brothers",
  description:
    "The right hardware makes all the difference. Ashoka Brothers brings together a dependable range of screws, bolts, nuts, hooks and fastening solutions built for everyday applications. From a clean finish to a firm hold, we focus on hardware that performs when it matters. With a focus on quality, consistency and reliable performance, we provide fastening solutions made to meet the demands of every project, big or small.",
};

export const heroSection = {
  isVideo: true,
  videoSrc: "/videos/hero-video.mp4",
};
