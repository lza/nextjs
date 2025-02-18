import { resolve } from 'path';
import { FlatCompat } from '@eslint/eslintrc';
import { includeIgnoreFile } from '@eslint/compat';
import pluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const gitIgnorePath = resolve(import.meta.dirname, '.gitignore');

const eslintConfig = [
  includeIgnoreFile(gitIgnorePath),
  {
    ignores: [
      '**/coverage/',
      '**/public/',
      '**/dist/',
      'pnpm-lock.yaml',
      'pnpm-workpace.yaml',
    ],
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  pluginPrettierRecommended,
];

export default eslintConfig;
