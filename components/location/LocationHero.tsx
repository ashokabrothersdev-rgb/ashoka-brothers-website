import Image from "next/image";
import { ReadMoreButton } from "@/components/shared/ReadMoreButton";
import { ScrollRevealText } from "@/components/shared/ScrollRevealText";
import { contactDetails } from "@/data/shared.data";
import { locationPage } from "@/data/location-page.data";

export function LocationHero() {
  return (
    <section aria-labelledby="location-heading" className="relative bg-white">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[calc(100%-6rem)] bg-black sm:h-[calc(100%-9rem)] lg:h-[calc(100%-8rem)]"
      />

      <div className="relative mx-auto grid max-w-384 items-center gap-12 px-5 pt-36 sm:px-10 sm:pt-44 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20 lg:px-16 lg:pt-48">
        <div className="text-white lg:pb-32">
          <ScrollRevealText className="font-sans text-[12px] leading-4 font-semibold tracking-[0.16em] text-[#C9A74F] uppercase">
            {locationPage.eyebrow}
          </ScrollRevealText>
          <ScrollRevealText
            as="h1"
            id="location-heading"
            delay={0.08}
            className="mt-5 font-serif text-[38px] leading-11 tracking-[1px] sm:text-[56px] sm:leading-16 lg:text-[60px] lg:leading-17"
          >
            {locationPage.title}
          </ScrollRevealText>
          <ScrollRevealText
            delay={0.16}
            className="mt-6 max-w-md text-[15px] leading-7 text-white/75 sm:text-[17px] sm:leading-8"
          >
            {locationPage.intro}
          </ScrollRevealText>

          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
            <ReadMoreButton
              href={locationPage.directionsUrl}
              text="Get Directions"
              newTab
            />
            <a
              href={`tel:${contactDetails.phone1}`}
              className="flex items-center gap-3 font-sans text-[14px] leading-5 tracking-[0.04em] text-white uppercase underline-offset-6 transition-opacity hover:opacity-80 sm:text-[15px]"
            >
              <Image
                src="/icons/phone.svg"
                alt=""
                width={16}
                height={16}
                className="size-4"
              />
              Call {contactDetails.phone1}
            </a>
          </div>
        </div>

        <figure className="relative pr-2 pb-2">
          <span
            aria-hidden
            className="pointer-events-none absolute top-2.5 right-0 bottom-0 left-2.5 border border-[#c6ae7a]"
          />
          <div className="relative aspect-4/3 overflow-hidden bg-[#141414]">
            <Image
              src={locationPage.image.src}
              alt={locationPage.image.alt}
              fill
              loading="eager"
              fetchPriority="high"
              className="object-cover"
              sizes="(max-width: 1024px) calc(100vw - 48px), 58vw"
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
