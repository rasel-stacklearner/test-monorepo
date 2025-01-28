import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import pluginNext from '@next/eslint-plugin-next';
import { fixupConfigRules } from '@eslint/compat';

import { FlatCompat } from '@eslint/eslintrc';

import { config as baseConfig } from './base.js';

const compat = new FlatCompat({
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const recommendedConfig = fixupConfigRules(compat.extends('next'));

/**
 * A custom ESLint configuration for libraries that use Next.js.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const nextJsConfig = [
  ...baseConfig,
  ...recommendedConfig,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],

    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules,
    },
  },
  eslintConfigPrettier,
];
