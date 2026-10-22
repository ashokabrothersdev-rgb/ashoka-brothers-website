import Image from "next/image";
import type { ReactNode } from "react";
import { ScrollRevealText } from "@/components/shared/ScrollRevealText";
import { contactDetails } from "@/data/shared.data";
import { locationPage } from "@/data/location-page.data";

const linkClass =
  "mt-auto inline-flex items-center gap-2 pt-5 font-sans text-[12px] leading-4 font-semibold tracking-[0.16em] text-[#282828] uppercase underline decoration-[#a8906a] underline-offset-6 transition-opacity hover:opacity-70";

type DetailProps = {
  icon: string;
  label: string;
  delay: number;
  children: ReactNode;
};

function Detail({ icon, label, delay, children }: DetailProps) {
  return (
    <li className="flex flex-col border-t border-[#282828]/10 py-8 sm:border-t-0 sm:border-l sm:px-8 sm:py-2 sm:first:border-l-0 sm:first:pl-0 lg:px-12">
      <span className="flex size-11 items-center justify-center rounded-full bg-black">
        <Image src={icon} alt="" width={18} height={18} className="size-4.5" />
      </span>
      <ScrollRevealText
        delay={delay}
        className="mt-6 font-sans text-[12px] leading-4 font-semibold tracking-[0.16em] text-[#a8906a] uppercase"
      >
        {label}
      </ScrollRevealText>
      {children}
    </li>
  );
}

export function LocationDetails() {
  return (
    <section
      aria-label="Address and contact details"
      className="bg-white px-5 pt-16 sm:px-10 sm:pt-20 lg:px-20 lg:pt-24"
    >
      <ul className="mx-auto grid max-w-344 sm:grid-cols-3">
        <Detail icon="/icons/location-2.svg" label="Address" delay={0}>
          <address className="mt-3 font-serif text-[20px] leading-8 text-[#282828] not-italic sm:text-[22px]">
            {contactDetails.address}
          </address>
          <a
            href={locationPage.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Get directions
          </a>
        </Detail>

        <Detail icon="/icons/phone.svg" label="Phone" delay={0.08}>
          <p className="mt-3 flex flex-col font-serif text-[20px] leading-8 text-[#282828] sm:text-[22px]">
            <a href={`tel:${contactDetails.phone1}`} className="hover:opacity-70">
              {contactDetails.phone1}
            </a>
            <a href={`tel:${contactDetails.phone2}`} className="hover:opacity-70">
              {contactDetails.phone2}
            </a>
          </p>
          <a href={`tel:${contactDetails.phone1}`} className={linkClass}>
            Call us
          </a>
        </Detail>

        <Detail icon="/icons/email.svg" label="Email" delay={0.16}>
          <p className="mt-3 font-serif text-[20px] leading-8 break-all text-[#282828] sm:text-[22px]">
            {contactDetails.email}
          </p>
          <a href={`mailto:${contactDetails.email}`} className={linkClass}>
            Write to us
          </a>
        </Detail>
      </ul>
    </section>
  );
}
