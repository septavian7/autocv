module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "2020",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react", "prettier", "react-hooks"],
  rules: {
    "prettier/prettier": "error",
  },
  "settings": {
    "react": {
      "version": "detect" // Automatically detect the React version
    }
  }
};
