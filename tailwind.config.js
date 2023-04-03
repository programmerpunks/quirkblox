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
    },
  },
  plugins: [],
}