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
      "Understanding Screw Technology - Explore the basics of screw design, thread types and materials..",
    image: "/images/products/product-1.png",
    author: "Ashoka Brothers",
    authorImage: "/images/testimonial-1.png",
    date: "Feb 12, 2025",
    href: "#",
  },
  {
    title: "Installation Guides",
    description:
      "A Guide to Better Installation - Learn the essential practices for selecting, positioning and installing..",
    image: "/images/products/product-2.png",
    author: "Ashoka Brothers",
    authorImage: "/images/testimonial-1.png",
    date: "Feb 12, 2025",
    href: "#",
  },
  {
    title: "Application Tips",
    description:
      "Choosing the Right Fastener for the Job - Different materials and applications demand different..",
    image: "/images/screw-hero.png",
    author: "Ashoka Brothers",
    authorImage: "/images/testimonial-1.png",
    date: "Feb 12, 2025",
    href: "#",
  },
  {
    title: "Industry News",
    description:
      "What’s Changing in the Hardware Industry - Stay updated on emerging trends, evolving fastening..",
    image: "/images/products/product-2.png",
    author: "Ashoka Brothers",
    authorImage: "/images/testimonial-1.png",
    date: "Feb 12, 2025",
    href: "#",
  },
  {
    title: "Case Studies",
    description:
      "When the Right Fastener Matters - Take a closer look at real-world applications and discover how the right..",
    image: "/images/products/product-1.png",
    author: "Ashoka Brothers",
    authorImage: "/images/testimonial-1.png",
    date: "Feb 12, 2025",
    href: "#",
  },
  {
    title: "Product Insights",
    description:
      "Understanding Hardware Before You Buy - A closer look at screws, bolts, nuts and hooks, helping you..",
    image: "/images/blog-hero.png",
    author: "Ashoka Brothers",
    authorImage: "/images/testimonial-1.png",
    date: "Feb 12, 2025",
    href: "#",
  },
];

export const blogsPage = {
  title: "Blogs - Ashoka Brothers",
  description:
    "Explore practical insights, product knowledge and industry updates from Ashoka Brothers. From choosing the right fastener to understanding applications and installation, discover useful information to make every project more efficient and reliable ",
  imageSrcDesktop: "/images/blog-hero.png",
  imageSrcMobile: "/images/blog-hero-m.png",
  isVideo: false,
  blogs,
};
