<template>
  <v-app>
    <v-toolbar app floating color="rgba(255, 255, 255, 0.5)">
      <router-link to="/">
        <img src="./assets/rox-logo.png" alt="logo rox" id="roxlogo">
      </router-link>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">{{title}}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content class="pt-0">
      <router-view></router-view>
    </v-content>

    <v-bottom-nav :active.sync="bottomNav" :color="color" :value="true" app v-if="false">
      <v-btn dark v-for="(item, index) in navitems" :key="index" :to="item.route">
        <span>{{item.texto}}</span>
        <v-icon>{{item.icone}}</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "App",
  components: {},
  data() {
    return {
      navitems: [
        { texto: "Projeto", icone: "360", route: "/" },
        { texto: "Apartamentos", icone: "pin_drop", route: "/apartamentos" },
        { texto: "Áreas comuns", icone: "collections", route: "/areascomuns" }
      ],
      bottomNav: 0,
      color: "#5e354c",
      showNav: true
    };
  },
  computed: {
    ...mapState(["title"])
  }
};
</script>
<style>
#roxlogo {
  height: 48px;
}
</style>
