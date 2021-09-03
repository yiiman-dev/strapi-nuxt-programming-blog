<template>


  <!--feature start-->
  <div>

    <section class="text-center" v-if="session.boxType==='Type1'">
      <div class="container">
        <h2 class="text-center" v-if="session.title.length>0">{{ session.title }}</h2>
          <div class="row">
            <div class="col-lg-4 col-md-6" v-for="ser in session.services">
              <div class="featured-item">
                <FeaturedIcon :icon="ser.icon"/>

                <div class="featured-title">
                  <h5>{{ ser.title }}</h5>
                </div>
                <div class="featured-desc">
                  <p>{{ ser.subtitle }}</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>


    <section v-if="session.boxType==='Type2'">
      <div class="container">
        <h2 class="text-center" v-if="session.title.length>0">{{ session.title }}</h2>
        <div class="row align-items-center">
          <div class="col-lg-4 col-md-12" v-for="ser in session.services">
            <div class="featured-item style-2">
              <FeaturedIcon :icon="ser.icon"/>

              <div class="featured-title">
                <h5>{{ ser.title }}</h5>
              </div>
              <div class="featured-desc">
                <p>{{ ser.subtitle }}</p>
                <a class="btn-iconic mt-4" v-if="ser.url.length>0" :href="ser.url">
                  <i class="la la-long-arrow-left"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="o-hidden" v-if="session.boxType==='Type3'">
      <div class="container">
        <h2 class="text-center" v-if="session.title.length>0">{{ session.title }}</h2>
        <div class="row">
          <div class="col-lg-6 col-md-6 ml-auto mr-auto mt-5" v-for="ser in session.services">
            <div class="featured-item style-3">
              <FeaturedIcon :icon="ser.icon"/>

              <div class="featured-title">
                <h5>{{ ser.title }}</h5>
              </div>
              <div class="featured-desc">
                <p>{{ser.subtitle}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="dark-bg" v-if="session.boxType==='Type4'">
      <div class="container">
        <h2 class="text-center" v-if="session.title.length>0">{{ session.title }}</h2>
        <div class="row">
          <div class="col-lg-4 col-md-6 sm-mt-5 md-mt-5" v-for="ser in session.services">
            <div class="featured-item style-3">
              <FeaturedIcon :icon="ser.icon" />
              <div class="featured-title">
                <h5>{{ ser.title }}</h5>
              </div>
              <div class="featured-desc">
                <p>{{ ser.subtitle }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="session.boxType==='Type5'">
      <div class="container">
        <h2 class="text-center" v-if="session.title.length>0">{{ session.title }}</h2>
        <div class="row">
          <div class="col-lg-4 col-md-6  mt-5  sm-mt-5  md-mt-5"  v-for="ser in session.services">
            <div class="featured-item style-4">
              <FeaturedIcon :icon="ser.icon"/>
              <div class="featured-title">
                <h5>{{ ser.title }}</h5>
              </div>
              <div class="featured-desc">
                <p>{{ ser.subtitle }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="session.boxType==='Type6'">
      <div class="container">
        <h2 class="text-center" v-if="session.title.length>0">{{ session.title }}</h2>
        <div class="row">
          <div class="col-md-12">
            <div class="box-shadow px-5 py-5 radius-lb radius-rt">
              <div class="row text-center">
                <div class="col-lg-4 col-md-12  md-mt-5"   v-for="ser in session.services">
                  <div class="featured-item">
                    <FeaturedIcon :icon="ser.icon"/>
                    <div class="featured-title">
                      <h5>{{ser.title}}</h5>
                    </div>
                    <div class="featured-desc">
                      <p>{{ser.subtitle}}</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section v-if="session.boxType==='Type7'">
      <div class="container">
        <h2 class="text-center" v-if="session.title.length>0">{{ session.title }}</h2>
        <div class="row">
          <div class="col-lg-4 col-md-6 md-mt-5 sm-mt-5 mt-5" v-for="ser in session.services">
            <div class="featured-item style-5">
              <FeaturedIcon :icon="ser.icon"/>
              <div class="featured-title">
                <h5>{{ ser.title }}</h5>
              </div>
              <div class="featured-desc">
                <p>{{ser.subtitle}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <!--feature end-->

</template>

<script>
import FeaturedIcon from "../shared/FeaturedIcon";
export default {
  name: "ServicesBox",
  components: {FeaturedIcon},
  props: [
    'session',
  ],

}
</script>

<style>

</style>
