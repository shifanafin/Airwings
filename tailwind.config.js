/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "blue-main" :"#00A9A5",
        "blue-hover" :"#75c7c5",
        "yellow-main":"#FCB813",
        "yellow-hover":"#edc86d",
        "gray-main":"#757679"
      },
   backgroundImage:(theme)=>({
    "gradient-yellow":"linear-gradient(90deg, #00A9A5 0%, #FCB813 100%)",
    "hero-image":"(url('./assets/hero.jpg'))"
   }),
    fontFamily:{
      montserrat:["Montserrat","sans-serif"],
      "open-sans": ["Open Sans", "sans-serif"],
      "playfair-display": ["Playfair Display", "serif"],
    },
    },
    screens:{
      xs:'480px',
      sm:"768px",
      md:"1060px"
    }

  },
  plugins: [],
}