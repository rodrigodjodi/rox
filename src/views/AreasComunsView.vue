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
      baseUrl: process.env.BASE_URL,
      plantas: [
        "galeria/plantas/rox_AP1_large.png",
        "galeria/plantas/rox_AP2_large.png",
        "galeria/plantas/rox_AP3_large.png"
      ],
      index: null
    };
  },
  computed: {
    xml() {
      return `${this.baseUrl}tours/areascomuns/areascomuns.xml`;
    },
    scene() {
      if (this.$route.params.cena) {
        return `${this.$route.params.pavimento}-${this.$route.params.cena}`;
      } else {
        return this.$route.params.pavimento;
      }
    }
  },
  methods: {
    krpanoerror(err) {
      console.error(err);
    }
  },
  created() {
    this.$store.commit("SET_TITLE", "áreas comuns");
  },
  destroyed() {
    console.log("krpano destroyed");
  }
};
</script>
