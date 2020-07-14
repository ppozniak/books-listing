module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "plugin:react/recommended",
    "google",
    "prettier",
    "plugin:jest-dom/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react", "prettier", "jest", "jest-dom"],
  rules: {
    "prettier/prettier": "error",
    "linebreak-style": ["error", "unix"],
  },
};
