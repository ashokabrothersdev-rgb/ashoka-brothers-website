"use client";

import { useEffect, useRef, useState, type VideoHTMLAttributes } from "react";

export type VideoSource = { src: string; type: string };

type AutoplayVideoProps = Omit<
  VideoHTMLAttributes<HTMLVideoElement>,
  "src" | "children" | "muted" | "autoPlay" | "loop" | "playsInline"
> & {
  sources: VideoSource[];
  /** Load with the page instead of waiting until the video nears the viewport. */
  eager?: boolean;
};

/**
 * Muted, looping background video. Sources are listed best-first (AV1, then
 * H.264) so each browser picks the best one it can decode. Off-screen videos
 * don't download until they come near the viewport, and pause while out of
 * view so they don't compete with the scroll animations for CPU/GPU.
 */
export function AutoplayVideo({
  sources,
  eager = false,
  preload = "auto",
  ...props
}: AutoplayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(eager);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // React doesn't reflect `muted` as an attribute, which iOS needs for autoplay
    video.muted = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: "50% 0px" },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!active || eager || !video) return;
    // Sources were just added to an element that started empty
    video.load();
    video.play().catch(() => {});
  }, [active, eager]);

  return (
    <video
      ref={videoRef}
      muted
      autoPlay
      loop
      playsInline
      disablePictureInPicture
      preload={active ? preload : "none"}
      {...props}
    >
      {active
        ? sources.map((source) => (
            <source key={source.src} src={source.src} type={source.type} />
          ))
        : null}
    </video>
  );
}
