/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,cjs}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Poppins",
      },
      colors: {
        primary: "#e2d686",
        secondary: "#92DCE5",
        tertiary: "#6B717E",
      },
    },
  },
  plugins: [],
};
