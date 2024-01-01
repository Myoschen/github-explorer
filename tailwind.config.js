import { grayDark, whiteA } from '@radix-ui/colors'
import forms from '@tailwindcss/forms'
import { fontFamily } from 'tailwindcss/defaultTheme'

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
        sans: ['Inter Variable', ...fontFamily.sans],
      },
    },
  },
  plugins: [forms()],
}
