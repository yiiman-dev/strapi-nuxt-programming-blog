<template>
  <nuxt-link :to="localePath(to)">
    <slot />
  </nuxt-link>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "p-link",
  props:['to'],
  computed:{
    ...mapState('auth',['local'])
  }
}
</script>

<style scoped>

</style>
