<template>
  <v-responsive
    :aspect-ratio="7/4"
    width="100%"
    :height="fillheight ? innerHeight: undefined"
    :max-height="innerHeight"
    style="background:white;"
  >
    <div class="krpano" id="viewer"></div>
  </v-responsive>
</template>
<script>
import { mapState } from "vuex";
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
    },
    initvars: {
      type: Object,
      default() {
        return {};
      }
    },
    vars: {
      type: Object,
      default() {
        return {
          path: "mypath"
        };
      }
    },
    fillheight: {
      type: Boolean,
      default: false
    }
  },
  computed: { ...mapState(["innerHeight"]) },
  methods: {
    createPano() {
      embedpano({
        xml: this.xml,
        target: "viewer",
        onready: this.krpanoReady,
        onerror: this.krpanoError,
        wmode: "transparent",
        vars: this.vars,
        initvars: this.initvars,
        mobilescale: 0.5
      });
    },
    krpanoReady(krpanoInstance) {
      this.krpanoInstance = krpanoInstance;
      if (this.scene) this.loadScene();
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
        let str = `
                if( scene[${scene}] !== null,
                  
                  loadscene(${scene},null,${this.flags},BLEND(0.5)),

                  error("Cena ${scene} não encontrada")
                
                )`;
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
        this.krpanoInstance.call(
          `loadpano(${xml},null,IGNOREKEEP, BLEND(0.5))`
        );
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
  min-height: 240px;
}
</style>
