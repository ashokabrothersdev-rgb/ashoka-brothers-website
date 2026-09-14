"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#our-story", label: "Our Story" },
  { href: "#products", label: "Products" },
  { href: "#range", label: "Lorem Ipsum" },
  { href: "#career", label: "Career" },
  { href: "#testimonials", label: "Lorem Ipsum" },
  { href: "#contact", label: "Contact Us" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-[90px] max-w-[1536px] items-center justify-between px-5 sm:px-10 lg:px-[60px]">
        <Link href="#home" className="relative z-10 shrink-0">
          <img
            src="/logo.svg"
            alt="Ashoka Brothers"
            width={275}
            height={64}
            className="h-10 w-auto sm:h-12 lg:h-16"
          />
        </Link>

        <nav className="hidden items-center gap-6 xl:gap-8 2xl:gap-10 lg:flex">
          {links.map((link) => (
            <Link
              key={`${link.href}-${link.label}`}
              href={link.href}
              className="font-sans text-[13px] font-semibold uppercase leading-[13px] tracking-[0.65px] text-white transition-opacity hover:opacity-70"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="relative z-10 flex size-10 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-6 flex-col gap-1.5">
            <span
              className={`h-px w-full bg-white transition ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span className={`h-px w-full bg-white transition ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-px w-full bg-white transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      <div className="pointer-events-none mx-auto h-px max-w-[1416px] bg-white/70" />

      {open ? (
        <div className="border-b border-white/20 bg-black/90 px-5 py-6 backdrop-blur-md lg:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={`mobile-${link.href}-${link.label}`}
                href={link.href}
                className="font-sans text-sm font-semibold uppercase tracking-[0.65px] text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
