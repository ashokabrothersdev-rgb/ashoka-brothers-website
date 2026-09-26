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
    src: "/images/product-1.png",
    alt: "Gold countersunk screw standing in timber",
    icon: "/icons/screw-100.svg",
    hasInnerBorder: true,
  },
  {
    name: "Coach Screw",
    category: "SS Screw",
    src: "/images/product-2.png",
    alt: "Dark coach screw standing on wood",
    icon: "/icons/screw-100.svg",
    hasInnerBorder: false,
  },
  {
    name: "Drywall Screw",
    category: "Screws",
    src: "/images/product-2.png",
    alt: "Silver drywall screw standing upright",
    icon: "/icons/screw-100.svg",
    hasInnerBorder: true,
  },
  {
    name: "Csk Sds Screw",
    category: "MS Screw",
    src: "/images/product-1.png",
    alt: "Gold countersunk screws lying on timber",
    icon: "/icons/screw-100.svg",
    hasInnerBorder: false,
  },
  {
    name: "Coach Screw",
    category: "SS Screw",
    src: "/images/product-2.png",
    alt: "Silver coach screws lying on a dark surface",
    icon: "/icons/screw-100.svg",
    hasInnerBorder: true,
  },
  {
    name: "Drywall Screw",
    category: "Screws",
    src: "/images/product-1.png",
    alt: "A cluster of drywall screws on wood",
    icon: "/icons/screw-100.svg",
    hasInnerBorder: false,
  },
];

export const productsPage = {
  title: "Products",
  description:
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has electronic typesetting, remaining essentially unchanged Lorem Ipsum has been the industry's standard dummy.",
  isVideo: false,
  imageSrcDesktop: "/images/screw-hero.png",
  imageSrcMobile: "/images/screw-hero-m.png",
};
