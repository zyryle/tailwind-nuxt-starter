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
      screens: {
        tablet: "1024px",
        laptop: "1200px",
        "big-laptop": "1400px",
      },
      colors: {
        "darker-blue": "#1D2136",
        "dark-blue": "#202542",
        "off-white": "#eeeeee",
        "light-blue": "#78B0D1",
        "heading-color": "#CADDE9",
        "bright-blue": "#1E91D6",
        "btn-color": "#0072BB",
        "btn-hover": "#1976d2",
      },
      fontFamily: {
        sans: ["DroidSans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      // shadows: {
      //   navShadow: "0px 4px 10px rgba(0, 0, 0, 0.15);",
      // },
    },
  },
  plugins: [],
};
