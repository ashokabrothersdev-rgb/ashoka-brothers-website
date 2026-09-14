"use client";

import { animate, useInView, useMotionValue, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 150, suffix: "%", label: "Return on Investment" },
  { value: 90, suffix: "%", label: "Repeat Clients" },
  { value: 600, suffix: "K", label: "Lives Positively Impacted" },
];

function AnimatedStat({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.45 });
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useMotionValueEvent(motionValue, "change", (latest) => {
    setDisplay(Math.round(latest));
  });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionValue, value, {
      duration: 2.1,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [isInView, motionValue, value]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <p className="font-stats font-bold text-[#ffc30b]">
        <span className="text-[72px] leading-none sm:text-[120px] lg:text-[172px] lg:leading-[172px]">
          {display}
        </span>
        <span className="text-[28px] leading-none sm:text-[40px] lg:text-[48px] lg:leading-[172px]">
          {suffix}
        </span>
      </p>
      <p className="mt-1 font-stats text-[18px] leading-6 text-[#272626] sm:text-[24px]">{label}</p>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-center gap-10 px-5 sm:flex-row sm:gap-12 lg:gap-[104px]">
        {stats.map((stat) => (
          <AnimatedStat key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
