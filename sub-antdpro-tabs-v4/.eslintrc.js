module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  parser: 'babel-eslint',
  rules: {
    'no-unused-vars': 'off',
    'no-param-reassign': 0,
  },
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
    REACT_APP_ENV: true,
  },
};
