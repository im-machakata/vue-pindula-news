// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily:{
      'serif': ['"Newsreader"', ...defaultTheme.fontFamily.serif]
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
