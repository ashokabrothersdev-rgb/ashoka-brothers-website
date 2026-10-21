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
