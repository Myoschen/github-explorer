import { grayDark, whiteA } from '@radix-ui/colors'
import forms from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ...whiteA,
        ...grayDark,
      },

      fontFamily: {
        heading: ['Work Sans', 'sans-serif'],
        paragraph: ['Mulish', 'sans-serif'],
      },
    },
  },
  plugins: [forms()],
}
