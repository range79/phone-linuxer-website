import type { CSSProperties } from "react";
import type { DetectedOS } from "../hooks/useDetectedOS";
import { DecryptText } from "./DecryptText";
import { GlassCard } from "./GlassCard";
import { ScrollReveal } from "./ScrollReveal";

function IconWindows({ glow }: { glow: boolean }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      aria-hidden
      style={{
        filter: glow ? "drop-shadow(0 0 10px rgba(103, 80, 164, 0.75))" : undefined,
      }}
    >
      <path
        fill="currentColor"
        d="M3 5.548l7.2-.994v6.906H3V5.548zm0 7.254h7.2v6.962L3 18.769v-6.967zm8.213-8.15L21 4.2v7.51h-9.787V4.652zm0 15.444V12.26H21V19.8l-9.787 1.336z"
      />
    </svg>
  );
}

function IconApple({ glow }: { glow: boolean }) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      aria-hidden
      style={{
        filter: glow ? "drop-shadow(0 0 10px rgba(103, 80, 164, 0.75))" : undefined,
      }}
    >
      <path
        fill="currentColor"
        d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
      />
    </svg>
  );
}

function IconTux({ glow }: { glow: boolean }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      aria-hidden
      style={{
        filter: glow ? "drop-shadow(0 0 10px rgba(103, 80, 164, 0.75))" : undefined,
      }}
    >
      <path
        fill="currentColor"
        d="M12.05 2.02c-1.46.12-2.68 1.21-2.99 2.62a3.3 3.3 0 0 0-.1.78c0 .52.11 1.02.32 1.48a3.6 3.6 0 0 0-1.35 1.15c-.88 1.07-1.36 2.4-1.36 3.8 0 2.25 1.1 4.25 2.8 5.45.42.29.87.52 1.35.7-.13.42-.2.86-.2 1.3 0 1.85.84 3.48 2.16 4.55a4.2 4.2 0 0 0-.43 1.85c0 1.25.56 2.37 1.44 3.13.96.83 2.23 1.28 3.55 1.28s2.6-.45 3.55-1.28c.88-.76 1.44-1.88 1.44-3.13 0-.65-.15-1.25-.43-1.85 1.32-1.07 2.16-2.7 2.16-4.55q0-.69-.2-1.3c.48-.18.93-.41 1.35-.7 1.7-1.2 2.8-3.2 2.8-5.45 0-1.4-.48-2.73-1.36-3.8a3.6 3.6 0 0 0-1.35-1.15c.21-.46.32-.96.32-1.48q0-.42-.1-.78c-.31-1.41-1.53-2.5-2.99-2.62h-.05zM9.2 14.6c.28.25.56.48.84.65-.08.45-.06.9.06 1.35-.24.23-.5.44-.76.61-.43.25-.9.4-1.37.48-.2.03-.4.06-.6.08-.15.01-.29.02-.43.01-.1-.01-.21-.02-.3-.04l.1-.02c.64-.15 1.25-.43 1.77-.83s.96-.96 1.3-1.55c-.1 0-.2-.02-.3-.07z"
      />
    </svg>
  );
}

type Props = { detected: DetectedOS };

function platformCardStyle(highlight: boolean): CSSProperties {
  return {
    padding: "1.35rem 1.25rem",
    color: "var(--text)",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
    boxShadow: highlight ? "inset 0 0 0 1px rgba(103, 80, 164, 0.38)" : undefined,
    borderRadius: "calc(16px - 2px)",
    transition: "box-shadow 0.25s",
  };
}

