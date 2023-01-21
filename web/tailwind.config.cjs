/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090A'
      },

      gridTemplateRows: { //Tailwind has max of 6 rows this code adds a extra row the 7th
        7: 'repeat(7, minmax(0, 1fr))'
      }
    },
  },
  plugins: [],
}
