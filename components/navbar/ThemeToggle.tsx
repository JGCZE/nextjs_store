"use client";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="w-12 h-12 flex justify-center">
      {theme === "dark" ? (
        <MdLightMode size={32} onClick={() => setTheme("light")} />
      ) : (
        <MdDarkMode size={32} onClick={() => setTheme("dark")} />
      )}
    </div>
  );
};

export default ThemeToggle;
