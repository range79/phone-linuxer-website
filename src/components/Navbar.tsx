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
          <a
            href="https://github.com/range79/Range-Emulator"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "8px",
              color: "var(--on-surface-variant)",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--on-surface-variant)")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
