"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useRef, useState } from "react";
import { ScrewMark } from "@/components/shared/ScrewMark";
import { icons } from "@/lib/home-page.data";

const INACTIVE_OPACITY = 0.28;
const ACTIVE_OPACITY = 1;
const EASE = [0.22, 1, 0.36, 1] as const;

export function DriveItHomeSection() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const count = icons.length;
  const current = icons[active];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const next = Math.min(count - 1, Math.floor(progress * count));
    setActive((value) => (value === next ? value : next));
  });

  return (
    <section ref={sectionRef} className="relative bg-black" style={{ height: `${count * 100}vh` }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="relative mx-auto flex h-full w-full max-w-384 flex-col items-center justify-center px-5">
          <div className="flex items-end justify-center gap-4 sm:gap-8 lg:gap-12">
            {icons.map((icon, index) => {
              const isActive = index === active;
              const fadeSide =
                index === 0 ? "left" : index === count - 1 ? "right" : null;

              return (
                <motion.button
                  key={icon.src}
                  type="button"
                  aria-label={`Show ${icon.alt}`}
                  aria-pressed={isActive}
                  className="relative overflow-hidden border-0 bg-transparent p-0"
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
                    ease: EASE,
                  }}
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
                    transition={{ duration: 0.55, ease: EASE }}
                  />
                  {fadeSide ? (
                    <motion.div
                      aria-hidden
                      className={`pointer-events-none absolute inset-0 ${
                        fadeSide === "left"
                          ? "bg-linear-to-r from-black/85 to-transparent to-80%"
                          : "bg-linear-to-l from-black/85 to-transparent to-80%"
                      }`}
                      animate={{ opacity: isActive ? 0 : 1 }}
                      transition={{ duration: 0.55, ease: EASE }}
                    />
                  ) : null}
                </motion.button>
              );
            })}
          </div>

          <div className="relative mt-20 flex w-full max-w-xl items-center justify-center gap-6 sm:gap-10 lg:gap-14">
            <ScrewMark className="-rotate-45 invert opacity-40" size={17} />

            <div className="relative min-h-35 flex-1 text-center text-white sm:min-h-37.5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.src}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: EASE }}
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

            <ScrewMark className="rotate-45 invert opacity-40" size={17} />
          </div>
        </div>
      </div>
    </section>
  );
}
