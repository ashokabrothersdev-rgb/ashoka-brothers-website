import Link from "next/link";
import {
  contactLinks,
  quickLinks,
  socials,
  contactDetails,
} from "@/data/shared.data";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <Image
        src="/images/footer-bg.png"
        alt="Footer Background"
        width={3072}
        height={1240}
        className="absolute inset-0 size-full object-cover opacity-95"
      />

      <div className="relative mx-auto max-w-384 px-5 pb-10 pt-7 sm:px-10 lg:px-10">
        <Link href="#home" className="inline-block">
          <Image
            src="/icons/logo.svg"
            alt="Ashoka Brothers"
            width={275}
            height={64}
            className="h-12 w-auto lg:h-16"
          />
        </Link>

        <div className="mt-6 grid overflow-hidden bg-white lg:grid-cols-[1fr_480px]">
          <div className="grid gap-20 px-6 py-10 sm:grid-cols-2 sm:gap-x-32 sm:px-10 lg:grid-cols-[max-content_1fr_1fr] lg:gap-x-40 lg:px-20 lg:py-16">
            <div>
              <h3 className="font-canela text-[20px] leading-7.5 tracking-[1px] text-[#2b2b2b]">
                Contact Us
              </h3>
              <div className="mt-6 space-y-3 text-[16px] leading-8 text-[#777]">
                <p className="whitespace-nowrap">
                  <span className="text-black">Reservations:</span>{" "}
                  <a
                    href={`tel:${contactDetails.phone1}`}
                    className="underline decoration-[6.5%]"
                  >
                    {contactDetails.phone1}
                  </a>
                </p>
                <p className="whitespace-nowrap">
                  <span className="text-black">Email:</span>{" "}
                  <a href={`mailto:${contactDetails.email}`}>
                    {contactDetails.email}
                  </a>
                </p>
                <p>
                  <span className="text-black">Address:</span>{" "}
                  {contactDetails.address.split(",")[0]},
                  <br />
                  {contactDetails.address.split(",")[1]},
                  {contactDetails.address.split(",")[2]}
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-canela text-[20px] leading-7.5 tracking-[1px] text-[#2b2b2b]">
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

            <div className="sm:col-span-2 lg:col-span-1 lg:pt-13.5">
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

          <div className="relative min-h-60 lg:min-h-95">
            <video
              className="absolute inset-0 size-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Factory process video"
            >
              <source src="/videos/footer-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="mt-10.5 flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="transition-opacity hover:opacity-70"
            >
              <Image
                src={social.src}
                alt={social.label}
                width={social.size}
                height={social.size}
                className="size-8.75"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
