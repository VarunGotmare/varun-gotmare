/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // 🔥 REQUIRED for next-themes
  theme: {
    extend: {
      fontFamily: {
        'victor-mono': ['var(--font-victor-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}
