import type { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Optional max width for phone frame (e.g. carousel). */
  maxWidth?: number | string;
  style?: CSSProperties;
};

export function DeviceMockup({ children, maxWidth, style }: Props) {
  return (
    <div
      className="device-mockup"
      style={{
        maxWidth: maxWidth ?? "100%",
        marginLeft: "auto",
        marginRight: "auto",
        ...style,
      }}
    >
      <div className="device-mockup__rim" aria-hidden />
      <div className="device-mockup__screen">{children}</div>
    </div>
  );
}
