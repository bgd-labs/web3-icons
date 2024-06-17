/** @type {import("eslint").Linter.Config} */
const config = {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": true
  },
  "plugins": [
    "@typescript-eslint",
    "prettier",
    "simple-import-sort"
  ],
  "extends": [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "prettier",
  ],
  "rules": {
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        "prefer": "type-imports",
        "fixStyle": "inline-type-imports"
      }
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        "argsIgnorePattern": "^_"
      }
    ],
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        "checksVoidReturn": {
          "attributes": false
        }
      }
    ],
    "prettier/prettier": "warn",
    'simple-import-sort/imports': "error",
    'simple-import-sort/exports': "warn",
    'import/first': "error",
    'import/newline-after-import': "error",
    'import/no-duplicates': "error",
    'import/no-named-as-default': "error",
    'import/no-unresolved': "off",
    "@typescript-eslint/no-explicit-any": 'warn',
    "@typescript-eslint/no-unsafe-assignment": 'warn',
  }
}
module.exports = config;