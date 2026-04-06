import { DecryptText } from "./DecryptText";
import { GlassCard } from "./GlassCard";
import { ScrollReveal } from "./ScrollReveal";

const tiers = [
  {
    title: "KVM Native Mode",
    subtitle: "AArch64 on AArch64",
    stat: "99% Native Efficiency.",
    body: "Hardware-accelerated execution for zero-latency Linux & Android workloads.",
    accent: "var(--signal)",
    glow: "rgba(76, 175, 80, 0.35)",
  },
  {
    title: "Titan-Optimized Emulation",
    subtitle: "Non-KVM",
    stat: "Up to 60% Performance.",
    body: "Our custom “Titan” engine pushes non-root environments to their absolute limits.",
    accent: "var(--brand-bright)",
    glow: "rgba(208, 188, 255, 0.35)",
  },
  {
    title: "Cross-Arch Compatibility",
    subtitle: "x86_64 / i386",
    stat: "Desktop Fidelity.",
    body: "Run essential legacy applications through an optimized translation layer designed for architectural stability.",
    accent: "#0078D4",
    glow: "rgba(0, 120, 212, 0.35)",
  },
];

export function PerformanceHierarchySection() {
  return (
    <section
      id="hierarchy"
      style={{
        position: "relative",
        zIndex: 1,
        padding: "0 1.5rem 4rem",
        maxWidth: 1120,
        margin: "0 auto",
        scrollMarginTop: "4.5rem",
      }}
    >
      <ScrollReveal>
        <DecryptText
          as="h2"
          style={{
            fontSize: "clamp(1.65rem, 4vw, 2.25rem)",
            margin: "0 0 0.5rem",
            fontWeight: 700,
          }}
        >
          The performance hierarchy
        </DecryptText>
        <p style={{ color: "var(--text-muted)", maxWidth: 680, margin: "0 0 2rem" }}>
          Hardcore metrics across execution modes—from bare-metal KVM through Titan-tuned
          emulation to cross-architecture legacy support.
        </p>
      </ScrollReveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1rem",
        }}
      >
        {tiers.map((tier, i) => (
          <ScrollReveal key={tier.title} delayMs={i * 70}>
            <GlassCard style={{ height: "100%" }}>
              <article
                style={{
                  height: "100%",
                  padding: "1.4rem 1.45rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.65rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem", flexWrap: "wrap" }}>
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      marginTop: "0.45rem",
                      borderRadius: 2,
                      background: "var(--brand)",
                      boxShadow: "0 0 12px rgba(103, 80, 164, 0.35)",
                    }}
                  />
                  <h3 style={{ margin: 0, fontSize: "1.08rem", fontWeight: 700 }}>{tier.title}</h3>
                </div>
                <p
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--electric)",
                    opacity: 0.9,
                  }}
                >
                  {tier.subtitle}
                </p>
                <p style={{ margin: 0, fontSize: "1.02rem", fontWeight: 600, color: tier.accent }}>
                  {tier.stat}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.95rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.58,
                    flex: 1,
                  }}
                >
                  {tier.body}
                </p>
              </article>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
