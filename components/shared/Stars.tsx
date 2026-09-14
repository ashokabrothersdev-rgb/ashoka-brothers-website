import { Testimonial } from "@/lib/home-page.data";
import Image from "next/image";

function Stars() {
  return (
    <div className="flex h-6 items-start gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden
          className="size-6"
        >
          <path
            d="M10 1.5l2.35 4.76 5.25.76-3.8 3.7.9 5.24L10 13.48 5.3 15.96l.9-5.24-3.8-3.7 5.25-.76L10 1.5z"
            fill="#FFC30B"
          />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="relative px-10 py-7.5 shadow-[4px_4px_16px_0px_rgba(0,0,0,0.25)]">
      <Stars />
      <p className="mt-7 min-h-34 text-[17px] leading-8.5 text-[#4f4f4f]">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-8 flex items-center gap-4">
        <Image
          src="/images/testimonial-1.png"
          alt={testimonial.name}
          width={64}
          height={64}
          className="size-16 rounded-full object-cover"
        />
        <div>
          <p className="font-gilda text-[16px] leading-4 text-[#2b2b2b]">
            {testimonial.name}
          </p>
          <p className="mt-2 text-[14px] leading-3.5 text-[#4a5565]">
            {testimonial.role}
          </p>
        </div>
      </div>
      <Image
        src="/icons/quote.svg"
        alt="Quote Icon"
        width={54}
        height={54}
        className="absolute right-8 top-6 size-13.5 opacity-20"
      />
    </article>
  );
}
