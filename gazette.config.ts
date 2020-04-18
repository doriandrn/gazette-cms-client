/**
 *
 * This values of this config object will be rewritten *entirely* after installation
 * or may be altered at a later time by an ADMIN.
 *
 * None of the install files would rely on anything provided in here;
 *
 */

enum Configs {
  client,
  server,
  auth
}

enum Roles {
  ADMIN,
  MAINTAINER,
  MODERATOR,
  EDITOR,
  CUSTOMER,
  USER,
  DEV,
  GUEST
}

type ClientConfig = {
  title: string, // Title of the website / app
  description: string,
  languages: {
    main: string,
    allowed: string[]
  },
  taxes: string[]
}

type ServerConfig = {
  url: string
}

type GazetteConfig = {
  client: ClientConfig,
  server: ServerConfig,
  auth: AuthConfig
}

type AuthConfig = {
  register: {
    enabled: Boolean,
    defaultRole: string
  },
  withCredentials : boolean,
  social: {
    clientsIds: {
      facebook ?: string,
      google ?: string,
      auth0 ?: string,
      github ?: {
        id: string,
        secret: string
      }
    }
  }
}

const config: GazetteConfig = {
  client: {
    title: 'Gazette Client',
    description: '[Demo] Distributable client for Gazette CMS',
    languages: {
      main: 'en',
      allowed: ['ro', 'en']
    },
    taxes: [
      'article',
      'tutorial',
      'guide',
      'product',
      'video'
    ],
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
        auth0: '',
        github: {
          id: '',
          secret: ''
        }
      }
    }
  }
}

export default config
