import Image from "next/image";
import { ScrewMark } from "@/components/shared/ScrewMark";

const products = [
  "Flange Head self driving screws",
  "CSK Head self Driving screws",
  "pan head self driving screws",
  "truss head self drilling screws",
  "SS CSK head sheet metal screw",
  "SS star head sheet metal scew",
  "SS shaved head wood screw",
  "chip board screw lorem ipsum",
  "CSK head sheet metal screw",
  "Shaved wood head screws",
];

export function ProductCatalogSection() {
  return (
    <section id="career" className="grid min-h-[520px] lg:min-h-[634px] lg:grid-cols-2">
      <div className="relative bg-[#ebc534] px-8 py-12 sm:px-16 lg:px-[90px] lg:py-[90px]">
        <ScrewMark className="absolute top-[30px] left-[30px]" size={17} />
        <ScrewMark className="absolute top-[30px] right-[30px]" size={17} />
        <ScrewMark className="absolute bottom-[30px] left-[30px]" size={17} />
        <ScrewMark className="absolute right-[30px] bottom-[30px]" size={17} />

        <h2 className="font-display text-[40px] leading-[48px] font-light tracking-[1.92px] text-[#282828] sm:text-[48px]">
          Products
        </h2>
        <ul className="mt-6 font-display text-[16px] leading-10 font-light tracking-[0.9px] text-[#282828] sm:text-[18px]">
          {products.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="relative min-h-[360px] lg:min-h-[634px]">
        <Image
          src="/product-2.png"
          alt="Close-up of a precision screw"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </section>
  );
}
