"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { getLoco } from "@/lib/locomotive";
import { munniImage } from "@/data/home-page.data";

export function HomeHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [open, setOpen] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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

    const desktop = window.matchMedia("(min-width: 741px)").matches;
    if (desktop && videoRef.current) {
      videoRef.current.src = "/munni/video/hero.webm";
    }
    const revealVideo = window.setTimeout(() => {
      videoWrapRef.current?.classList.add("show");
    }, 500);
    const revealLabel = window.setTimeout(() => {
      labelRef.current?.classList.add("show");
    }, 1000);

    return () => {
      window.removeEventListener("resize", fitMobile);
      window.clearTimeout(revealVideo);
      window.clearTimeout(revealLabel);
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
      <div id="imgTop" className="relative no_overflow pic veiled">
        <img
          alt=""
          src={munniImage("hero.webp")}
          width={2000}
          height={1125}
          className="fit"
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
      <div
        id="homeVideo"
        className={`has_transition_1500 transition_all${open ? " open" : ""}`}
        onClick={() => setOpen((value) => !value)}
        onMouseMove={(event) => {
          if (!open) return;
          setCursor({ x: event.clientX, y: event.clientY });
        }}
      >
        <div id="homeVideoContainer" ref={videoWrapRef} className="relative no_overflow">
          <div className="mask_top no_overflow has_transition_1000_inout full full_height fast_rewind">
            <div className="t_container no_overflow has_transition_1000_inout full_height fast_rewind">
              <video ref={videoRef} className="fit has_transition_1500" muted autoPlay loop playsInline />
            </div>
          </div>
        </div>
        <div ref={labelRef} className="videoLabel no_height has_transition_800">
          <span className="text block smaller top_ultralow has_transition_1000 d200 uppercase">
            full screen
          </span>
        </div>
      </div>
      {mounted && open
        ? createPortal(
            <div
              className="munni-video-close"
              style={{ transform: `translate(${cursor.x}px, ${cursor.y}px)` }}
            >
              <svg viewBox="0 0 91.7 91.4" aria-hidden="true">
                <polygon
                  points="47.7,45.7 63.7,29.7 61.8,27.7 45.7,43.7 29.7,27.6 27.6,29.7 43.7,45.7 27.6,61.8 29.6,63.8 45.7,47.7 61.8,63.8 63.8,61.8"
                  fill="#FFFFFF"
                />
                <circle cx="45.7" cy="45.7" r="44.1" stroke="#FFFFFF" fill="none" strokeWidth="3" />
              </svg>
            </div>,
            document.body,
          )
        : null}
    </section>
  );
}
