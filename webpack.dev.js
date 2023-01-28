/* eslint-disable */
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const CompressionPlugin = require('compression-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');

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

module.exports = merge(common, {
  mode: 'development',
  watch: true,
  watchOptions: {
    aggregateTimeout: 100,
  },
  plugins: [
    new LiveReloadPlugin(),
  ]
});
