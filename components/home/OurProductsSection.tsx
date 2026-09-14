"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ReadMoreButton } from "@/components/shared/ReadMoreButton";
import { ScrewMark } from "@/components/shared/ScrewMark";

const products = [
  {
    src: "/product-1.png",
    alt: "Gold wood screw driven into timber",
    width: 1536,
    height: 1268,
  },
  {
    src: "/product-2.png",
    alt: "Silver self-tapping screw standing upright",
    width: 1200,
    height: 1000,
  },
];

export function OurProductsSection() {
  const [index, setIndex] = useState(0);
  const count = products.length;
  const current = products[index];
  const previous = products[(index - 1 + count) % count];
  const next = products[(index + 1) % count];

  return (
    <section id="products" className="relative overflow-hidden bg-black py-16 lg:py-[120px]">
      <div className="mx-auto grid max-w-[1536px] items-center gap-12 px-5 sm:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,520px)] lg:gap-8 lg:px-20">
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          <button
            type="button"
            className="relative hidden h-[380px] w-[120px] shrink-0 overflow-hidden border border-white opacity-50 sm:block"
            onClick={() => setIndex((value) => (value - 1 + count) % count)}
            aria-label="Show previous product"
          >
            <Image
              src={previous.src}
              alt=""
              fill
              className="object-cover"
              sizes="120px"
            />
            <span className="absolute inset-0 bg-black/30" />
          </button>

          <div className="relative aspect-[6/5] w-full max-w-[600px] overflow-hidden border border-white/50">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.src}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45 }}
              >
                <Image
                  src={current.src}
                  alt={current.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 600px"
                  priority={false}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            type="button"
            className="relative hidden h-[380px] w-[120px] shrink-0 overflow-hidden border border-white opacity-50 sm:block"
            onClick={() => setIndex((value) => (value + 1) % count)}
            aria-label="Show next product"
          >
            <Image src={next.src} alt="" fill className="object-cover" sizes="120px" />
            <span className="absolute inset-0 bg-black/30" />
          </button>
        </div>

        <div className="relative max-w-[420px] text-white">
          <ScrewMark className="absolute top-0 right-0 hidden invert lg:block" size={13} />
          <h2 className="font-display text-[40px] leading-[60px] font-light tracking-[1.92px] text-white/80 sm:text-[48px]">
            Our Products
          </h2>
          <p className="mt-4 font-display text-[17px] leading-[34px] font-light text-white/80">
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
            unknown printer took a galley type and scrambled it to make a type specimen book. It has
          </p>
          <div className="mt-8">
            <ReadMoreButton href="#range" />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-[600px] items-center justify-between px-5 sm:px-10 lg:mx-[212px] lg:mt-8 lg:max-w-none lg:px-0">
        <button
          type="button"
          className="flex items-center gap-3 text-[14px] uppercase leading-4 tracking-[0.08em] text-white"
          onClick={() => setIndex((value) => (value - 1 + count) % count)}
        >
          <img src="/left-arrow.svg" alt="" width={71} height={10} className="h-[10px] w-[71px]" />
          Back
        </button>
        <button
          type="button"
          className="flex items-center gap-3 text-[14px] uppercase leading-4 tracking-[0.08em] text-white"
          onClick={() => setIndex((value) => (value + 1) % count)}
        >
          Next
          <img src="/right-arrow.svg" alt="" width={71} height={10} className="h-[10px] w-[71px]" />
        </button>
      </div>
    </section>
  );
}
