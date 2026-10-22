export const munniImage = (file: string) => `/munni/images/${file}`;

// AV1 first (sharpest per byte), H.264 for browsers without AV1 decode
export const munniVideo = (name: string) => [
  { src: `/munni/video/${name}-av1.mp4`, type: 'video/mp4; codecs="av01.0.08M.10"' },
  { src: `/munni/video/${name}-h264.mp4`, type: "video/mp4" },
];

export const introLines = [
  "Ashoka Brothers, the right",
  "hardware for a firm hold,",
  "a clean finish, every time.",
];

export const specialLines = [
  "The right hardware makes all the",
  "difference. Ashoka Brothers brings",
  "a dependable range of screws,",
  "bolts, nuts, hooks and fastening",
  "solutions built for everyday",
  "applications. From a clean finish",
  "to a firm hold, we focus on hardware",
  "that performs when it matters.",
];

export const compositionCards = [
  {
    id: "cc1",
    title: "Our Screws",
    text: "Drive it home. Clean threads, a firm hold and a finish made to last, in every size you need.",
    image: "card-screws.webp",
    width: 2000,
    height: 1055,
  },
  {
    id: "cc2",
    title: "Bolts and Nuts",
    text: "Hold it together. Precision threads and a solid grip, bolts and nuts built to stay put under load.",
    image: "card-bolts-nuts.webp",
    width: 2000,
    height: 1493,
  },
  {
    id: "cc3",
    title: "Premium Hooks",
    text: "Hang it right. Strong hold, simple form and ready for work, hooks that carry the load day after day.",
    image: "card-hooks.webp",
    width: 800,
    height: 600,
  },
];

export const mobileProducts = [
  {
    title: "Our Screws",
    subtitle: "Clean threads · Firm hold · Made to last",
    body: "Drive it home. From wood screws to self-tapping and machine screws, our range delivers clean threads, a firm hold and a finish made to last.",
    image: "card-screws.webp",
    width: 2000,
    height: 1055,
  },
  {
    title: "Bolts and Nuts",
    subtitle: "Precision threads · Solid grip · Built to stay",
    body: "Hold it together. Bolts and nuts machined to precise threads for a solid grip, built to stay tight under load across every kind of assembly.",
    image: "card-bolts-nuts.webp",
    width: 2000,
    height: 1493,
  },
  {
    title: "Premium Hooks",
    subtitle: "Strong hold · Simple form · Ready for work",
    body: "Hang it right. Premium hooks in a simple, sturdy form, made for a strong hold and ready for work the moment they are fitted.",
    image: "card-hooks.webp",
    width: 800,
    height: 600,
  },
];

export const compositionPics = [
  { id: "cp1", image: "comp-bolts.webp", width: 2000, height: 1272 },
  { id: "cp2", image: "comp-drill-press.webp", width: 2000, height: 1333 },
  { id: "cpMain", image: "comp-main.webp", width: 2000, height: 1327 },
  { id: "cp3", image: "comp-workshop.webp", width: 2000, height: 1536 },
  { id: "cp4", image: "comp-brass-screws.webp", width: 2000, height: 1333 },
  { id: "cp5", image: "comp-tools.webp", width: 2000, height: 1429 },
];

export const activities = [
  { label: "Screws", image: "itb-products.webp" },
  { label: "Bolts", image: "comp-bolts.webp" },
  { label: "Nuts", image: "card-bolts-nuts.webp" },
  { label: "Hooks", image: "card-hooks.webp" },
  { label: "Quality", image: "itb-quality.webp" },
  { label: "Customer First", image: "act-customer-first.webp" },
  { label: "Professionalism", image: "act-professionalism.webp" },
];

export const trades = [
  { alt: "Furniture and carpentry", image: "trade-furniture.webp", width: 1500, height: 1000, shape: "square" },
  { alt: "Construction and fabrication", image: "trade-fabrication.webp", width: 1500, height: 841, shape: "mid" },
  { alt: "Electrical and assembly", image: "trade-electrical.webp", width: 1500, height: 1001, shape: "square d400" },
];

export const reviews = [
  {
    name: "Suresh Kumar",
    quote:
      "Ashoka Brothers offers a good range of hardware for our day-to-day requirements. The products are dependable, and their service makes the overall experience smooth. Orders are handled promptly, the team understands exactly what we need, and we have never had to look elsewhere for our regular supplies.",
  },
  {
    name: "Rajiv Mehta",
    quote:
      "The product quality has been consistently good, with the right finish and reliable performance. We have used their fasteners across several projects and the results have been the same every time. Ashoka Brothers is a dependable choice for our regular hardware requirements.",
  },
  {
    name: "Amit Sharma",
    quote:
      "We’ve been sourcing our fastening requirements from Ashoka Brothers and have always found the products reliable. Good quality, good range, and consistent service. Whatever the specification, they usually have it in stock, and deliveries arrive on time, which keeps our own work on schedule.",
  },
  {
    name: "Vikram Patel",
    quote:
      "What stands out is the consistency in quality. The screws and fasteners have a good finish and hold well across different applications, from furniture to structural fittings. Pricing is fair, the team is easy to deal with, and every order has been a reliable experience.",
  },
];
