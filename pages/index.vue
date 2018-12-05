<template>
  <section class="container">
    <div>
      <h1 class="title">
        <small>Lory Bineau</small><br/>Senior frontend developer
      </h1>
      <h2 class="subtitle">
        HTML5, CSS3 (SASS), Javascript (ES6/ES7), VueJS, ...
      </h2>
      <div class="links">
        <a href="https://codepen.io/lbineau/" target="_blank" class="button button--grey-light">Codepen</a>
        <a href="https://www.linkedin.com/in/lbineau/" target="_blank" class="button button--blue">Linkedin</a>
        <a href="https://github.com/lbineau/" target="_blank" class="button button--grey">GitHub</a>
        <a href="/media/lory-bineau_CV_2018.pdf" target="_blank" class="button button--black">C.V.(pdf)</a>
      </div>
      <PortfolioGrid :items="portfolio"></PortfolioGrid>
    </div>
  </section>
</template>

<script>
import PortfolioGrid from '~/components/portfolio-grid.vue'

export default {
  components: {
    PortfolioGrid
  },
  asyncData ({ params, env, error }) {
    return {
      portfolio: env.portfolio
    }
  }
}
</script>

<style lang="scss">
</style>
