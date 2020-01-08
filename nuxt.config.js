import path from 'path'
const stylusPlugins = [
  require('rupture')()
]
function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

const title = 'g2'

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  mode: 'spa',

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  css: [
    {
      src: 'assets/styles/index.styl',
      lang: 'styl'
    }
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  plugins: [
    // { src: '~plugins/validate' },
    // { src: '~plugins/prisma' },
  ],

  globalName: title,

  auth: {

  },

  /*
  ** Build configuration
  */
  build: {
    babel: {
      plugins: [
        ["@babel/plugin-proposal-decorators", { legacy: true }],
        ["@babel/plugin-proposal-class-properties", { loose: true }]
      ]
    },
    postcss: {
      plugins: {
        'postcss-vertical-rhythm': {},
        'postcss-pxtorem': {},
        'autoprefixer': {},
        'postcss-short': {},
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
    },
    extend (config, { isDev, isClient }) {
      // namespaces for imports
      Object.assign(config.resolve.alias, {
        c: resolve('components'),
        UI: resolve('components/UI'),

        data: resolve('data'),

        styles: resolve('assets/styles')
      })

      // add plugins to stylus
      const stylLoader = config.module.rules.filter(module => String(module.test).indexOf('styl') > -1)[0]

      stylLoader.oneOf.forEach(one => {
        const module = one.use.filter(o => o.loader === 'stylus-loader')[0]
        if (!module) return
        module.options.context = __dirname
        Object.assign(module.options, {
          use: stylusPlugins,
          preferPathResolver: 'webpack'
        })
      })
    }
  }
}

