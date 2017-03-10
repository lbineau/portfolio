<template>
  <div id="app">
    <h1>Lbineau's portfolio</h1>
    <router-view></router-view>
  </div>
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
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  background-color: #5586A2;
}
h1, h2, h3 {
  font-family: 'Indie Flower', cursive;
}
</style>

<style lang="scss" scoped>
#app {
  position: relative;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
h1 {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  font-size: 3em;
  transform: translateY(-100%);
  padding-bottom: 1em;
  text-align: center;
  color: white;
  @media (min-width: 480px) {
    font-size: 5em;
  }
}
</style>
