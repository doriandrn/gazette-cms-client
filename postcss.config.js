// var packageConfig = require('./package.json')

module.exports = {
  plugins: {
    'postcss-vertical-rhythm': {},
    'postcss-pxtorem': {},
    'autoprefixer': {},
    'postcss-font-magician': {
      hosted: ['/assets/styles/themes/default/assets/fonts/'],
      variants: {
          'Roboto Condensed': {
              '300': [],
              '400': [],
              '700': []
          }
      },
      foundries: ['google']
    }
  }
}
