export default {
  layout: {
    header: {
      logo: {
        text: 'Gazette',
        image: 'logo.svg' // recomendded svg
      },
      navigation: {
        show: true,
        inline: true
      }
    },
    homepage: {
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
