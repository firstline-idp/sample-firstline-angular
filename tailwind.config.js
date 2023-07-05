/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors';

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter'],
    },

    extend: {
      colors: {
        primary: colors.blue[500],
        "primary-hover": colors.blue[600],
        "primary-active": colors.blue[400]
      }
    }
  },
  plugins: [],
}