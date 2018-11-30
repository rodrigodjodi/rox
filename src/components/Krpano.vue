<template>
  <div class="krpano" id="viewer"></div>
</template>
<script>
import VueScript2 from "vue-script2";
export default {
  name: "Krpano",
  data() {
    return {
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
  created() {},
  mounted() {
    VueScript2.load("tour.js").then(() => {
      console.log("tour.js carregado?");
      //SE tudo deu certo tem que ter os objetos embedpano, removepano
      const { embedpano, removepano } = window;
      if (!(embedpano && removepano)) {
        this.$emit(
          "error",
          "Não foi possível carregar uma extensão requerida."
        );
        return;
      }
      this.createPano();
    });
  },
  methods: {
    createPano() {
      embedpano({
        xml: this.xml,
        target: "viewer",
        onready: this.krpanoReady,
        onerror: this.krpanoError
      });
    },
    krpanoReady(krpanoInstance) {
      console.log("in ready mesmo com o erro");
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
  }
};
</script>
<style>
.krpano {
  height: 100%;
}
</style>
