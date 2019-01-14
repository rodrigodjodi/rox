<template>
  <v-container fluid class="pa-0">
    <v-layout row wrap>
      <v-flex xs12>
        <Krpano :xml="xml" :scene="scene" @error="krpanoerror" :fillheight="true"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import VueGallery from "vue-gallery";
import Krpano from "../components/Krpano";

export default {
  name: "AreasComunsView",
  components: {
    gallery: VueGallery,
    Krpano
  },
  data() {
    return {
      plantas: [
        "galeria/plantas/rox_AP1_large.png",
        "galeria/plantas/rox_AP2_large.png",
        "galeria/plantas/rox_AP3_large.png"
      ],
      index: null,
      xml: "../tours/plantas/areascomuns.xml",
      scene: "terreo"
    };
  },
  created() {
    this.$store.commit("SET_TITLE", "áreas comuns");
    window.vm = this;
  }
};
</script>
