module.exports = {
  plugins: ['@typescript-eslint'],
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    // Need to be last, used to smooth out conflicting rules between eslint and prettier
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    // Eslint incorrect rule that gives error on windows
    '@next/next/no-document-import-in-page': 'off',
  },
};
