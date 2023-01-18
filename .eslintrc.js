module.exports = {
  env: {
    es2021: true,
  },
  extends: ["xo", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-alert": "off",
    "no-console": "off",
  },
};
