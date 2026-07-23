import { useEffect, useState } from "react";
import "./ThemeToggle.css";

type Theme = "theme-professional" | "theme-stitch";

const LABELS: Record<Theme, string> = {
  "theme-professional": "Professional",
  "theme-stitch": "Stitch",
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem("theme") as Theme) || "theme-professional";
  });

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => {
    setTheme((prev) => (prev === "theme-professional" ? "theme-stitch" : "theme-professional"));
  };

  return (
    <button className="theme-toggle" onClick={toggle} title={`Switch to ${theme === "theme-professional" ? "Stitch" : "Professional"} theme`}>
      <span className="theme-toggle-dot" />
      <span className="theme-toggle-label">{LABELS[theme]}</span>
    </button>
  );
}
