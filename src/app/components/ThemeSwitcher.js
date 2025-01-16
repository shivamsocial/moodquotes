// app/components/ThemeSwitcher.js
"use client"; // This is necessary to mark this component as client-side

import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.body.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "Switch to Dark Theme" : "Switch to Light Theme"}
    </button>
  );
}
