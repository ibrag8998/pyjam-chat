<template>
  <div id="app">
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 400px;
  margin: 64px auto;
  height: 700px;

  & > .container {
    height: 100%;
    background-color: #fafafa;
    box-shadow: 0 0 3px 0 rgba(127, 127, 127, 0.4);
  }
}
</style>
