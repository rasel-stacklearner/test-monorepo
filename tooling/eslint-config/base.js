import js from '@eslint/js';
import turboPlugin from 'eslint-plugin-turbo';
import tseslint from 'typescript-eslint';
import { fixupConfigRules } from '@eslint/compat';

import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});
/**Base Recommended config */
const recommendedConfig = fixupConfigRules(
  compat.extends(
    'eslint:recommended',
    'prettier',
    'plugin:prettier/recommended',
    'eslint-config-prettier'
  )
);
/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const config = [
  ...recommendedConfig,
  ...tseslint.configs.recommended,
  {
    ignores: ['**/dist/**', '**/build/**', '**/.next/**', '**/node_modules/**'],
  },
  {
    files: ['**/*.ts', '**/*.js'],
    languageOptions: {
      parser: tseslint.parser,
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      turbo: turboPlugin,
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
];
