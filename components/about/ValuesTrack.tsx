import { AboutCarouselItem, aboutPage } from "@/data/about-page.data";
import { AnimatePresence, motion } from "framer-motion";
import { ValueCard } from "./ValueCard";

const slideVariants = {
  enter: (dir: number) => ({ x: dir >= 0 ? "100%" : "-100%" }),
  center: { x: "0%" },
  exit: (dir: number) => ({ x: dir >= 0 ? "-100%" : "100%" }),
};

const fadeVariants = {
  enter: { opacity: 0, x: 0 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 0 },
};

function windowIndices(start: number, count: number, size: number) {
  const length = Math.min(size, count);
  return Array.from({ length }, (_, offset) => (start + offset) % count);
}

function expandedShift(indices: number[], expanded: number | null) {
  if (expanded == null) return 0;

  const local = indices.indexOf(expanded);
  if (local < 0) return 0;

  let start = 0;
  for (let index = 0; index < local; index += 1) {
    start += aboutPage.COLLAPSED_WIDTH + aboutPage.CARD_GAP;
  }

  const end = start + aboutPage.EXPANDED_WIDTH;
  return end <= aboutPage.DESKTOP_FRAME ? 0 : aboutPage.DESKTOP_FRAME - end;
}

interface ValuesTrackProps {
  idPrefix: string;
  className: string;
  items: AboutCarouselItem[];
  start: number;
  direction: number;
  perView: number;
  widen: boolean;
  expanded: number | null;
  onToggle: (index: number) => void;
  reduceMotion: boolean;
}

export function ValuesTrack({
  idPrefix,
  className,
  items,
  start,
  direction,
  perView,
  widen,
  expanded,
  onToggle,
  reduceMotion,
}: ValuesTrackProps) {
  const indices = windowIndices(start, items.length, perView);
  const shift = widen ? expandedShift(indices, expanded) : 0;

  return (
    <div
      className={className}
      style={
        widen
          ? { height: aboutPage.CARD_HEIGHT, maxWidth: aboutPage.DESKTOP_FRAME }
          : { height: aboutPage.MOBILE_CARD_HEIGHT }
      }
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={start}
          custom={direction}
          variants={reduceMotion ? fadeVariants : slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: reduceMotion ? 0.2 : 0.6,
            ease: aboutPage.EASE,
          }}
          className={
            widen ? "absolute top-0 left-0 h-full" : "absolute inset-0"
          }
        >
          <motion.div
            className={widen ? "flex h-full w-max" : "h-full"}
            initial={false}
            animate={{ x: shift }}
            transition={{
              duration: reduceMotion ? 0 : 0.55,
              ease: aboutPage.EASE,
            }}
            style={widen ? { gap: aboutPage.CARD_GAP } : undefined}
          >
            {indices.map((itemIndex) => (
              <ValueCard
                key={itemIndex}
                idPrefix={idPrefix}
                item={items[itemIndex]}
                index={itemIndex}
                expanded={expanded === itemIndex}
                onToggle={() => onToggle(itemIndex)}
                reduceMotion={reduceMotion}
                widen={widen}
                sizes={widen ? "758px" : "374px"}
              />
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
