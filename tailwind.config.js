/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        main: "0px 9px 9px 13px #d9d9d9",
        light: "0px 2px 2px 5px #d9d9d9",
      },
    },
  },
  plugins: [],
};
