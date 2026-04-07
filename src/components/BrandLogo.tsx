import type { CSSProperties } from "react";

type Props = {
  size?: "sm" | "hero" | "default";
  style?: CSSProperties;
  className?: string;
};

export function BrandLogo({ size = "default", style, className }: Props) {
  const sizes = {
    sm: 32,
    default: 64,
    hero: 120,
  };

  const currentSize = sizes[size];

  return (
    <div
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        filter: "drop-shadow(0 0 20px rgba(103, 80, 164, 0.45))",
        ...style,
      }}
    >
      <img
        src="/logo.webp"
        alt="Range Emulator Logo"
        width={currentSize}
        height={currentSize}
        style={{
          borderRadius: size === "hero" ? "24px" : "8px",
          objectFit: "contain",
        }}
      />
    </div>
  );
}
