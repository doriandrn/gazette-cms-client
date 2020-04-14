export default {
  auth: {
    strategies: {
      facebook: {
        client_id: '...',
        userinfo_endpoint: 'https://graph.facebook.com/v2.12/me?fields=about,name,picture{url},email,birthday',
        scope: ['public_profile', 'email', 'user_birthday']
      },
    }
  }
}
