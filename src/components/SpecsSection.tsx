import { ScrollReveal } from "./ScrollReveal";

const techSpecs = [
  { label: "Execution Engine", value: "QEMU 8.1.0+ Optimized" },
  { label: "Acceleration", value: "KVM (Kernel-based Virtual Machine)" },
  { label: "Video Driver", value: "virtio-gpu-pci (Venus/Virgl)" },
  { label: "Audio", value: "AC97 / HDA / virtio-snd" },
  { label: "Storage", value: "NVMe / VirtIO-Block / SCSI" },
  { label: "Network", value: "User-mode SLIRP / Bridge" },
  { label: "Display Protocol", value: "SPICE (Recommended) / VNC" },
  { label: "Firmware", value: "EDK2 (UEFI) Secure Boot Support" },
];

export function SpecsSection() {
  return (
    <section
      id="specs"
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
            background: "rgba(103, 80, 164, 0.04)",
            border: "1px solid rgba(103, 80, 164, 0.15)",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "2rem", color: "var(--brand-bright)" }}>
             Technical Specifications
          </h2>
          
          <div 
            className="grid-mobile-1"
            style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(4, 1fr)", 
              gap: "2rem",
            }}
          >
            {techSpecs.map((spec) => (
               <div key={spec.label} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--on-surface-variant)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                     {spec.label}
                  </span>
                  <span style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--on-surface)" }}>
                     {spec.value}
                  </span>
               </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}