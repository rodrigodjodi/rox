<template>
  <v-container fluid grid-list-md>
    <v-data-iterator
      :items="apartamentos"
      content-tag="v-layout"
      row
      wrap
      :pagination="{rowsPerPage: -1}"
      hide-actions
    >
      <v-flex slot="item" slot-scope="props" xs12 sm6 md4 lg3>
        <v-card>
          <v-img :aspect-ratio="16/9" :src="`../tours/apartamentos/chave-${props.item.id}.png`">
            <div class="fill-height plantas-inset"></div>
          </v-img>

          <v-card-title class="plantas-title py-2">
            <h4>{{ props.item.text }}</h4>
            <v-spacer/>
            <v-btn
              color="white"
              flat
              outline
              right
              small
              class="ma-0"
              :to="props.item.route"
            >detalhes</v-btn>
          </v-card-title>
          <v-divider></v-divider>
          <v-list dense>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="#5e354c">hotel</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>{{ props.item.tipologia }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="#5e354c">straighten</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>{{ props.item.area }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="#5e354c">directions_car</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>{{ props.item.vagas }}</v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-data-iterator>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ApartamentosView",
  computed: {
    ...mapState(["apartamentos"])
  },
  created() {
    this.$store.commit("SET_TITLE", "apartamentos");
  }
};
</script>

<style>
.plantas-inset {
  box-shadow: inset 0px 0px 60px 15px rgba(194, 194, 194, 0.5);
}
.plantas-title {
  background: #5e354c;
  color: white;
}
</style>

