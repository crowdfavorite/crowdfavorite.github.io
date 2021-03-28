/* eslint-disable */
const webpack = require('webpack');
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const plugins = [
  new ESLintPlugin({
    extensions: ['js', 'jsx', 'ts', 'tsx'],
  }),
  new CleanWebpackPlugin({
    cleanOnceBeforeBuildPatterns: [
      '**/*.gz',
      '**/*.js',
      '**/*.json',
      '**/*.txt',
      '**/*.map',
      '**/*.css',
    ],
  }),
  new Dotenv({
    systemvars: true,
  }),
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    new CompressionPlugin({
      filename: '[path][base].gz',
      algorithm: 'gzip',
      test: new RegExp('\\.(js|css)$'),
      // threshold: 10240,
      minRatio: 0.8,
    }),
  );
}

module.exports = {
  module: {
    rules: [
      {
        test: /\.md$/i,
        use: 'raw-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@js': path.resolve(__dirname, './src/js'),
      '@views': path.resolve(__dirname, './views'),
    },
  },
  plugins,
};
