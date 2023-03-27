module.exports = {
  extends: [
    'airbnb',
    'plugin:import/react',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  globals: {
    window: true,
    document: true,
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'jsx-a11y',
    'import',
  ],
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'import/extensions': 0,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './webpack.dev.js',
      },
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
        ],
      },
    },
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
    project: ['tsconfig.json'],
  },
};
