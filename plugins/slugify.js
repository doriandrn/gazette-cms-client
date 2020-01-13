import Vue from 'vue'

const Slugify = {}

Slugify.install = function (Vue, options) {
  // 1. add global method or property
  // Vue.myGlobalMethod = function () {
  //   // some logic ...
  // }

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
