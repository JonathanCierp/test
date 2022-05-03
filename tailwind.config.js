module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        'background-alt': 'var(--color-background-alt)',
        'background-alt-2': 'var(--color-background-alt-2)',

        'input-background': 'var(--color-input-background)',
        'input-background-alt': 'var(--color-input-background-alt)',

        'card-background': 'var(--color-card-background)',

        error: 'var(--color-error)',
        'error-alt': 'var(--color-error-alt)',
      },
    },
  },
  plugins: [],
}
