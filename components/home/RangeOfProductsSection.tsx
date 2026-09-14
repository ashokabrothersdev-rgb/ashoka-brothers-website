const categories = [
  { src: "/screws.svg", label: "Screws", width: 100, height: 100 },
  { src: "/bolts.svg", label: "Bolts", width: 100, height: 100 },
  { src: "/nuts.svg", label: "Nuts", width: 100, height: 100 },
  { src: "/hooks.svg", label: "Hooks", width: 100, height: 100 },
];

export function RangeOfProductsSection() {
  return (
    <section id="range" className="relative overflow-hidden bg-[#f7f3ea] py-16 lg:py-[90px]">
      <div
        className="pointer-events-none absolute inset-x-0 top-[90px] hidden h-[254px] opacity-[0.12] lg:block"
        aria-hidden
      >
        <img
          src="/product-1.png"
          alt=""
          width={1536}
          height={1268}
          className="size-full object-cover object-center"
        />
      </div>

      <div className="relative mx-auto max-w-[1536px] px-5">
        <h2 className="text-center font-display text-[36px] leading-[60px] font-light tracking-[1.92px] text-[#282828] sm:text-[48px]">
          Range of Products
        </h2>

        <div className="mx-auto mt-10 grid max-w-[900px] grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
          {categories.map((item) => (
            <div key={item.label} className="flex flex-col items-center text-center">
              <img
                src={item.src}
                alt=""
                width={item.width}
                height={item.height}
                className="size-[80px] lg:size-[100px]"
              />
              <p className="mt-4 font-display text-[24px] leading-[34px] font-light text-[#282828] sm:text-[30px]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
