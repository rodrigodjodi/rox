<template>
  <div class="about">
    <h1>Página maquete</h1>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.commit("SET_TITLE", "Maquete virtual");
  }
};
</script>
