/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        'green-primary': '#23BE0A',
        'blue-primary': '#336699',
        'blue-secondary': '#86BBD8'
      }
    },
  },
  plugins: [require('daisyui')],
};
