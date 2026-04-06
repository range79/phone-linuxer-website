import { type CSSProperties } from "react";

type Props = {
  children: string;
  className?: string;
  style?: CSSProperties;
  as?: "span" | "p" | "h2" | "h3" | "h1";
};

export function DecryptText({
  children,
  className = "",
  style,
  as: Tag = "span",
}: Props) {
  return (
    <Tag className={className} style={{ cursor: "default", ...style }}>
      {children}
    </Tag>
  );
}
