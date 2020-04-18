/**
 *
 * This file will be rewritten entirely after installation
 * or may be altered at a later time by a MAINTAINER.
 *
 * None of the install files would rely on anything provided in here;
 *
 */

export default {
  siteInfo: {
    title: 'Gazette Client',
    description: 'A demo of Gazette',
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
    withCredentials: true,
    socialClientIDs: {
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
