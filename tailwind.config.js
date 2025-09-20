/** @type {import('tailwindcss').Config} */

// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#a78bfa", // pastel purple
        secondary: "#f472b6", // soft pink
        accent: "#fcd34d", // pastel yellow
        light: "#fdf2f8", // very light pink
        dark: "#1f2937", // gray for text
      },
       fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    },
  },
  plugins: [],
}
