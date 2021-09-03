<template>
  <!-- Case Page -->
  <div>


    <!--page title start-->

    <section v-if="project.length>0" class="page-title o-hidden pos-r md-text-center" data-bg-color="#d2f9fe">
      <div class="page-title-pattern topBottom" data-bg-img="/images/bg/01.png"></div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7 col-md-12">
            <h1 class="title">{{ project[0].name }}</h1>
            <p>{{ project[0].project_categories[0].name }}</p>
          </div>
          <div class="col-lg-5 col-md-12 text-lg-right md-mt-3">
            <nav aria-label="breadcrumb" class="page-breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <p-link to="/">{{ $t('home') }}</p-link>
                </li>
                <li class="breadcrumb-item">
                  <p-link to="/projects">{{ $t('Projects') }}</p-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">{{ project[0].title }}</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>

    <!--page title end-->


    <!--body content start-->

    <div v-if="project.length>0" class="page-content">

      <!--service details start-->

      <section>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-7 col-md-12">
              <img class="img-fluid radius w-100" :src="getStrapiMedia(project[0].defaultPicture.url)"
                   :alt="project[0].title">
            </div>
            <div class="col-lg-5 col-md-12 md-mt-5">
              <ul class="portfolio-meta list-unstyled">
                <li class="mb-5"><i class="la la-user"></i> <span> {{ $t('Customer') }} </span>
                  {{ project[0].company.company_name }}
                </li>
                <li class="mb-5"><i class="la la-pencil-square"></i> <span> {{ $t('Year') }} </span> {{
                    project[0].year
                  }}
                </li>
                <li class="mb-5"><i class="la la-calendar-check-o"></i> <span> {{ $t('Languages') }} </span>
                  <div class="badge badge-success" v-for="lang in project[0].project_languages">{{ lang.name }}</div>
                </li>
                <li><i class="la la-map"></i> <span> {{ $t('Current status') }} </span>
                  {{ project[0].current_project_status.name }}
                </li>
              </ul>
            </div>
          </div>
          <div class="logo-tech-row row align-items-center">
            <div class="col-md-12">
              <ul>
                <li v-for="tech in project[0].technologies">
                  <img :src="getStrapiMedia(tech.logo.url)"
                       class="img-fluid logo-tech box-shadow rounded-circle mb-3" :alt="tech.name">
                  <div class="flip-back">{{ tech.name }}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      <section class="grey-bg project-details">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12">
              <div class="section-title">
                <h2 class="title" v-html="$t('Project Descriptions')"/>
                <div class="title-bdr">
                  <div class="left-bdr"></div>
                  <div class="right-bdr"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-7 col-md-12">
              <Markdown2Html :content="project[0].description"/>
            </div>
            <div v-if="true" class="col-lg-5 col-md-12">

              <LightGallery>
                <div class="row">
                  <div class="col-md-4" v-for="p in project[0].media">
                    <div class="item" :data-src="getStrapiMedia(p.url)">
                      <img class="project-media" :src="getStrapiMedia(p.url)" :alt="project[0].name">
                    </div>
                  </div>
                </div>
              </LightGallery>
            </div>
          </div>
        </div>
      </section>

      <!--service details end-->


      <!--portfolio slider start-->

      <section v-if="false">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="section-title">
                <h2 class="title">پروژه های <span>مربوط </span></h2>
                <div class="title-bdr">
                  <div class="left-bdr"></div>
                  <div class="right-bdr"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="owl-carousel popup-gallery" data-items="2" data-md-items="2" data-sm-items="1"
                   data-margin="15" data-autoplay="true">
                <div class="item">
                  <div class="portfolio-item">
                    <img class="img-center w-100" src="images/portfolio/01.jpg" alt="">
                    <a class="popup-img" href="images/portfolio/large/01.jpg"> <i
                      class="la la-plus"></i>
                    </a>
                    <div class="portfolio-title"><span>برند ها</span>
                      <h4><a href="portfolio-single.html">توسعه وب</a></h4>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="portfolio-item">
                    <img class="img-center w-100" src="images/portfolio/02.jpg" alt="">
                    <a class="popup-img" href="images/portfolio/large/02.jpg"> <i
                      class="la la-plus"></i>
                    </a>
                    <div class="portfolio-title"><span>برند ها</span>
                      <h4><a href="portfolio-single.html">توسعه وب</a></h4>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="portfolio-item">
                    <img class="img-center w-100" src="images/portfolio/03.jpg" alt="">
                    <a class="popup-img" href="images/portfolio/large/03.jpg"> <i
                      class="la la-plus"></i>
                    </a>
                    <div class="portfolio-title"><span>برند ها</span>
                      <h4><a href="portfolio-single.html">توسعه وب</a></h4>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="portfolio-item">
                    <img class="img-center w-100" src="images/portfolio/04.jpg" alt="">
                    <a class="popup-img" href="images/portfolio/large/04.jpg"> <i
                      class="la la-plus"></i>
                    </a>
                    <div class="portfolio-title"><span>برند ها</span>
                      <h4><a href="portfolio-single.html">توسعه وب</a></h4>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="portfolio-item">
                    <img class="img-center w-100" src="images/portfolio/05.jpg" alt="">
                    <a class="popup-img" href="images/portfolio/large/05.jpg"> <i
                      class="la la-plus"></i>
                    </a>
                    <div class="portfolio-title"><span>برند ها</span>
                      <h4><a href="portfolio-single.html">توسعه وب</a></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!--portfolio slider end-->

    </div>

    <!--body content end-->


  </div>
