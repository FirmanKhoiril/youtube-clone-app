/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mons: "Montserrat",
      },
      backgroundColor: {
        dark: "#0F0F0e",
      },
    },
  },
  plugins: [],
};
