<template>
  <!-- Blog -->
  <div class="mcgill-blog">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 mb-40 animate-box" data-animate-effect="fadeInLeft"><span
          class="heading-meta">{{ session.title }}</span>
          <h2 class="mcgill-heading">{{ session.subtitle }}</h2>
        </div>
      </div>
      <div v-if="articles" class="row">
        <div  v-for="item in articles" class="col-md-4">
          <div class="blog-entry elevation-5 radius-5">
            <nuxt-link :to="'/blog/'+item.slug" class="blog-img">
              <img :src="getStrapiMedia(item.image.url)" class="img-fluid" :alt="item.title">
            </nuxt-link>

            <div class="desc">
              <span>
                <nuxt-link :to="'/blog/'+item.slug">
                  {{ item.title }}
                </nuxt-link>
              </span>
              <h4>
                <nuxt-link :to="'/blog/'+item.slug">
                  {{ item.description }}
                </nuxt-link>
              </h4> <span
              class="text-right">{{ item.published_at }}</span>
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
  name: "BlogBlock",
  props: ['session','articles'],
  methods: {getStrapiMedia},


}
</script>

<style scoped>

</style>
