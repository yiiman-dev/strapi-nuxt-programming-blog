<template>
  <p-link class="navbar-brand logo" to="/">
    <img class="img-center" :src="logo" :alt="title">
  </p-link>
</template>
<script>
import {getStrapiMedia} from "../utils/medias";
import PLink from "./Base/p-link";

export default {
  name: "Logo",
  components: {PLink},
  props: ['global'],
  computed: {
    getStrapiMedia,
    logo() {
      try {
        if (this.global && this.global.logo) {
          return getStrapiMedia(this.global.logo.url);
        } else {
          return '';
        }
      } catch (e) {
        return '';
      }

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
}
</script>
<style>

</style>
