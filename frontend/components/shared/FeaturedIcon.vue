<template>
  <div>
    <div class="featured-icon" v-if="icon.startsWith('fa:')">
      <i :class="replaceAt(icon,'fa:','')"></i>
    </div>
    <div class="featured-icon" v-if="icon.startsWith('svg:')">
      {{replaceAt(icon,'svg:','')}}
    </div>
  </div>
</template>

<script>
import {replaceAt} from "/helpers/functions.js";


export default {
  name: "FeaturedIcon",
  props:[
    'icon'
  ],
  methods: {
      replaceAt
  }
}
</script>

<style scoped>

</style>
