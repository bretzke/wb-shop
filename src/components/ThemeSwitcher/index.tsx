"use client";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Moon, Sun } from "phosphor-react";

export default function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();

  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  const icon = theme === "dark" ? <Moon size={32} /> : <Sun size={32} />;

  return (
    <Button variant="outline" onClick={toggleTheme} className="p-2">
      {icon}
    </Button>
  );
}
