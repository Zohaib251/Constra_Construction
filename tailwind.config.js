/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customGray: 'rgb(35, 40, 45)',
        customYellow:'#FFB600',
        customMediumGray:"#999999",
        customDarkGray:"#4C4C4C",
        customLightGray:"#E5E5E5",
        customFactGray:"#252525",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        SANS: ['ui-sans-serif', 'system-ui', 'sans-serif'],
        emoji: ['Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      },
    },
  },
  plugins: [],
}