export function SpiceSection({ detected }: Props) {
  const win = detected === "windows";
  const mac = detected === "mac";
  const linux = detected === "linux";

  return (
    <section
      id="spice"
      style={{
        position: "relative",
        zIndex: 1,
        padding: "4rem 1.5rem",
        maxWidth: 1120,
        margin: "0 auto",
        scrollMarginTop: "5rem",
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
          Pro-Grade Remote Access
        </DecryptText>
        <p style={{ color: "var(--text-muted)", maxWidth: 680, margin: "0 0 1rem" }}>
          Low-latency SPICE and VNC pipelines optimized for Wi-Fi/LAN protocols. Pair with
          Virt-Viewer for a seamless workstation experience on any display.
        </p>
      </ScrollReveal>

      <ScrollReveal delayMs={60}>
        <GlassCard style={{ marginBottom: "1.75rem" }}>
          <div style={{ padding: "1.15rem 1.35rem" }}>
            <p
              style={{
                margin: "0 0 0.65rem",
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--electric)",
              }}
            >
              Why SPICE
            </p>
            <ul
              style={{
                margin: 0,
                paddingLeft: "1.15rem",
                color: "var(--text-muted)",
                fontSize: "0.93rem",
                lineHeight: 1.65,
                display: "flex",
                flexDirection: "column",
                gap: "0.45rem",
              }}
            >
              <li>
                <strong style={{ color: "var(--text)" }}>Lower latency</strong> — tuned protocol
                stack for responsive pointer and keyboard on LAN or Wi‑Fi.
              </li>
              <li>
                <strong style={{ color: "var(--text)" }}>Sharper remote display</strong> — adaptive
                compression and a pipeline aimed at fluid desktop UI, not just static frames.
              </li>
              <li>
                <strong style={{ color: "var(--text)" }}>Desktop-class viewers</strong> — pair with
                Virt-Viewer for full-screen, multi-monitor-friendly sessions when you need
                workstation ergonomics.
              </li>
              <li>
                <strong style={{ color: "var(--text)" }}>VNC when you need it</strong> — same console
                also surfaces VNC; use whichever of <strong>SPICE</strong> or <strong>VNC</strong> fits
                your setup.
              </li>
            </ul>
          </div>
        </GlassCard>
      </ScrollReveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1rem",
        }}
      >
        <ScrollReveal delayMs={0}>
          <GlassCard>
            <div style={platformCardStyle(win)}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <IconWindows glow={win} />
              <span style={{ fontWeight: 600, fontSize: "1.05rem" }}>Windows</span>
              {win && (
                <span
                  style={{
                    marginLeft: "auto",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "var(--signal)",
                    textShadow: "0 0 10px var(--signal-glow)",
                  }}
                >
                  DETECTED
                </span>
              )}
            </div>
            <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--text-muted)" }}>
              Latest x64 Virt-Viewer MSI from the official project site.
            </p>
            <a
              href="https://gitlab.com/virt-viewer/virt-viewer/-/releases/v11.0/downloads/virt-viewer-x64-11.0-1.0.msi"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0.65rem 1rem",
                borderRadius: 10,
                background: "rgba(103, 80, 164, 0.14)",
                color: "var(--electric)",
                fontWeight: 600,
                textDecoration: "none",
                border: "1px solid rgba(103, 80, 164, 0.38)",
              }}
            >
              Open Virt-Viewer MSI installer
            </a>
            </div>
          </GlassCard>
        </ScrollReveal>

        <ScrollReveal delayMs={80}>
          <GlassCard>
            <div style={platformCardStyle(linux)}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <IconTux glow={linux} />
              <span style={{ fontWeight: 600, fontSize: "1.05rem" }}>Linux</span>
              {linux && (
                <span
                  style={{
                    marginLeft: "auto",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "var(--signal)",
                    textShadow: "0 0 10px var(--signal-glow)",
                  }}
                >
                  DETECTED
                </span>
              )}
            </div>
            <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--text-muted)" }}>
              Debian / Ubuntu family and Fedora / RHEL-family commands:
            </p>
            <code
              style={{
                display: "block",
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                padding: "0.85rem",
                borderRadius: 10,
                background: "rgba(0,0,0,0.35)",
                border: "1px solid rgba(103, 80, 164, 0.14)",
                color: "#d0bcff",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}
            >
              sudo apt install virt-viewer{"\n"}
              <span style={{ color: "var(--text-muted)" }}># or</span>
              {"\n"}
              sudo dnf install virt-viewer
            </code>
            </div>
          </GlassCard>
        </ScrollReveal>

        <ScrollReveal delayMs={160}>
          <GlassCard>
            <div style={platformCardStyle(mac)}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <IconApple glow={mac} />
              <span style={{ fontWeight: 600, fontSize: "1.05rem" }}>macOS</span>
              {mac && (
                <span
                  style={{
                    marginLeft: "auto",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "var(--signal)",
                    textShadow: "0 0 10px var(--signal-glow)",
                  }}
                >
                  DETECTED
                </span>
              )}
            </div>
            <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--text-muted)" }}>
              Install via Homebrew:
            </p>
            <code
              style={{
                display: "block",
                fontFamily: "var(--font-mono)",
                fontSize: "0.82rem",
                padding: "0.85rem",
                borderRadius: 10,
                background: "rgba(0,0,0,0.35)",
                border: "1px solid rgba(103, 80, 164, 0.14)",
                color: "#d0bcff",
                whiteSpace: "pre-wrap",
              }}
            >
              brew install virt-viewer
            </code>
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
