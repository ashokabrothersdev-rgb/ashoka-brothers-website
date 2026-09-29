"use client";

import { CarouselControls } from "@/components/about/CarouselControls";
import { AboutCarouselItem, aboutPage } from "@/data/about-page.data";
import { motion, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import { ValuesTrack } from "./ValuesTrack";

type ValuesCarouselProps = {
  items: AboutCarouselItem[];
};

export function ValuesCarousel({ items }: ValuesCarouselProps) {
  const [start, setStart] = useState(0);
  const [direction, setDirection] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);
  const locked = useRef(false);
  const reduceMotion = useReducedMotion();
  const count = items.length;
  const duration = reduceMotion ? 0 : 0.6;

  const paginate = (dir: 1 | -1) => {
    if (locked.current || count < 2) return;
    locked.current = true;
    setDirection(dir);
    setExpanded(null);
    setStart((value) => (value + dir + count) % count);
    window.setTimeout(
      () => {
        locked.current = false;
      },
      duration * 1000 + 40,
    );
  };

  const toggle = (index: number) => {
    setExpanded((current) => (current === index ? null : index));
  };

  if (count === 0) return null;

  return (
    <section
      id="core-values"
      aria-roledescription="carousel"
      aria-label="Core values"
      className="bg-white px-5 pt-12 pb-16 sm:px-10 sm:pt-16 lg:px-16 lg:pt-22.5 lg:pb-38"
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: reduceMotion ? 0 : 0.7, ease: aboutPage.EASE }}
        className="mx-auto max-w-381.5"
      >
        <ValuesTrack
          idPrefix="mobile"
          className="relative w-full max-w-93.5 overflow-hidden lg:hidden"
          items={items}
          start={start}
          direction={direction}
          perView={1}
          widen={false}
          expanded={expanded}
          onToggle={toggle}
          reduceMotion={Boolean(reduceMotion)}
        />
        <ValuesTrack
          idPrefix="desktop"
          className="relative hidden overflow-hidden lg:block"
          items={items}
          start={start}
          direction={direction}
          perView={aboutPage.DESKTOP_PER_VIEW}
          widen
          expanded={expanded}
          onToggle={toggle}
          reduceMotion={Boolean(reduceMotion)}
        />

        {count > 1 ? (
          <CarouselControls
            onBack={() => paginate(-1)}
            onNext={() => paginate(1)}
            tone="dark"
            className="mt-8 w-full max-w-93.5 lg:mt-10 lg:max-w-381.5"
          />
        ) : null}
      </motion.div>
    </section>
  );
}
