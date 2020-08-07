<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="Show in shows" :key="Show.id">
        <th scope="row">1</th>
     
      </tr>
    </tbody>
  </table>
</template>
<script>
import { db } from '@/firebase';

export default {
  name: "Afuego",
  data() {
    return {
      shows: [], // to start, the list is empty
    };
  },
  firestore() {
    // adding this key/function
    return {
      shows: db.collection("Show"),
    };
  },
};
</script>
<style scoped>
</style>