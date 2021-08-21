<template>
  <!-- Case Page -->
  <div class="mcgill-cases">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8 animate-box" data-animate-effect="fadeInLeft">
          <div class="mb-30"><img :src="getStrapiMedia(project[0].defaultPicture.url)"
                                  class="img-fluid mb-30 radius-5 elevation-6" alt="">
            <h3>{{ project[0].name }}</h3>
            <div v-html="md_render(this,project[0].description)"></div>
          </div>
          <!-- Gallery -->
          <div v-if="project[0].media.length>0" class="row mb-30">
            <div v-for="item in project[0].media" class="col-md-4 gallery-item">
              <a :href="getStrapiMedia(item.url)" class="img-zoom">
                <div class="gallery-box">
                  <div class="gallery-img"><img :src="getStrapiMedia(item.url)"
                                                class="img-fluid mx-auto d-block rounded" :alt="project.name"></div>
                  <div class="gallery-detail text-center"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <!-- Sidebar -->
        <div class="col-md-4 animate-box " data-animate-effect="fadeInLeft">
          <div class="mcgill-sidebar-part">
            <div class="mcgill-sidebar-block mcgill-sidebar-block-categories">
              <div class="row d-box">
                <div class="col-md-6 ">
                  <div class="hour-box elevation-8">
                    <h3 class="text-center">~{{ project[0].working_hours }} {{ global.hours_post_string }}</h3>
                  </div>
                </div>
                <div class="col-md-6 ">
                  <div class="hour-box elevation-8">
                    <h3 class="text-center">{{ project[0].year }}</h3>
                  </div>
                </div>
              </div>
              <div v-if="project[0].current_project_status" class="row d-box">
                <div class="col-md-12">
                  <div class="hour-box elevation-8">
                    <h3 class="text-center ">
                      {{ global.current_status_title }}:<span>{{ project[0].current_project_status.name }}</span>
                    </h3>
                    <p class="text-center">{{ project[0].current_project_status.description }}</p>
                  </div>
                </div>
              </div>
              <div v-if="project[0].project_language" class="row d-box">
                <div class="col-md-12">
                  <div class="hour-box elevation-8">
                    <h3 class="text-center ">
                      {{ global.project_language_title }}
                    </h3>
                    <p class="text-center">{{ project[0].project_language.name }}</p>
                    <p class="text-center">{{ project[0].project_language.description }}</p>
                  </div>

                </div>
              </div>
              <div v-if="project[0].technologies.length>0" class="row d-box ">
                <div class="col-md-12">

                  <div class=" hour-box elevation-8">
                    <h3 class="text-center ">
                      {{ global.technology_section_title }}
                    </h3>
                    <div class="techs">
                        <nuxt-link  v-for="tech in project[0].technologies" :to="'/technologies/'+tech.slug">
                          <img :src="getStrapiMedia(tech.logo.url)" :alt="tech.name">
                        </nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="project[0].company" class="row d-box">
                <div class="col-md-12">
                  <div class="author-company hour-box elevation-8">
                    <img class="img-circle elevation-5" :src="getStrapiMedia(project[0].company.logo.url)"
                         :alt="project[0].company.company_name">
                    <h3 class="text-center">{{global.company_author_title}}</h3>
                    <h4 class="author_name text-center">{{ project[0].company.company_name }}</h4>

                  </div>
                </div>
              </div>
              <div v-if="project[0].url" class="row d-box">
                <nuxt-link :to="project[0].url" class="button btn-success">{{ global.preview_button_title }}</nuxt-link>
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
import main from "../../assets/js/main.js"
import {md_render} from "../../helpers/functions";

export default {
  name: "ProjectSlug",
  methods: {getStrapiMedia, md_render},
  async asyncData({$strapi, params}) {

    return {
      project: await $strapi.find('projects', {slug: params.slug}),
      global: await $strapi.find('projectpage'),
      categories: await $strapi.find('project-categories'),
    }
  },
  mounted() {
    main()
  }
}
</script>

<style scoped>
.mcgill-sidebar-part {
  background: transparent;
  box-shadow: 0 25px 98px 0 rgba(0, 0, 0, .1);

}

.year-box, .hour-box {
  background: #1b1d20;
  min-height: 100px;
  margin-bottom: 30px;
  padding-top: 29px;
  width: 100%;
  padding-bottom: 29px;
  padding-left: 10px;
  padding-right: 10px;
}

.year-box {
  /*background: #2f462f;*/
}
.techs img {
  border-radius: 100%;
  width: 40px;
  float: left;
  height: 40px;
  margin-left: 10px;
}
.hour-box {
  /*background: #370303;*/
}

.row.f-box {
  margin: auto;
}
.ul1 > li a {
  font-size: 16px;
  color: #999;
  text-decoration: none;
  display: block;
  /* transition: all 0.3s ease-out; */
  /* -moz-transition: all 0.3s ease-out; */
  /* -webkit-transition: all 0.3s ease-out; */
  /* -o-transition: all 0.3s ease-out; */
  background: #0e1118;
  border-radius: 6px;
  width: auto;
  float: left;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 3px;
  text-align: center;
}
.ul1 > li {
  padding: 0;
  border-bottom: none;
  height: auto;
}
.ul1 {
  padding: 0;
  margin: 0;
  list-style: none;
  display: inline;
  width: 100%;
  min-height: 20px;
}
.d-box h3 {
  color: #8e7a0bad;
  font-weight: 900;
  text-shadow: 0px 2px 4px #070a11;
}
.author-company .img-circle {
  border-radius: 100%;
  width: 69px;
  height: 69px;
  margin-top: -65px;
}
.author-company h3{
  margin-top: -60px;
}
.mcgill-sidebar-block {
  margin-bottom: 60px;
  position: relative;
  margin-top: -31px;
}
</style>
