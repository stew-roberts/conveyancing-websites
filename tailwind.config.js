/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          500: '#6F8BA4',
          600: '#3B566E',
          900: 'rgb(20, 28, 52)'
        },
        blue: {
          950: '#07012F',
          960: '#07012F',
        },
        'dark-blue': {
          50: '#f2f5fb',
          100: '#dbe0f6',
          200: '#b6c0ed',
          300: '#8fa1e3',
          400: '#6671d6',
          500: '#3d42c9',
          600: '#353bae',
          700: '#2b318c',
          800: '#21286a',
          900: '#191e4d',
        },
      }
    },
  },
  plugins: [],
}
