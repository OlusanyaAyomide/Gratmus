/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");


module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        "grat-green":"#0EA89BFF",
        "grat-black":"#171A1FFF",
        "grat-gray":"#BCC1CAFF",
        "grat-white":"#DEE1E6FF",
        "grat-light-green":"#ECFDFCFF",
        "grat-profile-green":"#A5F8F1",
        "grat-pink":"#FF832B17",
        "grat-light":"#FAFAFBFF",
        "grat-offwhite":"#F3F4F6FF",
        "grat-thick":"#323842FF",
        "grat-light-gray":"#F2F2F2",
        "grat-light-text":"#9095A0FF",
        "grat-orange":"#FF832BFF"
      },
      screens:{
        xs:"340px",
        ...defaultTheme.screens
      },
      fontFamily:{
        lato:["Lato","sans-serif"],
        sarabun:["Sarabun"],
        roboto:["Roboto"]
      },
    },
  },
  plugins: [],
}
