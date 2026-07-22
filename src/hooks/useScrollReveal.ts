import { useEffect, useRef } from "react";

type Preset = "fade-up" | "fade-left" | "fade-right" | "fade-scale" | "fade-rotate" | "fade-flip" | "zoom-in" | "blur-in";

const presetClasses: Record<Preset, string> = {
  "fade-up": "reveal-fade-up",
  "fade-left": "reveal-fade-left",
  "fade-right": "reveal-fade-right",
  "fade-scale": "reveal-fade-scale",
  "fade-rotate": "reveal-fade-rotate",
  "fade-flip": "reveal-fade-flip",
  "zoom-in": "reveal-zoom-in",
  "blur-in": "reveal-blur-in",
};

export function useScrollReveal(preset: Preset = "fade-up", threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.add("reveal", presetClasses[preset]);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [preset, threshold]);

  return ref;
}

export function useStaggerReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.add("reveal", "reveal-stagger");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

export function useParallax(speed = 0.3) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const scrollY = window.scrollY;
      const offset = rect.top + scrollY;
      const dy = (scrollY - offset + window.innerHeight) * speed;
      el.style.transform = `translateY(${Math.max(-dy, 0)}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return ref;
}
