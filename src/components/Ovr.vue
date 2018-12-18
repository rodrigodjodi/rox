<template>
  <v-responsive :aspect-ratio="16/9" max-height="800">
    <div id="container"></div>
  </v-responsive>
</template>
<script>
import VueScript2 from "vue-script2";
export default {
  name: "Ovr",
  data() {
    return {};
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
      var obj = new object2vrPlayer("container");
      obj.readConfigUrl(this.xml);
      //this.enforceRatio();
    },
    enforceRatio() {
      var a = document.getElementById("proportional");
      if (window.innerHeight < a.clientHeight) {
        a.style.width = window.innerHeight / 0.5630208333333333 + "px";
      } else {
        a.style.width = "100%";
      }
    }
  },
  watch: {},
  beforeDestroy: function() {
    //window.removeEventListener("resize", this.enforceRatio);
  },
  mounted() {
    //window.addEventListener("resize", this.enforceRatio);
  }
};
</script>
<style>
#proportional {
  display: block;
  position: relative;
  width: 100%;
  margin: 0 auto;
  max-width: 1920px;
}
#dummy {
  /* ratios is defined by height / width */
  padding-top: 56.30208333333333%;
}
#container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: silver; /* show me! */
}
</style>
