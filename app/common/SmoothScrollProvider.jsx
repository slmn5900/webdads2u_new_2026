"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "@studio-freight/lenis";

export default function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
      smooth: true,
      smoothWheel: true,
      smoothTouch: false,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });

    window.lenis = lenis;
    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    const preventLenisOnScrollable = () => {
      document
        .querySelectorAll(".overflow-y-auto, .overflow-auto")
        .forEach((el) => {
          if (!el.hasAttribute("data-lenis-prevent")) {
            el.setAttribute("data-lenis-prevent", "");
          }
        });
    };

    preventLenisOnScrollable();

    return () => {
      lenis.destroy();
      lenisRef.current = null;
      window.lenis = null;
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return children;
}
