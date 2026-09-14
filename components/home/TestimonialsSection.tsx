import { testimonials } from "@/lib/home-page.data";
import { TestimonialCard } from "@/components/shared/Stars";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 lg:py-25">
      <h2 className="text-center font-canela text-[36px] leading-15 tracking-[1.92px] text-[#282828] sm:text-[48px]">
        Testimonials
      </h2>

      <div className="mx-auto mt-7.5 grid max-w-354 gap-7.5 px-5 sm:px-10 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <TestimonialCard key={`${item.name}-${index}`} testimonial={item} />
        ))}
      </div>
    </section>
  );
}
