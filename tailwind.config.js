module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      margin: {
        '60': '15rem',
        '72': '18rem',
        '84': '21rem',
        '96': '23rem',
      },
      colors: {
        customcolor: {
          100: '#F2F3F7',//body color
          200: '#a87fec',
          300: '#775ba7',
          400: '#007185'

        }
      },
      screens: {
        xs: '580px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
// theme: {
//   screens: {
//     'sm': '640px',
//     'md': '768px',
//     'lg': '1024px',
//     'xl': '1280px',
//     '2xl': '1536px',
//   }
// }
