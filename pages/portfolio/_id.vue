<template>
  <section class="container">
    <div class="portfolio-detail">
      <nuxt-link to="/" class="button button--back button--grey">&larr;&nbsp;Go back</nuxt-link>
      <h1 class="title" v-text="name"></h1>
      <h2 class="subtitle" v-html="description"></h2>
      <p class="cta" v-if="link">
        <a class="button button--blue" :href="link" target="_blank">Discover {{ name }}</a>
      </p>
      <div class="portfolio-video" v-if="video">
        <iframe :src="video" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      </div>
      <div class="portfolio-images">
        <img :src="item" v-for="item in portfolioImages" :alt="`Screenshot of '${name}' project`">
      </div>
    </div>
  </section>
</template>

<script>
import { portfolioImages } from '../../utils/utils'
export default {
  validate ({ params }) {
    return params.id
  },
  asyncData ({ params, env, error }) {
    const item = env.portfolio.find((item) => String(item.id) === params.id)
    if (!item) {
      return error({ message: 'Portfolio item not found', statusCode: 404 })
    }
    item.portfolioImages = portfolioImages(item.id)
    return item
  }
}
</script>

<style lang="scss">
.portfolio-detail {
  .button--back {
    font-size: 0.7em;
    @media (min-width: 32em) {
      float: left;
      clear: right;
      margin: 1rem 3rem;
    }
  }
  .title {
    clear: left;
  }
  .subtitle {
    .technos {
      font-style: italic;
    }
  }
  .portfolio-video {
    position: relative;
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: percentage(9/16);
    > iframe {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 1em 1em;
      margin: 0 auto;
      @media (min-width: 32em) {
        padding: 1.5em 3em;
      }
    }
  }
  .portfolio-images {
    margin: 1em auto;
    @media (min-width: 32em) {
      margin: 2em auto;
    }
    img {
      display: block;
      max-width: 100%;
      padding: 1em 1em;
      margin: 0 auto;
      @media (min-width: 32em) {
        padding: 1.5em 3em;
      }
    }
  }
}
</style>
