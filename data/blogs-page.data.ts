export interface Blog {
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  mainImage: string;
  mainImageAlt: string;
  middleImage: string;
  middleImageAlt: string;
  middleImage2?: string;
  middleImage2Alt?: string;
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
        sectionTitle: "Installation Guides: Getting Every Fastening Right",
        sectionContent:
          "A reliable fastening starts well before the screw enters the material. Choosing the correct fastener, preparing the surface and using the right tools can make installation easier and improve the quality of the finished joint. Whether you are assembling furniture, carrying out repairs or working on a construction project, a few basic practices can help prevent common mistakes and save time.",
      },
      {
        sectionTitle: "Prepare the Surface and Choose the Right Screw",
        sectionContent:
          "Begin by identifying the material you are working with and selecting a screw designed for that application. Wood, metal and other materials have different fastening requirements, so the screw's length, diameter and thread type should be appropriate for the job. The thickness of the material and the amount of holding strength required should also be considered before installation.",
        sectionSecondaryContent:
          "Once you have selected the screw, mark the fixing point carefully and make sure the components are properly aligned. Depending on the screw and the material, drilling a pilot hole may help guide the screw, reduce the risk of splitting wood and make installation more controlled. For metal applications, check whether the fastener is designed to drill its own hole or requires a pre-drilled opening. Taking a moment to prepare the surface can help prevent misalignment and damage.",
      },
      {
        sectionTitle: "Use the Right Tools and Apply Controlled Pressure",
        sectionContent:
          "Using a suitable screwdriver or drill bit is essential for a clean installation. The driver should match the screw head closely, as an incorrect fit can cause slipping, damage the head or make the screw difficult to tighten. Keep the tool aligned with the screw and apply steady pressure as you begin driving it into the material.",
        sectionSecondaryContent:
          "When using a power drill, choose a suitable speed and maintain control throughout the process. Driving a screw too quickly or applying excessive force can strip the threads, damage the surrounding material or leave the screw sitting unevenly. Tighten it until it is properly seated and secure, without forcing it further than necessary. For applications involving specific load or safety requirements, follow the relevant installation instructions.",
      },
      {
        sectionTitle: "Check the Finished Joint",
        sectionContent:
          "After installation, inspect the screw to ensure it is seated correctly and the joined materials remain aligned. Look for damaged screw heads, loose connections, cracks in the material or signs that the fastener has been overtightened. If a screw does not grip properly, investigate the cause rather than simply forcing it further into the surface.",
        sectionSecondaryContent:
          "Good installation practices are often simple, but they make a noticeable difference to the final result. Selecting the right screw, preparing the material and working with the correct tools can improve consistency, reduce rework and help create a fastening that performs as intended.",
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
    middleImage2: "/images/blogs/middle-image-3-2.png",
    middleImage2Alt: "Middle Image 3-2",
    content: [
      {
        sectionTitle:
          "Application Tips: Choosing the Right Fastener for the Job",
        sectionContent:
          "Different projects call for different fastening solutions. A screw that works well in a wooden cabinet may not be suitable for a steel frame or an outdoor installation. Factors such as the material, thickness, surrounding environment and expected load all influence the choice. Understanding these requirements before starting can help you select the right fastener and achieve a more dependable finish.",
      },
      {
        sectionTitle: "Selecting Screws for Wood and Metal",
        sectionContent:
          "Wood screws are commonly used in furniture, cabinetry, carpentry and general woodworking. Their thread design helps them grip timber, but the right length and diameter still matter. A screw that is too short may not provide sufficient engagement, while one that is too long can protrude through the material or damage components on the other side. When working with hardwood or fastening close to an edge, a pilot hole may help reduce splitting and make installation easier.",
        sectionSecondaryContent:
          "Metal applications require a different approach. The choice depends on the type and thickness of the metal, the design of the joint and whether a pre-drilled hole is available. Self-drilling screws can create their own hole in compatible materials, making them useful for certain fabrication, roofing and sheet-metal applications. Other situations may require a screw that engages with a prepared hole or a matching threaded component. Checking the fastener's specifications before installation helps ensure it is suited to the task.",
      },
      {
        sectionTitle: "Consider the Environment and Working Conditions",
        sectionContent:
          "The surrounding environment is another important factor when selecting fasteners. Screws used outdoors or in damp areas may be exposed to moisture, temperature changes and corrosive conditions. Stainless steel or appropriately coated fasteners can offer improved corrosion resistance, depending on the grade, coating and application. It is also important to consider contact with other materials, as certain combinations can create additional corrosion risks.",
        sectionSecondaryContent:
          "For indoor furniture and general repairs, appearance and the type of finish may also influence the decision. A countersunk head may be suitable when a flush surface is required, while other head styles may be better for specific installation methods or access requirements. Choosing a fastener that suits both the practical needs and the finished appearance of the project helps avoid compromises later.",
      },
      {
        sectionTitle: "Make the Right Choice Before Installation",
        sectionContent:
          "Before purchasing or installing a screw, check the material being joined, the required length and diameter, the head type, and the conditions in which the finished assembly will be used. Consider whether the connection needs to support a particular load and whether the screw will be exposed to vibration, moisture or repeated movement. For structural or safety-critical applications, use fasteners that meet the relevant specifications rather than relying on appearance alone.",
        sectionSecondaryContent:
          "The right fastener is one that suits the job from the start. Paying attention to these details can make installation more straightforward, reduce the likelihood of damage and help the finished assembly remain secure over time. Whether you are working on a small repair or a larger project, choosing carefully is a simple step towards better results.",
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
