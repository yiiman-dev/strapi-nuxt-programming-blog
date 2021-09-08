<template>
  <div>
    <!--hero section start-->


    <section v-if="section.type==='Type1'" class="banner p-0 pos-r fullscreen-banner">
      <div id="particles-js"></div>
      <div class="align-center">
        <div class="container">
          <div class="row align-items-center">
            <div  v-if="section.banners" class="col-lg-6 col-md-12">
              <img  v-if="section.banners[0]" class="img-center wow fadeInUp" data-wow-duration="1.5s"
                   :src="getStrapiMedia(section.banners[0].url)" alt="">
              <div v-if="section.banners[1]" class="img-2">
                <img  class="img-center topBottom" :src="getStrapiMedia(section.banners[1].url)" alt="">
              </div>
            </div>
            <div class="col-lg-6 col-md-12 md-mt-5 wow fadeInRight" data-wow-duration="1.5s">
              <h5 v-if="section.subHeader" class="title-theme-bg" v-html="section.subHeader"></h5>
              <h1 v-if="section.title" class="mb-4" v-html="section.title"></h1>
              <p v-if="section.description" class="lead mb-4" v-html="section.description"></p>
              <a v-if="section.button" v-for="(btn,btnIndex) in section.button" :class="'btn btn-'+btn.type"
                 :href="btn.url"><span>{{ btn.title }}</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section v-if="section.type==='Type2'" class="banner p-0 pos-r fullscreen-banner">
      <div class="hero-shape4"></div>
      <div class="align-center pt-0">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-12 mr-auto wow fadeInDown" data-wow-duration="1.5s">
              <h5 v-if="section.subHeader" class="title-theme-bg" v-html="section.subHeader"></h5>
              <h1 class="mb-4 font-w-4 text-white" v-html="section.title"></h1>
              <p v-if="section.description" class="lead mb-4 text-white" v-html="section.description"></p>
              <a v-if="section.button" v-for="(btn,btnIndex) in section.button" :class="'btn btn-'+btn.type"
                 :href="btn.url"><span>{{ btn.title }}</span></a>
            </div>
          </div>
        </div>
        <div class="container-fluid md-mt-5">
          <div class="row">
            <div v-if="section.banners[0]"  class="col-lg-6 col-md-12 image-column pr-lg-0">
              <div class="img-box box-shadow">
                <img class="img-center" :src="getStrapiMedia(section.banners[0].url)" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section v-if="section.type==='Type3'" class="banner p-0 pos-r fullscreen-banner banner-3 theme-bg bg-cover text-center"
             v-bind:data-bg-img="section.banners[0]?getStrapiMedia(section.banners[0].url):false">
      <div class="banner-pulse"></div>
      <div class="align-center pt-0">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-12 ml-auto mr-auto">
              <h1 v-if="section.title" class="mb-4 font-w-6 text-white" v-html="section.title"></h1>
              <p v-if="section.description" class="lead text-white mb-4" v-html="section.description"></p>
              <a v-if="section.button" v-for="(btn,btnIndex) in section.button" :class="'btn btn-'+btn.type"
                 :href="btn.url"><span>{{ btn.title }}</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section v-if="section.type==='Type4'" class="banner p-0 pos-r fullscreen-banner">
      <div id="particles-js"></div>
      <div class="hero-shape6">
      </div>
      <div class="align-center">
        <div class="container">
          <div class="row">
            <div v-if="section.banners[0]"  class="col-lg-6 col-md-12 order-lg-12">
              <img class="img-center" :src="getStrapiMedia(section.banners[0].url)" alt="">
            </div>
            <div class="col-lg-6 col-md-12 md-mt-5 order-lg-1 wow fadeInDown" data-wow-duration="1.5s">
              <h5 v-if="section.subHeader" class="title-theme-bg" v-html="section.subHeader"></h5>
              <h1 v-if="section.title" class="mb-4 font-w-4" v-html="section.title"/>
              <p  v-if="section.description" class="lead mb-4" v-html="section.description"></p>
              <a v-if="section.button" v-for="(btn,btnIndex) in section.button" :class="'btn btn-'+btn.type"
                 :href="btn.url"><span>{{ btn.title }}</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section v-if="section.type==='Type5'" class="banner p-0 pos-r fullscreen-banner">
      <div v-if="section.banners[0]" class="hero-shape3">
        <img class="img-fluid" :src="getStrapiMedia(section.banners[0].url)" alt="">
      </div>
      <div class="align-center">
        <div class="container">
          <div class="row align-items-center">
            <div v-if="section.banners[1]" class="col-lg-7 col-md-12 order-lg-12 image-anim">
              <div class="img-box box-shadow">
                <img class="img-center" :src="getStrapiMedia(section.banners[1].url)" alt="">
              </div>
            </div>
            <div class="col-lg-5 col-md-12 order-lg-1 md-mt-5 wow fadeInDown ml-auto" data-wow-duration="1.5s">
              <h5 v-if="section.subHeader" class="title-theme-bg" v-html="section.subHeader"></h5>
              <h1 v-if="section.title" class="mb-4 font-w-4" v-html="section.title"/>
              <p v-if="section.description" class="lead mb-4" v-html="section.description"></p>
              <a v-if="section.button" v-for="(btn,btnIndex) in section.button" :class="'btn btn-'+btn.type"
                 :href="btn.url"><span>{{ btn.title }}</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section v-if="section.type==='Type6'" class="banner p-0 pos-r fullscreen-banner dark-bg grediant-overlay text-center"
             data-overlay="8" v-bind:data-bg-img="section.banners[0]?getStrapiMedia(section.banners[0].url):false">
      <div class="align-center pt-0">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-8 col-md-12 ml-auto mr-auto wow fadeInDown" data-wow-duration="1.5s">
              <img v-if="section.banners[1]" class="img-center leftRight" :src="getStrapiMedia(section.banners[1].url)" alt="">
              <h1 v-if="section.title" class="my-4 font-w-4 text-white"  v-html="section.title" />
              <p v-if="section.description" class="lead mb-4 text-white" v-html="section.description"/>
              <a v-if="section.button" v-for="(btn,btnIndex) in section.button" :class="'btn btn-'+btn.type"
                 :href="btn.url"><span>{{ btn.title }}</span></a>
              <span v-if="section.subHeader" class="d-block text-white mt-3" v-html="section.subHeader"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="banner-wave">
        <div class="wave wave1" style="background-image: url('/images/bg/10.png')"></div>
        <div class="wave wave2" style="background-image: url('/images/bg/11.png')"></div>
      </div>
    </section>



    <section v-if="section.type==='Type7'" class="banner p-0 pos-r fullscreen-banner">
      <div class="hero-shape1"></div>
      <div class="align-center pt-0">
        <div class="container">
          <div class="row align-items-center">
            <div v-if="section.banners[0]"  class="col-lg-6 col-md-12">
              <img class="img-fluid wow fadeInUp" data-wow-duration="1.5s" :src="getStrapiMedia(section.banners[0].url)" alt="">
            </div>
            <div class="col-lg-6 col-md-12 md-mt-5 wow fadeInDown ml-auto" data-wow-duration="1.5s">
              <h5 v-if="section.subHeader" class="title-theme-bg" v-html="section.subHeader"></h5>
              <h1  v-if="section.title"  class="text-white mb-4 font-w-4"  v-html="section.title"/>
              <p   v-if="section.description"  class="text-white lead mb-4 title-bg px-3 py-3" v-html="section.description"  />
              <a v-if="section.button" v-for="(btn,btnIndex) in section.button" :class="'btn btn-'+btn.type"
                 :href="btn.url"><span>{{ btn.title }}</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section v-if="section.type==='Type8'" class="banner p-0 pos-r fullscreen-banner">
      <div class="hero-shape2"></div>
      <div class="align-center">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-12 wow fadeInDown" data-wow-duration="1.5s">
              <h5 v-if="section.subHeader" class="title-theme-bg" v-html="section.subHeader"></h5>
              <h1  v-if="section.title"  class="mb-4 font-w-7 text-white" v-html="section.title"/>
              <p   v-if="section.description" class="lead mb-4 text-white" v-html="section.description"/>
              <a   v-if="section.button" v-for="(btn,btnIndex) in section.button" :class="'btn btn-'+btn.type"
                 :href="btn.url"><span>{{ btn.title }}</span></a>
            </div>
          </div>
        </div>
        <div v-if="section.banners[0]" class="container-fluid md-mt-5">
          <div class="row">
            <div class="col-lg-6 col-md-12 image-column right">
              <img class="img-center" :src="getStrapiMedia(section.banners[0].url)" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>



    <section v-if="section.type==='Type9'" class="banner p-0 pos-r fullscreen-banner theme-bg bg-cover"
             v-bind:data-bg-img="section.banners && section.banners[0]?getStrapiMedia(section.banners[0].url):false">
      <div class="align-center">
        <div class="container">
          <div class="row align-items-center">
            <div v-if="section.banners"  class="col-lg-6 col-md-12">
              <div class="image-anim">
                <img class="img-center wow fadeInUp" data-wow-duration="1.5s" :src="getStrapiMedia(section.banners[0].url)" alt="">
              </div>
            </div>
            <div class="col-lg-6 col-md-12 md-mt-5 wow fadeInDown" data-wow-duration="1.5s">
              <h5 v-if="section.subHeader"  class="title-bg px-2 py-2 text-white"  v-html="section.subHeader"/>
              <h1 v-if="section.title" class="mb-4 font-w-7 text-white"  v-html="section.title"/>
              <p  v-if="section.description" class="lead mb-4 text-white"  v-html="section.description"/>
              <a v-if="section.button" v-for="(btn,btnIndex) in section.button" :class="'btn btn-'+btn.type"
                 :href="btn.url"><span>{{ btn.title }}</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>



    <!--hero section end-->
  </div>


</template>

<script>
import {getStrapiMedia} from "../utils/medias";
import {replaceAt, sectionBgImg, sectionClasses} from "../helpers/functions";


export default {
  name: "HeroSection",
  methods: {getStrapiMedia, replaceAt, sectionClasses, sectionBgImg},
  props: [
    "section"
  ]
}
</script>

<style scoped>

</style>
