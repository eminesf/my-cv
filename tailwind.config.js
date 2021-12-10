module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'rich-black': '#040404',
      'off-white': '#F8F1FF',
      'midnight-green': '#13505B',
      'teal-blue': '#0C7489',
      'viridian-green': '#119DA4'
    }),
    textColor: theme => ({
      ...theme('colors'),
      'off-white': '#D7D9CE',
      'teal-blue': '#0C7489',
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
