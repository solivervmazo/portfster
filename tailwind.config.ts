/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-light': '#F7F8FC',
        'secondary-light': '#d4d8dd',
        'ternary-light': '#f6f7f8',

        'primary-dark': '#0B0C0E',
        'secondary-dark': '#16191c',
        'ternary-dark': '#2c3339',
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  layers: {
    'no-tailwindcss': {
      '.no-tailwindcss': {
        all: 'unset',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
