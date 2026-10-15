import Image from "next/image";
import { ScrollRevealText } from "@/components/shared/ScrollRevealText";
import { ScrewMark } from "@/components/shared/ScrewMark";
import { contactDetails } from "@/data/shared.data";

const textClass =
  "text-[14px] leading-6 text-balance text-[#d0d0d0] sm:text-[16px] sm:leading-7";

export function ContactInfoSection() {
  return (
    <section className="bg-black px-5 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-27.5">
      <div className="mx-auto flex max-w-344 flex-col gap-10 md:gap-25">
        <div className="mb-6 flex items-center justify-center gap-4 md:gap-7.5">
          <ScrewMark size={13} className="sm:mt-4" />
          <ScrollRevealText
            as="h2"
            className="font-canela text-[22px] leading-15 tracking-[4%] text-white/80 sm:text-[48px]"
          >
            Contact Ashoka Brothers
          </ScrollRevealText>
          <ScrewMark size={13} className="sm:mt-4" />
        </div>

        <div className="relative h-82.5 border-5 border-[#EBC533]/50 md:border-10 lg:h-155">
          <div className="flex h-full flex-col items-center justify-center gap-8 p-5 sm:p-8 lg:flex-row lg:justify-start lg:gap-15 lg:p-0 lg:pr-15">
            <div className="relative h-40 w-67.5 shrink-0 overflow-hidden max-md:-mt-20 lg:-ml-20 lg:h-125 lg:w-216">
              <Image
                src="/images/table.webp"
                alt="Architectural plans and construction tools on a workbench"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 270px, 864px"
              />
            </div>

            <div className="flex flex-1 flex-col justify-center lg:py-12">
              <ScrollRevealText
                as="h3"
                className="font-canela text-[24px] leading-8 tracking-[1px] text-white max-md:hidden sm:text-[40px] sm:leading-10"
              >
                Contact Us
              </ScrollRevealText>

              <ul className="space-y-5 sm:mt-8 sm:space-y-6">
                <li className="flex items-center gap-4">
                  <Image
                    src="/icons/location-2.svg"
                    alt="Location"
                    width={20}
                    height={20}
                    className="mt-0.5 size-5 shrink-0"
                  />
                  <ScrollRevealText delay={0.1} className={textClass}>
                    {contactDetails.address}
                  </ScrollRevealText>
                </li>

                <li className="flex items-center gap-4">
                  <Image
                    src="/icons/phone.svg"
                    alt="Phone"
                    width={20}
                    height={20}
                    className="mt-0.5 size-5 shrink-0"
                  />
                  <ScrollRevealText delay={0.18} className={textClass}>
                    <a
                      href={`tel:${contactDetails.phone1}`}
                      className="transition-opacity hover:opacity-80"
                    >
                      {contactDetails.phone1}
                    </a>
                    <span className="mx-2 text-[#d0d0d0]/60">|</span>
                    <a
                      href={`tel:${contactDetails.phone2}`}
                      className="transition-opacity hover:opacity-80"
                    >
                      {contactDetails.phone2}
                    </a>
                  </ScrollRevealText>
                </li>

                <li className="flex items-center gap-4">
                  <Image
                    src="/icons/email.svg"
                    alt="Email"
                    width={20}
                    height={20}
                    className="mt-0.5 size-5 shrink-0"
                  />
                  <ScrollRevealText
                    as="a"
                    href={`mailto:${contactDetails.email}`}
                    delay={0.26}
                    className={`${textClass} transition-opacity hover:opacity-80`}
                  >
                    {contactDetails.email}
                  </ScrollRevealText>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
