"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";
import { setLoco, type LocomotiveController } from "@/lib/locomotive";
import "locomotive-scroll/dist/locomotive-scroll.css";

export function LocomotiveScroll({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let cancelled = false;
    let scroll: LocomotiveController | null = null;
    const timers: number[] = [];

    const refresh = () => {
      if (!cancelled) scroll?.update();
    };

    const boot = async () => {
      const { default: LocomotiveScrollLib } = await import(
        "locomotive-scroll"
      );
      if (cancelled || !containerRef.current) return;

      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      scroll = new LocomotiveScrollLib({
        el: containerRef.current,
        smooth: !reduce,
        getDirection: true,
        scrollFromAnywhere: false,
        multiplier: 0.75,
        class: "show",
        smartphone: { smooth: false },
        tablet: { smooth: !reduce },
      }) as unknown as LocomotiveController;

      if (cancelled) {
        scroll.destroy();
        scroll = null;
        return;
      }

      setLoco(scroll);
      scroll.scrollTo(0, { duration: 0, disableLerp: true });
      timers.push(window.setTimeout(refresh, 400));
      timers.push(window.setTimeout(refresh, 1200));
      document.fonts?.ready.then(refresh).catch(() => undefined);
    };

    window.addEventListener("load", refresh);
    void boot();

    return () => {
      cancelled = true;
      timers.forEach((timer) => window.clearTimeout(timer));
      window.removeEventListener("load", refresh);
      setLoco(null);
      scroll?.destroy();
    };
  }, [pathname]);

  return (
    <div ref={containerRef} data-scroll-container className="relative">
      {children}
    </div>
  );
}
