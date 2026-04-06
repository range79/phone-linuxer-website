import { useEffect, useRef, useState } from "react";

const LINES = [
  { text: "$ range-emulator --launch", prompt: true },
  { text: "[OK] KVM subsystem online", ok: true },
  { text: "[OK] virtio-gpu-gl initialized", ok: true },
  { text: "[OK] Direct path .qcow2 — zero-copy mount", ok: true },
  { text: "[OK] SPICE listener 0.0.0.0:5900", ok: true },
];

type Props = {
  active: boolean;
};

export function TerminalDemo({ active }: Props) {
  const [visibleCount, setVisibleCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setVisibleCount(i);
      if (i >= LINES.length) window.clearInterval(id);
    }, 420);
    return () => window.clearInterval(id);
  }, [active]);

  return (
    <div
      style={{
        borderRadius: "calc(16px - 2px)",
        overflow: "hidden",
        background: "linear-gradient(165deg, rgba(31, 31, 35, 0.55) 0%, rgba(10, 10, 11, 0.8) 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "10px 14px",
          background: "rgba(10, 10, 11, 0.88)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        {["#ef4444", "#eab308", "#22c55e"].map((c) => (
          <span
            key={c}
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: c,
              opacity: 0.85,
            }}
          />
        ))}
        <span
          style={{
            marginLeft: 8,
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            color: "var(--text-muted)",
          }}
        >
          range-emulator — zsh
        </span>
      </div>
      <pre
        style={{
          margin: 0,
          padding: "1.1rem 1.25rem",
          fontFamily: "var(--font-mono)",
          fontSize: "0.82rem",
          lineHeight: 1.65,
          color: "#cbd5e1",
          minHeight: 220,
        }}
      >
        {LINES.slice(0, visibleCount).map((line, idx) => (
          <div key={idx}>
            <span
              style={{
                color: line.prompt ? "var(--brand)" : line.ok ? "var(--electric)" : "#cbd5e1",
              }}
            >
              {line.text}
            </span>
            {idx === visibleCount - 1 &&
              idx === LINES.length - 1 &&
              line.ok &&
              !line.prompt && (
              <span style={{ animation: "blink 1s step-end infinite" }}>▍</span>
            )}
          </div>
        ))}
        <style>{`
          @keyframes blink { 50% { opacity: 0; } }
        `}</style>
      </pre>
    </div>
  );
}
