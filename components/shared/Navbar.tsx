"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { links } from "@/lib/shared.data";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-22.5 max-w-384 items-center justify-between px-5 sm:px-10 lg:px-15">
        <Link href="#home" className="relative z-10 shrink-0">
          <Image
            src="/icons/logo.svg"
            alt="Ashoka Brothers"
            width={275}
            height={64}
            className="h-10 w-auto sm:h-12 lg:h-16"
            loading="eager"
          />
        </Link>

        <nav className="hidden items-center gap-6 xl:gap-8 2xl:gap-10 lg:flex">
          {links.map((link) => (
            <Link
              key={`${link.href}-${link.label}`}
              href={link.href}
              className="font-sans text-[13px] font-semibold uppercase leading-3.25 tracking-[0.65px] text-white transition-opacity hover:opacity-70"
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
          <span className="relative block h-4.25 w-6">
            <span
              className={`absolute left-0 h-px w-full origin-center bg-white transition duration-300 ${
                open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute top-1/2 right-0 h-px w-5 -translate-y-1/2 bg-white transition duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 h-px w-full origin-center bg-white transition duration-300 ${
                open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
              }`}
            />
          </span>
        </button>
      </div>

      <div className="pointer-events-none mx-auto h-px max-w-354 bg-white/30" />

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
