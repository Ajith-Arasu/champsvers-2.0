import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import json from "@eslint/json";
import pluginPrettier from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // JS / JSX files
  {
    files: ["**/*.{js,jsx}"],
    plugins: { js, prettier: pluginPrettier },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
    rules: {
      "prettier/prettier": "error"
    }
  },

  // React rules only for JS / JSX
  {
    files: ["**/*.{js,jsx}"],
    ...pluginReact.configs.flat.recommended
  },

  // JSON files
  {
    files: ["**/*.json"],
    plugins: { json, prettier: pluginPrettier },
    language: "json/json",
    extends: ["json/recommended"],
    rules: { "prettier/prettier": "error" }
  },
  {
    files: ["**/*.jsonc"],
    plugins: { json, prettier: pluginPrettier },
    language: "json/jsonc",
    extends: ["json/recommended"],
    rules: { "prettier/prettier": "error" }
  },
  {
    files: ["**/*.json5"],
    plugins: { json, prettier: pluginPrettier },
    language: "json/json5",
    extends: ["json/recommended"],
    rules: { "prettier/prettier": "error" }
  }
]);
