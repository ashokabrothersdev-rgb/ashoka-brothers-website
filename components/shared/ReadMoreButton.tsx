import Link from "next/link";

type ReadMoreButtonProps = {
  href?: string;
};

export function ReadMoreButton({ href = "#products" }: ReadMoreButtonProps) {
  return (
    <Link
      href={href}
      className="group relative inline-flex h-12 w-[180px] items-center justify-center"
    >
      <span className="absolute inset-0 rounded-[2px] border-[0.6px] border-[#101010] bg-[#f5db3e] transition-transform duration-200 group-hover:-translate-y-px" />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-[2px] -bottom-[2.6px] h-[50.6px] w-[182px] rounded-[2px] border border-[#101010]/55"
      />
      <span className="relative z-10 flex items-center gap-3 font-display text-[16px] uppercase leading-[26px] tracking-[0.04em] text-[#101010]/80">
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
