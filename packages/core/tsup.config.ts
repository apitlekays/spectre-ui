import { defineConfig } from "tsup";
import { copyFileSync } from "fs";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  splitting: true,
  treeshake: true,
  external: ["react", "react-dom", "framer-motion", "tailwindcss"],
  banner: {
    js: '"use client";',
  },
  onSuccess: async () => {
    copyFileSync("src/styles/tokens.css", "dist/styles.css");
  },
});
