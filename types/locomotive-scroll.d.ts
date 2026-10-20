declare module "locomotive-scroll" {
  export default class LocomotiveScroll {
    constructor(options?: Record<string, unknown>);
    on(event: string, callback: (args: Record<string, unknown>) => void): void;
    off(event: string, callback: (args: Record<string, unknown>) => void): void;
    update(): void;
    destroy(): void;
    scrollTo(
      target: string | number | HTMLElement,
      options?: Record<string, unknown>,
    ): void;
    start(): void;
    stop(): void;
  }
}
