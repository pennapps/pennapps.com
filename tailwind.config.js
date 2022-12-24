/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        hackp: '#1F4A38',
        hacks: '#FAF5E7',
      },
    },
    fontFamily: {
      hackers: ['futura-pt', 'Futura', 'Trebuchet MS', 'Arial', 'sans-serif'],
      proximaNova: ['proxima-nova'],
    },
  },
  plugins: [
    require('tailwindcss-rtl'),
  ],
}
