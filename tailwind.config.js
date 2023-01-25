/* eslint-disable */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './views/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    listStyleType: {
      disk: 'disk',
      square: 'square',
    },
    extend: {
      fontFamily: {
        sans: ['RobotoCondensed', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'cf-base': {
          DEFAULT: '#f12e15',
          dark: '#a8200e',
          light: '#f56c5b',
        },
        'cf-gray': {
          DEFAULT: '#5d5d5d',
        },
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
