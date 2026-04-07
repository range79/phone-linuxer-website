import type { CSSProperties } from "react";

const linkBase: CSSProperties = {
  color: "var(--text-muted)",
  fontSize: "0.92rem",
  textDecoration: "none",
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        position: "relative",
        zIndex: 1,
        borderTop: "1px solid var(--border-subtle)",
        background: "rgba(10, 10, 11, 0.88)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        padding: "2.5rem 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <div
          id="telegram"
          style={{
            scrollMarginTop: "5rem",
            paddingBottom: "0.25rem",
            borderBottom: "1px solid rgba(103, 80, 164, 0.15)",
          }}
        >
          <p
            style={{
              margin: "0 0 0.75rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--electric)",
            }}
          >
            Telegram
          </p>
          <p style={{ margin: "0 0 0.85rem", fontSize: "0.92rem", color: "var(--text-muted)" }}>
            Updates and discussion:{" "}
            <a
              href="https://t.me/range79isreal"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--electric)", fontWeight: 600 }}
            >
              @range79isreal
            </a>
            .
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.25rem 2rem",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            <a
              href="https://github.com/range79/Range-Emulator-Website"
              target="_blank"
              rel="noopener noreferrer"
              style={linkBase}
            >
              Web-Site Source
            </a>
            <a
              href="https://github.com/range79/Range-Emulator"
              target="_blank"
              rel="noopener noreferrer"
              style={linkBase}
            >
              Range Emulator Source
            </a>
            <a
              href="https://t.me/range79isreal"
              target="_blank"
              rel="noopener noreferrer"
              style={linkBase}
            >
              Telegram
            </a>
            <a href="#download" style={linkBase}>
              Download
            </a>
            <a href="#spice" style={linkBase}>
              Connect
            </a>
            <a href="#vm-management" style={linkBase}>
              VM Management
            </a>
          </div>
          <p style={{ margin: 0, fontSize: "0.85rem", color: "var(--text-muted)" }}>
            © {year} Range Development
          </p>
        </div>
      </div>
    </footer>
  );
}
