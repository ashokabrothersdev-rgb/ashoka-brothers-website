"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ReadMoreButton } from "@/components/shared/ReadMoreButton";
import { ScrewMark } from "@/components/shared/ScrewMark";
import { products } from "@/lib/home-page.data";

const SIDE_W = 120;
const CENTER_W = 600;
const SIDE_H = 380;
const CENTER_H = 500;
const DURATION = 0.6;
const EASE = [0.22, 1, 0.36, 1] as const;
const LG = 1024;

type SlotOffset = -1 | 0 | 1;

type CarouselSizes = {
  centerW: number;
  centerH: number;
  sideW: number;
  sideH: number;
  isDesktop: boolean;
};

function getCarouselSizes(): CarouselSizes {
  if (typeof window === "undefined" || window.innerWidth >= LG) {
    return {
      centerW: CENTER_W,
      centerH: CENTER_H,
      sideW: SIDE_W,
      sideH: SIDE_H,
      isDesktop: true,
    };
  }

  const vw = window.innerWidth;
  const sideW = Math.round(Math.min(56, vw * 0.13));
  const gap = 12;
  const centerW = Math.round(vw - sideW * 2 - gap * 2);

  return {
    centerW,
    centerH: centerW,
    sideW,
    sideH: Math.round(centerW * 0.78),
    isDesktop: false,
  };
}

export function OurProductsSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [sizes, setSizes] = useState<CarouselSizes>({
    centerW: 280,
    centerH: 280,
    sideW: 48,
    sideH: 218,
    isDesktop: false,
  });
  const locked = useRef(false);
  const reduceMotion = useReducedMotion();
  const count = products.length;
  const duration = reduceMotion ? 0 : DURATION;

  useEffect(() => {
    const update = () => setSizes(getCarouselSizes());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

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
      className="relative overflow-hidden bg-black py-12.5 lg:py-30"
    >
      <div className="mx-auto flex max-w-384 flex-col-reverse items-center gap-12 px-5 sm:px-10 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(280px,420px)] lg:gap-14 lg:px-20">
        <div className="w-[calc(100%+2.5rem)] -mx-5 sm:w-[calc(100%+5rem)] sm:-mx-10 lg:mx-0 lg:w-full">
          <div
            className="relative flex items-center justify-center gap-3 overflow-hidden"
            style={{ minHeight: sizes.centerH }}
          >
            {([-1, 0, 1] as const).map((offset) => {
              const product = getProduct(offset);
              const isCenter = offset === 0;
              const peekOpacity = sizes.isDesktop ? 0.5 : 1;

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
                          width: slot === 0 ? sizes.centerW : sizes.sideW,
                          height: slot === 0 ? sizes.centerH : sizes.sideH,
                          opacity: slot === 0 ? 1 : peekOpacity,
                        };
                      }

                      if (slot === 0) {
                        return {
                          width: sizes.sideW,
                          height: sizes.sideH,
                          opacity: sizes.isDesktop ? 0.55 : 0.85,
                        };
                      }

                      if (slot === -dir) {
                        return {
                          width: sizes.centerW,
                          height: sizes.centerH,
                          opacity: 1,
                        };
                      }

                      return {
                        width: sizes.sideW * 0.7,
                        height: sizes.sideH * 0.92,
                        opacity: 0,
                        x: dir * 32,
                      };
                    },
                    center: {
                      width: isCenter ? sizes.centerW : sizes.sideW,
                      height: isCenter ? sizes.centerH : sizes.sideH,
                      opacity: isCenter ? 1 : peekOpacity,
                      x: 0,
                    },
                  }}
                  transition={{ duration, ease: EASE }}
                  className="relative shrink-0 overflow-hidden"
                >
                  {isCenter ? (
                    <>
                      <Image
                        src={product.src}
                        alt={product.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 75vw, 560px"
                        priority
                      />
                      <div className="absolute inset-x-0 bottom-0 hidden items-end justify-between bg-linear-to-t from-black/60 to-transparent px-7.5 pt-12 pb-5 lg:flex">
                        <button
                          type="button"
                          className="flex cursor-pointer items-center gap-5 text-[13px] leading-4 tracking-[0.08em] text-white uppercase transition-opacity hover:opacity-80"
                          onClick={() => paginate(-1)}
                          aria-label="Show previous product"
                        >
                          <Image
                            src="/icons/left-arrow.svg"
                            alt=""
                            width={71}
                            height={10}
                            className="h-2.5 w-auto"
                          />
                          Back
                        </button>
                        <button
                          type="button"
                          className="flex cursor-pointer items-center gap-5 text-[13px] leading-4 tracking-[0.08em] text-white uppercase transition-opacity hover:opacity-80"
                          onClick={() => paginate(1)}
                          aria-label="Show next product"
                        >
                          Next
                          <Image
                            src="/icons/right-arrow.svg"
                            alt=""
                            width={71}
                            height={10}
                            className="h-2.5 w-auto"
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
                        sizes="120px"
                      />
                      <span className="absolute inset-0 bg-black/20 lg:bg-black/35" />
                    </button>
                  )}
                </motion.div>
              );
            })}
          </div>

          <div
            className="mx-auto mt-8 flex items-center justify-between lg:hidden"
            style={{ width: sizes.centerW }}
          >
            <button
              type="button"
              className="cursor-pointer p-1 opacity-80 transition-opacity hover:opacity-100"
              onClick={() => paginate(-1)}
              aria-label="Show previous product"
            >
              <Image
                src="/icons/left-arrow.svg"
                alt=""
                width={71}
                height={10}
                className="h-2.5 w-auto"
              />
            </button>
            <button
              type="button"
              className="cursor-pointer p-1 opacity-80 transition-opacity hover:opacity-100"
              onClick={() => paginate(1)}
              aria-label="Show next product"
            >
              <Image
                src="/icons/right-arrow.svg"
                alt=""
                width={71}
                height={10}
                className="h-2.5 w-auto"
              />
            </button>
          </div>
        </div>

        <div className="text-white sm:px-5">
          <h2 className="flex items-center gap-7.5 font-canela text-[28px] leading-15 tracking-[1.92px] sm:text-[48px]">
            Our Products
            <ScrewMark
              className="mt-5 hidden opacity-50 invert lg:block"
              size={13}
            />
          </h2>
          <p className="mt-4 font-canela text-[14px] leading-7 sm:mt-7.5 sm:text-[16px] sm:leading-8.5">
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
