module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    lineClamp: {
      1: 1,
      2: 2,
      3: 3,
    },
  },
  plugins: [require('tailwindcss-line-clamp')],
}
