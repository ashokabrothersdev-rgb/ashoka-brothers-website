"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { activities, munniImage } from "./data";

gsap.registerPlugin(useGSAP);

const BLANK =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

export function HomeActivities() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    (_context, contextSafe) => {
      const el = rootRef.current;
      if (!el || !contextSafe) return;

      const items = Array.from(el.querySelectorAll<HTMLElement>(".ngAct__item"));
      const links = Array.from(el.querySelectorAll<HTMLAnchorElement>(".ngAct__item a"));
      const spans = Array.from(
        el.querySelectorAll<HTMLElement>(".ngAct__link--hidden"),
      );
      const box = el.querySelector<HTMLElement>(".ngAct__images");
      const next = el.querySelector<HTMLElement>(".ngAct__next");
      const nextImg = el.querySelector<HTMLImageElement>(".ngAct__next img");
      const curImg = el.querySelector<HTMLImageElement>(".ngAct__cur img");
      const content = el.querySelector<HTMLElement>(".ngAct__content");
      const list = el.querySelector<HTMLElement>(".ngAct__list");
      if (!box || !next || !nextImg || !curImg || !content || !list) return;

      curImg.src = BLANK;
      nextImg.src = BLANK;
      let curLink = "";
      let hasImage = false;
      items.forEach((item) => {
        const src = item.dataset.image;
        if (!src) return;
        const preload = new Image();
        preload.src = src;
      });

      const wide = window.innerWidth > 768;
      const reportsTouch =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;

      const bullets = () => {
        links.forEach((link) => link.classList.add("bulletVisible"));
      };

      const enter = contextSafe(() => {
        const rows = [items[0]?.getBoundingClientRect().top ?? 0];
        items.forEach((item) => {
          const y = item.getBoundingClientRect().top;
          if (Math.abs(y - rows[rows.length - 1]) > 2 && !rows.includes(y)) {
            rows.push(y);
          }
          const row = rows.findIndex((value) => Math.abs(value - y) <= 2);
          item.classList.add(`move-${row % 2}`);
        });
        items.forEach((item) => {
          const anchor = item.querySelector("a");
          gsap.from(item, {
            duration: 1.4,
            left: item.classList.contains("move-0") ? -150 : 150,
            ease: "power1.out",
          });
          if (anchor) {
            gsap.to(anchor, {
              duration: 1.4,
              top: 0,
              ease: "power3.out",
              onComplete: bullets,
            });
          }
        });
      });

      let observer: IntersectionObserver | undefined;
      if (!wide || reportsTouch) {
        links.forEach((link) => {
          link.style.top = "0px";
        });
        bullets();
      } else {
        observer = new IntersectionObserver(
          (entries) => {
            if (entries.some((entry) => entry.isIntersecting)) {
              observer?.disconnect();
              enter();
            }
          },
          { threshold: 0.25 },
        );
        observer.observe(content);
      }
      if (!wide) return;

      let hoverToken = 0;

      const intro = gsap.timeline({
        paused: true,
        onComplete: () => {
          curImg.src = curLink;
          curImg.style.opacity = "1";
        },
      });
      intro
        .fromTo(
          next,
          { height: 0 },
          { duration: 1, height: 500, ease: "power2.inOut" },
          0,
        )
        .fromTo(
          nextImg,
          { autoAlpha: 0, scale: 1.3 },
          { duration: 1.1, autoAlpha: 1, scale: 1, ease: "power1.out" },
          0,
        );

      const placeBox = (event: MouseEvent) => {
        const boxBounds = box.getBoundingClientRect();
        const rootBounds = el.getBoundingClientRect();
        const width = boxBounds.width || box.offsetWidth || 350;
        const height = boxBounds.height || box.offsetHeight || 450;
        gsap.to(box, {
          duration: 0.7,
          x: event.clientX - rootBounds.left - width / 2,
          y: event.clientY - rootBounds.top - height / 2,
          ease: "power1.out",
          overwrite: "auto",
        });
      };

      const firstImage = (index: number) => {
        curImg.style.opacity = "0";
        curLink = items[index]?.dataset.image ?? "";
        nextImg.src = curLink;
        curImg.src = curLink;
        hasImage = true;
        intro.invalidate().restart();
      };

      const imageChange = (index: number) => {
        curLink = items[index]?.dataset.image ?? "";
        nextImg.src = curLink;
        gsap.fromTo(
          next,
          { height: 0 },
          {
            duration: 1,
            height: 500,
            ease: "power2.inOut",
            overwrite: "auto",
            immediateRender: true,
            onComplete: () => {
              curImg.src = curLink;
            },
          },
        );
        gsap.fromTo(
          nextImg,
          { scale: 1.3 },
          { duration: 1.1, scale: 1, ease: "power1.out", overwrite: "auto", immediateRender: true },
        );
      };

      const showImage = contextSafe((index: number, event: MouseEvent) => {
        if (!items[index]?.dataset.image) return;
        hoverToken += 1;
        gsap.to(box, {
          duration: 0.5,
          autoAlpha: 1,
          ease: "power1.inOut",
          overwrite: "auto",
        });
        placeBox(event);
        if (!hasImage) firstImage(index);
        else imageChange(index);
      });

      const clipText = contextSafe((index: number, event: MouseEvent) => {
        const bounds = links[index].getBoundingClientRect();
        const width = box.getBoundingClientRect().width;
        const x = event.clientX - bounds.left;
        const start = x - width / 2;
        const end = x + width / 2;
        const poly = `polygon(${start}px 0, ${end}px 0, ${end}px 100%, ${start}px 100%)`;
        gsap.to(spans[index], {
          duration: 0.7,
          clipPath: poly,
          ease: "power1.out",
          overwrite: "auto",
        });
      });

      const cleanups: Array<() => void> = [];
      items.forEach((item, index) => {
        const onEnter = (event: MouseEvent) => showImage(index, event);
        const onMove = (event: MouseEvent) => clipText(index, event);
        item.addEventListener("mouseenter", onEnter);
        links[index].addEventListener("mousemove", onMove);
        cleanups.push(() => {
          item.removeEventListener("mouseenter", onEnter);
          links[index].removeEventListener("mousemove", onMove);
        });
      });

      const onContentMove = (event: MouseEvent) => placeBox(event);
      const onLeave = contextSafe(() => {
        const token = ++hoverToken;
        gsap.to(box, {
          duration: 0.5,
          autoAlpha: 0,
          ease: "power1.inOut",
          onComplete: () => {
            if (token !== hoverToken) return;
            curImg.src = BLANK;
            nextImg.src = BLANK;
            hasImage = false;
          },
        });
      });
      content.addEventListener("mousemove", onContentMove);
      list.addEventListener("mouseleave", onLeave);

      return () => {
        observer?.disconnect();
        cleanups.forEach((cleanup) => cleanup());
        content.removeEventListener("mousemove", onContentMove);
        list.removeEventListener("mouseleave", onLeave);
      };
    },
    { scope: rootRef },
  );

  return (
    <section id="homeActivities" ref={rootRef}>
      <div className="ngAct__images">
        <div className="ngAct__frame ngAct__cur">
          <img alt="" />
        </div>
        <div className="ngAct__frame ngAct__next">
          <img alt="" />
        </div>
      </div>
      <div className="ngAct__content">
        <h3 className="ngAct__label">Range of products</h3>
        <ul className="ngAct__list">
          {activities.map((item) => (
            <li
              key={item.label}
              className="ngAct__item"
              data-image={munniImage(item.image)}
            >
              <Link href="/products" className="ngAct__link">
                {item.label}
                <span className="ngAct__link--hidden" aria-hidden="true">
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
