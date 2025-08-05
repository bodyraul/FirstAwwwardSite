/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      supp422:"422px",
      supp456:"456px",
      supp480:"480px",
      supp510:"510px",
      supp550:"550px",
      supp691:"691px",
      supp610:"610px",
      supp724:"724px",
      supp768:"768px",
      supp800:"800px",
      supp860:"860px",
      supp900:"900px",
      supp1024:"1024px",
      supp1061:"1061px",
      supp1100:"1100px",
      supp1205:"1205px",
      supp1274:"1274px",
      supp1500:"1500px",
      supp1600:"1600px",
      supp1700:"1700px",
    },
    extend: {
      colors: {
        'blancGris': '#f8f7f2',
        'orangeCLair':"rgb(254,178,156)",
        'belge':"#e7c7ac",
        'vertFonce':"rgba(22,44,41,0.8)",
        'vertFonceDeux':"rgb(22,44,41)",
        "bleuGris":"#162C29",
        "blanc":"#EBE7E1",
        "grisMoyen":"#A09D99",
        "grisClair":"#CCCBC6",
        "grisTexte":"#677672",
        "orangeMarron":"#cc6d51",
        "blancJaune":"#F7F4EE"
      },
    },
  },
  plugins: [],
}

