export default function ({ $axios, redirect, app, store }) {
  $axios.onError(error => {
    // with @nuxtjs/toast
    app.$toast.error(error.response.data.message || error)

    // with a custom store action
    store.dispatch('error', error)
 })
}
