"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import { ReadMoreButton } from "@/components/shared/ReadMoreButton";
import { ScrewMark } from "@/components/shared/ScrewMark";
import { products } from "@/lib/home-page.data";

const SIDE_W = 120;
const CENTER_W = 600;
const SIDE_H = 380;
const CENTER_H = 500;
const DURATION = 0.6;
const EASE = [0.22, 1, 0.36, 1] as const;

type SlotOffset = -1 | 0 | 1;

export function OurProductsSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const locked = useRef(false);
  const reduceMotion = useReducedMotion();
  const count = products.length;
  const duration = reduceMotion ? 0 : DURATION;

  const paginate = (dir: 1 | -1) => {
    if (locked.current) return;
    locked.current = true;
    setDirection(dir);
    setIndex((value) => (value + dir + count) % count);
    window.setTimeout(
      () => {
        locked.current = false;
      },
      duration * 1000 + 50,
    );
  };

  const getProduct = (offset: SlotOffset) =>
    products[(index + offset + count) % count];

  return (
    <section
      id="products"
      className="relative overflow-hidden bg-black py-16 lg:py-30"
    >
      <div className="mx-auto grid max-w-384 items-center gap-12 px-5 sm:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,420px)] lg:gap-14 lg:px-20">
        <div
          className="relative flex items-center justify-center gap-3 overflow-hidden sm:gap-4"
          style={{ minHeight: CENTER_H }}
        >
          {([-1, 0, 1] as const).map((offset) => {
            const product = getProduct(offset);
            const isCenter = offset === 0;

            return (
              <motion.div
                key={`${index}-${offset}`}
                custom={{ offset, direction }}
                initial="enter"
                animate="center"
                variants={{
                  enter: ({
                    offset: slot,
                    direction: dir,
                  }: {
                    offset: SlotOffset;
                    direction: number;
                  }) => {
                    if (dir === 0) {
                      return {
                        width: slot === 0 ? CENTER_W : SIDE_W,
                        height: slot === 0 ? CENTER_H : SIDE_H,
                        opacity: slot === 0 ? 1 : 0.5,
                      };
                    }

                    // Incoming center: start as the side peek, then expand
                    if (slot === 0) {
                      return {
                        width: SIDE_W,
                        height: SIDE_H,
                        opacity: 0.55,
                      };
                    }

                    // Former center: start large, shrink into the opposite peek
                    if (slot === -dir) {
                      return {
                        width: CENTER_W,
                        height: CENTER_H,
                        opacity: 1,
                      };
                    }

                    // New far peek: fade/slide in from the travel direction
                    return {
                      width: SIDE_W * 0.7,
                      height: SIDE_H * 0.92,
                      opacity: 0,
                      x: dir * 32,
                    };
                  },
                  center: {
                    width: isCenter ? CENTER_W : SIDE_W,
                    height: isCenter ? CENTER_H : SIDE_H,
                    opacity: isCenter ? 1 : 0.5,
                    x: 0,
                  },
                }}
                transition={{ duration, ease: EASE }}
                className={
                  isCenter
                    ? "relative h-150 w-full max-w-160 shrink-0 overflow-hidden"
                    : "relative hidden h-85 w-27.5 shrink-0 overflow-hidden sm:block"
                }
              >
                {isCenter ? (
                  <>
                    <Image
                      src={product.src}
                      alt={product.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 90vw, 560px"
                      priority
                    />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-linear-to-t from-black/60 to-transparent px-4 pb-4 pt-12 sm:px-7.5 sm:pb-5">
                      <button
                        type="button"
                        className="flex items-center gap-5 text-[13px] cursor-pointer uppercase leading-4 tracking-[0.08em] text-white transition-opacity hover:opacity-80"
                        onClick={() => paginate(-1)}
                        aria-label="Show previous product"
                      >
                        <Image
                          src="/icons/left-arrow.svg"
                          alt=""
                          width={71}
                          height={10}
                          className="h-2.5 w-13 sm:w-17.75"
                        />
                        Back
                      </button>
                      <button
                        type="button"
                        className="flex items-center gap-5 text-[13px] uppercase cursor-pointer leading-4 tracking-[0.08em] text-white transition-opacity hover:opacity-80"
                        onClick={() => paginate(1)}
                        aria-label="Show next product"
                      >
                        Next
                        <Image
                          src="/icons/right-arrow.svg"
                          alt=""
                          width={71}
                          height={10}
                          className="h-2.5 w-13 sm:w-17.75"
                        />
                      </button>
                    </div>
                  </>
                ) : (
                  <button
                    type="button"
                    className="absolute inset-0"
                    onClick={() => paginate(offset === -1 ? -1 : 1)}
                    aria-label={
                      offset === -1
                        ? "Show previous product"
                        : "Show next product"
                    }
                  >
                    <Image
                      src={product.src}
                      alt={product.alt}
                      fill
                      className="object-cover"
                      sizes="110px"
                    />
                    <span className="absolute inset-0 bg-black/35" />
                  </button>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="text-white sm:px-5">
          <h2 className="font-canela text-[40px] leading-15 tracking-[1.92px] sm:text-[48px] flex items-center gap-7.5">
            Our Products
            <ScrewMark className="hidden invert lg:block mt-5 opacity-50" size={13} />
          </h2>
          <p className="mt-7.5 font-canela text-[16px] leading-8.5">
            Lorem Ipsum has been the industry&apos;s standard dummy text ever
            since the 1500s, when an unknown printer took a galley type and
            scrambled it to make a type specimen book.
          </p>
          <div className="mt-8">
            <ReadMoreButton href="#range" />
          </div>
        </div>
      </div>
    </section>
  );
}
