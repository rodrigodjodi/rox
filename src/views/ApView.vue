<template>
  <Krpano xml="../tours/plantas/plantas.xml" @error="krpanoerror"></Krpano>
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
      ap: null
    };
  },
  computed: {
    ...mapState(["apartamentos"])
  },
  methods: {
    updatePage(route) {
      let ap = this.apartamentos.find((el, index) => {
        if (el.id === route.params.ap) {
          this.$store.commit("SET_TITLE", this.apartamentos[index].txt);
          return el;
        }
      });
      this.ap = ap;
    },
    krpanoerror(err) {
      console.error(err);
    }
  },
  created() {
    this.updatePage(this.$route);
  },
  beforeRouteUpdate(to, from, next) {
    this.updatePage(to);
    next();
  },
  mounted() {},
  destroyed() {
    console.log("destroyed");
  }
};
</script>

<style>
</style>

