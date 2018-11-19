
// Theme API.
module.exports = (options, ctx) => ({
  postcss: {
    plugins: [
      require('tailwindcss')('./tailwind.config.js'),
      require('autoprefixer')
    ],
  },
})
