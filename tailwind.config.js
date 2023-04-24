/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        "tn": "358px",
      },
      colors: {
        primary: {
          200: "#526D89",
          300: "#3B546C",
          400: "#2C3E50",
          500: "#1F2D3C",
          600: "#111E27",
        },
        secondary: {
          200: "#6AB2F0",
          300: "#4D9FDE",
          400: "#3498DB",
          500: "#217AC8",
          600: "#1260A3",
        },
        accent: "#ECF0F1",
        text: "#333333",
      },
    },
  },
  plugins: [],
};
