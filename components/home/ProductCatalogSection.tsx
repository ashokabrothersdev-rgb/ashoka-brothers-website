import Image from "next/image";
import Link from "next/link";
import { ScrewMark } from "@/components/shared/ScrewMark";
import { productCatalog } from "@/data/home-page.data";

export function ProductCatalogSection() {
  return (
    <section
      id="career"
      className="grid min-h-130 lg:min-h-158.5 lg:grid-cols-2"
    >
      <div className="relative flex items-center max-sm:text-center justify-center bg-[#ebc534] px-8 py-12 sm:px-16 lg:px-22.5 lg:py-22.5">
        <ScrewMark className="absolute top-7.5 left-7.5 rotate-45" size={17} />
        <ScrewMark className="absolute top-7.5 right-7.5 rotate-45" size={17} />
        <ScrewMark
          className="absolute bottom-7.5 left-7.5 rotate-45"
          size={17}
        />
        <ScrewMark
          className="absolute right-7.5 bottom-7.5 rotate-45"
          size={17}
        />

        <div>
          <h2 className="font-canela text-[28px] leading-12 tracking-[1.92px] text-[#282828] sm:text-[48px]">
            Products
          </h2>
          <ul className="mt-5 font-canela text-[16px] leading-10 tracking-[0.9px] text-[#282828] sm:mt-7.5 sm:text-[18px]">
            {productCatalog.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <Link
            href="/products"
            className="group relative mt-8 inline-flex h-12 items-center justify-center px-7.5 sm:mt-10"
          >
            <span className="absolute inset-0 rounded-xs border-[0.6px] border-[#101010] bg-[#282828] transition-transform duration-200 group-hover:-translate-y-px" />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 translate-x-0.75 translate-y-[3.5px] rounded-xs border-r border-b border-[#101010]"
            />
            <span className="relative z-10 flex items-center gap-3 font-canela text-[14px] leading-5 tracking-[0.04em] text-white uppercase sm:text-[16px] sm:leading-6.5">
              <svg
                width="15"
                height="12"
                viewBox="0 0 15 12"
                fill="none"
                aria-hidden
              >
                <path d="M0 6h10.5" stroke="white" strokeWidth="1" />
                <path
                  d="M8.2 1.2 13.5 6 8.2 10.8"
                  stroke="white"
                  strokeWidth="1"
                />
              </svg>
              All Products
            </span>
          </Link>
        </div>
      </div>

      <div className="relative min-h-90 lg:min-h-158.5">
        <Image
          src="/images/products/product-1.png"
          alt="Close-up of a precision screw"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </section>
  );
}
