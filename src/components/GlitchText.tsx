import { type CSSProperties, type ElementType } from "react";

type Props = {
  as?: ElementType;
  children: string;
  className?: string;
  style?: CSSProperties;
};

export function GlitchText({ as, children, className = "", style }: Props) {
  const Tag = as ?? "span";

  return (
    <Tag className={className} style={style}>
      <span>{children}</span>
    </Tag>
  );
}
