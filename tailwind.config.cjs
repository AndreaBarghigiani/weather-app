/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      boxShadow: ({ theme }) => ({
        tab: "0 20px 0 white",
        "tab-active": `0 20px 0 ${theme("colors.blue.500")}`,
      }),
      colors: {
        app: {
          500: "#01175F",
        },
      },
    },
  },
  plugins: [],
};
