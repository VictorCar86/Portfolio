/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./dist/**/*.html', './public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    animatedSettings: {
      animatedSpeed: 1000,
      heartBeatSpeed: 500,
      hingeSpeed: 2000,
      bounceInSpeed: 750,
      bounceOutSpeed: 750,
      animationDelaySpeed: 500,
      classes: []
    },
    extend: {
      animation: {
        "fall": "fall 5s ease-in forwards",
      },
      keyframes: {
        "fall": {
          "0%, 5%": {transform: "translate(0%, -1rem) scale(1.35) rotate(45deg)"},
          "50%, 51%": {transform: "translate(-10%, 20%) scale(1.20) rotate(80deg)"},
          "100%": {transform: "translate(250%, 300%) rotate(-10deg)", display: "none"},
        }
      }
    },
  },
  plugins: [
    require('tailwindcss-animatecss'),
  ],
}
