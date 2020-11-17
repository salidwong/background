module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "standard",
    "prettier",
    "prettier/react",
    "prettier/standard",
    // "typescript"

  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "prettier",
    // "typescript"
  ],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "no-console": ["warn", { allow: ["warn", "error"] }],
  }
}
