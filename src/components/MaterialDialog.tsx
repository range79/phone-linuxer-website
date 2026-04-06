
type Props = {
  isOpen: boolean;
  title: string;
  message: string;
  type?: "warning" | "success" | "info";
  onCancel: () => void;
  onConfirm: () => void;
};

export function MaterialDialog({ isOpen, title, message, type = "warning", onCancel, onConfirm }: Props) {
  if (!isOpen) return null;

  const getIcon = () => {
    switch (type) {
      case "success":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E91E63" strokeWidth="2.5">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        );
      case "info":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-bright)" strokeWidth="2.5">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
          </svg>
        );
      default:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--warning)" strokeWidth="2.5">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12" y2="17.01"/>
          </svg>
        );
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
        background: "rgba(0, 0, 0, 0.7)",
        backdropFilter: "blur(4px)",
      }}
    >
      <div
        className="glass-card-cockpit"
        style={{
          maxWidth: "340px",
          width: "100%",
          padding: "24px",
          borderRadius: "28px",
          background: "rgb(28, 27, 31)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            {getIcon()}
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: 0, color: "white" }}>{title}</h3>
          </div>
          
          <p style={{ fontSize: "0.95rem", color: "var(--on-surface-variant)", lineHeight: 1.5, margin: 0 }}>
            {message}
          </p>

          <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px", marginTop: "8px" }}>
            <button
              onClick={onCancel}
              style={{
                background: "transparent",
                border: "none",
                color: "var(--on-surface-variant)",
                padding: "10px 16px",
                fontWeight: 700,
                fontSize: "0.875rem",
                cursor: "pointer",
              }}
            >
              CLOSE
            </button>
            <button
              onClick={onConfirm}
              style={{
                background: "transparent",
                border: "none",
                color: type === "success" ? "#E91E63" : type === "warning" ? "var(--error)" : "var(--brand-bright)",
                padding: "10px 16px",
                fontWeight: 700,
                fontSize: "0.875rem",
                cursor: "pointer",
              }}
            >
              {type === "success" ? "CONTINUE" : "OK"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
