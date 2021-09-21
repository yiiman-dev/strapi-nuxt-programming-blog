<template>
  <!--client start-->
  <div>

    <section :class="sectionClasses(session,'pos-r')"
             :data-bg-img="sectionBgImg(session)"
             :data-bg-color="session.boxStyle.hexBackground" v-if="session.boxType==='Type1'">
      <RoundAnimation v-if="session.boxStyle.hasRoundAnimation"/>
      <div class="page-title-pattern topBottom" v-if="session.boxStyle.patterntBackgroun"></div>
      <div class="container">
        <h2 class="text-center" v-if="session.title>0">{{ session.title }}</h2>
        <div class="row align-items-center mt-4">
          <div class="col-md col-sm-4 xs-mt-3 sm-mt-3" v-bind:key="index" v-for="(item,index) in session.companies">
            <div class="client-logo">
              <p-link :to="(item.site_url && item.site_url.length)>0?'/company/'+item.slug:'#'">
                <img class="img-center" :src="getStrapiMedia(item.logo.url,$config)" :alt="item.company_name">
              </p-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section :class="sectionClasses(session,'')" v-if="session.boxType==='Type2'"
             :data-bg-img="sectionBgImg(session)"
             :data-bg-color="session.boxStyle.hexBackground">
      <RoundAnimation v-if="session.boxStyle.hasRoundAnimation"/>
      <div class="page-title-pattern topBottom" v-if="session.boxStyle.patterntBackgroun" ></div>
      <div class="container">
        <h2 class="text-center" v-if="session.title>0">{{ session.title }}</h2>
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <div class="owl-carousel logo-boxes" data-dots="false" data-items="5" data-md-items="4" data-sm-items="3"
                 data-autoplay="true">
              <div class="item" v-bind:key="index" v-for="(item,index) in session.companies">
                <div class="client-logo">
                  <p-link :to="(item.site_url && item.site_url.length)>0?'/company/'+item.slug:'#'">
                    <img class="img-center" :src="getStrapiMedia(item.logo.url,$config)" :alt="item.company_name">
                  </p-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <!--client end-->

</template>

<script>
import {getStrapiMedia} from "../../utils/medias";
import {replaceAt,sectionBgImg,sectionClasses} from "../../helpers/functions";
import RoundAnimation from "../shared/RoundAnimation";
import PLink from "../Base/p-link";
import "owl.carousel/src/scss/_core.scss"
import "owl.carousel/src/scss/_animate.scss"
import "owl.carousel/src/scss/_autoheight.scss"
import "owl.carousel/src/scss/_lazyload.scss"


export default {
  name: "LogosBlock",
  components: {PLink, RoundAnimation},
  props: ['session'],
  methods: {
    getStrapiMedia, replaceAt,sectionBgImg,sectionClasses
  },
  mounted() {
     require('jquery');
     require("owl.carousel/src/js/owl.carousel");
     jQuery('.owl-carousel.logo-boxes').each( function(inex,value) {
      var $carousel = jQuery(value);

      $carousel.owlCarousel({
        items : 5,
        slideBy : $carousel.data("slideby"),
        center : $carousel.data("center"),
        loop : true,
        margin : 10,
        dots : true,
        nav : true,
        autoplay : true,
        autoplayTimeout : 5000,
        autoplayHoverPause:false,
        navText : [ '<span class="fas fa-long-arrow-alt-left"><span>', '<span class="fas fa-long-arrow-alt-right"></span>' ],
        responsive: {
          0:{items: $carousel.data('xs-items') ? $carousel.data('xs-items') : 1},
          576:{items: $carousel.data('sm-items')},
          768:{items: $carousel.data('md-items')},
          1024:{items: $carousel.data('lg-items')},
          1200:{items: $carousel.data("items")}
        },
      });
    });
  }
}
</script>

<style scoped>
.client-logo .img-center{
  height: 100px;
}
</style>
