/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111827",
        secondary: "#202E4B",
      },
      spacing: {
        17: "72px",
        101: "27rem",
        130: "30rem",
      },
      screens: {
        big: "1800px",
        vbig: "2200px",
      },
    },
  },
  plugins: [],
};
