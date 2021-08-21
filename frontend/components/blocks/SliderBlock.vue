<template>
  <aside  id="mcgill-hero" class="js-fullheight">
    <div class="flexslider js-fullheight">
      <ul class="slides">
        <li v-for="slide in sliders" :style="'background-image: url('+getStrapiMedia(slide.Image.url)+');'">
          <div class="overlay"></div>
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12 js-fullheight slider-text">
                <div class="slider-text-inner">
                  <div class="desc">
                    <h1 v-if="slide.Title.length>0">{{slide.Title}}</h1>
                    <p v-if="slide.Subtitle.length>0">{{ slide.Subtitle }}</p>
                    <div v-if="slide.Url.length>0" class="btn btn-contact"><a :href="slide.Url">{{ slide.UrlTitle }}</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import {getStrapiMedia} from "../../utils/medias";


export default {
  name: "SliderBlock",
  props:['sliders'],
  methods:{
    getStrapiMedia
  }
}
</script>

<style scoped>

</style>
