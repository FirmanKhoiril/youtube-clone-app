/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mons: "Montserrat",
      },
      screens: {
        xs: "380px",
      },
      backgroundColor: {
        dark: "#0F0F0e",
      },
      fontSize: {
        standart: "40px",
      },
    },
  },
  plugins: [],
};
