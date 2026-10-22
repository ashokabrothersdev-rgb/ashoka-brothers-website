import Image from "next/image";
import { SizeCharts } from "@/components/products/SizeCharts";
import { ScrollRevealText } from "@/components/shared/ScrollRevealText";
import { productCards, type ProductCard } from "@/data/products-page.data";

// The black band ends halfway down the first card that sits on white, so it
// follows the cards at every width. One column: the sixth card. Three
// columns: the start of the last row.
const FIRST_LIGHT_CARD = 5;
const FIRST_LIGHT_CARD_LG = Math.floor((productCards.length - 1) / 3) * 3;

export function ProductGridSection() {
  return (
    <section id="products" className="relative isolate overflow-hidden bg-white">

      <ScrollRevealText
        as="p"
        className="pointer-events-none absolute top-10 left-7 select-none font-serif text-[50px] leading-none font-semibold tracking-[5%] text-[#5D5D5D]/50 uppercase sm:text-[140px] md:left-65 lg:top-14.5 lg:text-[150px]"
        aria-hidden
      >
        Products
      </ScrollRevealText>

      <div className="relative mx-auto max-w-381.5 px-5 pt-28 sm:px-10 sm:pt-52 lg:px-16 lg:pt-56">
        <SizeCharts />
      </div>

      <div className="relative mx-auto grid max-w-381.5 grid-cols-1 gap-x-6 gap-y-10 px-5 pt-12 pb-16 sm:px-10 sm:pt-14 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-20 lg:px-16 lg:pt-16 lg:pb-25">
        {productCards.map((product, index) => (
          <ProductCard
            key={`${product.name}-${index}`}
            product={product}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

type ProductCardProps = {
  product: ProductCard;
  index: number;
};

function ProductCard({ product, index }: ProductCardProps) {
  const onLight = index >= FIRST_LIGHT_CARD;
  const onLightLg = index >= FIRST_LIGHT_CARD_LG;
  const categoryTone = `${onLight ? "text-[#a8906a]" : "text-[#C9A74F]"} ${onLightLg ? "lg:text-[#a8906a]" : "lg:text-[#C9A74F]"}`;
  const nameTone = `${onLight ? "text-[#282828]" : "text-white"} ${onLightLg ? "lg:text-[#282828]" : "lg:text-white"}`;
  const bandEnd =
    index === FIRST_LIGHT_CARD_LG
      ? "max-lg:hidden"
      : index === FIRST_LIGHT_CARD
        ? "lg:hidden"
        : null;

  return (
    <article>
      <div className="relative aspect-square">
        {bandEnd && (
          <span
            aria-hidden
            className={`pointer-events-none absolute -inset-x-[100vw] -top-[20000px] bottom-1/2 -z-10 bg-black ${bandEnd}`}
          />
        )}
        <Image
          src={product.src}
          alt={product.alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        <span className="absolute bottom-5 left-5 flex md:size-12.5 size-10 items-center justify-center bg-[#f4efe6]">
          <Image
            src="/icons/screw-100.svg"
            alt="Icon of the product"
            width={32}
            height={32}
            className="md:size-8 size-6"
          />
        </span>
        {product.hasInnerBorder && (
          <span className="absolute inset-2.5 border border-white" />
        )}
      </div>

      <ScrollRevealText
        className={`mt-5 font-sans text-[12px] leading-2.5 tracking-[0.16em] uppercase ${categoryTone}`}
      >
        {product.category}
      </ScrollRevealText>
      <ScrollRevealText
        as="h3"
        delay={0.1}
        className={`mt-2.5 font-serif text-[24px] leading-7.5 md:mt-4 sm:text-[28px] ${nameTone}`}
      >
        {product.name}
      </ScrollRevealText>
    </article>
  );
}
