<template>
  <div>
    <v-tabs v-model="tab" color="cyan" grow :mandatory="true">
      <v-tabs-slider color="yellow"></v-tabs-slider>

      <v-tab v-for="ap in apartamentos" :key="ap.url" :to="`/apartamentos/${ap.url}`">{{ ap.aba }}</v-tab>
    </v-tabs>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 lg6>
          <h2>{{ap.txt}}</h2>
          <p>{{ap.tipologia}}</p>
          <p>{{ap.area}}</p>
          <p>{{ap.vagas}}</p>
        </v-flex>
        <v-flex xs12 lg6>
          <!-- <img :src="require('../assets/galeria/plantas/rox_AP1_large.png')" alt> -->
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Krpano from "../components/Krpano";
export default {
  name: "ApView",
  components: {
    Krpano
  },
  data() {
    return {
      tab: null,
      ap: null
    };
  },
  computed: {
    ...mapState(["apartamentos"])
  },
  methods: {
    updatePage(route) {
      let ap = this.apartamentos.find((el, index) => {
        if (el.url === route.params.ap) {
          this.$store.commit("SET_TITLE", this.apartamentos[index].txt);
          return el;
        }
      });
      this.ap = ap;
    }
  },
  created() {
    this.updatePage(this.$route);
  },
  beforeRouteUpdate(to, from, next) {
    this.updatePage(to);
    next();
  },
  destroyed() {
    console.log("destroyed");
  }
};
</script>

<style>
</style>

