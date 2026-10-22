"use client";

import { ReadMoreButton } from "@/components/shared/ReadMoreButton";
import { ScrollRevealText } from "@/components/shared/ScrollRevealText";
import { ScrewMark } from "@/components/shared/ScrewMark";
import { aboutPage, VisionImage } from "@/data/about-page.data";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

type VisionSectionProps = {
  title: string;
  description: string;
  image: VisionImage;
};

export function VisionSection({
  title,
  description,
  image,
}: VisionSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="our-vision-heading"
      className="relative bg-white"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 z-0 h-[calc(100%-5.5rem)] bg-black sm:h-[calc(100%-7rem)] lg:h-[calc(100%-8.5rem)]"
      />

      <div className="relative z-10 mx-auto grid max-w-384 items-start gap-8 px-5 pt-14 sm:px-10 sm:pt-18 lg:grid-cols-[minmax(280px,440px)_minmax(0,1fr)] lg:gap-20 lg:px-16 lg:pt-30">
        <div>
          <ScrollRevealText
            as="h2"
            id="our-vision-heading"
            className="flex items-center gap-4 font-serif text-[32px] leading-none tracking-[1.2px] text-white sm:gap-5 sm:text-[44px] lg:text-[48px] lg:tracking-[1.92px]"
          >
            {title}
            <ScrewMark
              className="mt-2 shrink-0 opacity-30 invert sm:mt-4"
              size={13}
            />
          </ScrollRevealText>
          <ScrollRevealText
            delay={0.15}
            className="mt-6 max-w-md text-balance text-[14px] leading-7 text-white/80 sm:mt-8 sm:text-[17px] sm:leading-8"
          >
            {description}
          </ScrollRevealText>
          <div className="mt-8 sm:mt-10">
            <ReadMoreButton href="/contact-us" text="Get in Touch" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            delay: reduceMotion ? 0 : 0.08,
            ease: aboutPage.EASE,
          }}
          className="relative pr-2 pb-2"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute top-2.5 right-0 bottom-0 left-2.5 border border-[#c6ae7a]"
          />
          <div className="relative z-10 overflow-hidden bg-[#141414]">
            <div className="relative aspect-3/2 min-h-55">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 92vw, 58vw"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
