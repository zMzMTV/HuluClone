module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "3xl": "1920xp",
      }
    },
  },
  variants: {
    extend: {
      animation: ['group-hover'],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
