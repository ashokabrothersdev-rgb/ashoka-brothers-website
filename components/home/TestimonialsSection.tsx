"use client";

import { useRef, useState } from "react";
import { testimonials } from "@/lib/home-page.data";
import { TestimonialCard } from "@/components/shared/Stars";

export function TestimonialsSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const goTo = (index: number) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    scroller.scrollTo({
      left: index * scroller.clientWidth,
      behavior: "smooth",
    });
  };

  const onScroll = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const next = Math.round(scroller.scrollLeft / scroller.clientWidth);
    setActive(next);
  };

  return (
    <section id="testimonials" className="py-16 lg:py-25">
      <h2 className="text-center font-canela text-[28px] leading-15 tracking-[1.92px] text-[#282828] sm:text-[48px]">
        Testimonials
      </h2>

      <div className="mx-auto mt-7.5 max-w-354 px-5 sm:px-10">
        {/* Mobile Testimonials */}
        <div className="lg:hidden">
          <div
            ref={scrollerRef}
            onScroll={onScroll}
            className="flex snap-x snap-mandatory overflow-x-auto py-2 scrollbar-none"
          >
            {testimonials.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="w-full shrink-0 snap-center px-1"
              >
                <TestimonialCard testimonial={item} />
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((item, index) => {
              const isActive = index === active;

              return (
                <button
                  key={`${item.name}-dot-${index}`}
                  type="button"
                  aria-label={`Show testimonial ${index + 1}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    isActive ? "w-8 bg-gold" : "w-2 bg-[#d9d9d9]"
                  }`}
                  onClick={() => goTo(index)}
                />
              );
            })}
          </div>
        </div>

        {/* Desktop Testimonials */}
        <div className="hidden gap-7.5 lg:grid lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <TestimonialCard key={`${item.name}-${index}`} testimonial={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
