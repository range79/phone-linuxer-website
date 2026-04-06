import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { InfoChip } from "./InfoChip";
import { StatusBadge } from "./StatusBadge";

type VMState = "RUNNING" | "STOPPED";

type VMData = {
  id: string;
  name: string;
  state: VMState;
  arch: "AARCH64" | "X86_64";
  ram: string;
  cores: number;
  gpu: boolean;
  kvm: boolean;
};

function VMCard({ vm, onToggle }: { vm: VMData; onToggle: (id: string) => void }) {
  const isRunning = vm.state === "RUNNING";
  const statusColor = isRunning ? "var(--success)" : "rgba(255,255,255,0.2)";

  return (
    <div
      className="glass-card-cockpit"
      style={{
        padding: "20px",
        border: isRunning ? "1px solid rgba(103, 80, 164, 0.4)" : "1px solid rgba(255,255,255,0.1)",
        background: isRunning ? "rgba(103, 80, 164, 0.05)" : undefined,
        transition: "all 0.3s ease",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: statusColor,
            boxShadow: isRunning ? `0 0 10px ${statusColor}` : undefined,
            transition: "all 0.3s ease",
          }}
        />
        <div style={{ flex: 1 }}>
          <h4 style={{ fontSize: "1.1rem", fontWeight: 800, margin: 0 }}>{vm.name}</h4>
          <p style={{ fontSize: "0.75rem", color: "var(--on-surface-variant)", margin: 0 }}>
            {vm.state} • SPICE : 5901
          </p>
        </div>
        <div
          onClick={() => onToggle(vm.id)}
          style={{
            background: isRunning ? "var(--error)" : "var(--brand)",
            width: 44,
            height: 44,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow: isRunning ? "0 4px 12px rgba(239, 68, 68, 0.2)" : "0 4px 12px rgba(103, 80, 164, 0.2)",
          }}
          onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.9)")}
          onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
            style={{ transition: "transform 0.3s ease" }}
          >
            {isRunning ? (
              <path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42A6.92 6.92 0 0 1 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.12.94-4.01 2.43-5.3l-1.42-1.42C4.16 7.1 3 9.42 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.58-1.08-4.9-2.83-6.83z" />
            ) : (
              <path d="M8 5v14l11-7z" />
            )}
          </svg>
        </div>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <StatusBadge
          type={vm.arch === "AARCH64" ? "primary" : "warning"}
          style={{ borderRadius: "4px", padding: "2px 6px" }}
        >
          {vm.arch}
        </StatusBadge>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        <InfoChip label={`${vm.ram}`} />
        <InfoChip label={vm.kvm ? "KVM" : "TCG"} />
        <InfoChip label={`${vm.cores} Cores`} />
        {vm.gpu && (
          <InfoChip
            label="GPU"
            style={{ color: isRunning ? "var(--warning)" : "var(--on-surface-variant)" }}
          />
        )}
      </div>
    </div>
  );
}

export function VmManagementSection() {
  const [vms, setVms] = useState<VMData[]>([
    {
      id: "ubuntu",
      name: "Ubuntu 24.04 LTS",
      state: "RUNNING",
      arch: "AARCH64",
      ram: "4096MB",
      cores: 4,
      gpu: true,
      kvm: true,
    },
    {
      id: "win11",
      name: "Windows 11 ARM",
      state: "STOPPED",
      arch: "AARCH64",
      ram: "8192MB",
      cores: 8,
      gpu: true,
      kvm: true,
    },
    {
      id: "debian",
      name: "Debian Workspace",
      state: "STOPPED",
      arch: "X86_64",
      ram: "2048MB",
      cores: 2,
      gpu: false,
      kvm: false,
    },
  ]);

  const toggleVM = (id: string) => {
    setVms((prev) =>
      prev.map((vm) => (vm.id === id ? { ...vm, state: vm.state === "RUNNING" ? "STOPPED" : "RUNNING" } : vm))
    );
  };

  return (
    <section
      id="vms"
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
            Virtual Machines
          </h2>
          <p style={{ color: "var(--on-surface-variant)" }}>
            Professional instance management. Click the power button to start or isolate
            emulation environments.
          </p>
        </div>
      </ScrollReveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {vms.map((vm, i) => (
          <ScrollReveal key={vm.id} delayMs={i * 100}>
            <VMCard vm={vm} onToggle={toggleVM} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
