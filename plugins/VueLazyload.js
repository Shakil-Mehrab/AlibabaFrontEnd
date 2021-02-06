import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/img/app/dbc_placeholder.png',
  loading: '/img/app/dbc_placeholder.png',
  // loading: 'img/app/loading.gif',
  attempt: 3
})
