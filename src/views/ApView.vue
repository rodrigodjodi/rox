<template>
  <div>
    <v-tabs v-model="tab" color="cyan" grow :mandatory="true">
      <v-tabs-slider color="yellow"></v-tabs-slider>

      <v-tab
        v-for="ap in apartamentos"
        :key="ap"
        :to="`/apartamentos/${ap.replace(/\s+/, '')}`"
      >{{ ap }}</v-tab>
    </v-tabs>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 lg6>
          <h2>Apartamento final {{$route.params.ap.slice(5, 6)}}</h2>
          <p>tipo</p>
          <p>área</p>
          <p>vagas</p>
        </v-flex>
        <v-flex xs12 lg6>
          <!-- <img :src="require('../assets/galeria/plantas/rox_AP1_large.png')" alt> -->
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import Krpano from "../components/Krpano";
export default {
  name: "ApView",
  components: {
    Krpano
  },
  data() {
    return {
      apartamentos: [
        "final 1",
        "final 2",
        "final 3",
        "final 4",
        "final 5",
        "final 6",
        "duplex final 1",
        "duplex final 2"
      ],
      tab: null
    };
  },
  computed: {},
  created() {
    let tab = this.$route.params.ap.slice(5, 6) - 1;
    this.tab = tab;
  },
  destroyed() {
    console.log("destroyed");
  }
};
</script>

<style>
</style>

