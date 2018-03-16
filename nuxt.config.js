const portfolio = [
  {
    id: 'nespresso-careers',
    name: 'Nespresso Careers',
    description: 'Website for Nespresso recruitment<br/><span class="technos">VueJS / Nuxt / Puppeteer</span>',
    link: 'https://www.nespresso.com/careers/',
    video: null,
    video2: null
  },
  {
    id: 'overseas',
    name: 'Overseas',
    description: 'Website for Overseas tour with Steve&nbsp;McCurry<br/><span class="technos">VueJS / prerendering</span>',
    link: 'https://www.blue-infinity.com/our-work/digital-craftsmanship-vacheron-constantin',
    video: 'https://player.vimeo.com/video/222407545',
    video2: 'https://www.youtube.com/embed/XWwmvA8TaJY'
  },
  {
    id: 'lapraille',
    name: 'La Praille',
    description: 'Interactive SVG map for a mall<br/><span class="technos">VueJS / webpack / webservices</span>',
    link: null,
    video: 'https://player.vimeo.com/video/222377607',
    video2: null
  },
  {
    id: 'reference',
    name: 'Référence 57260',
    description: 'Website for the most complicated watch of the world<br/><span class="technos">Riot</span>',
    link: 'http://reference57260.vacheron-constantin.com',
    video: null,
    video2: null
  },
  {
    id: 'harmony',
    name: 'Harmony',
    description: 'Website for the new Harmony collection<br/><span class="technos">Riot / PixiJS / SVG</span>',
    link: 'http://harmony.vacheron-constantin.com',
    video: 'https://player.vimeo.com/video/222409054',
    video2: null
  }
]
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Lory Bineau: Senior Frontend developer portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'After 2 years at Gobelins\' school and MNSTR company, I am working at blue-infinity (Geneva)' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/ic_launcher.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Spectral:300,400' }
    ]
  },
  env: {
    portfolio: portfolio
  },
  /*
  ** Customize the progress-bar color
  */
  // loading: false,
  loading: { color: '#3B8070' },
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
