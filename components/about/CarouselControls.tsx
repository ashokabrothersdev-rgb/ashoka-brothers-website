"use client";

import Image from "next/image";

type CarouselControlsProps = {
  onBack: () => void;
  onNext: () => void;
  tone: "light" | "dark";
  className?: string;
};

export function CarouselControls({
  onBack,
  onNext,
  tone,
  className = "",
}: CarouselControlsProps) {
  const label = tone === "light" ? "text-white" : "text-[#101010]";
  const arrow =
    tone === "light"
      ? "h-2 w-12 sm:h-2.5 sm:w-auto"
      : "h-2 w-12 brightness-0 sm:h-2.5 sm:w-auto";
  const focus =
    tone === "light"
      ? "focus-visible:outline-white"
      : "focus-visible:outline-[#101010]";

  const buttonClass = `flex cursor-pointer items-center gap-3 text-[12px] leading-4 tracking-[0.14em] uppercase transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 sm:gap-5 sm:text-[13px] ${label} ${focus}`;

  return (
    <div className={`flex items-center justify-between gap-4 ${className}`}>
      <button
        type="button"
        onClick={onBack}
        className={buttonClass}
        aria-label="Show previous slide"
      >
        <Image
          src="/icons/left-arrow.svg"
          alt=""
          width={71}
          height={10}
          className={arrow}
        />
        Back
      </button>
      <button
        type="button"
        onClick={onNext}
        className={buttonClass}
        aria-label="Show next slide"
      >
        Next
        <Image
          src="/icons/right-arrow.svg"
          alt=""
          width={71}
          height={10}
          className={arrow}
        />
      </button>
    </div>
  );
}
