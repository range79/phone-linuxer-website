import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  type?: "success" | "warning" | "error" | "primary";
  style?: React.CSSProperties;
};

export function StatusBadge({ children, type = "primary", style }: Props) {
  return (
    <span className={`status-badge status-badge--${type}`} style={style}>
      {children}
    </span>
  );
}
