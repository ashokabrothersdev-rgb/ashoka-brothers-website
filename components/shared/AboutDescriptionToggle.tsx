"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ReadMoreButton } from "@/components/shared/ReadMoreButton";

const EASE = [0.22, 1, 0.36, 1] as const;

type AboutDescriptionToggleProps = {
  readMoreDescription: string;
  buttonText?: string;
};

export function AboutDescriptionToggle({
  readMoreDescription,
  buttonText = "Read More",
}: AboutDescriptionToggleProps) {
  const [expanded, setExpanded] = useState(false);
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0 : 0.45;

  return (
    <>
      <motion.div
        initial={false}
        animate={{ gridTemplateRows: expanded ? "1fr" : "0fr" }}
        transition={{ duration, ease: EASE }}
        className="grid"
      >
        <div className="min-h-0 overflow-hidden">
          <motion.p
            aria-hidden={!expanded}
            initial={false}
            animate={{
              opacity: expanded ? 1 : 0,
              y: expanded ? 0 : 8,
            }}
            transition={{
              duration,
              delay: expanded && !reduceMotion ? 0.06 : 0,
              ease: EASE,
            }}
            className="pt-5 font-canela text-[14px] leading-7 text-[#282828] sm:text-[17px]"
          >
            {readMoreDescription}
          </motion.p>
        </div>
      </motion.div>

      <div className="mt-7.5 flex justify-center">
        <ReadMoreButton
          text={expanded ? "Read Less" : buttonText}
          expanded={expanded}
          onClick={() => setExpanded((open) => !open)}
        />
      </div>
    </>
  );
}
