/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        grayscaling: {
          from: { filter: 'grayscale(0%)' },
          to: { filter: 'grayscale(100%)' },
        },
      },
      animation: {
        grayscaling: 'grayscaling 10s ease 1',
      },
      fontFamily: {
        'mono': ['var(--font-primary)', 'monospace'],
      },
      fontSize: {
        '6.5xl': '3.25rem'
      },
      colors: {
        'black': '#000000',
        'black-700': '#101010',
        'whtie': '#ffffff',
        'blue': '#4299E1',
      },
      letterSpacing: {
        '1x': '0.145rem',
        '2x': '0.29rem'
      },
    },
  },
  plugins: [],
}
