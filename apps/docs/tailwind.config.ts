import type { Config } from "tailwindcss";
import { spectreUIPlugin } from "@spectre-ui/tailwind-config/plugin";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,mdx}",
    "./app/**/*.{ts,tsx,mdx}",
    "../../packages/core/src/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  plugins: [spectreUIPlugin],
};

export default config;
