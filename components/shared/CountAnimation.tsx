"use client";

import {
  animate,
  useInView,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ScrollRevealText } from "@/components/shared/ScrollRevealText";

export function CountAnimation({
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
      <p className="font-jost font-bold text-[#ffc30b]">
        <span className="text-[38px] leading-none sm:text-[120px] lg:text-[172px] ">
          {display}
        </span>
        <span className="text-[24px] leading-none sm:text-[40px] lg:text-[48px] ">
          {suffix}
        </span>
      </p>
      <ScrollRevealText className="font-jost font-normal text-[14px] leading-5 text-[#272626] sm:text-[24px] sm:leading-6">
        {label}
      </ScrollRevealText>
    </div>
  );
}
