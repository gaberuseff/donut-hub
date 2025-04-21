/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#f9f8f7",
          200: "#f0edea",
          300: "#e6e2dd",
          400: "#e0dbd5",
          500: "#e0dbd5",
          600: "#cac5c0",
          700: "#868380",
          800: "#706e6b",
          900: "#2d2c2b",
        },
        secondary: {
          100: "#d3e5e7",
          200: "#b8d3d7",
          300: "#a1c2c9",
          400: "#8bb0b4",
          500: "#7a9d9f",
          600: "#648d8f",
          700: "#4f7d7f",
          800: "#3b6b6f",
          900: "#2a595b",
        }
      },
      fontFamily: {
        secondary: ["Roboto Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
}

