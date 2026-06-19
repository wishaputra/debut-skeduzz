/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        game: ['Impact', 'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', 'sans-serif'],
      },
      colors: {
        'neon-pink': '#ff007f',
        'neon-blue': '#00f0ff',
        'neon-yellow': '#fff000',
        'dark-bg': '#0f0f13',
        'hud-bg': 'rgba(15, 15, 19, 0.8)',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-fast': 'bounce 0.5s infinite',
      }
    },
  },
  plugins: [],
}
