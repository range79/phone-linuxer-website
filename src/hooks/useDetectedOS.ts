import { useMemo } from "react";

export type DetectedOS = "windows" | "mac" | "linux" | "unknown";

export function useDetectedOS(): DetectedOS {
  return useMemo(() => {
    const ua =
      typeof navigator !== "undefined"
        ? navigator.userAgent.toLowerCase()
        : "";
    if (/android/.test(ua)) return "unknown";
    if (/win/.test(ua)) return "windows";
    if (/macintosh|mac os x/.test(ua) && !/like mac os x/.test(ua)) return "mac";
    if (/linux|x11/.test(ua)) return "linux";
    return "unknown";
  }, []);
}
