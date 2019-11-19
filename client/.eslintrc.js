module.exports = {
  extends: ["plugin:react/recommended", "prettier/react"],
  env: {
    browser: true,
    es6: true
  },
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "no-console": "warn"
  },
  settings: {
    react: {
      version: require("../package.json").dependencies.react,
    },
  }
}