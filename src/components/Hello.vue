<template>
  <nav class="hello">
    <a href="https://github.com/lbineau/"><img src="../assets/icons/github.svg"></a>
    <a href="https://www.linkedin.com/in/lbineau/"><img src="../assets/icons/linkedin.svg"></a>
  </nav>
</template>

<script>
export default {
  name: 'hello'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello {
  text-align: center;
  /*display: flex;
  align-content: center;
  justify-content: center;*/
}
a {
  display: inline-block;
  padding: 1em;
  &:hover {
    img {
      box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    }
  }
}
img {
  transition: box-shadow 0.3s ease-in-out;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  max-width: 100%;
}
</style>
