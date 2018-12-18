<template>
  <ovr xml="../ovr/ROX_OVR_00_out.xml"></ovr>
</template>

<script>
import ovr from "../components/Ovr";
export default {
  components: { ovr },
  created() {
    this.$store.commit("SET_TITLE", "Maquete virtual");
  }
};
</script>
