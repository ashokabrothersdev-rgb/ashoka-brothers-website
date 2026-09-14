import { ReadMoreButton } from "@/components/shared/ReadMoreButton";
import { ScrewMark } from "@/components/shared/ScrewMark";

export function AboutSection() {
  return (
    <section id="our-story" className="bg-white py-20 lg:py-[100px]">
      <div className="mx-auto max-w-[1000px] px-5 text-center">
        <div className="mb-6 flex items-center justify-center gap-6">
          <ScrewMark className="-rotate-45" size={13} />
          <h2 className="font-display text-[36px] leading-[60px] font-light tracking-[1.92px] text-[#282828] sm:text-[48px]">
            Ashoka Brothers
          </h2>
          <ScrewMark className="-rotate-45" size={13} />
        </div>

        <p className="font-display text-[16px] leading-[34px] font-light text-[#282828] sm:text-[17px]">
          Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type specimen book. It has
          electronic typesetting, remaining essentially unchanged Lorem Ipsum has been the
          industry&apos;s standard dummy text ever since type and scrambled it to make a type specimen
          book ic typesetting, remaining essentially unLorem Ipsum has been the industry&apos;s
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has
        </p>

        <div className="mt-10 flex justify-center">
          <ReadMoreButton href="#products" />
        </div>
      </div>
    </section>
  );
}
