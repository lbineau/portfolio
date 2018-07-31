const portfolio = [
  {
    id: 'nespresso-careers',
    name: 'Nespresso Careers',
    description: 'Website for Nespresso recruitment',
    link: 'https://www.nespresso.com/careers/',
    tools: ['VueJS', 'Nuxt', 'Puppeteer']
  },
  {
    id: 'overseas',
    name: 'Overseas',
    description: 'Website for Overseas tour with Steve&nbsp;McCurry',
    link: 'https://www.blue-infinity.com/our-work/digital-craftsmanship-vacheron-constantin',
    tools: ['VueJS', 'prerendering'],
    videos: [
      {
        src: 'https://player.vimeo.com/video/222407545'
      },
      {
        src: 'https://www.youtube.com/embed/XWwmvA8TaJY'
      }
    ]
  },
  {
    id: 'traces',
    name: 'Traces',
    description: 'Augmented reality application to visualize the data of French Antarctic and Austral Territories',
    link: 'http://human-traces.com/#telecharger',
    tools: ['Unity', 'Vuforia', 'iOS', 'Android'],
    videos: [
      {
        src: 'https://www.youtube.com/embed/hmigYR3B8RI'
      }
    ]
  },
  {
    id: 'lapraille',
    name: 'La Praille',
    description: 'Interactive SVG map for a mall<br/><span class="technos">VueJS / webpack / webservices</span>',
    link: null,
    tools: ['VueJS', 'webpack', 'webservices'],
    videos: [
      {
        src: 'https://player.vimeo.com/video/222377607'
      }
    ]
  },
  {
    id: 'reference',
    name: 'Référence 57260',
    description: 'Website for the most complicated watch of the world<br/><span class="technos">Riot</span>',
    tools: ['Riot'],
    link: 'http://reference57260.vacheron-constantin.com'
  },
  {
    id: 'harmony',
    name: 'Harmony',
    description: 'Website for the new Harmony collection<br/><span class="technos">Riot / PixiJS / SVG</span>',
    tools: ['Riot', 'PixiJS', 'SVG'],
    link: 'http://harmony.vacheron-constantin.com',
    videos: [
      {
        src: 'https://player.vimeo.com/video/222409054'
      }
    ]
  },
  {
    id: 'sunstar-gum',
    name: 'Sunstar GUM',
    description: 'New Website for Sunstar GUM',
    tools: ['AEM', 'VueJS'],
    link: 'https://www.sunstargum.com/'
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
