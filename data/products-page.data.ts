export type ProductCard = {
  name: string;
  category: string;
  src: string;
  alt: string;
  icon: string;
  hasInnerBorder: boolean;
};

export const productCards: ProductCard[] = [
  {
    name: "Csk Sds Screw",
    category: "MS Screw",
    src: "/images/products/product-1.png",
    alt: "Gold countersunk screw standing in timber",
    icon: "/icons/screw-100.svg",
    hasInnerBorder: true,
  },
  {
    name: "Coach Screw",
    category: "SS Screw",
    src: "/images/products/product-3.jpg",
    alt: "Dark coach screw standing on wood",
    icon: "/icons/screw-100.svg",
    hasInnerBorder: false,
  },
  {
    name: "Drywall Screw",
    category: "Screws",
    src: "/images/products/product-2.png",
    alt: "Silver drywall screw standing upright",
    icon: "/icons/screw-100.svg",
    hasInnerBorder: true,
  },
  {
    name: "Csk Sds Screw",
    category: "MS Screw",
    src: "/images/products/product-4.png",
    alt: "Gold countersunk screws lying on timber",
    icon: "/icons/screw-100.svg",
    hasInnerBorder: true,
  },
  {
    name: "Coach Screw",
    category: "SS Screw",
    src: "/images/products/product-5.png",
    alt: "Silver coach screws lying on a dark surface",
    icon: "/icons/screw-100.svg",
    hasInnerBorder: false,
  },
  {
    name: "Drywall Screw",
    category: "Screws",
    src: "/images/products/product-6.png",
    alt: "A cluster of drywall screws on wood",
    icon: "/icons/screw-100.svg",
    hasInnerBorder: true,
  },
  {
    name: "Csk Slotted Self Tapping",
    category: "Screws",
    src: "/images/products/product-7.png",
    alt: "A cluster of csk slotted self tapping screws on wood",
    icon: "/icons/screw-100.svg",
    hasInnerBorder: false,
  },
  {
    name: "Wood Screw",
    category: "Screws",
    src: "/images/products/product-8.png",
    alt: "A cluster of wood screws on wood",
    icon: "/icons/screw-100.svg",
    hasInnerBorder: true,
  },
  {
    name: "Drywall Screw",
    category: "Screws",
    src: "/images/products/product-9.png",
    alt: "A cluster of drywall screws on wood",
    icon: "/icons/screw-100.svg",
    hasInnerBorder: false,
  },
];

export const productsPage = {
  title: "Our Products",
  description:
    "Explore our range of quality screws, bolts, nuts and hooks, designed to deliver a secure fit, dependable performance and lasting reliability across a wide range of applications. From everyday fastening needs to demanding projects, our products are built to deliver a firm and reliable hold.",
  isVideo: false,
  imageSrcDesktop: "/images/screw-hero.png",
  imageSrcMobile: "/images/screw-hero-m.png",
};
