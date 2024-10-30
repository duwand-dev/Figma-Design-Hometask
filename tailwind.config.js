/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      frank: ["Libre Franklin"],
    },
    colors: {
      lightblue: "#43b2ee",
    },
    extend: {},
  },
  plugins: [],
  darkMode: "selector",
};
