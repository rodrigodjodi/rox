<template>
  <v-app>
    <v-toolbar app>
      <img src="rox-logo.png" alt="logo rox" id="roxlogo">
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">{{title}}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-bottom-nav :active.sync="bottomNav" :color="color" :value="true" app>
      <v-btn dark v-for="(item, index) in navitems" :key="index">
        <span>{{item.texto}}</span>
        <v-icon>{{item.icone}}</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      navitems: [
        { texto: "Maquete", icone: "360" },
        { texto: "Tour", icone: "pin_drop" },
        { texto: "Imagens", icone: "collections" }
      ],
      bottomNav: 0,
      color: "#5e354c",
      showNav: true,
      title: "MAquete Virtual"
    };
  }
};
</script>
<style>
#roxlogo {
  height: 48px;
}
</style>
