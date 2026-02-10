import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    plugin: "src/plugin.ts",
    preset: "src/preset.ts",
  },
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  external: ["tailwindcss"],
});
