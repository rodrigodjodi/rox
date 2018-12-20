<template>
  <div style="height: 100%;">
    <ovr xml="../ovr/ROX_OVR_00_out.xml" @hsClick="triggerNavOption"></ovr>
    <v-snackbar v-model="snackbar" bottom right :timeout="60000">
      {{ text }}
      <v-btn color="pink" flat @click="snackbar = false">Ver</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import ovr from "../components/Ovr";
export default {
  components: { ovr },
  data() {
    return {
      text: "",
      snackbar: false
    };
  },
  created() {
    this.$store.commit("SET_TITLE", "Maquete virtual");
  },
  methods: {
    triggerNavOption(payload) {
      this.text = payload;
      this.snackbar = true;
    }
  }
};
</script>
