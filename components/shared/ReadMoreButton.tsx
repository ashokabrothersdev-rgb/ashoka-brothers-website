import Link from "next/link";

type ReadMoreButtonProps = {
  href?: string;
  text: string;
  onClick?: () => void;
  expanded?: boolean;
};

export function ReadMoreButton({
  href = "#products",
  text,
  onClick,
  expanded,
}: ReadMoreButtonProps) {
  const className =
    "group relative inline-flex h-12 cursor-pointer items-center justify-center bg-transparent px-7.5";
  const content = (
    <>
      <span className="absolute inset-0 rounded-xs border-[0.6px] border-[#101010] bg-gold-button transition-transform duration-200 group-hover:-translate-y-px" />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 translate-x-0.75 translate-y-[3.5px] rounded-xs border-r border-b border-[#101010]"
      />
      <span className="relative z-10 flex items-center gap-3 font-canela text-[14px] leading-5 tracking-[0.04em] text-[#101010]/80 uppercase sm:text-[16px] sm:leading-6.5">
        <svg width="15" height="12" viewBox="0 0 15 12" fill="none" aria-hidden>
          <path d="M0 6h10.5" stroke="#101010" strokeWidth="1" />
          <path d="M8.2 1.2 13.5 6 8.2 10.8" stroke="#101010" strokeWidth="1" />
        </svg>
        {text}
      </span>
    </>
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-expanded={expanded}
        className={className}
      >
        {content}
      </button>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
