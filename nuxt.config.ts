// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@vueuse/nuxt'
  ],
  app: {
    /*
    ** Headers of the page
    */
    head: {
      title: 'Lory Bineau: Senior Frontend developer portfolio',
      meta: [
        { hid: 'description', name: 'description', content: 'After 2 years at Gobelins\' school and MNSTR company, I am working at blue-infinity (Geneva)' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/ic_launcher.png' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Spectral:300,400' }
      ]
    }
  }
})
