/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './*.{html,js}',
    './node_modules/flowbite/**/*.js'
    ],
    
  
  theme: {
    extend: {},
  },
  plugins: [
  require("@tailwindcss/forms"),
  require("daisyui"),
  require("flowbite/plugin")
  ],
}
