"use client";

import { CarouselControls } from "@/components/about/CarouselControls";
import { ReadMoreButton } from "@/components/shared/ReadMoreButton";
import { ScrewMark } from "@/components/shared/ScrewMark";
import { aboutPage, VisionImage } from "@/data/about-page.data";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

type VisionSectionProps = {
  title: string;
  description: string;
  images: VisionImage[];
};

const slideVariants = {
  enter: (dir: number) => ({ x: dir >= 0 ? "100%" : "-100%" }),
  center: { x: "0%" },
  exit: (dir: number) => ({ x: dir >= 0 ? "-100%" : "100%" }),
};

const fadeVariants = {
  enter: { opacity: 0, x: 0 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 0 },
};

export function VisionSection({
  title,
  description,
  images,
}: VisionSectionProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const locked = useRef(false);
  const reduceMotion = useReducedMotion();
  const count = images.length;
  const duration = reduceMotion ? 0 : 0.6;
  const current = images[index];

  const paginate = (dir: 1 | -1) => {
    if (locked.current || count < 2) return;
    locked.current = true;
    setDirection(dir);
    setIndex((value) => (value + dir + count) % count);
    window.setTimeout(
      () => {
        locked.current = false;
      },
      duration * 1000 + 40,
    );
  };

  if (!current) return null;

  return (
    <section
      aria-labelledby="our-vision-heading"
      aria-roledescription="carousel"
      className="relative bg-white"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 z-0 h-[calc(100%-5.5rem)] bg-black sm:h-[calc(100%-7rem)] lg:h-[calc(100%-8.5rem)]"
      />

      <div className="relative z-10 mx-auto grid max-w-384 items-start gap-8 px-5 pt-14 sm:px-10 sm:pt-18 lg:grid-cols-[minmax(280px,440px)_minmax(0,1fr)] lg:gap-20 lg:px-16 lg:pt-30">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            ease: aboutPage.EASE,
          }}
        >
          <h2
            id="our-vision-heading"
            className="flex items-center gap-4 font-canela text-[32px] leading-none tracking-[1.2px] text-white sm:gap-5 sm:text-[44px] lg:text-[48px] lg:tracking-[1.92px]"
          >
            {title}
            <ScrewMark
              className="mt-2 shrink-0 opacity-50 invert sm:mt-4"
              size={13}
            />
          </h2>
          <p className="mt-6 max-w-md font-canela text-[14px] leading-7 text-white/80 sm:mt-8 sm:text-[17px] sm:leading-8">
            {description}
          </p>
          <div className="mt-8 sm:mt-10">
            <ReadMoreButton href="#core-values" />
          </div>
        </motion.div>

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
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={index}
                  custom={direction}
                  variants={reduceMotion ? fadeVariants : slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: reduceMotion ? 0 : 0.7,
                    ease: aboutPage.EASE,
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={current.src}
                    alt={current.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 92vw, 58vw"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-linear-to-t from-black/55 to-transparent" />
              {count > 1 ? (
                <CarouselControls
                  onBack={() => paginate(-1)}
                  onNext={() => paginate(1)}
                  tone="light"
                  className="absolute inset-x-0 bottom-0 z-20 px-4 py-4 sm:px-6 sm:py-5"
                />
              ) : null}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
