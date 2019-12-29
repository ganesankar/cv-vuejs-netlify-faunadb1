export default {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Ganesan Karuppaiya',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'author', content: 'Ganesan Karuppaiya - ganesan.xyz' }
    ]
  },

  /*
   ** CSS
   */
  css: [
    'normalize.css',
    '@/assets/css/main.scss',
    'element-ui/lib/theme-chalk/index.css'
  ],

  /*
   ** Plugins
   */
  plugins: [{ src: '~/plugins/element-ui.js' }],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],

  /*
   ** Modules
   */
  modules: ['@nuxtjs/axios', 'vue-scrollto/nuxt',],

  /*
   ** Axios config
   */
  axios: {
    baseURL: '/'
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
