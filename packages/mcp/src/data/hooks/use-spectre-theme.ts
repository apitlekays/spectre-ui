import type { HookDoc } from "../types.js";

export const useSpectreThemeDoc: HookDoc = {
  name: "useSpectreTheme",
  slug: "use-spectre-theme",
  description:
    'Accesses the current spectre-ui theme context. Returns the active theme ("dark" | "light"), a setter to change it, and a toggle function. Must be used within a `SpectreThemeProvider`.',
  importStatement: 'import { useSpectreTheme } from "@spectre-ui/core";',
  signature: "function useSpectreTheme(): SpectreThemeContextValue",
  params: [],
  returnType: '{ theme: "dark" | "light"; setTheme: (theme: "dark" | "light") => void; toggleTheme: () => void }',
  returnDescription:
    "`theme` is the current active theme. `setTheme` sets a specific theme and persists to localStorage. `toggleTheme` switches between dark and light.",
  examples: [
    {
      title: "Theme Toggle Button",
      code: `import { useSpectreTheme } from "@spectre-ui/core";
import { Button } from "@spectre-ui/core";

function ThemeToggle() {
  const { theme, toggleTheme } = useSpectreTheme();

  return (
    <Button variant="ghost" onClick={toggleTheme}>
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </Button>
  );
}`,
    },
    {
      title: "Set Specific Theme",
      code: `const { setTheme } = useSpectreTheme();

return (
  <Select onValueChange={(v) => setTheme(v as "dark" | "light")}>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="light">Light</SelectItem>
  </Select>
);`,
    },
  ],
};
