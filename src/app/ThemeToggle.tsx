"use client";

import { useTheme } from "next-themes";
import { TbMoon, TbSunFilled } from "react-icons/tb";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      className="inline-flex relative bg-black dark:bg-white opacity-80 p-1 rounded-lg text-white hover:text-o dark:hover:text-o dark:text-black duration-200 ease-in-out"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <TbSunFilled
        size="20"
        className="transition-all rotate-0 scale-100 dark:-rotate-90 dark:scale-0"
      />
      <TbMoon
        size="20"
        className="absolute transition-all rotate-90 scale-0 dark:rotate-0 dark:scale-100"
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
