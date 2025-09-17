/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily: {
          'mainFont': ['Josefin Sans', 'sans-serif']
        },
        colors: {
          'dRed': '#680000',
          'vdRed': '#5A0202',
          'second': 'white'
        }
      },
    },
    plugins: [],
 }