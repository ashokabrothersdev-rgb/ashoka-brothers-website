"use client";

import { motion } from "framer-motion";
import { ScrewMark } from "@/components/shared/ScrewMark";

const icons = [
  { src: "/screw.svg", width: 159, height: 196, alt: "Screws", className: "w-[120px] sm:w-[140px] lg:w-[159px]" },
  { src: "/nut-bolt.svg", width: 126, height: 179, alt: "Nuts and bolts", className: "w-[100px] sm:w-[118px] lg:w-[126px]" },
  { src: "/hook.svg", width: 133, height: 196, alt: "Hooks", className: "w-[108px] sm:w-[122px] lg:w-[133px]" },
];

export function DriveItHomeSection() {
  return (
    <section className="relative overflow-hidden bg-black py-24 lg:h-[800px] lg:py-0">
      <div className="pointer-events-none absolute top-[204px] left-1/2 hidden h-[140px] w-[530px] -translate-x-1/2 bg-gradient-to-r from-black via-transparent to-black lg:block" />

      <div className="relative mx-auto flex h-full max-w-[1536px] flex-col items-center justify-center px-5">
        <div className="flex items-end justify-center gap-4 sm:gap-8 lg:gap-10">
          {icons.map((icon, index) => (
            <motion.div
              key={icon.src}
              initial={{ opacity: 0, y: 56, rotate: index === 0 ? -8 : index === 2 ? 8 : 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: index * 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.img
                src={icon.src}
                alt={icon.alt}
                width={icon.width}
                height={icon.height}
                className={`${icon.className} h-auto`}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3.2 + index * 0.35,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 text-center text-white lg:mt-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <h2 className="font-display text-[28px] leading-10 tracking-[1.2px] sm:text-[30px]">
            Our Screws
            <br />
            Drive it Home
          </h2>
          <p className="mt-6 font-display text-[14px] leading-5 font-light text-white/80">
            Clean Threads.
            <br />
            Firm Hold.
            <br />
            Made to Last.
          </p>
        </motion.div>
      </div>

      <ScrewMark className="absolute bottom-8 left-[32.7%] hidden invert lg:block" size={17} />
      <ScrewMark className="absolute right-[32.7%] bottom-8 hidden rotate-180 invert lg:block" size={17} />
    </section>
  );
}
