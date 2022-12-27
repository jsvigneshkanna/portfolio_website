import { useState, useEffect } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState<string>("dark");
  useEffect(() => {
    const isDark: boolean =
      document.documentElement.classList.contains("dark") || localStorage.getItem("theme") == "dark";
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

const toggleHtml = (theme: string) => {
  const doc: HTMLElement = document.documentElement;
  if (theme === "light") {
    doc.classList.remove("dark");
  } else {
    doc.classList.add("dark");
  }
};

const storeThemeLocalStorage = (theme: string) => {
  try {
    localStorage.setItem("theme", theme);
  } catch (error) {
    // Nothing to do much, so sad 😥
    console.error("Error while setting theme in local storage 😢");
  }
};
