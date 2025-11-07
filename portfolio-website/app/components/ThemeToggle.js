"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("selected-theme");
    const prefersDark =
      savedTheme === "dark" ||
      (!savedTheme &&
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    document.body.classList.toggle("dark-theme", Boolean(prefersDark));
    document.documentElement.classList.remove("dark-theme-loading");
    setIsDark(Boolean(prefersDark));
    setMounted(true);
  }, []);

  const handleToggle = () => {
    setIsDark((prev) => {
      const next = !prev;
      document.body.classList.toggle("dark-theme", next);
      localStorage.setItem("selected-theme", next ? "dark" : "light");
      return next;
    });
  };

  if (!mounted) {
    return <i className="ri-moon-line change-theme" style={{ opacity: 0 }}></i>;
  }

  return (
    <i
      className={`${isDark ? "ri-sun-line" : "ri-moon-line"} change-theme`}
      id="theme-button"
      onClick={handleToggle}
      style={{ cursor: "pointer" }}
    ></i>
  );
}
