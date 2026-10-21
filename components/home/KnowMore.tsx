import Link from "next/link";

type KnowMoreProps = {
  href: string;
  children: string;
  className?: string;
};

export function KnowMore({ href, children, className = "" }: KnowMoreProps) {
  return (
    <Link
      href={href}
      className={`viewMore doubleMargin text relative ${className}`}
      data-scroll=""
      data-scroll-repeat=""
    >
      <span className="has_transition_1000 uppercase">{children}</span>
    </Link>
  );
}
