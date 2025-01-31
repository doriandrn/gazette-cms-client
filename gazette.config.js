/**
 *
 * This values of this config object will be rewritten *entirely* after installation
 * or may be altered at a later time by an ADMIN.
 *
 * None of the install files would rely on anything provided in here;
 *
 */

// enum Configs {
//   client,
//   server,
//   auth
// }

// enum Roles {
//   ADMIN,
//   MAINTAINER,
//   MODERATOR,
//   EDITOR,
//   CUSTOMER,
//   USER,
//   DEV,
//   GUEST
// }

// type ClientConfig = {
//   title: string, // Title of the website / app
//   description: string,
//   languages: {
//     main: string,
//     allowed ?: string[]
//   },
//   appearance ?: {
//     branding ?: {
//       logo: {
//         icon: string,
//         full: string
//       }
//     },
//     palette ?: string,
//     typography ?: string
//   },
//   taxonomies: string[]
// }

// type ServerConfig = {
//   url: string
// }

// type GazetteConfig = {
//   client: ClientConfig,
//   server: ServerConfig,
//   auth: AuthConfig
// }

// type AuthConfig = {
//   register: {
//     enabled: Boolean,
//     defaultRole: string
//   },
//   withCredentials : boolean,
//   social: {
//     clientsIds: {
//       facebook ?: string,
//       google ?: string,
//       auth0 ?: string,
//       github ?: {
//         id: string,
//         secret: string
//       }
//     }
//   }
// }

const config = {
  client: {
    title: 'Gazette Client',
    description: '[Demo] Distributable client for Gazette CMS',
    languages: {
      main: 'en',
      allowed: ['ro', 'en']
    },
    taxonomies: [
      'article',
      'tutorial',
      'guide',
      'product',
      'video'
    ],
    content: {
      excerptLengthLimit: 148
    },
    appearance: {
      palette: 'default',
      typography: 'set-1',


      navigation: {
        useSmall: false
      }
    }
  },
  server: {
    url: 'http://localhost:7331' // User has 2 options: manually host the server or use our cloud solution (TBD)
  },
  auth: {
    register: {
      enabled: true,
      defaultRole: 'guest'
    },
    withCredentials: true,
    social: {
      clientsIds: {
        facebook: '',
        google: '',
        twitter: '',
        auth0: {
          domain: '',
          clientId: 'q8lDHfBLJ-Fsziu7bf351OcYQAIe3UJv'
        },
        github: {
          id: '',
          secret: ''
        }
      }
    }
  }
}

export default config
