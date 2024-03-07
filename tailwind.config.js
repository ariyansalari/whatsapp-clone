/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
     dark_bg_1:"#111b21",
     dark_bg_2:"#202c33",
     dark_bg_3:"#182229",
     dark_bg_4:"#222E35",
     dark_border_1:"#222D34",
     dark_border_2:"#313D45",
     dark_hover_1:"#2A3942",
     dark_svg_1:"#AEBAC1",
     dark_svg_2:"#8696A0",
     blue_1:"#53DBEB",
     blue_2:"#3E7B96",
     dark_text_1:"#E9EDEF",
     dark_text_2:"#8696A0",
     dark_text_3:"#8696a0",
     dark_text_4:"#D1D6D8",
     dark_text_5:"#99BEB7",
     dark_scrollbar:"#374045",
     green_1:"#00A884",
     green_2:"#008069",
     green_3:"#005C4B"
     
      }
    },
  },
  darkMode:"class",
  plugins: [],
}

