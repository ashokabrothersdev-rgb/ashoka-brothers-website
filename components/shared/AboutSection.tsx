import { ReadMoreButton } from "@/components/shared/ReadMoreButton";
import { ScrewMark } from "@/components/shared/ScrewMark";

interface AboutSectionProps {
  title: string;
  description: string;
}

export function AboutSection({ title, description }: AboutSectionProps) {
  return (
    <section id="our-story" className="py-20 lg:py-25">
      <div className="mx-auto max-w-300 px-5 text-center">
        <div className="mb-7.5 flex items-center justify-center gap-7.5">
          <ScrewMark size={13} className="sm:mt-4" />
          <h2 className="font-canela text-[28px] leading-15 tracking-[1.92px] text-[#282828] sm:text-[48px]">
            {title}
          </h2>
          <ScrewMark size={13} className="sm:mt-4" />
        </div>

        <p className="font-canela text-[14px] leading-7 text-[#282828] sm:text-[17px]">
          {description}
        </p>

        <div className="mt-7.5 flex justify-center">
          <ReadMoreButton href="#products" text="Our Story" />
        </div>
      </div>
    </section>
  );
}
