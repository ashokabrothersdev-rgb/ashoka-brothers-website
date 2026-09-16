import Link from "next/link";

type ReadMoreButtonProps = {
  href?: string;
};

export function ReadMoreButton({ href = "#products" }: ReadMoreButtonProps) {
  return (
    <Link
      href={href}
      className="group relative inline-flex h-12 w-45 items-center justify-center"
    >
      <span className="absolute inset-0 rounded-xs border-[0.6px] border-[#101010] bg-gold-button transition-transform duration-200 group-hover:-translate-y-px" />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-0.75 bottom-[-3.2px] h-[50.6px] w-45.5 rounded-xs border border-[#101010]"
      />
      <span className="relative z-10 flex items-center gap-3 font-canela sm:text-[16px] text-[14px] uppercase sm:leading-6.5 leading-5 tracking-[0.04em] text-[#101010]/80">
        <svg
          width="15"
          height="12"
          viewBox="0 0 15 12"
          fill="none"
          aria-hidden
        >
          <path d="M0 6h10.5" stroke="#101010" strokeWidth="1" />
          <path d="M8.2 1.2 13.5 6 8.2 10.8" stroke="#101010" strokeWidth="1" />
        </svg>
        Read More
      </span>
    </Link>
  );
}
