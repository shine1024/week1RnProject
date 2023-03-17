module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'no-dupe-keys': 'off',
      },
    },
  ],
  // sort-imports 설정으로 import 구문 자동으로 변경은 되지않음 - plugin 추가
  plugins: ['sort-imports-es6-autofix'],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'max-len': ['error', {code: 100}],
    'sort-imports-es6-autofix/sort-imports-es6': [
      2,
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'],
      },
    ],
  },
};
