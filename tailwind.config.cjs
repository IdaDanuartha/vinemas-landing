/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
      fontFamily: {
        "montserrat-regular": ['montserrat-regular', 'sans-serif', 'arial'],
        "montserrat-semibold": ['montserrat-semibold', 'sans-serif', 'arial'],
        "montserrat-bold": ['montserrat-bold', 'sans-serif', 'arial'],
        "lora-regular": ['lora-regular', 'sans-serif', 'arial'],
        "lora-semibold": ['lora-semibold', 'sans-serif', 'arial'],
        "lora-bold": ['lora-bold', 'sans-serif', 'arial'],
      },
      colors: {
        'main-color': 'rgb(220, 33, 31)',
        'secondary-color': 'rgb(33, 33, 33)',
        'third-color': 'rgb(79, 79, 79)',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
