import { ReadMoreButton } from "@/components/shared/ReadMoreButton";
import { ScrewMark } from "@/components/shared/ScrewMark";

export function AboutSection() {
  return (
    <section id="our-story" className="py-20 lg:py-25">
      <div className="mx-auto max-w-250 px-5 text-center">
        <div className="mb-6 flex items-center justify-center gap-7.5">
          <ScrewMark size={13} className="mt-4"/>
          <h2 className="font-canela text-[36px] leading-15 tracking-[1.92px] text-[#282828] sm:text-[48px]">
            Ashoka Brothers
          </h2>
          <ScrewMark size={13} className="mt-4"/>
        </div>

        <p className="font-canela text-[16px] leading-8.5 text-[#282828] sm:text-[17px]">
          Lorem Ipsum has been the industry&apos;s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has electronic
          typesetting, remaining essentially unchanged Lorem Ipsum has been the
          industry&apos;s standard dummy text ever since type and scrambled it
          to make a type specimen book ic typesetting, remaining essentially
          unLorem Ipsum has been the industry&apos;s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        <div className="mt-10 flex justify-center">
          <ReadMoreButton href="#products" />
        </div>
      </div>
    </section>
  );
}
