import { useState } from "react";
import { BrandLogo } from "./BrandLogo";
import { ScrollReveal } from "./ScrollReveal";
import { StatusBadge } from "./StatusBadge";
import { MaterialDialog } from "./MaterialDialog";

export function Hero() {
  const [showSupportDialog, setShowSupportDialog] = useState(false);
  const donateUrl = "https://buymeacoffee.com/darkrange6s";

  const handleSupportClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowSupportDialog(true);
  };

  const confirmSupport = () => {
    window.open(donateUrl, "_blank");
    setShowSupportDialog(false);
  };

  return (
    <section
      id="download"
      style={{
        position: "relative",
        padding: "clamp(3rem, 12vw, 8rem) 1.5rem 6rem",
        maxWidth: 1120,
        margin: "0 auto",
        textAlign: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <MaterialDialog
        isOpen={showSupportDialog}
        title="Support RangeEmulator"
        type="success"
        message="Thank you for considering supporting the development of RangeEmulator! Your contribution helps us maintain servers and continue performance optimizations."
        onCancel={() => setShowSupportDialog(false)}
        onConfirm={confirmSupport}
      />
      <ScrollReveal>
        <div style={{ marginBottom: "2rem" }}>
          <BrandLogo size="hero" style={{ margin: "0 auto 1.5rem" }} />
          <h1
            className="h1-hero"
            style={{
              fontSize: "clamp(2.25rem, 10vw, 3.5rem)",
              fontWeight: 800,
              color: "var(--brand-bright)",
              marginBottom: "0.5rem",
              lineHeight: 1.1,
            }}
          >
            RangeEmulator
          </h1>
          <p
            style={{
              fontSize: "clamp(1rem, 4vw, 1.25rem)",
              color: "var(--on-surface-variant)",
              fontWeight: 500,
            }}
          >
            Any ISO. Any OS. Mobile Power.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delayMs={150}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.25rem",
            width: "100%",
            maxWidth: 420,
          }}
        >
          <a
            className="btn-cta"
            href="https://github.com/range79/Range-Emulator/releases/latest/download/app-release.apk"
            style={{ width: "100%" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download Range-Emulator
          </a>
          <a
            className="btn-cta-secondary"
            href="#spice"
            style={{ width: "100%", border: "none", background: "var(--brand)", color: "white" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download Spice Client
          </a>
          <StatusBadge type="success" style={{ padding: "4px 12px", borderRadius: "20px" }}>
             <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--success)",
                marginRight: "8px",
                display: "inline-block",
                boxShadow: "0 0 8px var(--success-glow)",
              }}
            />
            System ready — Any ISO supported
          </StatusBadge>
          <a
            className="btn-cta-secondary"
            href="https://github.com/range79/Range-Emulator"
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: "100%", background: "transparent", color: "white", borderColor: "rgba(255,255,255,0.2)" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View Source on GitHub
          </a>
        </div>
      </ScrollReveal>

      <ScrollReveal delayMs={300}>
        <a
          href={donateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-support"
          style={{ marginTop: "4rem" }}
          onClick={handleSupportClick}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#E91E63">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--on-surface-variant)" }}>
            Support development
          </span>
        </a>
      </ScrollReveal>
    </section>
  );
}
