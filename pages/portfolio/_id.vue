<template>
  <section class="container">
    <div>
      <h1 class="title" v-text="name"></h1>
      <p v-if="link">
        <a :href="link" target="_blank">Discover {{ name }}</a>
      </p>
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

<style lang="scss" scoped>
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
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
.portfolio-images {
  img {
    display: block;
    max-width: 100%;
    padding: 1.5em 3em;
  }
}
</style>
