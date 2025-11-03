module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    es2020: true,
    node: true,
    jest: true,
  },
  ignorePatterns: ['dist', 'node_modules'],
  rules: {
    // At least 4 extra rules
    eqeqeq: 'error',
    curly: 'error',
    'no-console': 'warn',
    '@typescript-eslint/consistent-type-imports': 'error',
    // Keep some TS strictness relaxed if desired
    '@typescript-eslint/explicit-function-return-type': 'off',
    'prettier/prettier': 'error',
  },
};
