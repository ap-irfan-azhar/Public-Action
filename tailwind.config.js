const defautTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ungu: {
          100: '#b69fcb',
          125: '#9b7db8',
          150: '#816996',
          200: '#263258',
          300: '#513750',
          400: '#232d36',
        },
        oren: '#d55b3c',
        putih: '#f0ebce'
      },
      fontFamily: {
        serif: ['Recoleta','Averia Serif', ...defautTheme.fontFamily.serif],
        sans: ['Montserrat', ...defautTheme.fontFamily.sans]
      },
      zIndex: {
        '-10': '-10',
        '-20': '-20',
      },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
}
