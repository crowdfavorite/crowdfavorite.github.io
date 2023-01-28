/* eslint-disable */
const Dotenv = require('dotenv-webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');
const tailwindcss = require('tailwindcss');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const fs = require('fs');

const destFolder = 'build/js';

module.exports = {
  entry: {
    index: path.join(__dirname, 'src/js/index.js'),
    app: path.join(__dirname, 'src/scss/app.scss'),
  },
  output: {
    path: path.resolve(__dirname, destFolder),
    filename: '[name].js',
  },
  devServer: {
    allowedHosts: 'all',
    static: {
      directory: __dirname,
      publicPath: '/',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  tailwindcss('./tailwind.config.js'),
                  autoprefixer(),
                ],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.md$/i,
        use: 'raw-loader',
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: '../images',
          },
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '../css/fonts'
            }
          }
        ]
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@js': path.resolve(__dirname, 'src/js'),
      '@views': path.resolve(__dirname, 'views'),
    },
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
    new MiniCssExtractPlugin({
      filename: '../css/[name].css',
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '**/*.gz',
        '**/*.js',
        '**/*.json',
        '**/*.txt',
        '**/*.map',
        '**/*.css',
        '**/*.svg',
        '**/*.ttf',
      ],
    }),
    // new WebpackManifestPlugin({
    //   basePath: destFolder,
    //   template: './index.html',
    // }),
    new Dotenv({
      systemvars: true,
    }),
  ],
};

