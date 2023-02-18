/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        app: {
          500: "#01175F",
        },
      },
    },
  },
  plugins: [],
};
