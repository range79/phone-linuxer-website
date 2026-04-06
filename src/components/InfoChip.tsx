import type { ReactNode } from "react";

type Props = {
  icon?: ReactNode;
  label: string;
  style?: React.CSSProperties;
};

export function InfoChip({ icon, label, style }: Props) {
  return (
    <div className="info-chip" style={style}>
      {icon && <span style={{ display: "flex", alignItems: "center" }}>{icon}</span>}
      <span style={{ whiteSpace: "nowrap" }}>{label}</span>
    </div>
  );
}
