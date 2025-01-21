/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 10px 25px rgba(0, 0, 0, 0.15)',
      },
      transform: {
        '3d': 'perspective(1000px) rotateY(10deg)',
      },
    },
  },
  plugins: [],
}