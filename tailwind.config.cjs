/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      
      fontFamily:{
        'sans': ['"Lexend Deca"']
      },
      
      borderRadius: {
        md: "12px"
      },
      colors:{
        'dark-blue-gray' : "#1E293B",
        'blue-gray': "#334155",
        'cool-gray': "#CBD5E1",
        'true-gray': '#808080'       
      }
    },
  },
  plugins: [],
};
