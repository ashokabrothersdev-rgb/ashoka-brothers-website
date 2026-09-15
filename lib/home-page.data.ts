export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Lorem delivered beyond our expectations. The quality of construction and attention to detail is remarkable. Our family is extremely happy with our new home. Lorem beyond",
    name: "Rakesh Roshan",
    role: "Lorem Ipsum",
  },
  {
    quote:
      "Lorem delivered beyond our expectations. The quality of construction and attention to detail is remarkable. Our family is extremely happy with our new home. Lorem beyond",
    name: "Rakesh Roshan",
    role: "Lorem Ipsum",
  },
  {
    quote:
      "Lorem delivered beyond our expectations. The quality of construction and attention to detail is remarkable. Our family is extremely happy with our new home. Lorem beyond",
    name: "Rakesh Roshan",
    role: "Lorem Ipsum",
  },
];

export const products = [
  {
    src: "/images/product-2.png",
    alt: "Gold wood screw driven into timber",
    width: 1536,
    height: 1268,
  },
  {
    src: "/images/product-1.png",
    alt: "Silver self-tapping screw standing upright",
    width: 1200,
    height: 1000,
  },
];

export const stats = [
  { value: 150, suffix: "%", label: "Return on Investment" },
  { value: 90, suffix: "%", label: "Repeat Clients" },
  { value: 600, suffix: "K", label: "Lives Positively Impacted" },
];

export const productCatalog = [
  "Flange Head self driving screws",
  "CSK Head self Driving screws",
  "pan head self driving screws",
  "truss head self drilling screws",
  "SS CSK head sheet metal screw",
  "SS star head sheet metal scew",
  "SS shaved head wood screw",
  "chip board screw lorem ipsum",
  "CSK head sheet metal screw",
  "Shaved wood head screws",
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
      first: "Our Bolts",
      second: "Lock it Tight",
    },
    description: {
      first: "Precision Fit.",
      second: "Solid Grip.",
      third: "Built Tough.",
    },
  },
  {
    src: "/icons/hook.svg",
    width: 133,
    height: 196,
    alt: "Hooks",
    className: "w-[108px] sm:w-[122px] lg:w-[133px]",
    title: {
      first: "Our Hooks",
      second: "Hang it Strong",
    },
    description: {
      first: "Heavy Duty.",
      second: "Sure Catch.",
      third: "Made to Last.",
    },
  },
];
