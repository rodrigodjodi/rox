<template>
  <v-responsive
    id="container"
    :height="fillheight ? panoheight : undefined"
    :max-height="panoheight"
    width="100%"
  ></v-responsive>
</template>
<script>
import VueScript2 from "vue-script2";
import { mapState } from "vuex";
var obj;
var skin;
export default {
  name: "Ovr",
  data() {
    return {
      imagescale: 2 // não usado no código atual
    };
  },
  computed: {
    ...mapState(["innerHeight"]),
    panoheight() {
      return this.innerHeight < 480 ? this.innerHeight : this.innerHeight - 48;
    }
  },
  props: {
    xml: {
      type: String,
      default: null
    },
    fillheight: {
      type: Boolean,
      default: false
    }
  },
  created() {
    VueScript2.load("object2vr_player.1.js")
      .then(function() {
        return VueScript2.load("skin.js").then(() => {
          console.log("skin carregada");
        });
      })
      .then(() => {
        console.log("object2VR carregado");

        //SE tudo deu certo tem que ter os objetos embedpano, removepano
        const { object2vrPlayer } = window;
        if (!object2vrPlayer) {
          this.$emit(
            "error",
            "Erro: A inicialização do object2vrPlayer não foi bem sucedida."
          );
          return;
        }
        this.createOvr();
      })
      .catch(err => {
        console.error(err);
      });
  },
  methods: {
    createOvr() {
      obj = new object2vrPlayer("container");
      skin = new object2vrSkin(obj, "ovr/");
      obj.readConfigUrl(this.xml);
      obj.setCenter(0.46, 1);
      window.obj = obj;
      window.vm = this;
    },
    enforceRatio() {
      obj.setCenter(0.46, 1);
    }
  },
  beforeDestroy: function() {
    window.removeEventListener("resize", this.enforceRatio);
  },
  mounted() {
    window.addEventListener("resize", this.enforceRatio);
  }
};
</script>
<style>
</style>
