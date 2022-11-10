/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brightIdingo: "rgb(129, 133, 229)",
        LightIdingo: "rgb(171, 173, 237)",
        darkIndogo: "rgb(18, 18, 18)",
        lightGrey: "rgb(147, 147, 147)",
        semigray: "rgb(55, 56, 56)",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [],
};
