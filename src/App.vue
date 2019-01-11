<template>
  <v-app>
    <v-toolbar style="z-index:2000;" v-if="!sidenav"
        color="transparent" class="elevation-0 ma-0"
        floating absolute
      >
        <img src="./assets/rox-logo.png" alt="logo rox" id="roxlogo" width="64">
      </v-toolbar>
    <v-navigation-drawer
      app
      clip
      style="z-index:2000;"
      hide-overlay
      touchless
      :mini-variant="mini"
      :mini-variant-width="80"
      stateless
      :permanent="false"
      :value="sidenav"
    >
      <v-list>
        <v-list-tile @click.stop="mini = !mini">
          <v-list-tile-action>
            <img src="./assets/rox-logo.png" alt="logo rox" id="roxlogo" width="56">
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{title}}</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon @click.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      

      
        <v-list-tile v-for="item in navitems" :key="item.texto" :to="item.route">
          <v-list-tile-action>
            <v-icon>{{ item.icone }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.texto }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      
      <router-view></router-view>
    </v-content>

    <v-bottom-nav app :value="!sidenav"  style="z-index:1001;"
     height="48" fixed
    >
      <v-btn  v-for="item in navitems" :key="item.texto" :to="item.route">
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
        { texto: "Localização", icone: "360", route: "/" },
        { texto: "Apartamentos", icone: "view_quilt", route: "/apartamentos" },
        {
          texto: "Áreas comuns",
          icone: "fitness_center",
          route: "/areascomuns"
        }
      ],
      mini: true
    };
  },
  computed: {
    ...mapState(["title", "innerHeight"]),
    sidenav() {
      return this.innerHeight < 480;
    }
  },
  mounted() {
    this.$store.commit("ON_RESIZE", window.innerHeight);
    window.addEventListener("resize", () => {
      this.$store.commit("ON_RESIZE", window.innerHeight);
    });
  }
};
</script>
<style>

</style>
