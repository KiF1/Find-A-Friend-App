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
          gradient: 'linear-gradient(134deg, rgba(247, 95, 96, 0.10) 0%, rgba(241, 81, 86, 0.00) 100%)'
        },
        orange: '#F27006',
        yellow:  '#F4D35E',
        green: '#3CDC8C',
        blue: '#0D3B66',
        gray: '#F4F5F7',
        purple: '#633BBC',
        pink: '#FDECED;'
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}