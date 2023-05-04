import { default as base } from './tailwind.config.js'

/** @type {import('tailwindcss').Config} */
export default {
  ...base,
  theme: {
    fontFamily: {
      sans: [
        '-apple-system',
        'BlinkMacSystemFont',
        'San Francisco',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'sans-serif',
      ],
    },
    extend: {},
  },
  plugins: [],
}
