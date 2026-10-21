import Image from "next/image";
import { ScrollRevealText } from "@/components/shared/ScrollRevealText";
import { productCards, type ProductCard } from "@/data/products-page.data";

export function ProductGridSection() {
  return (
    <section id="products" className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[23%] bg-black sm:h-[55%] lg:h-[calc(100%-23rem)]" />

      <ScrollRevealText
        as="p"
        className="pointer-events-none absolute top-10 left-7 select-none font-serif text-[50px] leading-none font-semibold tracking-[5%] text-[#5D5D5D]/50 uppercase sm:text-[140px] md:left-65 lg:top-14.5 lg:text-[150px]"
        aria-hidden
      >
        Products
      </ScrollRevealText>

      <div className="relative mx-auto grid max-w-381.5 grid-cols-1 gap-x-6 gap-y-10 px-5 pt-19 pb-16 sm:px-10 sm:pt-24 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-20 lg:px-16 lg:pt-40 lg:pb-25">
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
  const onLightMobile = index >= 5;
  const onLightFromSm = index >= 21;
  const categoryTone = onLightFromSm
    ? "text-[#a8906a]"
    : onLightMobile
      ? "text-[#a8906a] sm:text-[#C9A74F]"
      : "text-[#C9A74F]";
  const nameTone = onLightFromSm
    ? "text-[#282828]"
    : onLightMobile
      ? "text-[#282828] sm:text-white"
      : "text-white";

  return (
    <article>
      <div className="relative aspect-square">
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
