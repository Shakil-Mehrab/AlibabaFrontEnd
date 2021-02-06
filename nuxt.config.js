const env = require('dotenv').config()
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'alibaba',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    script: [
      { src: 'https://kit.fontawesome.com/bb2f33706c.js' },
      { src: 'https://kit.fontawesome.com/bb2f33706c.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: {
    color: '#5f39a0'
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/style.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/VueCarousel.js', mode: 'client' },
    '@/plugins/VueFragment',
    '@/plugins/VueZoomOnHover',
    '@/plugins/VueObserveVisibility',
    '@/plugins/VueContentPlaceholders',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: env.API_URL
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
