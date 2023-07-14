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
      'yellow': '#F9EA32',
      'green': '#4fe868'
    },
    extend: {
      height: {
        '70vh': '70vh',
      },
      backgroundImage: {
        "contact-bg": "url('https://media.discordapp.net/attachments/784865210216742974/1129187162592653423/IMG_20230714_010620.jpg?width=720&height=431')"
      }
    },
  },
  plugins: [],
}
