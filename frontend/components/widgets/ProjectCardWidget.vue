<template>
  <div class="blog-entry shadow-dark-5">
    <nuxt-link :to="'projects/'+project.slug" class="blog-img">
      <img :src="getStrapiMedia(project.defaultPicture.url)" class="img-fluid" :alt="project.name">
    </nuxt-link>
    <div class="desc">
              <span v-if="project.project_categories.length>0">
                <nuxt-link v-for="cat in project.project_categories" :to="'/projects/categories/'+cat.slug">
                  {{ cat.title }} -
                </nuxt-link>
                {{ project.published_at }}
              </span>
      <h3>
        <nuxt-link :to="'projects/'+project.slug">
          {{ project.name }}
        </nuxt-link>
      </h3>
      {{ project.short_description }}
    </div>
  </div>
</template>

<script>
import {getStrapiMedia} from "../../utils/medias";


export default {
  name: "ProjectCardWidget",
  props: ['project'],
  methods: {getStrapiMedia}
}
</script>

<style scoped>

</style>
