/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend", "sans-serif"], // Add Lexend font
      },
      colors: {
        primary: "#18191c",
        secondary: "#e5e7eb",
      },
    },
  },
  plugins: [],
};
