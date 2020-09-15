module.exports = {
  purge: false,
  theme: {
    typography: {
      xl: {
        css: {
          h3: {
            color: '#FBB145',
            fontWeight: 700,
            textTransform: 'uppercase',
          },
        },
      },
    },
    extend: {
      colors: {
        'accent-1': '#fab653',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}
