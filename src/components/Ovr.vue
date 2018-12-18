<template>
  <v-responsive :aspect-ratio="16/9" :max-height="innerHeight">
    <div id="container"></div>
  </v-responsive>
</template>
<script>
import VueScript2 from "vue-script2";
var obj;
export default {
  name: "Ovr",
  data() {
    return {
      innerHeight: window.innerHeight
    };
  },
  props: {
    xml: {
      type: String,
      default: null
    }
  },
  created() {},
  created() {
    VueScript2.load("../object2vr_player.js")
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
      obj.readConfigUrl(this.xml);
      obj.setCenter(0.5, 1);
      window.obj = obj;
      //this.enforceRatio();
    },
    enforceRatio() {
      this.innerHeight = window.innerHeight;
      obj.setCenter(0.5, 1);
    }
  },
  watch: {},
  beforeDestroy: function() {
    window.removeEventListener("resize", this.enforceRatio);
  },
  mounted() {
    window.addEventListener("resize", this.enforceRatio);
  }
};
</script>
<style>
#container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: silver; /* show me! */
}
</style>
