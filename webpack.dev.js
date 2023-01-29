/* eslint-disable */
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const LiveReloadPlugin = require('webpack-livereload-plugin');

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
