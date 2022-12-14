/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["Architects Daughter", "cursive"],
      },
      colors: {
        primary: "#FFC313",
        secondary: "#2de557",
      },
    },
  },
  plugins: [],
};
