"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type ScrollRevealTextProps = {
  children: ReactNode;
  className?: string;
  as?: "p" | "div" | "span" | "h2" | "h3" | "h1" | "li" | "ul" | "a";
  delay?: number;
  once?: boolean;
  amount?: number;
  id?: string;
  href?: string;
  "aria-hidden"?: boolean | "true" | "false";
};

const EASE = [0.16, 1, 0.3, 1] as const;

export function ScrollRevealText({
  children,
  className,
  as = "p",
  delay = 0,
  once = true,
  amount = 0.35,
  id,
  href,
  "aria-hidden": ariaHidden,
}: ScrollRevealTextProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      id={id}
      href={href}
      aria-hidden={ariaHidden}
      className={className}
      initial={
        reduceMotion ? false : { opacity: 0, y: 28, filter: "blur(2px)" }
      }
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, amount }}
      transition={{
        duration: reduceMotion ? 0 : 1.4,
        delay: reduceMotion ? 0 : delay,
        ease: EASE,
      }}
    >
      {children}
    </MotionTag>
  );
}
