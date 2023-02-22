/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      boxShadow: ({ theme }) => ({
        tab: "0 20px 0 white",
        "tab-active": `0 20px 0 ${theme("colors.blue.500")}`,
        app: "5px 10px 20px 0 rgba(0,0,0,0.17)",
      }),
      colors: {
        app: {
          "day-start": "#5374E7",
          "day-end": "#77B9F5",
          "night-start": "#464C64",
          "night-end": "#99A9B9",
          text: "#01175F",
        },
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
