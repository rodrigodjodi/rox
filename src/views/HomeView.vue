<template>
  <v-container fluid class="pa-0">
    <v-layout row wrap>
      <v-flex xs12>
        <ovr xml="../ovr/ROX_OVR_00_out.xml" @hsClick="triggerNavOption" :fillheight="true"></ovr>
        <v-snackbar style="z-index:3000;" v-model="snackbar" top :timeout="4000">
          <span @click="snackbar=false">{{ text }}</span>
          <v-btn color="pink" flat @click="$router.push(route)">Ver</v-btn>
        </v-snackbar>
      </v-flex>
    </v-layout>
  </v-container>
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
    ...mapState(["apartamentos", "innerHeight"])
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
      this.text = this.apartamentos[index].text;
      this.route = this.apartamentos[index].route;
      this.snackbar = true;
    }
  }
};
</script>
