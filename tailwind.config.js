/** @type {import('tailwindcss').Config} */
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
        "grat-white":"#DEE1E6FF"
      },
      fontFamily:{
        lato:["Lato","sans-serif"],
        sarabun:["Sarabun","sans-serif"]
      }
    },
  },
  plugins: [],
}
