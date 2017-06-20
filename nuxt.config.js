const portfolio = [
  { id: 'overseas', name: 'Overseas', link: 'http://overseas.vacheron-constantin.com' },
  { id: 'lapraille', name: 'La Praille' },
  { id: 'reference', name: 'Référence 57260', link: 'http://reference57260.vacheron-constantin.com' },
  { id: 'harmony', name: 'Harmony', link: 'http://harmony.vacheron-constantin.com' },
]
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Spectral:300,400' }
    ]
  },
  env: {
    portfolio: portfolio
  },
  /*
  ** Customize the progress-bar color
  */
  loading: false,
  // loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    routes: function () {
      return portfolio.map((item) => `/portfolio/${item.id}`)
    }
  }
}
