import Image from "next/image";

const testimonials = [
  {
    quote:
      "Lorem delivered beyond our expectations. The quality of construction and attention to detail is remarkable. Our family is extremely happy with our new home. Lorem beyond",
    name: "Rakesh Roshan",
    role: "Lorem Ipsum",
  },
  {
    quote:
      "Lorem delivered beyond our expectations. The quality of construction and attention to detail is remarkable. Our family is extremely happy with our new home. Lorem beyond",
    name: "Rakesh Roshan",
    role: "Lorem Ipsum",
  },
  {
    quote:
      "Lorem delivered beyond our expectations. The quality of construction and attention to detail is remarkable. Our family is extremely happy with our new home. Lorem beyond",
    name: "Rakesh Roshan",
    role: "Lorem Ipsum",
  },
];

function Stars() {
  return (
    <div className="flex h-5 items-start gap-1.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden
          className="size-5"
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

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[#f7f3ea] py-16 lg:py-[90px]">
      <h2 className="text-center font-display text-[36px] leading-[60px] font-light tracking-[1.92px] text-[#282828] sm:text-[48px]">
        Testimonials
      </h2>

      <div className="mx-auto mt-10 grid max-w-[1416px] gap-8 px-5 sm:px-10 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <article
            key={`${item.name}-${index}`}
            className="relative bg-white px-[30px] py-[30px] shadow-[4px_4px_16px_0px_rgba(0,0,0,0.25)]"
          >
            <Stars />
            <p className="mt-6 min-h-[136px] text-[17px] leading-[34px] text-[#4f4f4f]">
              &ldquo;{item.quote}&rdquo;
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Image
                src="/testimonial-1.png"
                alt={item.name}
                width={64}
                height={64}
                className="size-16 rounded-full object-cover"
              />
              <div>
                <p className="font-quote text-[16px] leading-4 text-[#2b2b2b]">{item.name}</p>
                <p className="mt-2 text-[14px] leading-[14px] text-[#4a5565]">{item.role}</p>
              </div>
            </div>
            <img
              src="/quote.svg"
              alt=""
              width={54}
              height={54}
              className="absolute right-6 bottom-6 size-[54px]"
            />
          </article>
        ))}
      </div>
    </section>
  );
}
