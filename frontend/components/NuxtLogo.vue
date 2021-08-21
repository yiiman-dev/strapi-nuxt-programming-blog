<template>
  <NuxtLink to="/">
    <img :src="getStrapiMedia(global.logo.url)" :alt="global.siteName">
  </NuxtLink>
</template>
<script>
import {getStrapiMedia} from "../utils/medias";

export default {
  name:"Logo",
  props:['global'],
  methods:{
    getStrapiMedia
  }
}
</script>
<style>

</style>
