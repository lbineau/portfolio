<template>
  <nav class="portfolio-grid">
    <ul>
      <li v-for="item in items" :key="item.id">
        <nuxt-link :to="'/portfolio/' + item.id">
          <figure class="effect-bubba">
            <img :src="getThumb(item.id)" :alt="item.id"/>
            <img class="over" :src="getThumb(item.id)" :alt="item.id"/>
            <figcaption>
              <h3 v-text="item.name"></h3>
              <p v-html="item.description"></p>
            </figcaption>
          </figure>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    getThumb (id) {
      return require(`~/assets/portfolio/${id}/thumb.jpg`)
    }
  }
}
</script>

<style lang="scss">
.portfolio-grid {
  margin: 2em auto;
  max-width: 80em;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  li {
    margin: 10px 1%;
    min-width: 320px;
    max-width: 480px;
    max-height: 360px;
    width: 48%;
  }
  figure {
    position: relative;
    text-align: center;
    cursor: pointer;

    img {
      position: relative;
      display: block;
      max-width: 100%;
      opacity: 1;
      filter: opacity(80%);
      &.over {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 0;
        filter: blur(3px) opacity(80%);
      }
    }

    figcaption {
      padding: 2em;
      color: #fff;
      text-transform: uppercase;
      font-size: 1.25em;
      backface-visibility: hidden;
      text-shadow: 0.075em 0.08em 0.1em rgba(0, 0, 0, .5);
      background: rgba(0, 0, 0, .2);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    figcaption::before,
    figcaption::after {
      pointer-events: none;
    }

    figcaption {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    h3 {
      font-weight: bold;
      font-size: 1.3em;
    }

    h3,
    p {
      margin: 0;
    }

    p {
      letter-spacing: 1px;
      font-size: 68.5%;
      .technos {
        font-weight: bold;
      }
    }

    img {
      transform: scale(1.1) translateZ(0);
      transition: opacity 0.5s linear;
      position: relative;
      z-index: -1;
      will-change: opacity;
      &.over {
        transition: opacity 0.5s linear;
      }
    }

    figcaption::before,
    figcaption::after {
      position: absolute;
      top: 30px;
      right: 30px;
      bottom: 30px;
      left: 30px;
      content: '';
      opacity: 0;
      transition: opacity 0.35s, transform 0.35s;
    }

    figcaption::before {
      border-top: 1px solid #fff;
      border-bottom: 1px solid #fff;
      transform: scale(0,1);
    }

    figcaption::after {
      border-right: 1px solid #fff;
      border-left: 1px solid #fff;
      transform: scale(1,0);
    }

    h3 {
      transition: transform 0.35s;
      transform: translate3d(0,-20px,0);
    }

    p {
      padding: 20px 2.5em;
      opacity: 0;
      transition: opacity 0.35s, transform 0.35s;
      transform: translate3d(0,20px,0);
    }
  }

  a {
    display: block;
    overflow: hidden;
    &:hover, &:focus {
      img {
        opacity: 0;
      }
      img.over {
        opacity: 1;
      }
      figcaption::before,
      figcaption::after {
        opacity: 1;
        transform: scale(1);
      }

      h3,
      p {
        opacity: 1;
        transform: translate3d(0,0,0);
      }
    }
  }
}
</style>
