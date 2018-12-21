<template>
  <div style="height: 100%;">
    <ovr xml="../ovr/ROX_OVR_00_out.xml" @hsClick="triggerNavOption"></ovr>
    <v-snackbar v-model="snackbar" bottom :timeout="5000">
      {{ text }}
      <v-btn color="pink" flat @click="$router.push(route)">Ver</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ovr from "../components/Ovr";
export default {
  components: { ovr },
  data() {
    return {
      text: "",
      snackbar: false,
      route: null
    };
  },
  computed: {
    ...mapState(["apartamentos"])
  },
  created() {
    this.$store.commit("SET_TITLE", "Maquete virtual");
  },
  methods: {
    triggerNavOption(payload) {
      let index = this.apartamentos.findIndex(el => {
        return el.id === payload;
      });
      if (index < 0) return false;
      this.text = this.apartamentos[index].txt;
      this.route = this.apartamentos[index].route;
      this.snackbar = true;
    }
  }
};
</script>
