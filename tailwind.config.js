/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#030014",
        light100: "#cecefb",
        light200: "#a8b5db",
        gray100: "#9ca4ab",
        dark100: "#0f0d23",
        hoverDark: "#090718",
      },
      backgroundImage: {
        "hero-pattern": "url('/hero-bg.png')",
      },
      fontFamily: {
        dmSans: ["DM Sans", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
    base: false,
},
};
