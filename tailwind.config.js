/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      black: "#000",
      primary: {
          100: "#fe8303",
      },
      accent: {
          100: "#a5aaa0",
      },
      text: {
          100: "#f0e3ca",
          
      },
      bg: {
          100: "#32312e",
          200: "#21221c",
      },
      // ...
  },

  },
  plugins: [],
}
