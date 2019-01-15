<template>
  <v-container fluid class="pa-0">
    <v-layout row wrap>
      <v-flex xs12 sm7 md9 lg10>
        <Krpano :xml="xml" :scene="scene" @error="krpanoerror"/>
      </v-flex>
      <v-flex xs12 sm5 md3 lg2 class="apInfo pa-2">
        <v-select
          dark
          class="apSelect"
          :items="apartamentos"
          v-model="apRoute"
          single-line
          item-value="route"
          @change="changeSelect"
          prepend-icon="chevron_left"
          append-outer-icon="chevron_right"
          @click:prepend=" changeAp('prev')"
          @click:append-outer=" changeAp('next')"
        ></v-select>
        <v-list style="background: #5e354c;">
          <v-list-tile color="white">
            <v-list-tile-action>
              <v-icon color="white">hotel</v-icon>
            </v-list-tile-action>
            <v-list-tile-content color="white">{{ ap.tipologia }}</v-list-tile-content>
          </v-list-tile>
          <v-list-tile color="white">
            <v-list-tile-action>
              <v-icon color="white">straighten</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>{{ap.area }}</v-list-tile-content>
          </v-list-tile>
          <v-list-tile color="white">
            <v-list-tile-action>
              <v-icon color="white">directions_car</v-icon>
            </v-list-tile-action>
            <v-list-tile-content color="white">{{ ap.vagas }}</v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-img :aspect-ratio="16/9" :src="`../tours/apartamentos/chave-${ap.id}.png`"></v-img>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import Krpano from "../components/Krpano";
export default {
  name: "ApView",
  components: {
    Krpano
  },
  data() {
    return {
      ap: null,
      apRoute: null,
      xml: "../tours/apartamentos/apartamentos.xml"
    };
  },
  computed: {
    ...mapState(["apartamentos"]),
    scene() {
      return this.ap.id;
    }
  },
  methods: {
    changeAp(direction) {
      let currentIndex = this.apartamentos.indexOf(this.ap);
      let newIndex = direction === "prev" ? currentIndex - 1 : currentIndex + 1;
      let length = this.apartamentos.length;
      if (newIndex === length) {
        newIndex = 0;
      } else if (newIndex < 0) {
        newIndex = length - 1;
      }
      this.$router.push(this.apartamentos[newIndex].route);
    },
    changeSelect(ev) {
      this.$router.push(ev);
    },
    updatePage(id) {
      let ap = this.apartamentos.find((el, index) => {
        if (el.id === id) {
          this.$store.commit("SET_TITLE", this.apartamentos[index].txt);
          return el;
        }
      });
      if (ap) {
        this.ap = ap;
        this.apRoute = ap.route;
      }
    },
    krpanoerror(err) {
      console.error(err);
    }
  },
  created() {
    this.updatePage(this.$route.params.ap);
  },
  beforeRouteUpdate(to, from, next) {
    this.updatePage(to.params.ap);
    next();
  },
  mounted() {},
  destroyed() {
    console.log("destroyed");
  }
};
</script>

<style>
.apInfo {
  background: #5e354c;
  color: white;
}
.apSelect {
}
</style>

