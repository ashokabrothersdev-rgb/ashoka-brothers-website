import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen min-h-160 w-full overflow-hidden"
    >
      {/* Hero Video */}
      <video
        className="absolute inset-0 size-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="Ashoka Brothers product highlight"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-88.75 bg-linear-to-b from-black/55 to-transparent" />

      {/* Black Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/15" />

      {/* Chat Icon */}
      <a
        href="#contact"
        className="absolute right-6 bottom-10 z-10 sm:right-16 lg:right-36 lg:bottom-16.25 max-sm:hidden"
        aria-label="Open chat"
      >
        <Image
          src="/icons/chat-icon.svg"
          alt="Chat Icon"
          width={70}
          height={70}
          className="size-17.5"
        />
      </a>
    </section>
  );
}
