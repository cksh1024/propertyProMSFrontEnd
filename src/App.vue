<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body{
  margin: 0;
  padding: 0;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  position: relative;
}

.menu {
  width: 10%;
  height: 99.9%;
  position: fixed;
  top: 0;
  left: 1px;
  z-index: 1;
}
.main {
  width: 89.5%;
  height: 100%;
  margin-left: 10.5%;
  overflow: scroll;
}
.mainview {
  margin-top: 5%;
  padding: 1% 2%;
  height: 86%;
}
.top-bar {
  height: 9%;
  width: 88.5%;
  position: fixed;
  top: 0;
  z-index: 2;
}
</style>
