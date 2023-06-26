/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
        alt: 'var(--font-bai-jamjuree)',
      },

      colors: {
        red: {
          50: '#F15156',
          100: '#E44449',
          200: '#F75F64',
        },
        orange: '#F27006',
        yellow:  '#F4D35E',
        green: '#3CDC8C',
        blue: '#0D3B66',
        gray: '#D3E2E5',
        purple: '#633BBC',
        pink: '#FDECED;'
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}