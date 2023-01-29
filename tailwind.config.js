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
          DEFAULT: '#e72412',
          dark: '#b81c0e',
          light: '#ee6559',
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
