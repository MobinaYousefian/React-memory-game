/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'caveat' : ["caveat", "sans-serif"],
      },
      animation: {
        instructionMenu: '0.3s cubic-bezier(0.4,0,0,1) 0s 1 normal forwards running instructionMenu',
      },
      keyframes: {
        instructionMenu: {
          '100%': {  transform: 'translateZ(0px)' },
        }
      },
    },
  },
  plugins: [],
};
