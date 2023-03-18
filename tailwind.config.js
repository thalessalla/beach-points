/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", 
  "./src/**/*.{js,jsx,ts,tsx}"
],
  theme: {
    colors:{
     'dark':'#2D2D2D',
     'item': '#1F1F1F',
     'primary': '#FFFFFF' ,
     'secundary':'#DDDDDD',
     'danger': '#841E1E',
     background: '#09090a',
    },
    extend: {},
  },
  plugins: [],
}
