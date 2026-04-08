// eslint.config.cjs
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  rules: {
    "no-unused-vars": "warn",
    "semi": ["error", "always"],
    "quotes": ["error", "double"]
  },
};