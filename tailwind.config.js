/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mb: "0px",
      },
      backgroundImage: {
        "metalic-img": "url('./assets/Landing/images/backgroundImage.svg')",
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
    },
  },
  plugins: [],
};
