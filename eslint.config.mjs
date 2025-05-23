import antfu from '@antfu/eslint-config';

export default antfu({
  react: true,
  typescript: true,
  rules: {
    'no-console': 'warn',
    'node/no-process-env': 'warn',
    'ts/consistent-type-definitions': ['error', 'type'],
    'perfectionist/sort-imports': 'off',
  },
  ignores: ['node_modules', 'dist', 'build', 'src/components/ui', 'tailwind.config.ts'],
  stylistic: {
    indent: 2,
    quotes: 'single',
    semi: true,
  },
});
