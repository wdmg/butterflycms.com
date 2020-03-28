/* nuxt.config.js */
const webpack = require("webpack");

// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/'
  }
} : {}

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Butterfly.CMS — Innovative Content Management System',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keywords', name: 'keywords', content: 'Butterfly.CMS, Butterfly, CMS, Content Management System, Yii2, framework' },
      { hid: 'description', name: 'description', content: 'Innovative Content Management System based on Yii2 framework.' },
      { hid: 'author', name: 'author', content: 'W.D.M.Group, Ukraine' },
      { hid: 'yandex-verification', name: 'yandex-verification', content: '766683fff1c3b5bb' },
      { hid: 'google-site-verification', name: 'google-site-verification', content: 'gPoNLTOjZH6XENe7JHvjdAaPHOoLBzZBdZNSzVsLhJ0' }
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ],
    script: [
      { src: "https://code.jquery.com/jquery-3.3.1.slim.min.js", type: "text/javascript" },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js", type: "text/javascript" },
      { src: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js", type: "text/javascript" },
      { src: "https://www.googletagmanager.com/gtag/js?id=UA-146859207-1", type: "text/javascript" }
    ]
  },
  css: [
    { src: '~/assets/scss/styles.scss', lang: 'sass' },
    '~/assets/vendor/nucleo/css/nucleo.css',
    '~/assets/vendor/font-awesome/css/font-awesome.css'
  ],
  plugins: [
    { src: '~/plugins/google-ga.js', ssr: false },
    { src: '~/plugins/google-tag-manager.js', ssr: false },
    { src: '~/plugins/yandex-metrika.js', ssr: false },
    { src: '~/plugins/vue-lightbox-plugin.js', ssr: false }
  ],
  modules: [
    'bootstrap-vue/nuxt',
    'cookie-universal-nuxt'
  ],
  bootstrapVue: {
    bootstrapCSS: true, // Or `css: false`
    bootstrapVueCSS: true // Or `bvCSS: false`
  },
  ...routerBase,
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
     ** Add external plugins
     */
    vendor: ["jquery", "bootstrap"],
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery"
      })
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
