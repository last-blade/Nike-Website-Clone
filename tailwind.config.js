/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      // 'sm': '576px',
      // => @media (min-width: 576px) { ... }

      '1550px': '1550px',
      '432px': '432px',
      'md': '961px',
      // => @media (min-width: 959px) { ... }
      '200px': '200px',
      'lg': '1024px',
      'xl': '1158px',
      // => @media (min-width: 1440px) { ... }

      '600px': '600px',

      '1800px': '1800px',
      '768px': '768px',

      '646px': '646px',

      '413px': '413px'

      

    },
    extend: {
      fontFamily:{
        Helvetica: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        HelveticaAlternate: ["Nike TG",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        "sans-serif"]
      },
    },
  },
  plugins: [],
}

