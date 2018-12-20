<template>
  <v-app>
    <v-navigation-drawer
      style="z-index:2000;"
      class="mt-2 ml-2 elevation-12"
      hide-overlay
      fixed
      :mini-variant="mini"
      floating
      stateless
      value="true"
      permanent
      height="auto"
      touchless
      :mini-variant-width="60"
    >
      <v-list class="pa-0">
        <v-list-tile avatar @click.stop="mini = !mini">
          <v-list-tile-avatar tile>
            <img src="./assets/rox-logo.png" alt="logo rox" id="roxlogo">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>{{title}}</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon @click.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>

      <v-list>
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
        { texto: "Apartamentos", icone: "pin_drop", route: "/apartamentos" },
        { texto: "Áreas comuns", icone: "collections", route: "/areascomuns" }
      ],
      mini: true
    };
  },
  computed: {
    ...mapState(["title"])
  }
};
</script>
<style>
.v-list__tile {
  padding: 0 6px;
}
</style>
