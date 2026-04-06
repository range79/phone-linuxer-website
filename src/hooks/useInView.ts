import { useCallback, useEffect, useRef, useState } from "react";

export function useInView<T extends Element>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  const handle = useCallback((entries: IntersectionObserverEntry[]) => {
    const e = entries[0];
    if (!e) return;
    if (e.isIntersecting) setInView(true);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const opts = {
      rootMargin: "0px 0px -8% 0px" as const,
      threshold: 0.06,
    };
    const obs = new IntersectionObserver(handle, opts);
    obs.observe(el);

    requestAnimationFrame(() => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (r.top < vh * 0.95 && r.bottom > vh * 0.05) setInView(true);
    });

    return () => obs.disconnect();
  }, [handle]);

  return { ref, inView };
}
