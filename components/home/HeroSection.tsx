export function HeroSection() {
  return (
    <section id="home" className="relative h-screen min-h-[640px] w-full overflow-hidden bg-black">
      <video
        className="absolute inset-0 size-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="Ashoka Brothers product highlight"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[355px] bg-gradient-to-b from-black/55 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-black/15" />

      <a
        href="#contact"
        className="absolute right-6 bottom-10 z-10 sm:right-16 lg:right-[60px] lg:bottom-[70px]"
        aria-label="Open chat"
      >
        <img src="/chat-icon.svg" alt="" width={60} height={60} className="size-[60px]" />
      </a>
    </section>
  );
}
