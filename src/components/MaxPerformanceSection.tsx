import { useState, useEffect } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { InfoChip } from "./InfoChip";
import { StatusBadge } from "./StatusBadge";
import { MaterialDialog } from "./MaterialDialog";

export function MaxPerformanceSection() {
  const [isExtreme, setIsExtreme] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [cpuUsage, setCpuUsage] = useState(15);
  const [ramUsage, setRamUsage] = useState(6.2);
  const [cpuTemp, setCpuTemp] = useState(38);
  const [batteryTemp, setBatteryTemp] = useState(32);

  const handleToggle = () => {
    if (!isExtreme) {
      setShowWarning(true);
    } else {
      setIsExtreme(false);
    }
  };

  const confirmExtreme = () => {
    setIsExtreme(true);
    setShowWarning(false);
  };

  // Live Jitter Simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setCpuUsage((prev) => {
        const delta = (Math.random() - 0.5) * (isExtreme ? 6 : 2);
        const base = isExtreme ? 25 : 15;
        return Math.min(Math.max(Math.round(prev + delta), base - 5), base + 15);
      });
      setCpuTemp((prev) => {
        const delta = (Math.random() - 0.5) * 3;
        const targetBase = isExtreme ? 58 : 42;
        const newTemp = prev + (targetBase - prev) * 0.2 + delta;
        return Math.min(Math.max(Math.round(newTemp), 38), 65);
      });
      setRamUsage((prev) => {
        const delta = (Math.random() - 0.5) * 0.2;
        return Math.min(Math.max(parseFloat((prev + delta).toFixed(1)), 6.1), 6.9);
      });
      setBatteryTemp((prev) => {
        const delta = (Math.random() - 0.5) * 1.5;
        const targetBase = isExtreme ? 42 : 34;
        const newTemp = prev + (targetBase - prev) * 0.2 + delta;
        return Math.min(Math.max(Math.round(newTemp), 32), 46);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isExtreme]);

  return (
    <section
      id="performance"
      style={{
        position: "relative",
        zIndex: 1,
        padding: "4rem 1.5rem",
        maxWidth: 1120,
        margin: "0 auto",
      }}
    >
      <MaterialDialog
        isOpen={showWarning}
        title="Performance Warning"
        message="Enabling Extreme Optimization will significantly increase device temperature and power consumption. Prolonged use may cause thermal throttling."
        onCancel={() => setShowWarning(false)}
        onConfirm={confirmExtreme}
      />

      <ScrollReveal>
        <div style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.65rem, 4vw, 2.25rem)",
              margin: "0 0 0.5rem",
              fontWeight: 800,
            }}
          >
            Performance Tweak Engine
          </h2>
          <p style={{ color: "var(--on-surface-variant)", maxWidth: 680, margin: 0 }}>
            Dynamic hardware orchestration. Monitor host resources and toggle engine performance
            parameters in real-time from the CORE Cockpit.
          </p>
        </div>
      </ScrollReveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2rem",
          alignItems: "start",
        }}
      >
        {/* CORE Cockpit Card */}
        <ScrollReveal>
          <div className="glass-card-cockpit" style={{ padding: "24px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "24px",
              }}
            >
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "4px" }}>
                  CORE Cockpit
                </h3>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: isExtreme ? "var(--warning)" : "var(--success)",
                      transition: "background 0.3s ease",
                    }}
                  />
                  <span style={{ fontSize: "0.75rem", color: "var(--on-surface-variant)", fontWeight: 600 }}>
                    {isExtreme ? "Extreme Optimization ON" : "Balanced Optimization"}
                  </span>
                  {isExtreme && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="3">
                      <line x1="12" y1="19" x2="12" y2="19.01"/><line x1="12" y1="5" x2="12" y2="15"/>
                    </svg>
                  )}
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "0.75rem", color: "var(--brand-bright)", fontWeight: 700 }}>OPTIMIZE</span>
                <div
                  onClick={handleToggle}
                  style={{
                    width: 44,
                    height: 24,
                    background: isExtreme ? "var(--brand)" : "rgba(255,255,255,0.12)",
                    borderRadius: "12px",
                    position: "relative",
                    padding: "4px",
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <div
                    style={{
                      width: 16,
                      height: 16,
                      background: "white",
                      borderRadius: "50%",
                      marginLeft: isExtreme ? "auto" : "0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s cubic-bezier(0.4, 1.5, 0.2, 1)",
                    }}
                  >
                    {isExtreme && (
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="3">
                         <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Thermal Gauges Row */}
            <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
              <div
                style={{
                  flex: 1,
                  padding: "12px",
                  borderRadius: "16px",
                  background: "rgba(33, 150, 243, 0.05)",
                  border: "1px solid rgba(33, 150, 243, 0.2)",
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="2">
                    <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>
                  </svg>
                  <span style={{ fontSize: "0.75rem", color: "var(--on-surface-variant)" }}>CPU</span>
                </div>
                <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#2196F3", marginBottom: "8px" }}>{cpuTemp}°C</div>
                <div style={{ height: "4px", background: "rgba(33, 150, 243, 0.1)", borderRadius: "2px", overflow: "hidden" }}>
                  <div style={{ width: `${(cpuTemp / 100) * 100}%`, height: "100%", background: "#2196F3", borderRadius: "2px", transition: "width 0.5s ease" }} />
                </div>
              </div>

              <div
                style={{
                  flex: 1,
                  padding: "12px",
                  borderRadius: "16px",
                  background: "rgba(76, 175, 80, 0.05)",
                  border: "1px solid rgba(76, 175, 80, 0.2)",
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2">
                    <rect x="2" y="7" width="16" height="12" rx="2"/><path d="M22 11v2"/><path d="M6 11h4"/><path d="M8 9v4"/>
                  </svg>
                  <span style={{ fontSize: "0.75rem", color: "var(--on-surface-variant)" }}>Battery</span>
                </div>
                <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#4CAF50", marginBottom: "8px" }}>{batteryTemp}°C</div>
                <div style={{ height: "4px", background: "rgba(76, 175, 80, 0.1)", borderRadius: "2px", overflow: "hidden" }}>
                  <div style={{ width: `${(batteryTemp / 60) * 100}%`, height: "100%", background: "#4CAF50", borderRadius: "2px", transition: "width 0.5s ease" }} />
                </div>
              </div>
            </div>

            {/* Resource Bars Section */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "20px" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                  <span style={{ fontSize: "0.8rem", fontWeight: 700 }}>Host CPU</span>
                  <span style={{ fontSize: "0.8rem", color: "var(--brand-bright)" }}>{cpuUsage}%</span>
                </div>
                <div style={{ height: "6px", background: "rgba(103, 80, 164, 0.1)", borderRadius: "3px", overflow: "hidden" }}>
                  <div style={{ width: `${cpuUsage}%`, height: "100%", background: "var(--brand)", borderRadius: "3px", transition: "width 0.4s ease-out" }} />
                </div>
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                  <span style={{ fontSize: "0.8rem", fontWeight: 700 }}>Host RAM</span>
                  <span style={{ fontSize: "0.8rem", color: "#00BCD4" }}>{ramUsage}G / 16.0G</span>
                </div>
                <div style={{ height: "6px", background: "rgba(0, 188, 212, 0.1)", borderRadius: "3px", overflow: "hidden" }}>
                  <div style={{ width: `${(ramUsage / 16) * 100}%`, height: "100%", background: "#00BCD4", borderRadius: "3px", transition: "width 0.6s ease" }} />
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.8rem", fontWeight: 700 }}>Thermal State</span>
                <span style={{ fontSize: "0.8rem", fontWeight: 900, color: "var(--success)" }}>SAFE</span>
              </div>
            </div>

            {/* Status Badges Row */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", paddingTop: "12px", borderTop: "1.5px solid rgba(255,255,255,0.05)" }}>
              <StatusBadge type="success">KVM</StatusBadge>
              <StatusBadge type="primary">{isExtreme ? "GPU:MAX" : "GPU:AUTO"}</StatusBadge>
              <StatusBadge type={isExtreme ? "success" : "primary"}>{isExtreme ? "BOOST:ON" : "BOOST:OFF"}</StatusBadge>
            </div>
          </div>
        </ScrollReveal>

        {/* Technical Explanation Column */}
        <ScrollReveal delayMs={150}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ display: "flex", gap: "1rem" }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "14px",
                  background: "var(--brand-container)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-bright)" strokeWidth="2.5">
                  <path d="M2 12h5l2 8 4-16 2 8h5"/>
                </svg>
              </div>
              <div>
                <h4 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.35rem" }}>
                  Adaptive Engine Orchestration
                </h4>
                <p style={{ fontSize: "0.925rem", color: "var(--on-surface-variant)", lineHeight: 1.6 }}>
                  Our custom "Titan" engine logic adjusts QEMU cycles based on host thermal
                  throttling and background process pressure.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "1rem" }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "14px",
                  background: "rgba(76, 175, 80, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.5">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <div>
                <h4 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.35rem" }}>
                  Hardware Passthrough
                </h4>
                <p style={{ fontSize: "0.925rem", color: "var(--on-surface-variant)", lineHeight: 1.6 }}>
                  Direct GPU/CPU instruction set access allows for nearly 1:1 hardware performance
                  in guest operating systems.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "0.5rem" }}>
               <InfoChip label="HOST-PASSTHROUGH" />
               <InfoChip label="VIRTIO-STABLE" />
               <InfoChip label="KVM-ACCEL" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
