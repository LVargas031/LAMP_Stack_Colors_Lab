import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        // If ...globals.jest fails, use these explicit definitions:
        describe: "readonly",
        test: "readonly",
        expect: "readonly",
        jest: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        // Project specific globals
        doLogin: "writable",
        readCookie: "writable",
        doLogout: "writable",
        addColor: "writable",
        searchColor: "writable",
        setUserData: "writable"
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
    },
  },
];