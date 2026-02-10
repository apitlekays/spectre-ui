import type { Config } from "tailwindcss";
import { spectreUIPlugin } from "./plugin";

export const spectreUIPreset: Partial<Config> = {
  darkMode: "class",
  plugins: [spectreUIPlugin],
};

export default spectreUIPreset;
