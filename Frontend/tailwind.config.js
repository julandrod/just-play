/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "soccer-field": "url('public/assets/soccer-field.jpg')",
        "footer-pattern": "url('public/assets/floor-tile.png')",
        "field-pattern": "url('public/assets/soccer-field-2.jpg')"
      },
      colors:{
        "primary-red": "#F9595F",
        "secondary-red": "#b64145"
      }
    },
  },
  plugins: [],
}

