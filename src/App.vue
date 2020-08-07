<template>
  <div id="app" class="container">
    <h3 id="head">Manza - Git AnalyticS</h3>
    <img src="@/assets/logo.png" class="img-fluid" alt="Responsive image" width="250px" />
    <img src="@/assets/githublogo.png" class="img-fluid" alt="Responsive image" width="150px" />
    <div class="row">
      <Afuego />
      <Estadistica />
      <Estadistica />
    </div>
  </div>
</template>

<script>
import Estadistica from "./components/Estadistica.vue";
import Afuego from "./components/Afuego.vue";

export default {
  name: "App",
  components: {
    Estadistica,
    Afuego,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> 