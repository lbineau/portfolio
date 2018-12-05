<template>
  <section class="container">
    <div class="portfolio-detail">
      <nuxt-link to="/" class="button button--back button--grey">&larr;&nbsp;Go back</nuxt-link>
      <h1 class="title" v-text="name"></h1>
      <h2 class="subtitle">
        <span v-html="description"></span><br/>
        <span class="technos" v-if="tools" v-html="tools.join(' / ')"></span>
      </h2>
      <p class="cta" v-if="link">
        <a class="button button--blue" :href="link" target="_blank">Discover {{ name }}</a>
      </p>
      <div class="portfolio-images">
        <div v-in-viewport.once="-50" class="portfolio-video" v-if="videos" v-for="(video, idx) in videos" :key="`video-${idx}`">
          <iframe :src="video.src" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
        <img v-in-viewport.once="-50" :src="item" v-for="(item, idx) in portfolioImages" :key="`image-${idx}`" :alt="`Screenshot of '${name}' project`">
      </div>
    </div>
  </section>
</template>

<script>
import { portfolioImages } from '../../utils/utils'
const defaultData = {
  id: null,
  name: null,
  description: null,
  tools: null,
  link: null,
  videos: null
}
export default {
  validate ({ params }) {
    return params.id
  },
  data () {
    return defaultData
  },
  asyncData ({ params, env, error }) {
    const item = env.portfolio.find((item) => String(item.id) === params.id)
    if (!item) {
      return error({ message: 'Portfolio item not found', statusCode: 404 })
    }
    item.portfolioImages = portfolioImages(item.id)
    console.log(item)
    return {
      ...defaultData,
      ...item
    }
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
    padding-bottom: percentage(9/16);
    > iframe {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      box-shadow: 0px 0px 100px -5px rgba(100, 100, 100, 0.3);
    }
  }
  .portfolio-images {
    margin: 1em auto;
    padding: 0 1em;
    @media (min-width: 32em) {
      margin: 3em auto;
      padding: 0 3em;
    }
    * + * {
      margin-top: 2em;
      @media (min-width: 32em) {
        margin-top: 5em;
      }
    }
    iframe,
    img {
      display: block;
      max-width: 100%;
      margin-left: auto;
      margin-right: auto;
      box-shadow: 0px 0px 100px -5px rgba(100, 100, 100, 0.3);
    }
    > * {
      // only for javascript version
      #__nuxt:not([data-server-rendered="true"]) & {
        animation-fill-mode: backwards;
        animation: scroll-appear 1.2s cubic-bezier(.165,.84,.44,1);
        animation-play-state: paused;
        &.in-viewport {
          animation-play-state: running;
        }
      }
    }
  }
}
</style>
