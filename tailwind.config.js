/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'square-blue': '#006AFF',
        'hyperlink': '#1A73E8',
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

