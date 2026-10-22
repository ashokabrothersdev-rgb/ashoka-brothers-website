"use client";

import type { MouseEvent } from "react";
import { scrollToElement } from "@/lib/locomotive";

type TermsContentsProps = {
  items: { id: string; title: string }[];
};

export function TermsContents({ items }: TermsContentsProps) {
  // Locomotive moves the page with transforms, so hash links can't jump on
  // their own; without JavaScript the plain anchor still works.
  const scrollToSection = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    scrollToElement(target, -32);
  };

  return (
    <nav
      aria-labelledby="terms-contents-title"
      className="border border-[#282828]/10 p-6 sm:p-8"
    >
      <p
        id="terms-contents-title"
        className="font-sans text-[12px] leading-4 font-semibold tracking-[0.16em] text-[#a8906a] uppercase"
      >
        On this page
      </p>
      <ol className="mt-5 gap-x-10 sm:columns-2">
        {items.map((item, index) => (
          <li key={item.id} className="mb-2.5 break-inside-avoid">
            <a
              href={`#${item.id}`}
              onClick={(event) => scrollToSection(event, item.id)}
              className="group flex gap-3 font-sans text-[14px] leading-6 text-[#282828]/75 transition-colors hover:text-[#282828] sm:text-[15px]"
            >
              <span className="w-6 shrink-0 text-[12px] font-semibold tracking-[0.08em] text-[#a8906a] tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="decoration-[#a8906a] underline-offset-4 group-hover:underline">
                {item.title}
              </span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
