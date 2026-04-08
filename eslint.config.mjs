import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      // globals.browser includes things like 'window' and 'document'
      // globals.node includes things like 'process' or 'require'
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // You can add or override rules here
      "no-unused-vars": "warn",
      "no-undef": "error",
    },
  },
];