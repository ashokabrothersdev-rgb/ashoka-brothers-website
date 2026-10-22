"use client";

import { useEffect, useRef } from "react";
import { preload } from "react-dom";
import { AutoplayVideo } from "@/components/shared/AutoplayVideo";
import { munniImage, munniVideo } from "@/data/home-page.data";
import { getLoco } from "@/lib/locomotive";

const heroPoster = munniImage("hero-poster.webp");

export function HomeHero() {
  const sectionRef = useRef<HTMLElement>(null);
  // First frame of the video, painted while the video itself buffers
  preload(heroPoster, { as: "image", fetchPriority: "high" });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const fitMobile = () => {
      if (window.innerWidth <= 740) {
        section.style.height = `${window.outerHeight}px`;
      } else {
        section.style.height = "";
      }
    };
    fitMobile();
    window.addEventListener("resize", fitMobile);

    return () => {
      window.removeEventListener("resize", fitMobile);
    };
  }, []);

  const scrollNext = () => {
    const target = document.getElementById("homeBlue");
    const loco = getLoco();
    if (target && loco) {
      loco.scrollTo(target, { offset: 0, duration: 900 });
      return;
    }
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="homeTop" ref={sectionRef}>
      <div id="imgTop" className="relative no_overflow">
        <AutoplayVideo
          sources={munniVideo("hero")}
          eager
          poster={heroPoster}
          className="fit"
          aria-hidden="true"
          data-scroll=""
          data-scroll-speed="-2"
        />
      </div>
      <button
        id="scrollDown"
        type="button"
        className="relative"
        data-scroll=""
        data-scroll-repeat=""
        data-scroll-offset="0, 85%"
        aria-label="Scroll to introduction"
        onClick={scrollNext}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="circle" width="48" height="48">
          <circle cx="25" cy="25" r="22.5" stroke="white" strokeWidth="1.3" fill="transparent" />
        </svg>
        <svg className="arrow no_opacity has_transition_1500 block d500 fast_rewind">
          <path d="M 0 5 L14 5 M14 5 L08 0 M14 5 L08 10" stroke="white" />
        </svg>
      </button>
    </section>
  );
}
