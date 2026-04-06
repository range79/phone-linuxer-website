import type { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant?: "default" | "hazard";
  className?: string;
  style?: CSSProperties;
  innerStyle?: CSSProperties;
};

export function GlassCard({
  children,
  variant = "default",
  className = "",
  style,
  innerStyle,
}: Props) {
  const v = variant === "hazard" ? "glass-card-beam glass-card-beam--hazard" : "glass-card-beam";
  return (
    <div className={`${v} ${className}`.trim()} style={style}>
      <div className="glass-card-beam__inner" style={innerStyle}>
        {children}
      </div>
    </div>
  );
}
