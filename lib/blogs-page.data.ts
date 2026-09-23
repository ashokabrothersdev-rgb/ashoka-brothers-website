export interface Blog {
  title: string;
  description: string;
  image: string;
  author: string;
  authorImage: string;
  date: string;
  href: string;
}

const blogs: Blog[] = [
  {
    title: "Screw Technology",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
    image: "/images/product-1.png",
    author: "Chris Martin",
    authorImage: "/images/testimonial-1.png",
    date: "Feb 12, 2025",
    href: "#",
  },
  {
    title: "Installation Guides",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
    image: "/images/product-2.png",
    author: "Chris Martin",
    authorImage: "/images/testimonial-1.png",
    date: "Feb 12, 2025",
    href: "#",
  },
  {
    title: "Application Tips",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
    image: "/images/screw-hero.png",
    author: "Chris Martin",
    authorImage: "/images/testimonial-1.png",
    date: "Feb 12, 2025",
    href: "#",
  },
  {
    title: "Industry News",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
    image: "/images/product-2.png",
    author: "Chris Martin",
    authorImage: "/images/testimonial-1.png",
    date: "Feb 12, 2025",
    href: "#",
  },
  {
    title: "Case Studies",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
    image: "/images/product-1.png",
    author: "Chris Martin",
    authorImage: "/images/testimonial-1.png",
    date: "Feb 12, 2025",
    href: "#",
  },
  {
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
    image: "/images/blog-hero.png",
    author: "Chris Martin",
    authorImage: "/images/testimonial-1.png",
    date: "Feb 12, 2025",
    href: "#",
  },
];

export const blogsPage = {
  title: "Blogs - Ashoka Brothers",
  description:
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has electronic typesetting, remaining essentially unchanged Lorem Ipsum has been the industry's standard dummy.",
  isVideo: false,
  imageSrcDesktop: "/images/blog-hero.png",
  imageSrcMobile: "/images/blog-hero-m.png",
  blogs,
};
