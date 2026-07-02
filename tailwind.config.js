/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        teal: {
          100: "#e8f5f3",
          200: "#c2e5df",
          400: "#52ab99",
          500: "#3d9183",
          600: "#2b6777",
          700: "#1e4e5b",
        },
        warm: {
          50: "#fdfaf6",
          100: "#f5f0e8",
          200: "#e8dfd0",
        },
        orange: {
          100: "#fef3ec",
          300: "#feaa73",
          400: "#f9874a",
        },
      },
    },
  },
  plugins: [],
};
