module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    project: ["./tsconfig.js"],
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {},
};
