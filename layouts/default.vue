<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
export default {
  transition: {
    name: 'page',
    mode: 'in-out'
  }
}
</script>

<style lang="scss">
html
{
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}
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
    font-size: 2.5em;
  }
}
.links
{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-top: 15px;
  align-items: center;
  justify-content: center;
  @media (min-width: 32em) {
    flex-direction: row;
  }
}
.button {
  display: inline-block;
  padding: 0.625em 1.875em;
  margin: 1em 0.5em;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}
.cta {
  display: inline-block;
  margin: 1em 0.5em;
}
.button--orange
{
  border: 1px solid #fc6a03;
  color: #fc6a03;
}
.button--orange:hover
{
  color: #fff;
  background-color: #fc6a03;
}
.button--grey
{
  border: 1px solid #24292e;
  color: #24292e;
}
.button--grey:hover
{
  color: #fff;
  background-color: #24292e;
}
.button--grey-light
{
  border: 1px solid #38373d;
  color: #38373d;
}
.button--grey-light:hover
{
  color: #fff;
  background-color: #38373d;
}
.button--blue
{
  border: 1px solid #0084bf;
  color: #0084bf;
}
.button--blue:hover
{
  color: #fff;
  background-color: #0084bf;
}
.button--black
{
  border: 1px solid black;
  color: black;
}
.button--black:hover
{
  color: #fff;
  background-color: black;
}

img {
  max-width: 100%;
}

.page-enter-active {
  transition: opacity .5s ease;
}

.page-leave-active {
  transition: opacity 0s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
@keyframes scroll-appear {
  0% {
    opacity: 0;
    transform: translateY(80px) rotateX(20deg) rotateY(-20deg) translateZ(0);
  }
  60% {
    opacity: 1;
  }
  100% {
    transform: none;
  }
}
</style>
