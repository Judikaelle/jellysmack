<template>
  <div id="app">
    <h1>Rick & Morty API</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap");

/* Reset CSS */
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
html {
  font-size: 62.5%;
}
body {
  box-sizing: border-box;
  font-size: 1.6rem;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(255, 87, 0, 1) 100%
  );
}

#app {
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 110rem;
  margin: auto;
  padding: 5rem 2rem;
}

#app h1 {
  font-size: 5rem;
  text-align: center;
  color: #fff;
  margin-bottom: 10rem;
}
</style>