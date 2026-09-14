import Link from "next/link";

const contactLinks = [
  { href: "#our-story", label: "About Us" },
  { href: "#testimonials", label: "Blogs" },
  { href: "#contact", label: "FAQs" },
  { href: "#contact", label: "Policies" },
  { href: "#our-story", label: "Why Choose Us" },
];

const quickLinks = [
  { href: "#contact", label: "Contact Us" },
  { href: "#our-story", label: "About Us" },
  { href: "#career", label: "Careers" },
  { href: "#contact", label: "Location" },
  { href: "#contact", label: "Term & Conditions" },
];

const socials = [
  {
    href: "https://linkedin.com",
    src: "/Linkedin.svg",
    label: "LinkedIn",
    size: 36,
  },
  {
    href: "https://facebook.com",
    src: "/Facebook.svg",
    label: "Facebook",
    size: 36,
  },
  { href: "https://x.com", src: "/Twitter.svg", label: "Twitter", size: 36 },
  { href: "#contact", src: "/location.svg", label: "Location", size: 36 },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <img
        src="/footer-bg.png"
        alt=""
        width={3072}
        height={1240}
        className="absolute inset-0 size-full object-cover opacity-95"
      />

      <div className="relative mx-auto max-w-[1536px] px-5 pb-10 pt-7 sm:px-10 lg:px-20">
        <Link href="#home" className="inline-block">
          <img
            src="/logo.svg"
            alt="Ashoka Brothers"
            width={275}
            height={64}
            className="h-12 w-auto lg:h-16"
          />
        </Link>

        <div className="mt-6 grid overflow-hidden bg-white lg:grid-cols-[1fr_480px]">
          <div className="grid gap-10 px-6 py-10 sm:grid-cols-2 sm:px-10 lg:grid-cols-3 lg:px-20 lg:py-16">
            <div>
              <h3 className="font-display text-[20px] leading-[30px] tracking-[1px] text-[#2b2b2b]">
                Contact Us
              </h3>
              <div className="mt-6 space-y-2 text-[16px] leading-8 text-[#777]">
                <p>
                  <span className="text-black">Reservations:</span>{" "}
                  <a
                    href="tel:9878077972"
                    className="underline decoration-[6.5%]"
                  >
                    98780-77972
                  </a>
                </p>
                <p>
                  <span className="text-black">Email:</span>{" "}
                  <a href="mailto:ashokabros@yahoo.com">ashokabros@yahoo.com</a>
                </p>
                <p>
                  <span className="text-black">Address:</span> Lorem Ipsum
                  Palacicium,
                  <br />
                  Lorem Colosiumimi, Lorem 511411
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-display text-[20px] leading-[30px] tracking-[1px] text-[#2b2b2b]">
                Quick Links
              </h3>
              <ul className="mt-6 space-y-0 text-[16px] leading-8 text-[#777]">
                {contactLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-[#2b2b2b]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sm:col-span-2 lg:col-span-1 lg:pt-[54px]">
              <ul className="mt-0 space-y-0 text-[16px] leading-8 text-[#777]">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-[#2b2b2b]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative min-h-[240px] lg:min-h-[380px]">
            <video
              className="absolute inset-0 size-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Factory process video"
            >
              <source src="/footer-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="transition-opacity hover:opacity-70"
            >
              <img
                src={social.src}
                alt=""
                width={social.size}
                height={social.size}
                className="size-[35px]"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
