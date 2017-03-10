<template>
  <article id="app">
    <div class="title-container">
      <h1>Lory Bineau: Senior frontend developer</h1>
      <h2>HTML5, CSS3 (SASS), Javascript (ES6/ES7), VueJS, ...</h2>
    </div>
    <router-view></router-view>
  </article>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Indie+Flower');

html, body {
  width: 100%;
  height: 100%;
}
body {
  background-color: #5586A2;
}
h1 {
  font-family: 'Indie Flower', cursive;
}
</style>

<style lang="scss" scoped>
#app {
  position: relative;
  min-height: 100%;

  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
h1 {
  margin-bottom: 0.3em;
  line-height: 1;
}
h2 {
  font-size: 0.8em;
  margin-top: 0;
}
.title-container {
  font-size: 1.5em;
  text-align: center;
  color: white;
  padding-bottom: 1em;
  @media (min-width: 480px) {
    font-size: 3em;
  }
}
</style>
