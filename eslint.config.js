import { FlatCompat } from "@eslint/eslintrc";
const compat = new FlatCompat({ baseDirectory: process.cwd() });

export default [
  ...compat.extends("eslint:recommended"),
  {
    files: ["*.js", "js/**/*.js"],
    rules: {
      "no-unused-vars": "warn",
      "semi": ["error", "always"],
      "quotes": ["error", "double"]
    }
  }
];