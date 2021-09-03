<template>


  <!--body content start-->

  <div class="page-content">

    <!--error start-->

    <section class="fullscreen-banner error-page-2 text-center o-hidden p-0 pos-r grediant-bg">
      <div id="particles-js" data-particles-type="hexagons" data-particles-number="30"
           data-particles-color="#ff7e00,#3224e9,#69e9f2" data-particles-line="false" data-particles-size="10"
           data-particles-speed="1" data-particles-hover="true" data-particles-hover-mode="grab"
           data-particles-colors-type="random_colors"></div>
      <div class="align-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-12 ml-auto mr-auto">
              <h1 v-if="error.statusCode === 404"><span class="blinkblink">4</span> <span class="rotateme">0</span>
                <span class="zoom-fade">4</span></h1>
              <h1 v-else><span class="blinkblink">5</span> <span class="rotateme">0</span> <span
                class="zoom-fade">5</span></h1>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-md-10 ml-auto mr-auto">
              <h5 class="line-h-5 text-white" v-if="error.statusCode === 404">
                {{ $t('The page you are looking for has either been deleted or moved') }} </h5>
              <h5 class="line-h-5 text-white" v-else>{{ $t('Sorry, an internal server error has occurred.') }} </h5>
              <p-link class="btn btn-white" :to="'/'"><span>{{ $t('Return back to home page') }} </span></p-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--error end-->

  </div>

  <!--body content end-->
</template>

<script>
import PLink from "../components/Base/p-link";
import Layout from "../components/Base/Layout";

export default {
  components: {Layout, PLink},
  props: ['error'],
  layout: 'error', // you can set a custom layout for the error page,
  created() {
    console.log(this.error);
  }
}
</script>

