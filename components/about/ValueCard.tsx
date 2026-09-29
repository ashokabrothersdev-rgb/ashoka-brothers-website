import { AboutCarouselItem } from "@/data/about-page.data";
import { motion } from "framer-motion";
import Image from "next/image";
import { aboutPage } from "@/data/about-page.data";

interface ValueCardProps {
  idPrefix: string;
  item: AboutCarouselItem;
  index: number;
  expanded: boolean;
  onToggle: () => void;
  reduceMotion: boolean;
  widen: boolean;
  sizes: string;
}

export function ValueCard({
  idPrefix,
  item,
  index,
  expanded,
  onToggle,
  reduceMotion,
  widen,
  sizes,
}: ValueCardProps) {
  const descriptionId = `${idPrefix}-value-${index}`;
  const motionDuration = reduceMotion ? 0 : 0.5;

  const width = expanded ? aboutPage.EXPANDED_WIDTH : aboutPage.COLLAPSED_WIDTH;

  return (
    <motion.article
      className={`relative h-full overflow-hidden bg-[#111] ${widen ? "shrink-0" : "w-full"}`}
      initial={false}
      animate={widen ? { width } : { width: "100%" }}
      transition={{ duration: reduceMotion ? 0 : 0.55, ease: aboutPage.EASE }}
    >
      <div className="absolute inset-0">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover"
          sizes={sizes}
        />
      </div>

      <motion.button
        type="button"
        aria-expanded={expanded}
        aria-controls={descriptionId}
        aria-label={
          expanded
            ? `Hide description for ${item.title}`
            : `Show description for ${item.title}`
        }
        onClick={onToggle}
        whileTap={reduceMotion ? undefined : { scale: 0.92 }}
        className="absolute top-4 left-4 z-20 flex size-11 cursor-pointer items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <span className="flex size-8 items-center justify-center rounded-full border border-white/90">
          <span className="relative block size-3 text-white">
            <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-current" />
            <motion.span
              className="absolute top-0 left-1/2 h-full w-px origin-center -translate-x-1/2 bg-current"
              initial={false}
              animate={{ scaleY: expanded ? 0 : 1 }}
              transition={{
                duration: reduceMotion ? 0 : 0.28,
                ease: aboutPage.EASE,
              }}
            />
          </span>
        </span>
      </motion.button>

      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="pointer-events-none absolute inset-x-0 -top-24 bottom-0 bg-linear-to-t from-black/85 via-black/45 to-transparent" />
        <div className="relative px-5 pt-16 pb-6 sm:px-7 sm:pb-8">
          <p className="font-jost text-[11px] tracking-[0.22em] text-white/75 uppercase">
            {item.badge}
          </p>
          <h3 className="mt-2 font-canela text-[30px] leading-[1.15] font-light text-white sm:text-[30px]">
            {item.title}
          </h3>
          <motion.div
            initial={false}
            animate={{ gridTemplateRows: expanded ? "1fr" : "0fr" }}
            transition={{ duration: motionDuration, ease: aboutPage.EASE }}
            className="grid"
          >
            <div className="min-h-0 overflow-hidden">
              <motion.p
                id={descriptionId}
                aria-hidden={!expanded}
                initial={false}
                animate={{
                  opacity: expanded ? 1 : 0,
                  y: expanded ? 0 : 10,
                }}
                transition={{
                  duration: motionDuration,
                  delay: expanded && !reduceMotion ? 0.06 : 0,
                  ease: aboutPage.EASE,
                }}
                className="pt-3 font-canela text-[14px] leading-6 text-white/85 sm:text-[17px] sm:leading-7"
              >
                {item.description}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}
