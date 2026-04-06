import type { CSSProperties } from "react";
import { BrandLogo } from "./BrandLogo";

const linkStyle: CSSProperties = {
  color: "var(--text-muted)",
  fontWeight: 500,
  fontSize: "0.95rem",
  textDecoration: "none",
  transition: "color 0.2s",
};

export function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(20px) saturate(170%)",
        WebkitBackdropFilter: "blur(20px) saturate(170%)",
        background: "var(--nav-bg)",
        borderBottom: "1px solid rgba(103, 80, 164, 0.15)",
      }}
    >
      <nav
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "0.85rem 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <a
          href="#download"
          style={{
            fontWeight: 700,
            fontSize: "1.1rem",
            letterSpacing: "-0.02em",
            color: "var(--text)",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.65rem",
          }}
        >
          <BrandLogo
            size="sm"
            style={{ filter: "drop-shadow(0 0 10px rgba(103, 80, 164, 0.45))" }}
          />
          RangeEmulator
        </a>
        <div style={{ display: "flex", gap: "clamp(0.75rem, 2vw, 1.25rem)", flexWrap: "wrap", alignItems: "center", justifyContent: "flex-end" }}>
          {[
            ["Download", "#download"],
            ["Telemetry", "#performance"],
            ["Management", "#vms"],
            ["Titan", "#titan"],
            ["Hardware", "#hardware"],
            ["Connect", "#spice"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              style={linkStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--success)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-muted)";
              }}
            >
              {label}
            </a>
          ))}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "4px 10px",
              background: "rgba(76, 175, 80, 0.1)",
              borderRadius: "12px",
              border: "1px solid rgba(76, 175, 80, 0.2)",
              marginLeft: "8px",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--success)",
                boxShadow: "0 0 8px var(--success-glow)",
              }}
            />
            <span style={{ fontSize: "0.7rem", color: "var(--success)", fontWeight: 800, fontFamily: "var(--font-mono)" }}>ONLINE</span>
          </div>
        </div>
      </nav>
    </header>
  );
}
