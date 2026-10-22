"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { ReadMoreButton } from "@/components/shared/ReadMoreButton";
import { ScrollRevealText } from "@/components/shared/ScrollRevealText";
import { sizeCharts } from "@/data/size-charts.data";
import { getLoco } from "@/lib/locomotive";

export function SizeCharts() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const chart = sizeCharts[active];

  const selectTab = (index: number) => {
    setActive(index);
    panelRef.current?.scrollTo({ top: 0 });
  };

  // Locomotive keeps scrolling the page under the dialog unless it's paused.
  const open = (index: number) => {
    selectTab(index);
    getLoco()?.stop();
    dialogRef.current?.showModal();
    tabRefs.current[index]?.focus();
  };

  const close = () => dialogRef.current?.close();

  const enquire = () => {
    close();
    const target = document.getElementById("contact");
    const loco = getLoco();
    if (target && loco) {
      loco.start();
      loco.scrollTo(target, { offset: 0, duration: 900 });
      return;
    }
    target?.scrollIntoView({ behavior: "smooth" });
  };

  const onTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const last = sizeCharts.length - 1;
    const next = {
      ArrowRight: active === last ? 0 : active + 1,
      ArrowLeft: active === 0 ? last : active - 1,
      Home: 0,
      End: last,
    }[event.key];
    if (next === undefined) return;
    event.preventDefault();
    selectTab(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <ScrollRevealText className="font-sans text-[12px] leading-4 font-semibold tracking-[0.16em] text-[#C9A74F] uppercase">
            Size charts
          </ScrollRevealText>
          <ScrollRevealText
            delay={0.1}
            className="font-sans text-[13px] leading-5 text-white/50 sm:text-[14px]"
          >
            Diameter × Length (mm)
          </ScrollRevealText>
        </div>

        <ul className="flex flex-wrap gap-2 sm:gap-3 xl:gap-2.5">
          {sizeCharts.map((item, index) => (
            <li key={item.id}>
              <button
                type="button"
                aria-haspopup="dialog"
                onClick={() => open(index)}
                className="group flex h-10 cursor-pointer items-center gap-2.5 border border-white/25 px-3.5 font-sans text-[12px] leading-4 tracking-[0.12em] text-white/85 uppercase transition-colors duration-200 hover:border-[#EBC533] hover:text-[#EBC533] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#EBC533] sm:h-11 sm:px-4.5 sm:text-[13px] xl:px-4"
              >
                {item.shortName}
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                  aria-hidden
                  className="transition-transform duration-300 group-hover:rotate-90"
                >
                  <path d="M4.5 0v9M0 4.5h9" stroke="currentColor" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby="size-chart-title"
        onClose={() => getLoco()?.start()}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        className="m-auto max-h-[min(100dvh-2rem,52rem)] w-[min(100vw-2rem,60rem)] max-w-none translate-y-3 overflow-hidden border border-[#EBC533]/40 bg-[#0c0c0c] p-0 text-white opacity-0 transition-[opacity,translate,display,overlay] transition-discrete duration-300 ease-out backdrop:bg-black/0 backdrop:transition-[background-color,display,overlay] backdrop:transition-discrete backdrop:duration-300 open:flex open:translate-y-0 open:flex-col open:opacity-100 open:backdrop:bg-black/75 starting:open:translate-y-3 starting:open:opacity-0 starting:open:backdrop:bg-black/0 motion-reduce:transition-none motion-reduce:backdrop:transition-none"
      >
        <header className="relative shrink-0 px-5 pt-7 pb-6 sm:px-10 sm:pt-10 sm:pb-8">
          <p className="font-sans text-[12px] leading-4 font-semibold tracking-[0.16em] text-[#C9A74F] uppercase">
            Size chart
          </p>
          <h2
            id="size-chart-title"
            className="mt-3 pr-14 font-serif text-[28px] leading-9 text-white sm:text-[40px] sm:leading-12"
          >
            {chart.name}
          </h2>
          {chart.description ? (
            <p className="mt-2 font-sans text-[14px] leading-6 text-white/55 sm:text-[16px]">
              {chart.description}
            </p>
          ) : null}
          <button
            type="button"
            onClick={close}
            aria-label="Close size chart"
            className="absolute top-5 right-5 flex size-11 cursor-pointer items-center justify-center border border-white/20 text-white transition-colors duration-200 hover:border-[#EBC533] hover:text-[#EBC533] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#EBC533] sm:top-8 sm:right-8"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M1 1l12 12M13 1 1 13" stroke="currentColor" />
            </svg>
          </button>
        </header>

        <div
          role="tablist"
          aria-label="Fastener type"
          className="flex shrink-0 gap-6 overflow-x-auto border-y border-white/10 px-5 pr-12 [scrollbar-width:none] mask-r-from-[calc(100%-3rem)] sm:px-10 sm:pr-14 md:mask-none"
        >
          {sizeCharts.map((item, index) => {
            const selected = index === active;
            return (
              <button
                key={item.id}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                type="button"
                role="tab"
                id={`size-chart-tab-${item.id}`}
                aria-selected={selected}
                aria-controls="size-chart-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => selectTab(index)}
                onKeyDown={onTabKeyDown}
                className={`relative shrink-0 cursor-pointer py-4 font-sans text-[12px] leading-4 tracking-[0.12em] whitespace-nowrap uppercase transition-colors duration-200 focus-visible:outline focus-visible:-outline-offset-2 focus-visible:outline-[#EBC533] sm:text-[13px] ${selected ? "text-white" : "text-white/45 hover:text-white/80"}`}
              >
                {item.shortName}
                <span
                  aria-hidden
                  className={`absolute inset-x-0 bottom-0 h-0.5 origin-left bg-[#EBC533] transition-transform duration-300 ${selected ? "scale-x-100" : "scale-x-0"}`}
                />
              </button>
            );
          })}
        </div>

        <div
          ref={panelRef}
          role="tabpanel"
          id="size-chart-panel"
          aria-labelledby={`size-chart-tab-${chart.id}`}
          tabIndex={0}
          className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 focus-visible:outline-none sm:px-10"
        >
          <div className="hidden grid-cols-[10rem_1fr] gap-6 border-b border-white/10 pt-6 pb-4 font-sans text-[11px] leading-4 tracking-[0.16em] text-white/40 uppercase sm:grid">
            <span>Diameter</span>
            <span>Lengths (mm)</span>
          </div>

          <ul>
            {chart.rows.map((row) => (
              <li
                key={row.diameter}
                className="grid gap-3.5 border-b border-white/10 py-5 last:border-b-0 sm:grid-cols-[10rem_1fr] sm:gap-6 sm:py-6"
              >
                <p className="flex items-baseline gap-3 sm:flex-col sm:gap-1">
                  <span className="font-serif text-[22px] leading-7 text-white sm:text-[26px] sm:leading-8">
                    {row.diameter} mm
                  </span>
                  {row.gauge ? (
                    <span className="font-sans text-[12px] leading-4 font-semibold tracking-[0.12em] text-[#C9A74F]">
                      {row.gauge}
                    </span>
                  ) : null}
                </p>

                <ul
                  aria-label={`Lengths for ${row.diameter} mm, in mm`}
                  className="flex flex-wrap gap-2"
                >
                  {row.lengths.map((length, index) => (
                    <li
                      key={length}
                      title={`${row.diameter} × ${length} mm`}
                      className={`flex min-w-13 flex-col items-center justify-center border border-white/15 px-3 font-sans text-[15px] leading-5 font-medium text-white/90 tabular-nums sm:min-w-14 ${row.inches ? "h-14 gap-0.5" : "h-11"}`}
                    >
                      {length}
                      {row.inches ? (
                        <span className="text-[12px] leading-4 font-normal text-white/50">
                          {row.inches[index]}
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <footer className="flex shrink-0 flex-col items-start gap-3 border-t border-white/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-6">
          <p className="font-sans text-[12px] leading-5 text-white/55 sm:text-[14px]">
            Sizes read as diameter × length, e.g. {chart.rows[0].diameter} ×{" "}
            {chart.rows[0].lengths[0]} mm.
          </p>
          <ReadMoreButton text="Enquire now" onClick={enquire} />
        </footer>
      </dialog>
    </>
  );
}
