const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/views/**/*.{html,html.erb,erb}',
    './app/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      red: {
        ...colors.red,
        100: '#E36B6B',
        200: '#FFF3F3',
        300: '#DC362E',
        500: '#FF0707',
        700: '#CF000B',
        750: '#BF0909'
      },
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
