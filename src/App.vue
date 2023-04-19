<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  /* watch: {
    $route (to) {
      console.log(to.meta.title)
      document.title = to.meta.title
    }
  } */
}
</script>

<style>
html, body, #app {
  height: 100%;
}

body {
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,"\5FAE\8F6F\96C5\9ED1",Arial,sans-serif;
  line-height: 1.5;
  color: #515a6e;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
