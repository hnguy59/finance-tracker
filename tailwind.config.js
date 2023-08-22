/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // or 'class'
  theme: {
    extend: {
      colors: {
        dark: '#37474f',
        light: '#dee4e7',
      },
    },
  },
  plugins: [],
}
