<template>
  <p-link class="navbar-brand logo" to="/">
    <img v-if="this.global && this.global.logo" class="img-center" :src="getStrapiMedia(this.global.logo.url,$config)">
  </p-link>
</template>
<script>
import {getStrapiMedia} from "../utils/medias";
import PLink from "./Base/p-link";

export default {
  name: "Logo",
  components: {PLink},
  props: ['global'],
  methods: {
    getStrapiMedia
  },
  title() {
    try {
      if (this.global && this.global.siteName) {
        return this.global.siteName;
      } else {
        return '';
      }
    } catch (e) {
      return '';
    }
  }

}
</script>
<style>

</style>
