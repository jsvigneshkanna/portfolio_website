import { useState, useEffect } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark") || localStorage.getItem("theme") == "dark";
    console.log("test: ", isDark);
    setTheme(isDark ? "dark" : "light");
  }, [theme]);
  const toggle = () => {
    const nextTheme = theme == "light" ? "dark" : "light";
    setTheme(nextTheme);
    toggleHtml(nextTheme);
    storeThemeLocalStorage(nextTheme);
  };
  return { theme, toggle };
};

const toggleHtml = (theme) => {
  const doc = document.documentElement;
  if (theme === "light") {
    doc.classList.remove("dark");
  } else {
    doc.classList.add("dark");
  }
};

const storeThemeLocalStorage = (theme) => {
  try {
    localStorage.setItem("theme", theme);
  } catch (error) {
    // Nothing to do much, so sad 😥
  }
};
