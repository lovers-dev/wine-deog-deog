import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import eslintPluginImport from 'eslint-plugin-import';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  eslintConfigPrettier,

  {
    plugins: {
      prettier: eslintPluginPrettier,
      '@typescript-eslint': typescriptEslintPlugin,
      import: eslintPluginImport,
    },
    rules: {
      'prettier/prettier': 'error',

      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',

      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'type',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
        },
      ],
    },
  },
];

export default eslintConfig;
