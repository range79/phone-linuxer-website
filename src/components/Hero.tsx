import { BrandLogo } from "./BrandLogo";
import { ScrollReveal } from "./ScrollReveal";
import { StatusBadge } from "./StatusBadge";

interface Props {
  onSupportClick: () => void;
}

export function Hero({ onSupportClick }: Props) {
  const donateUrl = "https://buymeacoffee.com/darkrange6s";
  const appRepoUrl = "https://github.com/range79/Range-Emulator";
  const webRepoUrl = "https://github.com/range79/Range-Emulator-Website";

  const handleSupportClick = (e: React.MouseEvent | React.FocusEvent) => {
    e.preventDefault();
    onSupportClick();
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
      <ScrollReveal>
        <button
          onClick={handleSupportClick}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "8px 16px",
            background: "rgba(233, 30, 99, 0.12)",
            border: "1px solid rgba(233, 30, 99, 0.3)",
            borderRadius: "32px",
            marginBottom: "3rem",
            textDecoration: "none",
            transition: "all 0.3s ease",
            cursor: "pointer"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(233, 30, 99, 0.25)";
            e.currentTarget.style.transform = "scale(1.02)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(233, 30, 99, 0.12)";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#E91E63">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          <span style={{ fontSize: "0.8rem", fontWeight: 900, color: "#E91E63", letterSpacing: "0.05em" }}>
            URGENT: RANGE EMULATOR SPONSORSHIP NEEDED
          </span>
        </button>
      </ScrollReveal>

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
            Range Emulator
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
            System ready — TITAN KERNEL — READY
          </StatusBadge>

          <div style={{ display: "flex", gap: "10px", width: "100%", marginTop: "8px" }}>
            <a
              className="btn-cta-secondary"
              href={appRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                flex: 1, 
                background: "rgba(233, 30, 99, 0.05)", 
                color: "#E91E63", 
                borderColor: "rgba(233, 30, 99, 0.25)",
                fontSize: "0.85rem",
                padding: "12px 18px",
                height: "auto",
                minHeight: "48px"
              }}
            >
              App Source
            </a>
            <a
              className="btn-cta-secondary"
              href={webRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                flex: 1, 
                background: "transparent", 
                color: "white", 
                borderColor: "rgba(255,255,255,0.15)",
                fontSize: "0.85rem",
                padding: "12px 18px",
                height: "auto",
                minHeight: "48px"
              }}
            >
              Web-Site Source
            </a>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delayMs={300}>
        <div style={{ marginTop: "5rem", maxWidth: 420, width: "100%" }}>
          <a
            href={donateUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleSupportClick}
            className="glass-card-cockpit"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.75rem",
              padding: "20px",
              textDecoration: "none",
              border: "1px solid rgba(233, 30, 99, 0.2)",
              background: "rgba(233, 30, 99, 0.03)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(233, 30, 99, 0.08)";
              e.currentTarget.style.borderColor = "rgba(233, 30, 99, 0.4)";
              e.currentTarget.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(233, 30, 99, 0.03)";
              e.currentTarget.style.borderColor = "rgba(233, 30, 99, 0.2)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div style={{ 
              width: 48, 
              height: 48, 
              borderRadius: "50%", 
              background: "rgba(233, 30, 99, 0.1)", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              marginBottom: "8px"
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#E91E63">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <div style={{ textAlign: "center" }}>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "white", marginBottom: "4px" }}>
                Support Ecosystem
              </h4>
              <p style={{ fontSize: "0.85rem", color: "var(--on-surface-variant)", lineHeight: 1.4, margin: 0 }}>
                Help us keep the engine optimized and servers online.
              </p>
            </div>
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
