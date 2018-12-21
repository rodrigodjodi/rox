<template>
  <v-responsive :max-height="innerHeight" width="100%" height="100%">
    <div class="krpano" id="viewer"></div>
  </v-responsive>
</template>
<script>
import VueScript2 from "vue-script2";
export default {
  name: "Krpano",
  data() {
    return {
      innerHeight: window.innerHeight,
      flags: "MERGE",
      krpanoInstance: null
    };
  },
  props: {
    xml: {
      type: String,
      default: null
    },
    scene: {
      type: String,
      required: false
    }
  },
  methods: {
    createPano() {
      embedpano({
        xml: this.xml,
        target: "viewer",
        onready: this.krpanoReady,
        onerror: this.krpanoError,
        wmode: "transparent",
        initvars: this.initvars
      });
    },
    krpanoReady(krpanoInstance) {
      this.krpanoInstance = krpanoInstance;
      //this.loadScene();
    },
    krpanoError(error) {
      console.log(error);
      throw new Error("Error on embedpano:" + error);
    },
    removePano() {
      const { removepano } = window;

      if (this.krpanoInstance) {
        removepano(this.krpanoInstance);
        delete this.krpanoInstance;
      }
    },
    loadScene() {
      let scene = this.scene;
      if (!this.krpanoInstance) return;
      if (scene) {
        let str = `trace(${scene});
                if(scene[${scene}]===null,
                loadscene(get(scene[0].name),null,${this.flags},BLEND(0.5)),
                loadscene(${scene},null,${this.flags},BLEND(0.5)))`;
        this.krpanoInstance.call(str);
        this.$emit("sceneChanged", scene);
      } else {
        this.krpanoInstance.call(
          `loadscene(get(scene[0].name),null,${this.flags},BLEND(0.5))`
        );
      }
    },
    enforceRatio() {
      this.innerHeight = window.innerHeight;
    }
  },
  watch: {
    scene: function(newScene, oldScene) {
      if (oldScene.split("-")[0] === newScene.split("-")[0]) {
        this.flags = "MERGE|KEEPVIEW";
      } else {
        this.flags = "MERGE";
      }
      this.loadScene();
    },
    xml: function(xml) {
      if (this.krpanoInstance && xml) {
        if (xml === "tour.xml") {
          this.krpanoInstance.call(
            `loadpanoscene(${xml},${this.scene},null,IGNOREKEEP)`
          );
        } else {
          this.krpanoInstance.call(`loadpano(${xml},null,IGNOREKEEP)`);
        }
        this.$emit("xmlChanged", xml);
      }
    }
  },
  created() {
    VueScript2.load("../krpano.js")
      .then(() => {
        console.log("krpano carregado");
        //SE tudo deu certo tem que ter os objetos embedpano, removepano
        const { embedpano, removepano } = window;
        if (!(embedpano && removepano)) {
          this.$emit(
            "error",
            "Erro: A inicialização do krpano não foi bem sucedida."
          );
          return;
        }
        this.createPano();
      })
      .catch(err => {
        console.error(err);
      });
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
.krpano {
  height: 100%;
  min-height: 320px;
}
</style>
