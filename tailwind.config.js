/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "metalic-img": "url('./images/landing/backgroundImage.svg')",
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      
    },
  },
  plugins: [],
}