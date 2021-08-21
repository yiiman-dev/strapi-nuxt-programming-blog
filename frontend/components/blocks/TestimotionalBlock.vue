<template>
  <!-- Testiominals -->
  <div class="mcgill-testimonial testimonials bg-img bg-fixed" :data-background="getStrapiMedia(session.background?session.background.url:'')">
    <div class="container-fluid">
      <div class="row">
        <div class="section-head col-md-4">
          <h4>{{ session.title }}</h4>
          <p>{{session.content}}</p>
        </div>

          <div class="owl-carousel owl-theme col-md-8">
            <div v-for="item in session.testimotionals" class="item-box">
            <span class="quote">
              <img :src="getStrapiMedia('images/quot.png')" alt="">
            </span>
              <p>{{ item.description }}</p>
              <div class="info">
                <div class="author-img"> <img :src="item.Author?getStrapiMedia(item.Author.url):'#'" :alt="item.name"> </div>
                <div class="cont">
                  <h6>{{ item.name }}</h6> <span>{{ item.semat }}</span>
                </div>
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
  name: "TestimotionalBlock",
  props:['session'],
  methods:{getStrapiMedia}
}
</script>

<style scoped>

</style>
