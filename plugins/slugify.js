import Vue from 'vue'

const Slugify = {}

Slugify.install = function (Vue, options) {
  Vue.prototype.slugify = function (str) {
    return str ? str
      .toString()
      .toLowerCase()
      .replace(/[^\w ]+/g, '-')
      .replace(/ +/g, '-')
      : ''
  }
}

Vue.use(Slugify)
