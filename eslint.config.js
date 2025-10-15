import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import json from '@eslint/json';
import pluginPrettier from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  // JS / JSX files in src
  {
    files: ['src/**/*.{js,jsx}'],
    plugins: { js, prettier: pluginPrettier },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
    rules: {
      'prettier/prettier': 'error',
    },
  },

  // React rules only for JS / JSX in src
  {
    files: ['src/**/*.{js,jsx}'],
    ...pluginReact.configs.flat.recommended,
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      'react/react-in-jsx-scope': 'off', // disable "React must be in scope"
    },
  },

  // JSON files anywhere (optional, you can limit to src if needed)
  {
    files: ['src/**/*.json'],
    plugins: { json, prettier: pluginPrettier },
    language: 'json/json',
    extends: ['json/recommended'],
    rules: { 'prettier/prettier': 'error' },
  },
  {
    files: ['src/**/*.jsonc'],
    plugins: { json, prettier: pluginPrettier },
    language: 'json/jsonc',
    extends: ['json/recommended'],
    rules: { 'prettier/prettier': 'error' },
  },
  {
    files: ['src/**/*.json5'],
    plugins: { json, prettier: pluginPrettier },
    language: 'json/json5',
    extends: ['json/recommended'],
    rules: { 'prettier/prettier': 'error' },
  },
]);
