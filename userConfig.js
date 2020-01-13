const palettes = {
  default: 'Default',
  hippie: 'Hippie',
  healthy: 'Healthy'
}

export default {
  appearance: {
    palette: {
      type: 'select',
      options: palettes
    }
  },
  layout: {
    header: {
      logo: {
        type: 'upload',
        text: 'Gazette',
        image: 'logo.svg' // recomendded svg
      },
      navigation: {
        show: true,
        inline: true
      }
    },
    footer: {

    },
    homepage: {
      rightSidebar: false,
      widgets: {
        /**
         * Comment out a line to disable a widget
         */
        topStories: {
          limit: 5
        }
      }
    }
  },
  // Comment out a line to disable a module
  modules: {
    gdpr: {},
    comments: {
      allowAnonymous: true
    },
    search: {},
    auth: {
      email: true,
      socials: ['Google', 'Facebook', 'Github', 'Twitter', 'Microsoft']
    },
    code: {} // synthax highlighter and other shits for code
  }
}
