<template>
  <div>
    <v-tabs v-model="tab" color="cyan" grow :mandatory="false">
      <v-tabs-slider color="yellow"></v-tabs-slider>

      <v-tab
        v-for="ap in apartamentos"
        :key="ap"
        :to="`/apartamentos/${ap.replace(/\s+/, '')}`"
      >{{ ap }}</v-tab>
    </v-tabs>
    <h1>
      APARTAMENTOS IDEAIS
      PARA O SEU ESTILO DE VIDA
    </h1>
  </div>
</template>
<script>
export default {
  name: "ApartamentosView",
  components: {},
  data() {
    return {
      apartamentos: ["final 1", "final 2", "final 3", "final 4", "final 5"],
      tab: null
    };
  }
};
</script>

<style>
</style>

