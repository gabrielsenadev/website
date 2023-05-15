/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dark': "url('../../public/microcarbon-bg-dark.svg')",
        'light': "url('../../public/microcarbon-bg-light.svg')",
      },
      fontFamily: {
        'sans': ['var(--font-primary)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
