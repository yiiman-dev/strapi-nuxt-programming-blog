<template>
  <!-- Case Studies -->
  <div class="mcgill-cases">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 mb-40 animate-box" data-animate-effect="fadeInLeft"> <span class="heading-meta">{{ session.title }}</span>
          <h2 class="mcgill-heading">{{ session.subtitle }}</h2>
        </div>
      </div>
      <div class="row">
        <div v-for="item in session.projects" class="col-md-4">
          <div class="item elevation-4 radius-5">
            <div class="position-re o-hidden"> <img class="radius-5 elevation-6" :src="item.defaultPicture?getStrapiMedia(item.defaultPicture.url):''" :alt="item.name"> </div>
            <div class="con elevation-6 radius-5">
              <nuxt-link :to="'/project/'+item.slug">
                <h5>{{ item.name }}</h5>
              </nuxt-link>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {getStrapiMedia} from "../../utils/medias";


export default {
  name: "ProjectsBlock",
  props:['session'],
  methods:{getStrapiMedia}
}
</script>

<style scoped>

</style>
