/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'secondary': '#272727',
        'primary': '#6EEB83',
        'body': '#6EEB81',
        'gray': '#8f8f8f',
        'darker': '#232429'
      },
    },
  },
  plugins: [],
}

