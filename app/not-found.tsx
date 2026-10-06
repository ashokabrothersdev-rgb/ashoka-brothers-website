import Image from "next/image";
import { ReadMoreButton } from "@/components/shared/ReadMoreButton";
import { ScrewMark } from "@/components/shared/ScrewMark";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      <Image
        src="/images/screw-hero.webp"
        alt=""
        fill
        priority
        className="hidden object-cover md:block"
        sizes="100vw"
      />
      <Image
        src="/images/screw-hero-m.webp"
        alt=""
        fill
        priority
        className="object-cover md:hidden"
        sizes="100vw"
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-88.75 bg-linear-to-b from-black/55 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-black/55" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-5 py-32 text-center">
        <p className="font-canela text-[88px] leading-none tracking-[0.06em] text-gold sm:text-[140px]">
          404
        </p>

        <div className="mt-4 flex items-center justify-center gap-4 sm:mt-6 sm:gap-7.5">
          <ScrewMark size={13} className="invert sm:mt-2" />
          <h1 className="font-canela text-[28px] leading-10 tracking-[1.92px] text-white sm:text-[48px] sm:leading-15">
            Page Not Found
          </h1>
          <ScrewMark size={13} className="invert sm:mt-2" />
        </div>

        <p className="mt-6 max-w-md font-canela text-[14px] leading-7 text-white/80 sm:text-[17px]">
          This page has come loose. The link may be broken, or the page may have
          moved.
        </p>

        <div className="mt-10">
          <ReadMoreButton href="/" text="Back to Home" />
        </div>
      </div>
    </section>
  );
}
