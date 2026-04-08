import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      // This replaces the old "env: { browser: true, node: true }"
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // Your custom rules here
      "no-unused-vars": "warn",
    },
  },
];