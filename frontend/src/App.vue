<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 400px;
  margin: 60px auto;
  height: 700px;
  box-shadow: 0 0 2px 0 rgba(127, 127, 127, 0.4);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: 0.3s; // only for development
}

a {
  text-decoration: none;
}
</style>
