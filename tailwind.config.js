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
        dropDown: '0.3s cubic-bezier(0.4,0,0,1.5) 0s 1 normal forwards running dropDown',
      },
      keyframes: {
        dropDown: {
          '100%': {  transform: 'translateZ(0px)' },
        }
      },
    },
  },
  plugins: [],
};
