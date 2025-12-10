/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        neonBlue: '#00d4ff',
        neonPurple: '#bf00ff',
      }
    },
  },
  plugins: [],
}
