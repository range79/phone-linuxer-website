import { DecryptText } from "./DecryptText";
import { GlassCard } from "./GlassCard";
import { ScrollReveal } from "./ScrollReveal";

const items = [
  "Run full VS Code, Docker, and Python environments directly on Android.",
  "Multi-VM support: Host a Linux server and a Windows workstation at the same time.",
];

export function DeveloperSection() {
  return (
    <section
      style={{
        position: "relative",
        zIndex: 1,
        padding: "4rem 1.5rem",
        maxWidth: 1120,
        margin: "0 auto",
      }}
    >
      <ScrollReveal>
        <DecryptText
          as="h2"
          style={{
            fontSize: "clamp(1.65rem, 4vw, 2.25rem)",
            margin: "0 0 1.5rem",
            fontWeight: 700,
          }}
        >
          Pro-developer tools
        </DecryptText>
      </ScrollReveal>
      <ul
        style={{
          margin: 0,
          padding: 0,
          listStyle: "none",
          display: "grid",
          gap: "1rem",
        }}
      >
        {items.map((text, i) => (
          <ScrollReveal key={i} delayMs={i * 60}>
            <li>
              <GlassCard>
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                    padding: "1.25rem 1.35rem",
                    boxShadow: "inset 0 0 0 1px rgba(34, 197, 94, 0.12)",
                    borderRadius: "calc(16px - 2px)",
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      width: 10,
                      height: 10,
                      marginTop: 6,
                      borderRadius: 3,
                      background: "var(--signal)",
                      boxShadow: "0 0 12px var(--signal-glow)",
                    }}
                  />
                  <p style={{ margin: 0, fontSize: "1.02rem", color: "var(--text)", lineHeight: 1.55 }}>
                    {text}
                  </p>
                </div>
              </GlassCard>
            </li>
          </ScrollReveal>
        ))}
      </ul>
    </section>
  );
}
