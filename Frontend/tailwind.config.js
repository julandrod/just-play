/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "soccer-field": "url('src/assets/soccer-field.jpg')",
        "footer-pattern": "url('src/assets/floor-tile.png')",
        "field-pattern": "url('src/assets/soccer-field-2.jpg')"
      },
      colors:{
        "primary-red": "#F9595F",
        "secondary-red": "#b64145"
      }
    },
  },
  plugins: [],
}

