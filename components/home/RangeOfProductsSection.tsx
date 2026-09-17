import { categories } from "@/lib/home-page.data";
import Image from "next/image";

export function RangeOfProductsSection() {
  return (
    <section id="range" className="relative overflow-hidden pt-16 lg:pt-25">
      <div className="relative mx-auto max-w-384 px-5">
        <h2 className="text-center font-canela text-[28px] leading-15 tracking-[1.92px] text-[#282828] sm:text-[48px]">
          Range of Products
        </h2>
      </div>

      <div className="mt-12 w-full bg-[#f5f1e7] py-12 sm:mt-10 sm:py-15">
        <div className="mx-auto flex max-w-225 flex-wrap items-start justify-center gap-x-16 gap-y-10 px-5 sm:gap-x-24 lg:gap-x-37.5">
          {categories.map((item) => (
            <div
              key={item.label}
              className="flex w-25 flex-col items-center text-center sm:w-auto"
            >
              <Image
                src={item.src}
                alt={item.label}
                width={item.width}
                height={item.height}
                className="size-20 lg:size-25"
              />
              <p className="mt-5 font-canela text-[24px] leading-8.5 text-[#282828] sm:text-[30px]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
