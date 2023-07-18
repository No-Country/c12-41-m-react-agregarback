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
        "contact-bg": "url('https://images.pexels.com/photos/326576/pexels-photo-326576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
      }
    },
  },
  plugins: [],
}
