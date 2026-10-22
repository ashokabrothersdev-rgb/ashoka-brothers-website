export type LocoElement = {
  progress: number;
};

export type LocoScrollInstance = {
  scroll: { x: number; y: number };
  direction?: string | null;
  currentElements: Record<string, LocoElement>;
};

export type LocomotiveController = {
  on(event: "scroll", callback: (args: LocoScrollInstance) => void): void;
  off(event: "scroll", callback: (args: LocoScrollInstance) => void): void;
  update(): void;
  destroy(): void;
  scrollTo(
    target: string | number | HTMLElement,
    options?: Record<string, unknown>,
  ): void;
  start(): void;
  stop(): void;
};

let current: LocomotiveController | null = null;
const listeners = new Set<(loco: LocomotiveController | null) => void>();

export function getLoco() {
  return current;
}

export function setLoco(loco: LocomotiveController | null) {
  current = loco;
  listeners.forEach((listener) => listener(loco));
}

export function subscribeLoco(
  listener: (loco: LocomotiveController | null) => void,
) {
  listeners.add(listener);
  listener(current);
  return () => listeners.delete(listener);
}

/**
 * Scroll smoothly to an element. Locomotive only handles this while it moves
 * the page with transforms (smooth mode); on phones and with reduced motion
 * the page scrolls natively, where its scrollTo stops short of the target.
 */
export function scrollToElement(target: HTMLElement, offset = 0) {
  const smooth =
    document.documentElement.classList.contains("has-scroll-smooth");
  if (current && smooth) {
    current.start();
    current.scrollTo(target, { offset, duration: 900 });
    return;
  }
  const top = target.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({ top, behavior: "smooth" });
}
