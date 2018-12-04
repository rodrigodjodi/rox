<template>
  <div>
    <h1>
      APARTAMENTOS IDEAIS
      PARA O SEU ESTILO DE VIDA
    </h1>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ApartamentosView",
  computed: {
    ...mapState(["apartamentos"])
  },
  created() {
    this.$store.commit("SET_TITLE", "apartamentos");
  }
};
</script>

<style>
</style>

