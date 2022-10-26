/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "darker-blue": "#1D2136",
        "dark-blue": "#202542",
        "off-white": "#eeeeee",
        "light-blue": "#78B0D1",
        midnight: "#121063",
      },
      fontFamily: {
        sans: ["DroidSans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
