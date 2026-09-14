import Image from "next/image";

type ScrewMarkProps = {
  className?: string;
  size?: number;
};

export function ScrewMark({ className = "", size = 17 }: ScrewMarkProps) {
  return (
    <Image
      src="/icons/screw-dot.svg"
      alt="Screw Dot"
      width={13}
      height={13}
      className={className}
      style={{ width: size, height: size }}
    />
  );
}
