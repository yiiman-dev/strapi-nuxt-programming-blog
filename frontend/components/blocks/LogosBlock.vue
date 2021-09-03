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
              <p-link :to="item.site_url.length>0?'/company/'+item.slug:'#'">
                <img class="img-center" :src="getStrapiMedia(item.logo.url)" :alt="item.company_name">
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
            <div class="owl-carousel" data-dots="false" data-items="5" data-md-items="4" data-sm-items="3"
                 data-autoplay="true">
              <div class="item" v-bind:key="index" v-for="(item,index) in session.companies">
                <div class="client-logo">
                  <p-link :to="item.site_url.length>0?'/company/'+item.slug:'#'">
                    <img class="img-center" :src="getStrapiMedia(item.logo.url)" :alt="item.company_name">
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


export default {
  name: "LogosBlock",
  components: {PLink, RoundAnimation},
  props: ['session'],
  methods: {
    getStrapiMedia, replaceAt,sectionBgImg,sectionClasses
  }
}
</script>

<style scoped>

</style>
