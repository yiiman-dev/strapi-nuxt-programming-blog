<template>
<div>
  <!--hero section start-->

  <section v-if="type===1" class="banner p-0 pos-r fullscreen-banner">
    <div id="particles-js"></div>
    <div class="align-center">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-12">
            <img class="img-center wow fadeInUp" data-wow-duration="1.5s" src="/images/banner/01.png" alt="">
            <div class="img-2">
              <img class="img-center topBottom" src="/images/banner/bulb.png" alt="">
            </div>
          </div>
          <div class="col-lg-6 col-md-12 md-mt-5 wow fadeInRight" data-wow-duration="1.5s">
            <h5 class="title-theme-bg">{{ welcome }}</h5>
            <h1 class="mb-4">{{ title }} </h1>
            <p class="lead mb-4">{{ description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--hero section end-->
</div>


</template>

<script>
export default {
  name: "HeroSection",
  props:[
    "type",
    "title",
    "description",
    "welcome"
  ]
}
</script>

<style scoped>

</style>
