export const links = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "Our Story" },
  { href: "/products", label: "Products" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact-us", label: "Contact Us" },
];

const contactLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Our Products" },
  { href: "/about-us", label: "Our Story" },
  { href: "/location", label: "Location" },
];

const quickLinks = [
  { href: "/blogs", label: "Blogs" },
  { href: "/media", label: "Media" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
];

const socials = [
  {
    href: "https://linkedin.com",
    src: "/icons/Linkedin.svg",
    label: "LinkedIn",
    size: 36,
  },
  {
    href: "https://facebook.com",
    src: "/icons/Facebook.svg",
    label: "Facebook",
    size: 36,
  },
  {
    href: "https://x.com",
    src: "/icons/Twitter.svg",
    label: "Twitter",
    size: 36,
  },
  { href: "/", src: "/icons/location.svg", label: "Location", size: 36 },
];

interface ContactDetails {
  address: string;
  phone1: string;
  phone2: string;
  email: string;
}

const contactDetails: ContactDetails = {
  address: "300/6, Loha Mandi, Near Tunda Talab, Amritsar- 143001",
  phone1: "98780 77972",
  phone2: "93561 04499",
  email: "ashokabros@yahoo.com",
};

export { contactLinks, quickLinks, socials, contactDetails };
