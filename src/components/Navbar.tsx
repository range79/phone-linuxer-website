import type { CSSProperties } from "react";
import { BrandLogo } from "./BrandLogo";

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
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "0.85rem 1.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <a
          href="#download"
          style={{
            fontSize: "1.05rem",
            letterSpacing: "-0.02em",
            color: "var(--text)",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontWeight: 800,
          }}
        >
          <BrandLogo
            size="sm"
            style={{ filter: "drop-shadow(0 0 10px rgba(103, 80, 164, 0.45))" }}
          />
          <span style={{ display: "inline-block" }}>RangeEmulator</span>
        </a>
        <div 
          style={{ 
            display: "flex", 
            gap: "0.75rem", 
            alignItems: "center", 
            justifyContent: "flex-end",
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            padding: "4px 0",
            maxWidth: "100%",
          }}
        >
          {[
            ["Download", "#download"],
            ["Telemetry", "#performance"],
            ["Management", "#vms"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              style={{
                fontSize: "0.825rem",
                fontWeight: 700,
                color: "var(--on-surface-variant)",
                textDecoration: "none",
                transition: "color 0.2s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--success)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--on-surface-variant)")}
            >
              {label}
            </a>
          ))}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginLeft: "4px", flexShrink: 0 }}>
             <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--success)",
                boxShadow: "0 0 8px var(--success-glow)",
              }}
            />
            <span style={{ fontSize: "0.7rem", fontWeight: 900, color: "var(--success)", letterSpacing: "0.05em" }}>ONLINE</span>
          </div>
        </div>
      </div>
    </header>
  );
}
