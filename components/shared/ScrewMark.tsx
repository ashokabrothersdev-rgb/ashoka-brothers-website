type ScrewMarkProps = {
  className?: string;
  size?: number;
};

export function ScrewMark({ className = "", size = 17 }: ScrewMarkProps) {
  return (
    <img
      src="/screw-dot.svg"
      alt=""
      width={13}
      height={13}
      className={className}
      style={{ width: size, height: size }}
    />
  );
}
