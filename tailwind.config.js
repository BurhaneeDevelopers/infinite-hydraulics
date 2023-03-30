/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*",
    "./Pages/**/*.{html,js}",
  ],
  theme: {
    extend: {},
    screens: {
      xxs: "350px",
      xs: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
}