/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#e7e5e5",       // Dark background
        secondary: "#B5A49E",     // Light gray for secondary elements
        tertiary: "#6C564F",      // Dark blue for tertiary elements
        "black-100": "#181925",   // Dark variant
        "black-200": "#1C2A53",   // Even darker variant
        "white-100": "#F1EFED",   // Off-white
      },
      boxShadow: {
        card: "0px 35px 120px -15px rgba(28, 42, 83, 0.5)", // Using tertiary color with opacity
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('./assets/herobg2.png')", 
      },
    },
  },
  plugins: [],
};