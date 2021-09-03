<template>
  <!-- Blog -->
  <div class="mcgill-blog">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 mb-40 animate-box" data-animate-effect="fadeInLeft">
          <span class="heading-meta">{{ count_text() }}</span>
          <h2 class="mcgill-heading">{{ global.page_title }}</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 animate-box" data-animate-effect="fadeInLeft">
          <ProjectCardWidget v-bind:key="index" v-for="(project,index) in projects" :project="project"/>
          <!--          Pagination -->
          <div v-if="false" class="row">
            <div class="col-md-12">
              <!-- Pagination -->
              <ul class="mcgill-pagination-wrap text-center">
                <li><a href="blog.html#"><i class="fa fa-angle-left"></i></a></li>
                <li><a href="blog.html#">1</a></li>
                <li><a href="blog.html#" class="active">2</a></li>
                <li><a href="blog.html#">3</a></li>
                <li><a href="blog.html#"><i class="fa fa-angle-right"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Sidebar -->
        <div class="col-md-4 animate-box " data-animate-effect="fadeInLeft">
          <div class="mcgill-sidebar-part elevation-3 radius-5">

            <div v-if="categories.length>0" class="mcgill-sidebar-block mcgill-sidebar-block-categories">
              <div class="mcgill-sidebar-block-title"> {{ global.sidebar_categories_title }}</div>
              <div class="mcgill-sidebar-block-content">
                <ul class="ul1">
                  <li v-for="cat in categories">
                    <a href="#">
                      <b-form-checkbox

                        v-model="selected_categories"

                        :value="cat.id"
                        unchecked-value=""

                      >
                        {{ cat.title }}
                      </b-form-checkbox>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div v-if="technologies.length>0" class="mcgill-sidebar-block mcgill-sidebar-block-tags">
              <div class="mcgill-sidebar-block-title"> {{ global.sidebar_technologies_title }}</div>
              <div class="mcgill-sidebar-block-content">
                <ul class="ul1">
                  <li v-for="tech in technologies">
                    <a href="#">
                      <b-form-checkbox

                        v-model="selected_technologies"

                        :value="tech.id"
                        unchecked-value=""

                      >
                        {{ tech.name }}
                      </b-form-checkbox>
                    </a>

                  </li>
                </ul>
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
import ProjectCardWidget from "../../components/widgets/ProjectCardWidget";
import main from "/assets/global/js/runTheme"

export default {
  name: "ProjectIndex",
  components: {ProjectCardWidget},
  data() {
    return {
      selected_technologies: [],
      selected_categories: [],
    }
  },
  watch: {
    selected_technologies(old, n) {
      this.serve();
    },
    selected_categories(old, n) {
      this.serve();
    }

  },
  methods: {
    getStrapiMedia,
    async serve() {
      let data = '';
      if (this.selected_technologies.length > 0 | this.selected_categories.length > 0) {
        data += '?'
      }

      if (this.selected_technologies.length > 0) {
        for (let b = 0; b < this.selected_technologies.length; b++) {
          data += "technologies.id_in=" + this.selected_technologies[b] + '&'
        }
      }
      if (this.selected_categories.length > 0) {
        for (let i = 0; i < this.selected_categories.length; i++) {
          data += "project_categories.id_in=" + this.selected_categories[i] + '&';
        }

      }
      this.projects = await this.$strapi.find('projects' + data);
    },
    count_text() {
      return String(this.global.projects_count_title).replace('{count}', this.project_count)
    }
  },
  async asyncData({$strapi, params, i18n}) {
    return {
      projects: await $strapi.find('projects', {_locale: i18n.locale}),
      project_count: await $strapi.count('projects', {_locale: i18n.locale}),
      categories: await $strapi.find('project-categories', {_locale: i18n.locale}),
      global: await $strapi.find('project-categories-page', {_locale: i18n.locale}),
      technologies: await $strapi.find('technologies', {_locale: i18n.locale})
    }
  },
  mounted() {
    main(this)
  }
}
</script>

<style scoped>

</style>
