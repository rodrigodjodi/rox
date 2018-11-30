<template>
  <div>
    <gallery :images="plantas" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in plantas"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
    ></div>
  </div>
</template>
<script>
import VueGallery from "vue-gallery";
export default {
  name: "ImagensView",
  components: {
    gallery: VueGallery
  },
  data() {
    return {
      plantas: [
        "galeria/plantas/rox_AP1_large.png",
        "galeria/plantas/rox_AP2_large.png",
        "galeria/plantas/rox_AP3_large.png"
      ],
      index: null
    };
  }
};
</script>
