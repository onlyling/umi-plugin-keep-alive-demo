module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],

  // in antd-design-pro
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
  },

  rules: {
    'arrow-body-style': 0,
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-empty-function': ['warn'],
    '@typescript-eslint/no-explicit-any': 0,
    'jsx-quotes': ['error', 'prefer-double'],
    'react/self-closing-comp': 1,
    'react/no-danger': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
    'react-hooks/exhaustive-deps': 'warn',
    'no-console': 0,
    'no-unused-expressions': 0,
    'no-unused-vars': ['error'],
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'no-restricted-syntax': 0,
  },
};