</template>

<script>
import {getStrapiMedia} from "../../utils/medias";
import main from "/assets/global/js/runTheme"
import {md_render} from "../../helpers/functions";
import Layout from "../../components/Base/Layout";
import PLink from "../../components/Base/p-link";
import Markdown2Html from "../../components/Base/Markdown2Html";
import LightGallery from "../../components/Base/LightGallery";

export default {
  name: "ProjectSlug",
  components: {LightGallery, Markdown2Html, PLink, Layout},
  methods: {getStrapiMedia, md_render},
  serverPrefetch() {
    if (this.project.length === 0) {
      this.$nuxt.layout = 'error';
    }
  },

  computed: {

    pageTitle() {
      if (this.project.length > 0) {
        return this.project[0].name
      }
    },
    images() {
      var ar = [];
      for (let projectKey in this.project[0].media) {
        ar.push(getStrapiMedia(this.project[0].media[projectKey].url));
      }
      return ar;
    }
  },
  head() {
    return {
      title: this.pageTitle
    }
  },
  async asyncData({$strapi, params, i18n}) {
    return {
      project: await $strapi.find('projects', {slug: params.slug, _locale: i18n.locale}),
      global: await $strapi.find('projectpage'),
      categories: await $strapi.find('project-categories'),
    }
  },
  mounted() {
    main(this)
  }
}
</script>

<style lang="sass" scoped>
.rtl
  .logo-tech-row ul
    float: right

.ltr
  .logo-tech-row ul
    float: left

.logo-tech
  width: 50px
  height: 50px
  cursor: pointer
  background: white
  border-radius: 100%

.logo-tech-row ul
  display: inline

.logo-tech-row
  margin-top: 20px

.logo-tech-row .flip-back
  content: 'Nuxt '
  display: block
  /* transform: scale3d(1,1,11) */
  top: 9px
  right: auto
  border-radius: 100%
  height: 50px
  width: 50px
  z-index: -1
  transition: 0.5s ease
  text-align: center
  padding-top: 15px

  position: relative
  margin-bottom: -50px
  transform: rotate(180deg)
  left: auto
  margin-right: 0px !important
  margin-top: -70px

.logo-tech-row li:hover .flip-back
  box-shadow: 0 5px 15px -8px rgba(0, 0, 0, .24), 0 8px 10px -5px rgba(0, 0, 0, .2)

.logo-tech-row li
  margin-right: 10px
  transition: 0.5s ease
  list-style: none
  float: right
  width: 50px
  height: 50px
  background: white
  border-radius: 100%


.logo-tech-row li:hover .flip-back
  transition: 0.5s ease
  rotate: 180deg
  top: 60px


.logo-tech-row
  margin-top: 20px

.project-media
  max-height: 300px
  border-radius: 5px
  padding-top: 2px
  float: right
  max-width: 100%;
</style>

