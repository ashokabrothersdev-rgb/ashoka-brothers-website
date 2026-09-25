import Image from "next/image";

interface HeroSectionProps {
  isVideo: boolean;
  videoSrc?: string;
  imageSrcDesktop?: string;
  imageSrcMobile?: string;
  className?: string;
  isChat?: boolean;
}

export function HeroSection({
  isVideo,
  videoSrc,
  imageSrcDesktop,
  imageSrcMobile,
  className,
  isChat = false,
}: HeroSectionProps) {
  return (
    <section
      id="home"
      className={`relative h-screen min-h-160 w-full overflow-hidden ${className}`}
    >
      {/* Hero Video or Image */}
      {isVideo ? (
        <video
          className="absolute inset-0 size-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Ashoka Brothers product highlight"
        >
          <source src={videoSrc ?? ""} type="video/mp4" />
        </video>
      ) : (
        <>
          <Image
            src={imageSrcDesktop ?? ""}
            alt="Hero Image"
            fill
            className="hidden md:block"
            sizes="100vw"
            priority
            loading="eager"
          />
          <Image
            src={imageSrcMobile ?? ""}
            alt="Hero Image"
            fill
            className="object-cover block md:hidden"
            sizes="100vw"
            priority
            loading="eager"
          />
        </>
      )}

      {/* Gradient Overlay */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-88.75 bg-linear-to-b from-black/55 to-transparent" />

      {/* Black Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/15" />

      {/* Chat Icon */}
      {isChat && (
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
      )}
    </section>
  );
}
