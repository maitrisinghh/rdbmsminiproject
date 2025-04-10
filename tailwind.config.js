/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#483D8B',
          light: '#6A5ACD',
        },
        secondary: {
          DEFAULT: '#F5F5DC',
          dark: '#E6E6CA',
        },
      },
    },
  },
  plugins: [],
};