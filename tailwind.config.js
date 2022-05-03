const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ...colors,
        background: 'var(--color-background)',
        'background-alt': 'var(--color-background-alt)',
        'background-alt-2': 'var(--color-background-alt-2)',
        error: 'var(--color-error)',
        'error-alt': 'var(--color-error-alt)',
      },
    },
  },
  plugins: [],
}
