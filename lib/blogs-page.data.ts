interface Blog {
  title: string;
  description: string;
  image: string;
  author: string;
  date: string;
  slug: string;
}

const blogs: Blog[] = [
  {
    title: "Blog 1",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has electronic typesetting, remaining essentially unchanged Lorem Ipsum has been the industry's standard dummy.",
    image: "/images/product-1.png",
    author: "John Doe",
    date: "2026-01-01",
    slug: "blog-1",
  },
  {
    title: "Blog 2",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has electronic typesetting, remaining essentially unchanged Lorem Ipsum has been the industry's standard dummy.",
    image: "/images/product-2.png",
    author: "Jane Doe",
    date: "2026-01-02",
    slug: "blog-2",
  },
  {
    title: "Blog 3",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has electronic typesetting, remaining essentially unchanged Lorem Ipsum has been the industry's standard dummy.",
    image: "/images/product-1.png",
    author: "John Doe",
    date: "2026-01-03",
    slug: "blog-3",
  },
];

export const blogsPage = {
  title: "Blogs - Ashoka Brothers",
  description:
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has electronic typesetting, remaining essentially unchanged Lorem Ipsum has been the industry's standard dummy.",
  isVideo: false,
  imageSrcDesktop: "/images/blog-hero.png",
  imageSrcMobile: "/images/blog-hero-m.png",
  blogs: blogs,
};
