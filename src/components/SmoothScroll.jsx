"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Check if we are in browser environment
    if (typeof window === "undefined") return;

    let lenisInstance = null;
    let rafId = null;

    try {
      const LenisConstructor = typeof Lenis === "function" ? Lenis : (Lenis.default || Lenis);

      // Instantiate Lenis smooth scroll
      lenisInstance = new LenisConstructor({
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // High-end exponential smoothing
        direction: "vertical",
        gestureDirection: "vertical",
        smoothTargets: true,
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.5,
        infinite: false,
      });

      // Request Animation Frame loop
      function raf(time) {
        if (lenisInstance) {
          lenisInstance.raf(time);
        }
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);

      // Save Lenis instance to window for global interaction (e.g. GSAP ScrollTrigger syncing)
      window.lenis = lenisInstance;

      // Scroll to top on fresh load
      window.scrollTo(0, 0);
    } catch (error) {
      console.warn("Lenis smooth scroll failed to initialize, falling back to native scrolling:", error);
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenisInstance) lenisInstance.destroy();
      window.lenis = null;
    };
  }, []);

  return <>{children}</>;
}
