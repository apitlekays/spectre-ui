import type { ComponentDoc } from "../types.js";

export const terminalTextDoc: ComponentDoc = {
  name: "TerminalText",
  slug: "terminal-text",
  category: "decorative",
  description: "Typewriter-style text animation with blinking cursor. Types out text character by character at configurable speed.",
  importStatement: 'import { TerminalText } from "@spectre-ui/core";',
  props: [
    { name: "text", type: "string", required: true, description: "Text to type out." },
    { name: "speed", type: "number", default: "50", description: "Milliseconds per character." },
    { name: "cursor", type: "boolean", default: "true", description: "Show blinking cursor." },
    { name: "prefix", type: "string", default: '"> "', description: "Text prefix shown before the typed text." },
    { name: "onComplete", type: "() => void", description: "Callback fired when typing animation completes." },
    { name: "className", type: "string", description: "Additional CSS classes." },
  ],
  examples: [
    {
      title: "Basic Terminal Text",
      code: '<TerminalText text="Initializing system protocols..." />',
    },
    {
      title: "Custom Speed and Prefix",
      code: '<TerminalText\n  text="Connection established. Welcome, Agent."\n  speed={30}\n  prefix="$ "\n  onComplete={() => console.log("Done!")}\n/>',
    },
    {
      title: "Sequential Messages",
      code: 'const [step, setStep] = useState(0);\nconst messages = ["Booting system...", "Loading modules...", "Ready."];\n\n<Stack gap="xs">\n  {messages.slice(0, step + 1).map((msg, i) => (\n    <TerminalText\n      key={i}\n      text={msg}\n      onComplete={() => setStep((s) => Math.min(s + 1, messages.length - 1))}\n    />\n  ))}\n</Stack>',
    },
  ],
};
