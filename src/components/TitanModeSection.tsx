import { ScrollReveal } from "./ScrollReveal";
import { InfoChip } from "./InfoChip";
import { StatusBadge } from "./StatusBadge";

export function TitanModeSection() {
  return (
    <section
      id="titan"
      style={{
        position: "relative",
        zIndex: 1,
        padding: "4rem 1.5rem",
        maxWidth: 1120,
        margin: "0 auto",
      }}
    >
      <ScrollReveal>
        <div
          className="glass-card-cockpit"
          style={{
            padding: "32px",
            background: "linear-gradient(135deg, rgba(239, 68, 68, 0.08) 0%, rgba(0, 0, 0, 0.6) 100%)",
            border: "1px solid rgba(239, 68, 68, 0.2)",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", alignItems: "center" }}>
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: "20px",
                background: "rgba(239, 68, 68, 0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                <StatusBadge type="error">TITAN MODE</StatusBadge>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "var(--error)",
                      boxShadow: "0 0 8px var(--error-alpha)",
                    }}
                  />
                  <span style={{ fontSize: "0.75rem", color: "var(--error)", fontWeight: 700 }}>
                    FORCE THE HARDWARE. NO BOTTLENECKS.
                  </span>
                </div>
              </div>
              
              <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontWeight: 800, marginBottom: "0.75rem" }}>
                Titan Optimization Engine
              </h2>
              
              <p style={{ color: "var(--on-surface-variant)", maxWidth: 720, lineHeight: 1.6, margin: 0 }}>
                A custom-tuned execution path that prioritizes CPU-intensive emulation tasks.
                By bypassing non-essential kernel interrupts, Titan Mode pushes your Snapdragon
                cores to their absolute limit.
              </p>
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "2rem" }}>
            <InfoChip label="KVM-PRIORITY" style={{ borderColor: "rgba(239, 68, 68, 0.3)" }} />
            <InfoChip label="THERMAL-MITIGATION" style={{ borderColor: "rgba(239, 68, 68, 0.3)" }} />
            <InfoChip label="CORE-PINNING" style={{ borderColor: "rgba(239, 68, 68, 0.3)" }} />
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
