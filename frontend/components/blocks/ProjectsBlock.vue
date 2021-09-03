<template>
  <section>
    <div class="container text-center">
      <div class="row">
        <div class="col-lg-8 col-md-12 ml-auto mr-auto">
          <div class="section-title">
            <h2 class="title">{{ session.title }}</h2>
            <div class="title-bdr">
              <div class="left-bdr"></div>
              <div class="right-bdr"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 col-md-12">
          <div class="portfolio-filter">
            <button data-filter="" class="is-checked">All</button>
            <button v-for="(cat,index) in categories" :data-filter="'cat'+cat.id">{{ cat.title }}</button>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12">
          <div class="grid columns-3 row popup-gallery">
            <div class="grid-sizer"></div>
            <div v-for="(project,index) in session.projects" :class="calculateClass(project)">
              <div class="portfolio-item">
                <img class="img-center w-100" :src="getStrapiMedia(project.defaultPicture.url)" :alt="project.name">
                <p-link class="popup-img" :to="'/projects/'+project.slug"> <i class="la la-plus"></i></p-link>
                <div class="portfolio-title">
                  <h4><p-link :to="'/projects/'+project.slug">{{ project.name }}</p-link></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Case Studies -->

</template>

<script>
import {getStrapiMedia} from "../../utils/medias";
import PLink from "../Base/p-link";


export default {
  name: "ProjectsBlock",
  components: {PLink},
  props: ['session'],
  methods: {
    getStrapiMedia,
    calculateClass(project) {
      let cls = 'grid-item ';
      if (project.project_categories){
        for (let projectKey in project.project_categories) {
          cls=cls+' cat'+project.project_categories[projectKey].id;
        }
      }
      return cls;
    }
  },
  data() {
    return {
      categories: []
    }
  },
  async fetch() {
    this.categories = this.$strapi.find("project-categories",{_locale:this.$i18n.locale});
  }
}
</script>

<style scoped>

</style>
