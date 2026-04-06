import { ScrollReveal } from "./ScrollReveal";
import { InfoChip } from "./InfoChip";

const rows = [
  {
    title: "Unsafe I/O",
    body: "Bypass traditional sync-locks for the fastest disk writes ever seen on Android.",
    chip: "IO-PARAVIRT",
  },
  {
    title: "Packed VirtIO",
    body: "Reduced memory overhead for ultra-responsive networking and storage.",
    chip: "MEM-OPT",
  },
  {
    title: "Host CPU Passthrough",
    body: "Direct instruction-set access. Your guest OS sees the Snapdragon core, not a generic driver.",
    chip: "BASE-METAL",
  },
];

export function HardwareVirtualizationSection() {
  return (
    <section
      id="hardware"
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
            Hardware-Level Virtualization
          </h2>
          <p style={{ color: "var(--on-surface-variant)", maxWidth: 560 }}>
            The stack that sits closest to metal—tuned paths for I/O, VirtIO, and CPU identity.
          </p>
        </div>
      </ScrollReveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {rows.map((row, i) => (
          <ScrollReveal key={row.title} delayMs={i * 100}>
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
              <InfoChip label={row.chip} />
              <h3 style={{ margin: "0 0 0.6rem", fontSize: "1.1rem", fontWeight: 800 }}>
                {row.title}
              </h3>
              <p style={{ margin: 0, color: "var(--on-surface-variant)", fontSize: "0.925rem", lineHeight: 1.6 }}>
                {row.body}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
