<template>

  <!-- preloader start -->

  <div v-if="loading" id="ht-preloader">
    <div class="clear-loader">
      <div class="loader">
        <div class="loader-div"><span></span>
        </div>
      </div>
    </div>
  </div>

  <!-- preloader end -->
</template>

<script>
export default {
  name: "Loading",
  data() {
    return {
      loading: false
    }
  },
  methods: {
    start() {
      this.loading = true
    },
    stop() {
      this.loading = false
    }
  }
}
</script>

<style scoped>

</style>
