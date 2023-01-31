/* eslint-disable */
const Dotenv = require('dotenv-webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const path = require('path');
const tailwindcss = require('tailwindcss');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const destFolder = 'build/js';
const publicPath = process.env.PUBLIC_URL;

module.exports = {
  entry: {
    index: path.join(__dirname, 'src/js/index.js'),
    app: path.join(__dirname, 'src/scss/app.scss'),
  },
  output: {
    path: path.resolve(__dirname, destFolder),
    filename: '[name].js',
    chunkFilename: '[chunkhash].js',
    publicPath,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
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
                  process.env.NODE_ENV === 'production'
                    ? cssnano({
                      preset: 'default',
                    })
                    : null,
                ].filter(Boolean),
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
      chunks: 'async',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom|react-markdown|rehype-raw)[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@js': path.resolve(__dirname, 'src/js'),
      '@docs': path.resolve(__dirname, 'src/docs'),
    },
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      filename: path.join(__dirname, "index.html"),
      hash: true,
      inject: 'body',
      favicon: 'favicon.ico',
      templateParameters: {
        PUBLIC_URL: publicPath
      },
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
    new WebpackManifestPlugin({
      fileName: "../manifest.json",
      publicPath,
      map: (file) => {
        file.name = file.path;
        return file;
      },
    }),
    new Dotenv({
      systemvars: true,
    }),
  ],
};

