/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      margin: {
        20: "144px",
      },
      colors: {
        orange: "#fc8019",
        black: "#282c3f",
      },
    },
  },
  plugins: [],
};
