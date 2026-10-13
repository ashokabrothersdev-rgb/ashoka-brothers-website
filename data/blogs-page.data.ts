export interface Blog {
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  mainImage: string;
  mainImageAlt: string;
  middleImage: string;
  middleImageAlt: string;
  author: string;
  authorImage: string;
  date: string;
  content: {
    sectionTitle: string;
    sectionContent: string;
    sectionSecondaryContent?: string;
  }[];
}

export const blogs: Blog[] = [
  {
    title: "Screw Technology",
    slug: "screw-technology",
    description:
      "Understanding Screw Technology - Explore the basics of screw design, thread types and materials..",
    thumbnail: "/images/blogs/thumbnail-1.png",
    author: "Ashoka Brothers",
    authorImage: "/images/testimonial-1.png",
    date: "Oct 14, 2026",
    mainImage: "/images/blogs/main-image-1.png",
    mainImageAlt: "Main Image 1",
    middleImage: "/images/blogs/middle-image-1.png",
    middleImageAlt: "Middle Image 1",
    content: [
      {
        sectionTitle:
          "Screw Technology: Understanding Threads, Types and Materials",
        sectionContent:
          "Screws are among the most widely used fastening components across construction, furniture, fabrication and everyday repairs. While they may look similar at first glance, differences in thread design, head shape, material and finish can significantly affect how they perform. Understanding these details makes it easier to choose a screw that fits the application and provides a secure, lasting connection.",
      },
      {
        sectionTitle: "Understanding Screw Design and Threads",
        sectionContent:
          "Every part of a screw has a specific function. The head determines how the screw is driven and how it sits against the surface, while the shank provides the main body of the fastener. The threads create the grip needed to hold materials together, and the tip helps the screw enter the material during installation. Thread design is particularly important when selecting a screw. Coarse threads are commonly used in wood and other softer materials, where they can provide a strong grip. Fine threads are often used in metal applications, where their smaller spacing can offer more controlled engagement. The choice also depends on the material's thickness, the required holding strength and the type of joint being assembled.",
      },
      {
        sectionTitle: "Choosing the Right Material and Finish",
        sectionContent:
          "The material of a screw plays a major role in its strength, durability and resistance to corrosion. Steel screws are commonly used for general fastening because of their versatility, while stainless steel is often preferred in environments where moisture and corrosion are concerns. Other materials and protective coatings may be suitable depending on the working conditions and the demands of the application.",
        sectionSecondaryContent:
          "The finish deserves just as much attention as the base material. Coatings can help protect a screw against corrosion and wear, but their suitability depends on where and how the fastener will be used. A screw intended for an indoor furniture project may have different requirements from one exposed to rain, humidity or industrial conditions. Checking these factors before purchasing can help avoid premature deterioration and unnecessary replacement.",
      },
      {
        sectionTitle: "Getting the Best Performance from a Screw",
        sectionContent:
          "Selecting the right screw involves more than choosing a size that looks appropriate. Consider the materials being joined, the thickness of each component, the expected load and the conditions in which the assembly will be used. The correct length, diameter, head type and driver can all contribute to a better installation.",
        sectionSecondaryContent:
          "A well-matched fastener helps reduce installation problems and supports the reliability of the finished joint. By paying attention to thread design, material and finish, you can make a more informed choice for everything from simple household repairs to demanding construction and fabrication work.",
      },
    ],
  },
  {
    title: "Installation Guides",
    slug: "installation-guides",
    description:
      "A Guide to Better Installation - Learn the essential practices for selecting, positioning and installing..",
    thumbnail: "/images/blogs/thumbnail-2.png",
    author: "Ashoka Brothers",
    authorImage: "/images/testimonial-1.png",
    date: "Oct 14, 2026",
    mainImage: "/images/blogs/main-image-2.png",
    mainImageAlt: "Main Image 2",
    middleImage: "/images/blogs/middle-image-2.png",
    middleImageAlt: "Middle Image 2",
    content: [
      {
        sectionTitle: "Introduction",
        sectionContent: "Introduction to Installation Guides",
      },
    ],
  },
  {
    title: "Application Tips",
    slug: "application-tips",
    description:
      "Choosing the Right Fastener for the Job - Different materials and applications demand different..",
    thumbnail: "/images/blogs/thumbnail-3.png",
    author: "Ashoka Brothers",
    authorImage: "/images/testimonial-1.png",
    date: "Oct 14, 2026",
    mainImage: "/images/blogs/main-image-3.png",
    mainImageAlt: "Main Image 3",
    middleImage: "/images/blogs/middle-image-3.png",
    middleImageAlt: "Middle Image 3",
    content: [
      {
        sectionTitle: "Introduction",
        sectionContent: "Introduction to Application Tips",
      },
    ],
  },
];

export const blogsPage = {
  title: "Blogs - Ashoka Brothers",
  description:
    "Explore practical insights, product knowledge and industry updates from Ashoka Brothers. From choosing the right fastener to understanding applications and installation, discover useful information to make every project more efficient and reliable.",
  imageSrcDesktop: "/images/blog-hero.webp",
  imageSrcMobile: "/images/blog-hero-m.webp",
  isVideo: false,
  blogs,
};
