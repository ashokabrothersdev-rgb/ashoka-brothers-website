import Image from "next/image";

export function FactorySection() {
  return (
    <section aria-label="Ashoka Brothers factory illustration">
      <Image
        src="/main-image.png"
        alt="Illustrated Ashoka Brothers factory producing steel and brass fasteners"
        width={3072}
        height={1504}
        className="h-auto w-full"
        sizes="100vw"
      />
    </section>
  );
}
