import Image from "next/image";
import { ScrewMark } from "@/components/shared/ScrewMark";
import { productCatalog } from "@/lib/home-page.data";

export function ProductCatalogSection() {
  return (
    <section
      id="career"
      className="grid min-h-130 lg:min-h-158.5 lg:grid-cols-2"
    >
      <div className="relative bg-[#ebc534] px-8 py-12 sm:px-16 lg:px-22.5 lg:py-22.5 flex flex-col items-center justify-center">
        <ScrewMark className="absolute top-7.5 left-7.5 rotate-45" size={17} />
        <ScrewMark className="absolute top-7.5 right-7.5 rotate-45" size={17} />
        <ScrewMark className="absolute bottom-7.5 left-7.5 rotate-45" size={17} />
        <ScrewMark className="absolute right-7.5 bottom-7.5 rotate-45" size={17} />

        <h2 className="font-canela text-[40px] leading-12 tracking-[1.92px] text-[#282828] sm:text-[48px] ">
          Products
        </h2>
        <ul className="mt-7.5 font-canela text-[16px] leading-10 tracking-[0.9px] text-[#282828]">
          {productCatalog.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="relative min-h-90 lg:min-h-158.5">
        <Image
          src="/images/product-1.png"
          alt="Close-up of a precision screw"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </section>
  );
}
