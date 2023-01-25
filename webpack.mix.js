/* eslint-disable */
const mix = require('laravel-mix');
const fs = require('fs');
const path = require('path');
const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

const jsEntries = [];
const scssEntries = [];

const paths = {
  src: {
    js: 'src/js',
    scss: 'src/scss',
  },
  build: {
    js: 'build/js',
    css: 'build/css',
  },
  views: 'views',
};

fs.readdirSync(path.join(__dirname, paths.src.js)).forEach((file) => {
  const { ext } = path.parse(file);
  if (ext === '.js') {
    jsEntries.push(path.join(paths.src.js, file));
  }
});

fs.readdirSync(path.join(__dirname, paths.src.scss)).forEach((file) => {
  const { ext } = path.parse(file);
  if (ext === '.scss') {
    scssEntries.push(path.join(paths.build.css, file));
  }
});

const options = {
  processCssUrls: false,
  postCss: [
    tailwindcss('./tailwind.config.js'),
  ],
};

if (mix.inProduction()) {
  options.postCss = [
    // purgecss({
    //   content: [
    //     './src/**/*.html',
    //     './src/**/*.jsx',
    //     './src/**/*.js',
    //     './src/**/*.ts',
    //     './src/**/*.tsx',
    //     './views/**/*.md',
    //   ],
    // }),
    autoprefixer(),
    cssnano(),
  ];
}

const webpackConfig = require('./webpack.config');

mix.webpackConfig(webpackConfig);

mix.setPublicPath('build');

mix
  .js('src/js/index.js', 'js/')
  .sass('src/scss/app.scss', 'css/')
  .options(options)
  .extract(['react', 'react-dom', 'react-router', 'react-router-dom', 'react-markdown'])
  .version();
