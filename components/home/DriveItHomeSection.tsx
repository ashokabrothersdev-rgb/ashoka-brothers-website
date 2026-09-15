"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ScrewMark } from "@/components/shared/ScrewMark";
import { icons } from "@/lib/home-page.data";

const INACTIVE_OPACITY = 0.28;
const ACTIVE_OPACITY = 1;
const AUTO_MS = 2500;

export function DriveItHomeSection() {
  const [active, setActive] = useState(0);
  const count = icons.length;
  const current = icons[active];

  const goTo = (index: number) => {
    setActive(((index % count) + count) % count);
  };

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((value) => (value + 1) % count);
    }, AUTO_MS);

    return () => window.clearInterval(id);
  }, [active, count]);

  return (
    <section className="relative overflow-hidden bg-black py-24 lg:h-200 lg:py-0">
      <div className="pointer-events-none absolute top-51 left-1/2 hidden h-35 w-132.5 -translate-x-1/2 bg-linear-to-r from-black via-transparent to-black lg:block" />

      <div className="relative mx-auto flex h-full max-w-384 flex-col items-center justify-center px-5">
        <div className="flex items-end justify-center gap-4 sm:gap-8 lg:gap-12">
          {icons.map((icon, index) => {
            const isActive = index === active;

            return (
              <motion.button
                key={icon.src}
                type="button"
                aria-label={`Show ${icon.alt}`}
                aria-pressed={isActive}
                className="cursor-pointer border-0 bg-transparent p-0"
                initial={{
                  opacity: 0,
                  y: 56,
                  rotate: index === 0 ? -8 : index === 2 ? 8 : 0,
                }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.18,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() => goTo(index)}
              >
                <motion.img
                  src={icon.src}
                  alt={icon.alt}
                  width={icon.width}
                  height={icon.height}
                  className={`${icon.className} h-auto`}
                  animate={{
                    opacity: isActive ? ACTIVE_OPACITY : INACTIVE_OPACITY,
                  }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                />
              </motion.button>
            );
          })}
        </div>

        <div className="relative mt-10 flex w-full max-w-xl items-center justify-center gap-6 sm:gap-10 lg:mt-20 lg:gap-14">
          <button
            type="button"
            aria-label="Previous product"
            className="shrink-0 cursor-pointer border-0 bg-transparent p-0 opacity-40 transition-opacity hover:opacity-70"
            onClick={() => goTo(active - 1)}
          >
            <ScrewMark className="-rotate-45 invert" size={17} />
          </button>

          <div className="relative min-h-35 flex-1 text-center text-white sm:min-h-37.5">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.src}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2 className="font-canela text-[28px] leading-10 font-semibold tracking-[1.2px] sm:text-[30px]">
                  {current.title.first}
                  <br />
                  {current.title.second}
                </h2>
                <p className="mt-6 font-canela text-[14px] leading-5 font-light opacity-80">
                  {current.description.first}
                  <br />
                  {current.description.second}
                  <br />
                  {current.description.third}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            type="button"
            aria-label="Next product"
            className="shrink-0 cursor-pointer border-0 bg-transparent p-0 opacity-40 transition-opacity hover:opacity-70"
            onClick={() => goTo(active + 1)}
          >
            <ScrewMark className="rotate-45 invert" size={17} />
          </button>
        </div>
      </div>
    </section>
  );
}
