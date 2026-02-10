import baseConfig from "@spectre-ui/eslint-config";

export default [
  ...baseConfig,
  {
    rules: {
      "@typescript-eslint/no-empty-object-type": "off",
      "jsx-a11y/no-autofocus": "off",
    },
  },
];
