<template>
  <!-- Services -->
  <div class="mcgill-cases back-gray">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 mb-40 animate-box" data-animate-effect="fadeInLeft">
          <span class="heading-meta">{{ session.title }}</span>
          <h2 class="mcgill-heading">{{ session.subtitle }}</h2>
        </div>
      </div>
      <div class="row">
        <div v-for="service in session.services" class="col-md-4 animate-box" data-animate-effect="fadeInLeft">
          <div class="mcgill-services-container elevation-2 radius-5">
            <div class="mcgill-services-img-area"><span :class="'fi fi '+service.icon"></span></div>
            <div class="mcgill-services-text-area">
              <h4 class="mcgill-services-heading">{{  service.title }}</h4>
              <p>{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesBlock",
  props:[
    'session',

  ]
}
</script>

<style >

</style>
