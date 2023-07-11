/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      'dark': '#1A1A1A',
      'white': '#ffff',
      'gray': '#333333',
      'orange': '#FBB23F',
      'orange-navmenu': '#FEC00F',
      'orange-navmenu-active': '#FED04B',
      'yellow': '#F9EA32'
    },
    extend: {
      height: {
        '70vh': '70vh',
      },
    },
  },
  plugins: [],
}
