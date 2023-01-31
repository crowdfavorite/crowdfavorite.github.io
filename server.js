/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.dev.js');

const PORT = process.env.PORT || 9000;

const compiler = webpack(config);
const server = new WebpackDevServer({
  static: {
    directory: path.join(__dirname, '/'),
  },
  devMiddleware: {
    index: true,
    mimeTypes: { phtml: 'text/html' },
    publicPath: path.join(__dirname, '/'),
    serverSideRender: false,
    writeToDisk: true,
  },
  compress: true,
  port: 9000,
}, compiler);

(async () => await server.start())();
