import type { Config } from "tailwindcss";
import { shadcnPlugin } from "./plugin";
import animatePlugin from "tailwindcss-animate";

export const shadcnPreset = {
  content: [],
  darkMode: ["class"],
  plugins: [shadcnPlugin, animatePlugin],
} satisfies Config;
