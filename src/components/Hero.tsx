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
            Future Of Mobile Emulation
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delayMs={150}>
        <div
          className="grid-mobile-stack"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "1.25rem",
            width: "100%",
            maxWidth: 480,
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
            System ready — virtualization online
          </StatusBadge>
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
