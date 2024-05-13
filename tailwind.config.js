/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
 
    colors: {
      'yellow': '#F4CE14',
      'sage': '#495E57',
      'ash':'#45474B',
      'beige':'#F5F7F8',
      'black':"#000000",
      'green':'#00FF00 ',
      'red':'#FF0000',
      'white':'#FFFFFF',
     
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
  
    }
  },
  plugins: [require("daisyui")],
  themes: ["light", "dark", "synthwave","cupcake"],
};