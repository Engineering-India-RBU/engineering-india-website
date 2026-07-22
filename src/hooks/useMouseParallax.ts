import { useEffect, useRef, useCallback } from "react";

export function useTilt(maxTilt = 8) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) / rect.width;
      const deltaY = (e.clientY - centerY) / rect.height;

      el.style.transform = `perspective(800px) rotateX(${-deltaY * maxTilt}deg) rotateY(${deltaX * maxTilt}deg) scale3d(1.02, 1.02, 1.02)`;
    },
    [maxTilt]
  );

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    el.style.transition = "transform 0.5s ease";
    setTimeout(() => {
      if (el) el.style.transition = "";
    }, 500);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.addEventListener("mousemove", handleMouseMove, { passive: true });
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return ref;
}

export function useMagnetic(strength = 0.4) {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * strength;
      const y = (e.clientY - rect.top - rect.height / 2) * strength;
      el.style.transform = `translate(${x}px, ${y}px)`;
    };

    const handleLeave = () => {
      el.style.transform = "translate(0, 0)";
      el.style.transition = "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)";
      setTimeout(() => {
        el.style.transition = "";
      }, 400);
    };

    el.addEventListener("mousemove", handleMove, { passive: true });
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [strength]);

  return ref;
}
