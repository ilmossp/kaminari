/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        md: "12px"
      },
      colors:{
        darkBlueGray : "#1E293B",
        blueGray: "#334155",
        coolGray: "#CBD5E1",
        trueGray: '#808080'
          
      }
    },
  },
  plugins: [],
};
