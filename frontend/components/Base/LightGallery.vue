<template>
  <div target="lightgallery">
    <slot/>
  </div>
</template>

<script>
import "lightgallery/scss/lightgallery.scss"
export default {
  name: "LightGallery",

}
</script>
<style lang="sass">
[target="lightgallery"]
  .item
    cursor: pointer
.lg-outer
  z-index: 1400
.lg-backdrop
  z-index: 1200
</style>
