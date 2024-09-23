/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@shadcn/ui/dist/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        "green-primary": "#23BE0A",
        "blue-primary": "#005288", //'#336699',
        "blue-secondary": "#86BBD8",
        "blue-dark" : "#002b47"
      },
    },
  },
  plugins: [require("daisyui")],
};
