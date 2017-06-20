<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
export default {
  transition (to, from) {
    if (!from) return 'slide-left'
    return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  }
}
</script>

<style>
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
.links {
  display: flex;
  margin: 1em auto;
  align-items: center;
  justify-content: center;
}
.button {
  padding: 10px 30px;
  margin: 1em 0.5em;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}
.cta {
  display: inline-block;
  font-size: 2em;
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

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(30px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-30px, 0);
}
</style>
