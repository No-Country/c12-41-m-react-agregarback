/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./public/index.html"
  ],
  theme: {
    colors:{
      'transparent': 'transparent',
      'dark': '#1A1A1A',
      'white': '#ffff',
      'gray': '#333333',
      'orange': '#FBB23F',
      'yellow': '#F9EA32'
    },
    extend: {},
  },
  plugins: [],
}
