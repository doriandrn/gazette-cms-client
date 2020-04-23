import path from 'path'
import fs from 'fs'
import gazConfig from './gazette.config'

const { client, server, auth: { social: { clientsIds } } } = gazConfig

const stylusPlugins = [
  require('rupture')()
]
function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

const langs = {}

fs
  .readdirSync(resolve('locales'))
  .map(lang => {
    langs[lang] = {}
    fs
      .readdirSync(resolve('locales/' + lang))
      .map(module => {
        module = module.replace('.js', '')
        langs[lang][module] = require(resolve(`locales/${lang}/${module}`)).default
      })
  })


module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: client.title,
    htmlAttrs: {
      lang: client.languages.main,
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: client.description }
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
      src: 'assets/styles/themes/default/index.styl',
      lang: 'styl'
    },
    {
      src: 'assets/styles/index.styl',
      lang: 'styl'
    }
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/proxy',
    '@nuxtjs/toast',
    'nuxt-i18n'
    // ['nuxt-i18n',  {
    //   parsePages: false,   // Disable babel parsing
    //   pages: () => {

    //     return

    //     about: {
    //       en: '/about-us', // -> accessible at /about-us (no prefix since it's the default locale)
    //       fr: '/a-propos', // -> accessible at /fr/a-propos
    //       es: '/sobre'     // -> accessible at /es/sobre
    //     }
    //   }
    // ]
  ],

  i18n: {
    locales: Object.keys(langs),
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: langs
    }
  },

  toast: {
    position: 'bottom-center',
    duration: 3000,
    singleton: true
  },

  plugins: [
    { src: '~plugins/slugify' },
  ],

  globalName: client.title,

  axios: {
    proxy: true,
    baseURL: `${server.url}/`,
    browserBaseURL: `${server.url}/`,
  },

  proxy: {
    '/api': `${server.url}/api`,
  },

  auth: {
    redirect: {
      callback: '/callback',
      logout: '/',
      login: '/auth'
    },
    strategies: {
      local: {
        token: {
          property: 'token.accessToken'
        },
        endpoints: {
          login: { url: '/api/auth/login', method: 'post', propertyName: 'token.accessToken' },
          logout: { url: '/api/auth/logout', method: 'post' },
          user: { url: '/api/auth/user', method: 'get', propertyName: 'user' }
        },
      },
      localRefresh: {
        _scheme: 'refresh',
        token: {
          property: 'token.accessToken',
          maxAge: 15
        },
        refreshToken: {
          property: 'token.refreshToken',
          data: 'refreshToken',
          maxAge: false
        },
        clientId: {
          property: 'token.clientId',
          data: 'clientId'
        },
        grantType: {
          data: 'grantType'
        },
        autoRefresh: true
      },
      auth0: {
        domain: clientsIds.auth0.domain,
        clientId: clientsIds.auth0.clientId
      },
      facebook: {
        endpoints: {
          userInfo: 'https://graph.facebook.com/v2.12/me?fields=about,name,picture{url},email,birthday'
        },
        clientId: clientsIds.facebook,
        scope: ['public_profile', 'email', 'user_birthday']
      },
      google: {
        clientId: clientsIds.google
      },
      github: {
        clientId: process.env.GITHUB_CLIENT_ID || clientsIds.github.id,
        clientSecret: process.env.GITHUB_CLIENT_SECRET || clientsIds.github.secret
      },
      twitter: {
        clientId: clientsIds.twitter
      },
      // Maybe in a future releasee
      // oauth2mock: {
      //   _scheme: 'oauth2',
      //   endpoints: {
      //     authorization: '/oauth2mockLogin',
      //     token: '/oauth2mockserver/token',
      //     userInfo: '/oauth2mockserver/userinfo'
      //   },
      //   responseType: 'code',
      //   grantType: 'authorization_code',
      //   clientId: 'test-client'
      // }
    }
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
        images: resolve('static/images'),
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

