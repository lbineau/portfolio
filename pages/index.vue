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
      </div>
      <PortfolioGrid :items="portfolio"></PortfolioGrid>
    </div>
  </section>
</template>

<script>
import PortfolioGrid from '~components/portfolio-grid.vue'

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
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 3em;
  line-height: 1;
  color: #35495e;
  letter-spacing: 1px;
  margin: 0.3em auto;
  small {
    font-size: 0.6em;
  }
  @media (min-width: 32em) {
    font-size: 5em;
  }
}
.subtitle
{
  font-weight: 300;
  font-size: 2em;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
  @media (min-width: 32em) {
    font-size: 3em;
  }
}
.links
{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-top: 15px;
  @media (min-width: 32em) {
    flex-direction: row;
  }
}
img {
  max-width: 100%;
}
</style>
