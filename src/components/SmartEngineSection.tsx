import { ScrollReveal } from "./ScrollReveal";
import { InfoChip } from "./InfoChip";

const features = [
  {
    title: "Direct Path Resolution",
    body: "Mount .qcow2 and .iso files directly from storage. Zero copying, immediate boot.",
    chip: "ZERO-OVERHEAD",
  },
  {
    title: "Auto-Port Discovery",
    body: "Dynamically identifies available SPICE and VNC ports to prevent conflicts.",
    chip: "AUTO-CONFIG",
  },
  {
    title: "Isolated System Logs",
    body: "Per-VM execution logs for granular engine debugging and performance monitoring.",
    chip: "LOG-ISOLATION",
  },
];

export function SmartEngineSection() {
  return (
    <section
      id="engine"
      style={{
        position: "relative",
        zIndex: 1,
        padding: "4rem 1.5rem",
        maxWidth: 1120,
        margin: "0 auto",
      }}
    >
      <ScrollReveal>
        <div style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "clamp(1.65rem, 4vw, 2.25rem)", fontWeight: 800 }}>
            Smart Engine Logic
          </h2>
          <p style={{ color: "var(--on-surface-variant)", maxWidth: 640 }}>
            Our orchestration layer sits between Android and QEMU, automating the complex
            parameters required for stable mobile virtualization.
          </p>
        </div>
      </ScrollReveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {features.map((feature, i) => (
          <ScrollReveal key={feature.title} delayMs={i * 100}>
            <div
              className="glass-card-cockpit"
              style={{
                padding: "24px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <InfoChip label={feature.chip} style={{ alignSelf: "flex-start" }} />
              <h3 style={{ fontSize: "1.1rem", fontWeight: 800, margin: 0 }}>{feature.title}</h3>
              <p style={{ fontSize: "0.925rem", color: "var(--on-surface-variant)", lineHeight: 1.6, margin: 0 }}>
                {feature.body}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
