<template>
  <div class="col-md-6 col-sm-6">
    <div class="jumbotron">
      <h3>Ingresa tu User</h3>
      <!-- aca buscamos el usuarios  -->
      <div class="input-group mb-3">
        <input
          v-model="username"
          type="text"
          class="form-control"
          placeholder
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        />
        <div class="input-group-prepend">
          <button
            @click="infoUser"
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon1"        
          >Go!</button>
        </div>
      </div>
      <!-- aca mostramos la estadistica del usuario -->
      <h2>{{username}}</h2>
      <img :src="avatar_url" alt width="100px" class="rounded-circle" id="avatar" />
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Mis Seguidores 20%
          <span class="badge badge-primary badge-pill">{{followers}}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Mis Repos 40%
          <span class="badge badge-primary badge-pill">{{public_repos}}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Mis Gits 30%
          <span class="badge badge-primary badge-pill">{{public_gists}}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Mis Seguidos 20%
          <span class="badge badge-primary badge-pill">{{following}}</span>
        </li>
      </ul>
      <a
        href="#"
        class="list-group-item list-group-item-action list-group-item-dark"
      >Tu Git Score es {{score}}</a>
    </div>

    <p>Score = PMP</p>
  </div>
</template>
<script>
export default {
  name: "Estadistica",
  props: {
    msg: String,
  },
  data() {
    return {
      avatar_url: "",
      username: "",
      followers: 0,
      public_repos: 0,
      public_gists: 0,
      following: 0,
      scorePon: 0,
      scoreSum: 0,
      score: 0,
    };
  },
  mounted() {
    // axios en forma de promesas (ES6)
  },
  methods: {
    infoUser() {
      this.axios
        .get(`https://api.github.com/users/${this.username}`)
        .then((datos) => {
          const user = datos.data;
          this.avatar_url = user.avatar_url;
          this.username = user.login;
          this.followers = user.followers;
          this.public_repos = user.public_repos;
          this.public_gists = user.public_gists;
          this.following = user.following;
          this.scoreSum =
            this.followers +
            this.public_repos +
            this.public_gists +
            this.following;
          this.scorePon =
            this.followers * 0.2 +
            this.public_repos * 0.4 +
            this.public_gists * 0.3 +
            this.following * 0.2;
          this.score = Math.round((this.scorePon / this.scoreSum) * 100, -2);
        })
        .catch((error) => {
          console.log(error);
          alert("escriba bien no sea longi");
        });
    },
  },
};
</script>
<style scoped>
#avatar {
  padding: 1rem;
}
</style>

