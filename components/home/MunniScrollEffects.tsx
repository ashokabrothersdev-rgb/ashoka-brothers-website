"use client";

import { useEffect } from "react";
import { subscribeLoco, type LocoScrollInstance } from "@/lib/locomotive";

function setTransform(selector: string, value: string, root: ParentNode) {
  const el = root.querySelector<HTMLElement>(selector);
  if (el) el.style.transform = value;
}

function setOpacity(selector: string, value: string, root: ParentNode) {
  const el = root.querySelector<HTMLElement>(selector);
  if (el) el.style.opacity = value;
}

function runComposition(progress: number, root: ParentNode) {
  const cards = Array.from(
    root.querySelectorAll<HTMLElement>("#compositionCardsLayer .compositionCard"),
  );
  const count = cards.length;
  const end = 0.4 + 0.15 * count;
  const amount = progress * (end + 0.3);
  const pics = ["#cp1", "#cp2", "#cp3", "#cp4", "#cp5"];

  if (amount < 0.2) {
    cards.forEach((card) => {
      card.classList.remove("show");
      card.querySelector(".cardPic")?.classList.remove("show");
    });
    setTransform("#compositionPicLayer", "scale(0.35)", root);
    setTransform("#compositionCardsLayer", "scale(1)", root);
    pics.forEach((pic) => {
      setTransform(pic, "none", root);
      setOpacity(pic, "1", root);
    });
  }

  if (amount > 0.2 && amount < 0.4) {
    const q = amount - 0.2;
    setTransform("#compositionPicLayer", `scale(${0.35 + 0.65 * q * 5})`, root);
    setOpacity("#cpMain .cpVeil", String(0.2 * (q * 5)), root);
    setTransform("#cpMain img", `scale(${1.6 - 0.6 * q * 5})`, root);
    pics.forEach((pic) => setOpacity(pic, String(1 - q * 4), root));
    setTransform("#cp1", `translate(${q * 5 * 10}vw, ${-q * 5 * 5}vw)`, root);
    setTransform("#cp2", `translate(${-q * 4 * 10}vw, ${-q * 5 * 5}vw)`, root);
    setTransform("#cp3", `translate(${q * 4 * 10}vw, ${-q * 5 * 5}vw)`, root);
    setTransform("#cp4", `translate(${-q * 4 * 10}vw, ${q * 5 * 5}vw)`, root);
    setTransform("#cp5", `translate(${q * 4 * 10}vw, ${q * 5 * 5}vw)`, root);
    cards.forEach((card) => {
      card.style.transform = "translateY(100%)";
      card.classList.remove("show");
      card.querySelector(".cardPic")?.classList.remove("show");
    });
  }

  if (amount > 0.4 && amount < end) {
    setTransform("#compositionPicLayer", "scale(1)", root);
    setTransform("#compositionCardsLayer", "scale(1)", root);
  }

  if (amount > 0.4) {
    cards.forEach((card, index) => {
      const start = 0.4 + 0.15 * index;
      const picture = card.querySelector(".cardPic");
      if (amount < start) {
        card.style.transform = "translateY(100%)";
        card.classList.remove("show");
        picture?.classList.remove("show");
      } else if (amount < start + 0.1) {
        card.style.transform = `translateY(${100 - (amount - start) * 10 * 115}%)`;
        card.classList.add("show");
        picture?.classList.add("show");
      } else {
        card.style.transform = `translateY(-15%) scale(${1 - Math.min(amount - start - 0.1, 0.2) * 0.5})`;
        card.classList.add("show");
        picture?.classList.add("show");
      }
    });
  }

  if (amount > end && amount < end + 0.2) {
    const r = amount - end;
    const scale = 1 - 0.65 * r * 5;
    setTransform("#compositionCardsLayer", `scale(${scale})`, root);
    setTransform("#compositionPicLayer", `scale(${scale})`, root);
    setTransform("#cpMain img", `scale(${1 + 0.6 * r * 5})`, root);
    setOpacity("#cpMain .cpVeil", String(0.2 - 0.2 * (r * 5)), root);
    ["#cp2", "#cp3", "#cp4", "#cp5"].forEach((pic) => {
      setOpacity(pic, String(0.2 + r * 5), root);
    });
    setTransform("#cp2", `translate(${-8 + r * 4 * 10}vw, ${-5 + r * 5 * 5}vw)`, root);
    setTransform("#cp3", `translate(${8 - r * 4 * 10}vw, ${-5 + r * 5 * 5}vw)`, root);
    setTransform("#cp4", `translate(${-8 + r * 4 * 10}vw, ${5 - r * 5 * 5}vw)`, root);
    setTransform("#cp5", `translate(${8 - r * 4 * 10}vw, ${5 - r * 5 * 5}vw)`, root);
  }

  if (amount > end + 0.2) {
    setTransform("#compositionPicLayer", "scale(0.35)", root);
    setTransform("#compositionCardsLayer", "scale(0.35)", root);
    pics.forEach((pic) => setTransform(pic, "none", root));
  }
}

function runMasks(progress: number, mobile: boolean, root: ParentNode) {
  const amount = mobile ? progress * 1.15 : progress;
  const masks = root.querySelectorAll<HTMLElement>("#specialText .homeTextMask");
  const starts = [0, 0.04, 0.08, 0.12, 0.16, 0.2, 0.24, 0.28];
  masks.forEach((mask, index) => {
    const start = starts[index] ?? 0;
    if (amount > start && amount < start + 0.4) {
      mask.style.transform = `scale(${1 - (amount - start) * 2.5}, 1)`;
    }
  });
}

function runDining(progress: number, root: ParentNode) {
  const frame = root.querySelector<HTMLElement>("#diningVideo");
  const video = root.querySelector<HTMLElement>("#diningVideo video");
  if (!frame || !video) return;
  if (progress < 0.4) {
    video.style.transform = `scale(${2 - progress * 2.5})`;
    frame.style.transform = `scale(${0.5 + (progress * 2.5) / 2})`;
  } else {
    video.style.transform = "scale(1)";
    frame.style.transform = "scale(1)";
  }
}

function onScroll(args: LocoScrollInstance, root: HTMLElement) {
  const mobile = window.innerWidth <= 740;
  const blue = args.currentElements.homeBlue;
  if (blue) {
    const lines = root.querySelectorAll<HTMLElement>("#specialText .textLine");
    const gates = [0.295, 0.32, 0.36, 0.383, 0.41];
    lines.forEach((line, index) => {
      const gate = gates[index];
      if (gate === undefined) return;
      line.style.zIndex = blue.progress > gate ? "1" : "0";
    });
  }

  const special = args.currentElements.specialText;
  if (special) runMasks(special.progress, mobile, root);

  const composition = args.currentElements.compositionTarget;
  if (!mobile && composition) runComposition(composition.progress, root);

  const dining = args.currentElements.diningVideoTarget;
  if (dining) runDining(dining.progress, root);
}

export function MunniScrollEffects() {
  useEffect(() => {
    const root = document.getElementById("home");
    if (!root) return;

    let detach = () => {};
    const unsubscribe = subscribeLoco((loco) => {
      detach();
      detach = () => {};
      if (!loco) return;
      const handler = (args: LocoScrollInstance) => onScroll(args, root);
      loco.on("scroll", handler);
      loco.update();
      detach = () => loco.off("scroll", handler);
    });

    return () => {
      detach();
      unsubscribe();
    };
  }, []);

  return null;
}
