import { type ReactNode, useEffect, useRef, useState } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
};

export function ScrollReveal({ children, className = "", delayMs = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let t: ReturnType<typeof setTimeout> | undefined;
    let done = false;

    const reveal = () => {
      if (done) return;
      done = true;
      if (delayMs > 0) {
        t = setTimeout(() => setVisible(true), delayMs);
      } else {
        setVisible(true);
      }
    };

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) reveal();
      },
      { rootMargin: "0px 0px -5% 0px", threshold: 0.05 }
    );
    obs.observe(el);

    /* First paint / IO quirks: if already on screen, show without waiting */
    requestAnimationFrame(() => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (r.top < vh * 0.98 && r.bottom > vh * 0.02) reveal();
    });

    return () => {
      obs.disconnect();
      if (t !== undefined) clearTimeout(t);
    };
  }, [delayMs]);

  return (
    <div
      ref={ref}
      className={`scroll-reveal${visible ? " visible" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
