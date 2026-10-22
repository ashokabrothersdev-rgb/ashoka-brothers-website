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
            className="font-serif text-[22px] leading-15 tracking-[4%] text-white/80 max-[389px]:text-[20px] sm:text-[36px] md:text-[40px] lg:text-[48px]"
          >
            Contact Ashoka Brothers
          </ScrollRevealText>
          <ScrewMark size={13} className="sm:mt-4" />
        </div>

        <div className="relative border-5 border-[#EBC533]/50 md:border-10 lg:h-155">
          <div className="flex flex-col gap-8 px-5 pb-8 sm:gap-10 sm:px-10 sm:pb-12 lg:h-full lg:flex-row lg:items-center lg:gap-15 lg:p-0 lg:pr-15">
            <figure className="relative -mt-12 aspect-4/3 w-full shrink-0 overflow-hidden sm:-mt-16 sm:aspect-16/10 lg:mt-0 lg:-ml-20 lg:aspect-auto lg:h-125 lg:w-216 lg:shrink">
              <Image
                src="/images/office-front.webp"
                alt="The Ashoka Brothers office, with the OSCAR X sign on its front wall"
                fill
                className="object-cover object-[35%_60%]"
                sizes="(max-width: 1023px) calc(100vw - 90px), 864px"
              />
              <figcaption className="absolute bottom-3 left-3 bg-[#f4efe6] px-3 py-2 font-sans text-[10px] leading-3 font-semibold tracking-[0.16em] text-[#282828] uppercase sm:bottom-5 sm:left-5 sm:px-4 sm:py-2.5 sm:text-[12px]">
                Visit our office
              </figcaption>
            </figure>

            <div className="flex flex-1 flex-col justify-center lg:min-w-75 lg:py-12">
              <ScrollRevealText
                as="h3"
                className="font-serif text-[24px] leading-8 tracking-[1px] text-white max-md:hidden sm:text-[40px] sm:leading-10"
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
