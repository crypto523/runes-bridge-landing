/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)'
    },
    extend: {
      fontFamily: {
        conthrax: ['var(--font-conthrax)'],
        inter: ['var(--font-inter)'],
        poppins: ['var(--font-poppins)'],
      }
    },
  },
  plugins: [],
}